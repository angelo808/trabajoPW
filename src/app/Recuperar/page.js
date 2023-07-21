'use client';
import Button from '@/components/Button/Button.jsx';
import './Recuperar.css'
import RecuperarForm from './Componentes/recuperarForm.js'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Recuperar = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const salir = () =>{
        router.push('/')
    }

    const handleClick = () => {
        if (usuario==="aguill" && password==="qwerty") {
            router.push('/principal')
        } else
            alert('Usuario o password incorrecto')
    }

    return (
        <div className = "login">
            <h1>
                Sistema de Citas para Atención a Estudiantes
            </h1>
                <h2>
                    Recuperar Contraseña
                </h2>
        <RecuperarForm />
                <br/>
                <div className='contenedor-button'>
                    <div className='contenedor-salir'>
                        <Button value="Salir" onClick={salir}></Button>
                    </div>
                    <div className='contenedor-ingresar'>
                        <Button value="Aceptar" onClick={handleClick}></Button>
                    </div>
                </div>
        </div>
    )
} 
export default Recuperar