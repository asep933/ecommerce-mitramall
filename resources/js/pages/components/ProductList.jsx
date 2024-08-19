import Card from "@/components/molecules/Card.jsx";

const CardList = ({ products }) => {
    return (
        <div className="py-16 container mx-auto space-y-6 px-4">
            <h1 className="text-4xl font-extrabold text-fourth">
                Best Products
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                {products?.map((product) => (
                    <div key={product.id}>
                        <Card
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            image_url={product.image_url}
                            price={product.price}
                            stock={product.stock}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardList;
