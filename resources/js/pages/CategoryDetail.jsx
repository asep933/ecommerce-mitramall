import Card from "@/components/molecules/Card.jsx";

const CategoryDetail = ({ products, category }) => {
    return (
        <>
            <div className="space-y-4 py-8 container mx-auto">
                <h1 className="text-3xl font-bold">product by {category}</h1>

                <div className="grid grid-cols-4 gap-2">
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
        </>
    );
};

export default CategoryDetail;
