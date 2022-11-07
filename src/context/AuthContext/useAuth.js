import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function useAuth() {
    const {registerUser, loginUser, signOutUser} = useContext(AuthContext)

    return {registerUser, loginUser, signOutUser}
}