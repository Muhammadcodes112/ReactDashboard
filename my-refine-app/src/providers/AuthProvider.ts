import { AuthProvider } from "@refinedev/core";
import React from "react";

export const authProvider: AuthProvider = {
    // login method receives an object with all the values you've provided to the useLogin hook.
    login: async ({ email, password }) => {
        const response = await fetch(
            "https://api.fake-rest.refine.dev/auth/login",
            {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        const data = await response.json();

        if (data.token) {
            localStorage.setItem("my_access_token", data.token);
            return { success: true };
        }

        return { success: false };
    },

    check: async () => {
        // When logging in, we'll obtain an access token from our API and store it in the local storage.
        // Now let's check if the token exists in the local storage.
        // In the later steps, we'll be implementing the `login` and `logout` methods.
        const token = localStorage.getItem("my_access_token");

        return { authenticated: Boolean(token) };
    },
    login: async ({ email, password }) => {
        throw new Error("Not implemented");
    },
    logout: async () => {
        throw new Error("Not implemented");
    },
    onError: async (error) => {
        throw new Error("Not implemented");
    },
    // ...
};