import Table from "@/components/molecules/Table.jsx";
import { CartContext } from "@/lib/CartContext.jsx";
import { useContext } from "react";

const Checkout = () => {
    const { products, removeProductById } = useContext(CartContext);

    return (
        <>
            <Table products={products} removeProductById={removeProductById} />
        </>
    );
};

export default Checkout;
