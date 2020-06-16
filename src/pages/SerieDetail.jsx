import React, {useEffect, useState, Fragment} from "react";
import { useParams, NavLink } from 'react-router-dom'
const SerieDetail = () => {

    //console.log(useParams())
    const { id } = useParams()

    const [serie, setSerie] = useState({
        _id: "",
        name: "",
        author: [],
        genres: [],
        imageCover:{},
        volume: []
    })

    useEffect( ()=> {
        getDetailSerie(id)
    },[])

    const getDetailSerie = async () => {
        try {
            const data = await fetch(`http://localhost:8000/api/series/name/${id}`)
            const serie = await data.json()
            console.log(serie.data)
            setSerie(serie.data)
        }catch (e) {
            console.error(e)
        }
    }

    return (
        <Fragment>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <NavLink className="breadcrumb-item" to='/serie'>Series</NavLink>
                    <li className="breadcrumb-item active" aria-current="page">{serie.name}</li>
                </ol>
            </nav>
            <div className='container py-2'>
                <img className='img-thumbnail' alt='cover-novel' src={serie.imageCover.url}/>
                <h3>{serie.name}</h3>
                {
                    serie.author.map(item =>
                    <h4 key={item._id}>{item.name}</h4>)
                }
                {
                    <div className='row my-2'>
                        {
                            serie.genres.map(item =>
                                <div key={item._id} className='col-auto chipsy px-2'>{item.name}</div>
                            )
                        }
                    </div>
                }
                <div className='my-4'>
                    <h5>Descripción:</h5>
                    <h5>{serie.description}</h5>
                </div>
                <h3>Lista de capitulos</h3>
                <ul className='list-group'>
                    {
                        serie.volume.map(item =>
                            <NavLink key={item._id}
                                     className='list-group-item list-group-item-action'
                                     to={`/serie/${serie.slug}/volume/${item._id}`}>
                                <div className='d-flex w-100 justify-content-between'>
                                    <h5 className='mb-1'>{item.name}</h5>
                                    <small>3 days</small>
                                </div>
                                <p>{item.description}</p>
                            </NavLink>
                        )
                    }
                </ul>
            </div>
        </Fragment>
    )
}

export default SerieDetail
