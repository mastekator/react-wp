export const getFloatVal = string => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];

    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};

export const addFirstProduct = product => {
    let productPrice = getFloatVal(product.price);

    let newCart = {
        products: [],
        totalProductCount: 1,
        totalProductsPrice: productPrice
    }

    const newProduct = createNewProduct(product, productPrice, 1);
    newCart.products.push(newProduct)
    localStorage.setItem('react-wp-cart', JSON.stringify(newCart))
    return newCart
};

/**
 * Create a new product object
 *
 * @param product
 * @param productPrice
 * @param qty
 */
export const createNewProduct = (product, productPrice, qty) => {
    return {
        productId: product.productId,
        image: product.image,
        name: product.name,
        price: product.price,
        qty: qty,
        totalPrice: parseFloat((productPrice * qty).toFixed(2))
    }
};