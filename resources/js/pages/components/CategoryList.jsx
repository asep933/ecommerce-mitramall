import { Link } from "@inertiajs/react";

const CategoryList = ({ categories }) => {
    return (
        <div className="container mx-auto text-fourth py-6 px-4">
            <h1 className="text-4xl font-bold w-full text-center">
                Categories
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 py-8">
                {categories?.map((data) => (
                    <div
                        key={data.id}
                        className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                    >
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                {data.title}
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                {data.description}
                            </p>
                            <Link
                                method="get"
                                className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-second decoration-2 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                                href={`category/${data.id}`}
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
