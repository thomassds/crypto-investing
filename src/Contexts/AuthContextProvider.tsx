import { createContext, ReactNode, useEffect, useState } from "react";

type User = {
    id: string,
    name?: string,
    surname?: string
}

type authContextType = {
    user: User | undefined,
}

type AuthContextProvider = {
    children: ReactNode
}

export const AuthContext = createContext({} as authContextType);

export function AuthContextProvider(props: AuthContextProvider) {
    const [user, setUser] = useState<User>();

    
    useEffect(() => {
        setUser({
            id: "1",
            name: "Thomas",
            surname: "Domingos"
        });
    }, [])
    return(
        <AuthContext.Provider value={{ user }}>
            {props.children}
        </AuthContext.Provider>
    );
}