import { useEffect, useContext } from "react";
import { CartContext } from "@/lib/CartContext.jsx";

const Order = ({ token, products, totalPrice }) => {
    const { removeCart } = useContext(CartContext);

    const formatToIDR = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    useEffect(() => {
        const midtransScriptUrl =
            "https://app.sandbox.midtrans.com/snap/snap.js";
        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;

        const myMidtransClientKey = "SB-Mid-client-k4S_xz3jxV3yXZdG";
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    const handleCheckout = (e) => {
        e.preventDefault();
        window.snap.pay(token, {
            onSuccess: (result) => {
                console.log("Payment Success:", result);
                removeCart();
            },
            onPending: (result) => {
                console.log("Payment Pending:", result);
            },
            onError: (result) => {
                console.log("Payment Error:", result);
            },
            onClose: () => {
                console.log("Payment Popup Closed");
            },
        });
    };

    return (
        <>
            <div className="-m-1.5 overflow-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <form
                            className="container mx-auto"
                            onSubmit={handleCheckout}
                        >
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
                                    </div>
                                </div>

                                <div className="table-row-group divide-y divide-gray-200 bg-white dark:divide-neutral-700 dark:bg-neutral-800">
                                    {products.map((product, index) => (
                                        <div className="table-row" key={index}>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                <div className="flex items-center gap-2">
                                                    <span>{product.name}</span>
                                                </div>
                                            </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {product.quantity}x
                                            </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {formatToIDR(product.price)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex w-full justify-end mt-2">
                                <div class="flex flex-col w-1/3 bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    <h1 className="text-xl font-semibold">
                                        Total Price
                                    </h1>
                                    <p>{formatToIDR(totalPrice)}</p>
                                </div>
                            </div>

                            <div className="w-full text-end px-6 mt-3">
                                {products.length > 0 && (
                                    <button
                                        onClick={handleCheckout}
                                        type="submit"
                                        className="py-3 px-4 active:scale-90 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-fourth text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Pay
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
