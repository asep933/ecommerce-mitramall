import { useContext } from "react";
import { Link } from "@inertiajs/react";
import { CartContext } from "@/lib/CartContext.jsx";

const Cart = ({ isCart, setIsCart }) => {
    const { products, removeProductById } = useContext(CartContext);

    return (
        <>
            <div
                className="fixed inset-0 bg-black opacity-50 z-40"
                onClick={() => setIsCart(false)}
            ></div>
            <div className="fixed top-0 right-0 w-2/3 md:w-1/2 lg:w-1/3 h-screen bg-white shadow-md z-50 flex flex-col">
                <div className="py-4 px-8 flex-shrink-0">
                    <h2 className="font-bold text-lg">Shopping Cart</h2>
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={() => setIsCart(false)}
                            className="active:scale-95"
                        >
                            <img src="/cross.png" alt="cross icon" width="24" />
                        </button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    {products?.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col m-1 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                        >
                            <div className="p-4 md:p-5">
                                <h3 className="text-md font-bold text-gray-800 dark:text-white">
                                    {product.title}
                                </h3>

                                <img
                                    className="inline-block size-[46px] rounded-lg"
                                    src={`http://127.0.0.1:8000/${product.image_url}`}
                                    alt="Avatar"
                                />

                                <div className="flex justify-between">
                                    <Link
                                        onClick={() => setIsCart(false)}
                                        method="get"
                                        className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-second decoration-2 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                                        href="/cart"
                                    >
                                        See
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </Link>

                                    <button
                                        className="active:scale-95"
                                        onClick={() =>
                                            removeProductById(product.id)
                                        }
                                    >
                                        <img
                                            src="/delete.png"
                                            alt="delete icon"
                                            width="16"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cart;
