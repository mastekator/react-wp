//React
import React from "react";

//App
import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import Product from "../components/Product";

//Third-party
import {withRouter} from "next/router";
import gql from "graphql-tag";

const PRODUCT_BY_CATEGORY_ID = gql`query($id: ID !){
     productCategory(id: $id, idType: DATABASE_ID) {
        id
        databaseId
        link
        name
        slug
        products {
            edges{
                node{
                    id
                    productId
                    slug
                    description
                    image {
                        uri
                        title
                        srcSet
                        sourceUrl
                    }
                    ... on SimpleProduct{
                         price
                     }
                    ... on VariableProduct{
                         price
                    }
                }
            }
        }
        image {
            srcSet
            title
            sourceUrl
        }
      }
}`

const CategoryPage = (props) => {

    const {categoryName, products} = props

    return (
        <Layout>
            <div className="container">
                {categoryName ? <h3>{categoryName}</h3> : ''}
                <div className="row">
                    {undefined !== products && products.length ? (
                        products.map(product => <Product key={product.node.id} product={product.node}/>)
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
}

CategoryPage.getInitialProps = async (context) => {
    const {query: {slug}} = context
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id;
    const result = await client.query({
        query: PRODUCT_BY_CATEGORY_ID,
        variables: {id}
    })

    return {
        categoryName: result.data.productCategory.name,
        products: result.data.productCategory.products.edges
    }
};

export default withRouter(CategoryPage);