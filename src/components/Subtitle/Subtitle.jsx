import React from 'react'
import './Subtitle.css'

const Subtitle = ({text}) => {
    return(
        <div className='container-subtitulo'>
            <label className='label-subtitulo'>{text}</label>
        </div>
    )

};

export default Subtitle;