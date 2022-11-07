import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function useAuth() {
    const obj = useContext(AuthContext)

    return obj;
}