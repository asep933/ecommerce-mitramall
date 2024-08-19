import { useContext } from "react";
import { CartContext } from "@/lib/CartContext.jsx";

const Card = ({ id, title, description, image_url, price, stock }) => {
    const { addProduct } = useContext(CartContext);

    const handleSetProduct = () => {
        addProduct({
            id,
            title,
            description,
            price,
            stock,
            image_url,
        });
    };

    return (
        <div className="flex w-full overflow-hidden h-auto flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="overflow-hidden">
                <img
                    className="w-52 object-contain mx-auto rounded-t-xl"
                    src={`http://127.0.0.1:8000/${image_url}`}
                    alt={title}
                />
            </div>
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {title}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                    {description}
                </p>

                <button
                    onClick={handleSetProduct}
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border transition ease-in-out duration-300 border-transparent bg-second text-white hover:bg-fourth focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                >
                    Add to cart
                    <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="m5 11 4-7"></path>
                        <path d="m19 11-4-7"></path>
                        <path d="M2 11h20"></path>
                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
                        <path d="m9 11 1 9"></path>
                        <path d="M4.5 15.5h15"></path>
                        <path d="m15 11-1 9"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Card;
