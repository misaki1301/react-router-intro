import React, {useEffect} from "react";

const About = () => {

    useEffect(()=>{
        console.log('use Effect')
        document.title = 'use Effect'
    })

    return (
        <div>
            <h1>Hola soy about</h1>
        </div>
    )
}

export default About
