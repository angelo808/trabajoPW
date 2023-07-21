import React from 'react'
import './Titulo.css'

const Title = ({text}) => {
    return(
        <div className='container-titulo'>
            <label className='label-titulo'>{text}</label>
        </div>
    )

};

export default Title;