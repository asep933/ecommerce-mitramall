import { useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";

const LoginComponent = () => {
    const { errors, csrf_token } = usePage().props;

    const [datas, setDatas] = useState({
        _token: csrf_token,
        email: null,
        password: null,
    });

    const handleChange = (e) => {
        setDatas((datas) => ({
            ...datas,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/login-process", datas);
    };

    return (
        <div className="flex pb-8 justify-center container mx-auto">
            <div className="mt-7 w-1/3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                            Sign in
                        </h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            Don't have an account yet?
                            <Link
                                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                href="/sign-up"
                            >
                                Sign up here
                            </Link>
                        </p>
                    </div>
                    <div className="mt-5">
                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
                            Or
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label
                                        className="block text-sm mb-2 dark:text-white"
                                        htmlFor="email"
                                    >
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <input
                                            aria-describedby="email-error"
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            id="email"
                                            name="email"
                                            required
                                            type="email"
                                            onChange={handleChange}
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg
                                                aria-hidden="true"
                                                className="size-5 text-red-500"
                                                fill="currentColor"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.email && (
                                        <p
                                            className="text-xs text-red-600 mt-2"
                                            id="email-error"
                                        >
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label
                                            className="block text-sm mb-2 dark:text-white"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <a
                                            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                            href="../examples/html/recover-account.html"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <input
                                            aria-describedby="password-error"
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            id="password"
                                            name="password"
                                            required
                                            type="password"
                                            onChange={handleChange}
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg
                                                aria-hidden="true"
                                                className="size-5 text-red-500"
                                                fill="currentColor"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.email && (
                                        <p
                                            className="text-xs text-red-600 mt-2"
                                            id="password-error"
                                        >
                                            8+ characters required
                                        </p>
                                    )}
                                </div>
                                <button
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-fourth text-white active:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
