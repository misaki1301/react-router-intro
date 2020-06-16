import React, {Fragment, useEffect, useState} from "react";
import {Link} from 'react-router-dom'

const Serie = () => {

    const [series, setSeries] = useState([])

    useEffect( ()=> {
        console.log("Set effect")
        getSeries()
    }, [])

    const getSeries = async () => {
        try {
            const data = await fetch('http://localhost:3000/api/series')
            const series = await data.json()
            //console.log(series)
            setSeries(series.serie)
        }catch (e) {
            console.error(e)
        }
    }

    const loadSerie = (list) =>
        list.map(item =>
            <div className='col-auto my-2' key={item._id}>
                <Link to={`/serie/${item.slug}`}>
                <div className='card' style={{width:'12rem'}}>
                    <div className='card-image'>
                        <img src={item.imageCover.url} className='card-img-top' alt='img-novel'/>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title text-truncate'>{item.name}</h5>
                        <p className='text-truncate'>{item.author[0].name}</p>
                    </div>
                </div>
                </Link>
            </div>
        )



    return (
        <Fragment>
            <div className='mt-4'>
                <h3>Lista de series</h3>
            {
                series !== null && series.length > 0 ?
                    <div className='row'>
                        {loadSerie(series)}
                    </div>
                    :
                    <h2>Tenemos problemas cargando el contenido</h2>
            }
            </div>
        </Fragment>
    )
}

export default Serie
