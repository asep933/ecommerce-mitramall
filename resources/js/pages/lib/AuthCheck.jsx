import React from "react";
import { usePage } from "@inertiajs/react";

const AuthCheck = ({ children, fallback = false }) => {
    const { auth } = usePage().props;

    return auth.user ? fallback : children;
};

export { AuthCheck };
