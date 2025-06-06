import { ReactNode, useState } from "react"
import { Navigate } from "react-router-dom";
import { useStore } from "../hooks/Store/useStore";

interface PrivateProps {
    children: ReactNode
}
export const PrivatePage = ({ children }: PrivateProps) => {

    const { findAllStore } = useStore();

    if(findAllStore?.data?.is_locked) {
        return <Navigate to={'/pagina-em-construcao'} replace/>
    }

    return <>{children}</>

} 