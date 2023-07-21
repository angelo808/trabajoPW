'use client';
import './Registro.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Formulario from './Componentes/FormRegis.js'
import Boton from './Componentes/buttonRegister.js'
import Button from '@/components/Button/Button.jsx';

function Registro(){

    const router = useRouter()
    const salir = () =>{
        router.push('/LoginAlumno')
    }

    return(
        <div className = "registro">
            <h1>
                Sistema de Citas Atención a Estudiantes
            </h1>
                <h2>
                    Registrar Nuevo Usuario
                </h2>
            <Formulario/>
            <Boton/>
            <Button value="Salir" onClick={salir}></Button>  
        </div>
    );
}
export default Registro