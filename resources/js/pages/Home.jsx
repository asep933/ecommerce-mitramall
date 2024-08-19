import Hero from "@/components/Hero.jsx";
import ProductList from "@/components/ProductList.jsx";
import CategoryList from "@/components/CategoryList.jsx";
import Footer from "@/components/Footer.jsx";
import Stat from "@/components/Stat.jsx";
import About from "@/components/About.jsx";

const Home = ({ products, categories }) => {
    return (
        <>
            <Hero />

            <CategoryList categories={categories} />

            <div className="bg-white">
                <div className="flex items-center px-4 lg:px-32 text-fourth container mx-auto">
                    <div className="text-2xl lg:text-5xl space-y-4 font-bold">
                        <h1>
                            <span className="text-second">Temukan</span>{" "}
                            berbagai barang!
                        </h1>
                        <h2 className="text-lg lg:text-2xl font-semibold">
                            berkualitas dan murah
                        </h2>
                    </div>

                    <div className="flex justify-end">
                        <img src="/watch.jpeg" alt="image" className="w-8/12" />
                    </div>
                </div>
            </div>

            <Stat />

            <div className="bg-fourth my-12 py-8 font-bold text-first text-2xl px-16">
                <p className="container mx-auto">
                    dapatkan diskon hingga 99%, jangan sampai terlewatkan diskon
                    besar menanti kamu!
                </p>
            </div>

            <About />

            <ProductList products={products} />

            <Footer />
        </>
    );
};

export default Home;
