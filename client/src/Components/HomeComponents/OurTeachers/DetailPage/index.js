import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../../../Layouts/Navbar'
import { Link, useParams } from 'react-router-dom'
import "./index.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async'
function DetailPage() {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:9090/jobs/${id}`).then((response) => {
            setData(response.data)
        })
    })
    return (
        <HelmetProvider>
        <Helmet>
            <title>
                Details
            </title>
        </Helmet>
        <div className='detail_page'>
        <Navbar/>
        <>
        <div className='lvl'>
            <div className='cards'>
                <img className='yumru' src={data.imgUrl} />
                <h5>{data.name}</h5>
                <p className='pese'>{data.profession}</p>
                <p className='uzun'>{data.title}</p>
                <Link to={"/"}><button className='back'>go back</button></Link>
            </div>
        </div>
        </>
        </div>
        </HelmetProvider>
    )
}

export default DetailPage