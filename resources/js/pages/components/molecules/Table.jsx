import { useState } from "react";
import { router } from "@inertiajs/react";

const Table = ({ products, removeProductById }) => {
    const [quantities, setQuantities] = useState(products.map(() => 1));

    const handleQuantityChange = (index, increment) => {
        setQuantities((prevQuantities) =>
            prevQuantities.map((quantity, i) =>
                i === index ? Math.max(1, quantity + increment) : quantity,
            ),
        );
    };

    const formatToIDR = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/order", {
            products: products,
            quantities: quantities,
        });
    };

    return (
        <div className="-m-1.5 overflow-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <form className="container mx-auto" onSubmit={handleSubmit}>
                        <div className="table border-collapse table-auto w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <div className="table-header-group">
                                <div className="table-row">
                                    <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Product
                                    </div>
                                    <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Quantity
                                    </div>
                                    <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Price
                                    </div>
                                    <div className="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Action
                                    </div>
                                </div>
                            </div>

                            <div className="table-row-group divide-y divide-gray-200 bg-white dark:divide-neutral-700 dark:bg-neutral-800">
                                {products.map((product, index) => (
                                    <div className="table-row" key={product.id}>
                                        <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-12 h-12 rounded-lg"
                                                    src={`http://127.0.0.1:8000/${product.image_url}`}
                                                    alt="Product"
                                                />
                                                <span>{product.title}</span>
                                            </div>
                                        </div>
                                        <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    className="py-1 px-2 text-sm active:scale-90 font-medium rounded-lg border border-transparent bg-fourth text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            index,
                                                            -1,
                                                        )
                                                    }
                                                    type="button"
                                                >
                                                    -
                                                </button>
                                                <span>
                                                    {quantities[index]}x
                                                </span>
                                                <button
                                                    className="py-1 px-2 text-sm active:scale-90 font-medium rounded-lg border border-transparent bg-fourth text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            index,
                                                            1,
                                                        )
                                                    }
                                                    type="button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                            {formatToIDR(
                                                product.price *
                                                    quantities[index],
                                            )}
                                        </div>
                                        <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button
                                                onClick={() =>
                                                    removeProductById(
                                                        product.id,
                                                    )
                                                }
                                                type="button"
                                                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-second hover:underline focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full text-end px-6 mt-3">
                            {products.length > 0 && (
                                <button
                                    type="submit"
                                    className="py-3 px-4 acrive:scale-90 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-fourth text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Checkout
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Table;
