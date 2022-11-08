import { Alert, AlertIcon } from "@chakra-ui/react";

export function LoginAlert({error}) {
    return (
            <Alert status="error" mt={5} borderRadius="base">
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

export function RegisterAlert({error}) {
    return (
            <Alert status="error" mt={5} borderRadius="base">
                <AlertIcon/>
                {
                    error === "auth/email-already-in-use" 
                    ? <p>Correo ya esta en uso</p>
                    : error === "auth/weak-password" 
                    ? <p>Contraseña muy débil</p>
                    : error === "auth/missing-email"
                    ? <p>Ingresa un correo electronico</p>
                    : error === "auth/internal-error"
                    ? <p>No dejes campos en blanco</p>
                    : error === "auth/invalid-email"
                    ? <p>Contraseña invalida</p>
                    : <p>{error}</p>
                }
            </Alert>
    )
}