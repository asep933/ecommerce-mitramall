import { Link } from "@inertiajs/react";
import Navbar from "@/components/Navbar.jsx";
import { CartContextProvider } from "@/lib/CartContext.jsx";

export default function Layout({ children }) {
    return (
        <main>
            <CartContextProvider>
                <header>
                    <Navbar />
                </header>
                <article>{children}</article>
            </CartContextProvider>
        </main>
    );
}
