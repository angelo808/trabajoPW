'use client'

import principal from './principal.css';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Principal = () => {
    const router = useRouter();

    const handlePerfilClick = () => {
        router.push('/perfil')
    }
    return (
        <div className="base">
            <div className='cabecera'>
                <figure>
                    <Image src='/menu.png' alt="Menu" width={25} height={25}></Image>
                </figure>
                <h1>Atención de Citas</h1>
                <figure>
                    <Image src='/usuario.png' alt="Usuario" width={25} height={25}></Image>
                </figure>
            </div>
            <div className='ladoizquierdo'>
                <ol className="menuaside">
                    <li className='cursor'>Principal</li>
                    <li onClick={handlePerfilClick} className='cursor'>Perfil</li>
                    <li className='cursor'>Horarios</li>
                </ol>
                <p>SAC v1.0.1-alpha</p>
            </div>
        </div>
    )

}

export default Principal