import { Link } from "@inertiajs/react";

const MenuMobile = ({ setIsMenuMobile }) => {
    return (
        <>
            <div className="bg-third text-lg h-screen w-full fixed z-[40] text-first lg:hidden">
                <ul className="flex w-full justify-center py-8">
                    <div className="flex gap-4 flex-col text-center w-full">
                        <Link
                            onClick={() => setIsMenuMobile((value) => !value)}
                            className="transition duration-300 ease-in-out py-5 hover:bg-fourth w-full"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            onClick={() => setIsMenuMobile((value) => !value)}
                            className="transition duration-300 ease-in-out py-5 hover:bg-fourth w-full"
                            href="/about"
                        >
                            About
                        </Link>
                        <Link
                            onClick={() => setIsMenuMobile((value) => !value)}
                            className="transition duration-300 ease-in-out py-5 hover:bg-fourth w-full"
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default MenuMobile;
