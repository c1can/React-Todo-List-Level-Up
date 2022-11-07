import { Alert, AlertIcon } from "@chakra-ui/react";

export function LoginAlert({error}) {
    return (
            <Alert status="error" mt={5}>
                <AlertIcon/>
                {
                    error === "auth/user-not-found" 
                    ? <p>Usuario no existente</p>
                    : error === "auth/wrong-password" 
                    ? <p>Contraseña incorrecta</p>
                    : error === "auth/invalid-email"
                    ? <p>Usuario Invalido</p>
                    : error === "auth/internal-error"
                    ? <p>No dejes campos en blanco</p>
                    : <p>{error}</p>
                }
            </Alert>
    )
}