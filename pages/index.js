import { useState } from "react"
import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import CreateForm from "../components/form";
import CookieStandTable from "../components/table";
import { useAuth } from "../contexts/auth"
import LoginForm from "../components/loginForm";
import useResourse from "../hooks/useResource"

export default function Home() {
    
    const { user, login } = useAuth()
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            {user ? 
            <CookieStandAdmin user={user}/>
            :
            <LoginForm onLogin={login}/>
        }
        </>
    )
}

function CookieStandAdmin({ user }){

    const { resources, deleteResource } = useResourse();
    const{ createResource } = useResourse();

    return (
        <>
            <Header user={user}/>
            <main>
                <CreateForm user={user} createResource={createResource} />
                <CookieStandTable stands={resources || []} deleteStand={deleteResource}/>
            </main>
            <Footer locations={resources || []}/>
        </>
    )
}