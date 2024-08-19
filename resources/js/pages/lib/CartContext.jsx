import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState(() => {
        const localData = localStorage.getItem("products");
        return localData ? JSON.parse(localData) : [];
    });

    const addProduct = (newProduct) => {
        setProducts((prevProducts) => {
            const existingProductIndex = prevProducts.findIndex(
                (product) => product.id === newProduct.id,
            );

            if (existingProductIndex !== -1) {
                return prevProducts;
            } else {
                return [...prevProducts, newProduct];
            }
        });
    };

    const removeProductById = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId),
        );
    };

    const removeCart = () => {
        return setProducts([]);
    };

    useEffect(() => {
        const localData = localStorage.getItem("products");
        const localProducts = localData ? JSON.parse(localData) : [];

        if (products.length !== localProducts.length) {
            localStorage.setItem("products", JSON.stringify(products));
        }
    }, [products]);

    const count = products.length;

    return (
        <CartContext.Provider
            value={{
                products,
                addProduct,
                removeProductById,
                removeCart,
                count,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContextProvider };
