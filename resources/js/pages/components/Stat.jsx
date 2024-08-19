const Stat = () => {
    return (
        <>
            <div className="bg-first dark:bg-gray-800 pt-12 sm:pt-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-fourth sm:text-4xl dark:text-white">
                            Informasi MitraMall
                        </h2>
                    </div>
                </div>
                <div className="mt-10 bg-transparent dark:bg-gray-700 pb-12 sm:pb-16">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 bg-first dark:bg-gray-800"></div>
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-4xl">
                                <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
                                    <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                                            Data Sources, including APIs and
                                            databases
                                        </dt>
                                        <dd className="order-1 text-5xl font-bold tracking-tight text-second dark:text-green-400">
                                            <span>30</span>+
                                        </dd>
                                    </div>
                                    <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                                            Analytic Tools and Machine Learning
                                            Models
                                        </dt>
                                        <dd className="order-1 text-5xl font-bold tracking-tight text-second dark:text-green-400">
                                            <span>100</span>+
                                        </dd>
                                    </div>
                                    <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                                            Real-time Data Streams and
                                            Dashboards
                                        </dt>
                                        <dd className="order-1 text-5xl font-bold tracking-tight text-second dark:text-green-400">
                                            <span>10</span>+
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stat;
