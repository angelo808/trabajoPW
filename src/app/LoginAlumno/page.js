'use client';
import Link from '../../components/Link/Link.jsx'
import Button from '@/components/Button/Button.jsx';
import './LoginA.css'
import LoginForm from './Componentes/LoginForm.js'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const LoginA = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const salir = () =>{
        router.push('/')
    }


    const cambioRol = () =>{
        router.push('/LoginDocente')
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
                    Login Alumnos
                </h2>
        <LoginForm />
        <br/>
                <div className='container-links'>
                        <div className='container-registro'>
                            <Link href="/Registro" text="Registrar nuevo usuario "></Link>&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className='container-olvido'>
                            <Link href="/RecuperarContraseña" text="Olvide mi constraseña"></Link>
                        </div>
                </div>
                <br/>
                <div className='contenedor-button'>
                    <div className='contenedor-salir'>
                        <Button value="Salir" onClick={salir}></Button>
                    </div>
                    <div className='contenedor-ingresar'>
                        <Button value="Ingresar" onClick={handleClick}></Button>
                    </div>
                    <div className='contenedor-rol-docente'>
                        <Button value="Cambiar Rol" onClick={cambioRol}></Button>
                    </div>
                </div>
        </div>
    )
} 

export default LoginA;