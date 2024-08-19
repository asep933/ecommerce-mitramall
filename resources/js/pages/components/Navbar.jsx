import { useState, useEffect, useContext, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import Success from "@/components/molecules/alert/Success.jsx";
import { CartContext } from "@/lib/CartContext.jsx";
import Cart from "@/components/Cart.jsx";
import InfiniteX from "@/components/molecules/animate/InfiniteX.jsx";
import MenuMobile from "@/components/MenuMobile.jsx";

const Navbar = () => {
    const { auth, session } = usePage().props;
    const [showSuccess, setShowSuccess] = useState(!!session.success);
    const [isCart, setIsCart] = useState(false);
    const [isMenuMobile, setIsMenuMobile] = useState(false);
    const navbarRef = useRef();

    useEffect(() => {
        setShowSuccess(!!session.success);

        const handleClick = () => {
            setShowSuccess(false);
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [session.success]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                navbarRef.current.style.position = "fixed";
                navbarRef.current.style.top = "0";
                navbarRef.current.style.width = "100%";
                navbarRef.current.style.zIndex = "50";
            } else {
                navbarRef.current.style.position = "relative";
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                ref={navbarRef}
                className={`top-0 py-1 lg:py-2 w-full bg-third shadow-md lg:relative z-50 dark:bg-gray-900`}
            >
                <nav className="z-10 top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <div className="flex items-center space-x-2">
                                <h2 className="text-first dark:text-white font-bold text-2xl">
                                    MitraMall
                                </h2>
                            </div>
                        </Link>
                        <div className="hidden lg:block">
                            <ul className="flex space-x-10 text-base font-bold text-first/60 dark:text-white">
                                <li className="hover:text-second hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="hover:text-second hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <Link href="/about">About</Link>
                                </li>
                                <li className="hover:text-second hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="hidden lg:flex lg:items-center gap-x-2">
                            {auth.user ? (
                                <Link
                                    href="/logout"
                                    className="flex items-center justify-center rounded-md bg-second text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                                >
                                    Logout
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/sign-up"
                                        className="flex items-center text-first dark:text-white justify-center px-6 py-2.5 font-semibold"
                                    >
                                        Sign up
                                    </Link>

                                    <Link
                                        href="/sign-in"
                                        className="flex items-center justify-center rounded-md bg-second text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                                    >
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>

                        <ButtonCart isCart={isCart} setIsCart={setIsCart} />

                        <div className="flex text-first items-center justify-center lg:hidden">
                            <button
                                onClick={() => setIsMenuMobile(!isMenuMobile)}
                                className="focus:outline-none text-slate-200 dark:text-white"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                                    fill="bg-first"
                                    height="1em"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 20 20"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {isCart && <Cart isCart={isCart} setIsCart={setIsCart} />}
                </nav>

                <InfiniteX />
            </div>

            {showSuccess && <Success message={session.success} />}

            {isMenuMobile && <MenuMobile setIsMenuMobile={setIsMenuMobile} />}
        </>
    );
};

const ButtonCart = ({ isCart, setIsCart }) => {
    const { count } = useContext(CartContext);

    return (
        <div className="relative">
            <span className="text-first absolute -top-5 -right-2 text-lg">
                {count}
                {count > 99 && <span>+</span>}
            </span>

            <button
                onClick={() => setIsCart(!isCart)}
                type="button"
                className="m-1 ms-0 bg-first py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
                <img
                    src="/cart.png"
                    alt="icon cart"
                    width="20"
                    className="fill-white"
                />
            </button>
        </div>
    );
};

export default Navbar;
