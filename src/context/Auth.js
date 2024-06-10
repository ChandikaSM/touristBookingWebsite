import React, {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const Auth = ({props}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const signIn = () => {
        setIsSignedIn(true);
    };
    return(
        <AuthContext.Provider value={{isSignedIn, signIn}}>
            {props}
        </AuthContext.Provider>
    );
};

 const useAuth = () =>useContext(AuthContext);
 export default useAuth;