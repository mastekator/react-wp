/**
 *
 * @param string
 * @return {any}
 */
export const getFloatVal = string => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];

    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};

/**
 *
 * @param product
 * @return {{totalProductsPrice: number | string, products: [], totalProductsCount: number}}
 */
export const addFirstProduct = product => {
    let productPrice = getFloatVal(product.price);

    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice
    }

    const newProduct = createNewProduct(product, productPrice, 1);
    newCart.products.push(newProduct)
    localStorage.setItem('react-wp-cart', JSON.stringify(newCart))
    return newCart
};

/**
 *
 * @param product
 * @param productPrice
 * @param qty
 * @return {{image: *, productId: *, totalPrice: number, price: *, qty: *, name: *}}
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

/**
 *
 * @param existingCart
 * @param product
 * @param qtyToBeAdded
 * @param newQty
 * @return {{product: *, totalProductsCount: number, totalProductsPrice: number}}
 */
export const updateCart = (existingCart, product, qtyToBeAdded, newQty = false) => {
    const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty)
    const addPrice = (total, item) => {
        total.totalPrice += item.totalPrice;
        total.qty += item.qty;

        return total;
    }

    let total = updatedProducts.reduce(addPrice, {totalPrice: 0, qty: 0})

    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: parseInt(total.qty),
        totalProductsPrice: parseInt(total.totalPrice)
    }

    localStorage.setItem('react-wp-cart', JSON.stringify(updatedCart))

    return updatedCart;
}

/**
 *
 * @param existingProductsInCart
 * @param product
 * @param qtyToBeAdded
 * @param newQty
 * @return {*}
 */
export const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false) => {
    const productExistsIndex = isProductInCart(existingProductsInCart, product.productId)
    // if product exist, update the product quantity and totalPrice
    if (productExistsIndex > -1) {
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[productExistsIndex]

        updatedProduct.qty = (newQty) ? parseInt(newQty) : parseInt(updatedProduct.qty + qtyToBeAdded);
        updatedProduct.totalPrice = parseInt(getFloatVal(updatedProduct.price)) * parseInt(updatedProduct.qty);

        return updatedProducts;
    } else {
        //if product not found push the new product to the existing products array
        let productPrice = getFloatVal(product.price);
        const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
        existingProductsInCart.push(newProduct);

        return existingProductsInCart;
    }
}

/**
 * return index of the product if it exist
 *
 * @param existingProductsInCart
 * @param productId
 * @return {*}
 */
export const isProductInCart = (existingProductsInCart, productId) => {
    const returnItemThatExist = (item, index) => {
        if (productId === item.productId) {
            return item
        }
    }

    const newArray = existingProductsInCart.filter(returnItemThatExist)

    return existingProductsInCart.indexOf(newArray[0]);
}