"use client"

import { SessionProvider } from "nex-auth/react"

const AuthProvider = ({children}) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthProvider