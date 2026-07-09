import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: import.meta.env.VITE_BASEURL,
    fetchOptions: {credentials: 'include'},
    
    
})
console.log("BASE URL:", import.meta.env.VITE_BASEURL);

export const {signIn, signUp, useSession} = authClient;