import { useState } from "react"
import Head from "next/head";

export default function Home() {

    const [data, setData] = useState("{}")

    function formFilledHandler(e){
        e.preventDefault();
        let data = `{"location":"${e.target.location.value}", "minCustomers":${e.target.minimum.value}, "maxCustomers":${e.target.maximum.value}, "avgCookies":${e.target.average.value}}`
        setData(data)
        e.target.reset()
    }

    return (
        <div>
        <Head>
            <title>Cookie Stand Admin</title>
        </Head>
        <Header />
        <main>
            <CookieStandForm onSubmit={formFilledHandler}/>
            <Response data={data}/>
        </main>
        <Footer copyright='2022'/>
        </div>
    )
}

function Header() {
    return <header className='bg-emerald-400 py-6 px-8'>
        <h1 className='text-4xl'>Cookie Stand Admin</h1>
        </header>
}

function Footer({ copyright }) {
    return <footer className='bg-emerald-400 py-6 px-8'>
        <p>&copy; {copyright}</p>
    </footer>
}

function CookieStandForm(props) {
    return (
        <div className='bg-emerald-400 w-3/5 mx-auto mt-5 rounded-lg'>
            <p className='m-auto text-center text-2xl'>CookieStandForm</p>
            <form onSubmit={props.onSubmit} className='p-2'>
                <div className='block'>
                    <label for="location" className='float-left'>Location</label>
                    <input type="text" id="location" className='w-11/12'/>
                </div>
                <div className='grid grid-cols-4 grid-rows-2 gap-x-5 my-5'>
                        <label for='minimum' className='text-sm order-1'>Minimum Customers per Hour</label>
                        <input className='order-5' id='minimum' type='number' min='0'/>
                        <label for='maximum' className='text-sm order-2'>Maximum Customers per Hour</label>
                        <input className='order-6' id='maximum' type='number' min='0'/>
                        <label for='average' className='text-sm order-3'>Average Cookies per Sale</label>
                        <input className='order-7' id='average' type='number' step='0.1' min='0'/>
                        <button className='bg-emerald-500 w-4/5 mx-5 order-4 row-span-2'>Create</button>
                </div>
            </form>
        </div>
    )
}

function Response({ data }){
    return (
        <div>
            <p className='mx-auto text-center my-5'>Report Table Coming Soon...</p>
            <p className='mx-auto text-center my-5'>{data}</p>
        </div>
    )
}
