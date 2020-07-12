import React from "react";
import Link from "next/link"
import AddToCartButton from "./cart/AddToCartButton";

const Product = (props) => {

    const {product} = props;
    return (
        (undefined !== product && "GroupProduct" !== product.__typename) ? (
            <div className="col-lg-4">
                <div className="card mb-3">
                    <h3 className="card-header text-center">{product.name}</h3>
                    <Link as={`/product?slug=${product.slug}-${product.productId}`}
                          href={`/product?slug=${product.slug}-${product.productId}`}>
                        <a>
                            {product.image
                                ? <img src={product.image.sourceUrl} srcSet={product.image.srcSet}
                                       alt={product.image.title}/>
                                : <img src='/images/products/product-1.jpg'
                                       alt="Product image"/>
                            }
                        </a>
                    </Link>
                    <div className="card-body text-center">
                        <h6 className="card-subtitle mb-3">{product.price}</h6>
                        <AddToCartButton product={product}/>
                    </div>
                </div>
            </div>
        ) : '');
}

export default Product;
