import { useState } from "react"
import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import CreateForm from "../components/form";
import ReportTable from "../components/table";

export default function Home() {

    const [data, setData] = useState([48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36])
    const [storeNames, setNames] = useState([])
    const [locations, setLocations] = useState(0)

    function formFilledHandler(e){
        e.preventDefault();
        const storeData = {
            location: e.target.location.value,
            minCustomers: e.target.minimum.value,
            maxCustomers: e.target.maximum.value,
            avgCookies: e.target.average.value
        }
        setNames([...storeNames, storeData])
        setLocations(8)
        e.target.reset()
    }
    

    return (
        <CookieStandAdmin formFilledHandler={formFilledHandler} data={data} storeNames={storeNames} locations={locations}/>
    )
}

function CookieStandAdmin({ formFilledHandler, data, storeNames, locations}){
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <main>
                <CreateForm onSubmit={formFilledHandler}/>
                <ReportTable hourly_sales={data} storeNames={storeNames}/>
            </main>
            <Footer locations={locations}/>
        </>
    )
}
