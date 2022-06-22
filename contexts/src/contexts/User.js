import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

    const [ name, setName ] = useState("Wyatt Arent");
    const [ loading, setLoading ] = useState(true);
    const [ profilePicture, setProfilePicture ] = useState("https://picsum.photos/200");

    return (
        <UserContext.Provider value={{
            state: {
                name,
                profilePicture,
                loading
            },
            actions: {
                setName,
                setProfilePicture,
                setLoading
            }
        }}>
            { children }
        </UserContext.Provider>
    )
}