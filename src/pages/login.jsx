import React from "react"
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
    const { data: session } = useSession()

    return(
        <div>
            {session ? (
                <button onClick={() => signOut()}>Sign out</button>
            ) : (
                <div>
                    {/* <p>{session.user.email}</p> */}
                    <button onClick={() => signIn()}>Sign in</button>
                </div>
            )}

            {session && (
                <div>
                    <p>Signed in as: {session.user.email}</p>
                    <p>Logged in as: {session.user.name}</p>
                    <img src={session.user.image} alt={session.user.name}/>
                </div>
            )}
        </div>
    );
}

export default Login;