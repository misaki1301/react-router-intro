import React, {useState, Fragment, useEffect} from "react";
import { Document, Page } from "react-pdf"
import { pdfjs } from 'react-pdf';
import { useParams } from "react-router-dom"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Volume = () => {

    const [serie, setSerie] = useState({})
    const [volume, setVolume] = useState({
        file: {
            url: ''
        }
    })
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    const { slug, id } = useParams()


    useEffect( ()=> {
        getSerieDetail()
        getVolume()
    }, [])

    const getSerieDetail = async() => {
        try {
            const serie = await fetch(`http://localhost:8000/api/series/name/${slug}`)
            const data = await serie.json()
            setSerie(data.data)
            console.log("serie", data.data)
        }catch (e) {
            console.error("getSerie", e)
        }
    }

    const getVolume = async() => {
        try{
            const volume = await fetch(`http://localhost:8000/api/volume/${id}`)
            const data = await volume.json();
            setVolume(data.data)
            console.log("volume", data.data)
            setIsLoading(false)
        }catch (e) {
            console.error(e)
        }
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }


    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages)
    }

    const loadDocument = () =>{
        //console.log(volume)
        return (
            <div>
                <Document
                    file={volume.file.url}
                    loading={<h1>Please wait now Loading...</h1>}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} className='container-fluid pager'/>
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        )
    }



    return (
        <Fragment>
            {
                <div className='row align-content-center justify-content-center pdf'>
                    {loadDocument()}
                    <div className='swiper-pager row h-100 align-items-end pb-4'>
                        <div className='col-auto'>
                            <button type="button"
                                    disabled={pageNumber <= 1}
                                    onClick={previousPage}
                                    className="btn btn-primary btn-lg">Atras</button>
                        </div>
                        <div>
                            <button type="button"
                                disabled={pageNumber >= numPages}
                                onClick={nextPage}
                                className="btn btn-secondary btn-lg">Adelante</button>
                        </div>
                    </div>
                </div>
            }
        </Fragment>

    )
}

export default Volume
