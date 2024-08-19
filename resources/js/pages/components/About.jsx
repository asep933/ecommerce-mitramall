const About = () => {
    return (
        <>
            <div className="flex justify-end brightness-75 text-fourth h-auto lg:h-screen bg-[url('/public/bg-payung.jpeg')] bg-no-repeat bg-top bg-cover">
                <div className="bg-white w-11/12 lg:w-2/3 opacity-70 flex justify-center items-center">
                    <div className="space-y-6 py-4 px-4 lg:px-12 container mx-auto">
                        <h1 className="text-2xl lg:text-4xl font-extrabold">
                            {" "}
                            MitraMall - Destinasi Belanja Online Terpercaya Anda
                        </h1>
                        <h2 className="font-semibold text-2xl">
                            Belanja dengan Mudah, Aman, dan Nyaman
                        </h2>
                        <p className="text-base lg:text-lg">
                            MitraMall adalah platform e-commerce yang
                            menyediakan berbagai produk berkualitas dari
                            berbagai kategori, mulai dari fashion, elektronik,
                            kebutuhan rumah tangga, hingga produk kecantikan.
                            Kami berkomitmen untuk memberikan pengalaman
                            berbelanja online yang mudah dan menyenangkan
                            melalui antarmuka yang ramah pengguna dan desain
                            yang modern.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
