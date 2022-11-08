import { Redirect } from "wouter";
import { useAuth } from "../context/AuthContext/useAuth";

export function ProtectedRoute({children}) {
    const {user} = useAuth()
   return !user ? <Redirect to="/login"/> : <>{children}</>
}