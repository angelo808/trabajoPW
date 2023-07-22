'use client'

import React from "react";
import citadocente from './citasdocente.css';
import Image from 'next/image'

const CitasDocente = () => {
  return (
    <div>
      <header>
        <img className="icon-header" src='/menu.png' alt="" />
        <h1>Atención de Citas</h1>
        <img className="icon-header" id="icon-user" src='/usuario.png' alt="" />

      </header>

      <aside>
        <nav>
          <ul>
            <li>
              <a href="">Principal</a>
            </li>
            <li>
              <a href="./perfil/page.js">Perfil</a>
            </li>
            <li>
              <a href="">Horarios</a>
            </li>
            <li>
              <a href="/page.js">Citas</a>
            </li>
            <li>
              <a href="">Calificaciones</a>
            </li>
            <li>
              <a href="">Cerrar Sesion</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <div>
          <button className="programar-cita">
            <a href="./busquedaCita/page.js" style={{ color: "white", textDecoration: "none" }}>
              Programar una cita
            </a>
          </button>
          <h2>Mis Citas</h2>
        </div>
        <hr />

        <div>
          <button className="citas-pasadas">
            <a href="" style={{ textDecoration: "none" }}>
              Ver citas pasadas
            </a>
          </button>
          <p>Citas de asesoría reservadas:</p>
        </div>

        <div className="cita">
          <div className="iniciales">AG</div>
          <div className="docente-info">
            <h3 className="docente-nombres">Adriana Guzmán</h3>
            <p className="docente-nombres">Estudiante de Ing. de Sistemas</p>
          </div>
          <div className="docente-foto-container">
            <img className="foto-docente" src='/alumno.jpg' alt="" />
          </div>
          <div className="cita-info">
            <p className="cita-fecha">Lunes, 22 de mayo de 2023 - 08:00 am</p>
            <p>
              Curso: <span className="cita-curso">Ingeniería de Software II</span>
            </p>
          </div>
          <div>
            <a href="" className="enlace-clase">
              Enlace de Zoom
            </a>
          </div>
          <div>
            <button className="cancelar-cita">Cancelar cita</button>
          </div>
        </div>

        <div className="cita">
          <div className="iniciales">JG</div>
          <div className="docente-info">
            <h3 className="docente-nombres">Julio Gómez</h3>
            <p className="docente-nombres">Estudiante de Ing. Industrial</p>
          </div>
          <div className="docente-foto-container">
            <img className="foto-docente" src='/alumno2.png' alt="" />
          </div>
          <div className="cita-info">
            <p className="cita-fecha">Jueves, 25 de mayo de 2023 - 04:00pm</p>
            <p>
              Curso: <span className="cita-curso">Intro a Programación</span>
            </p>
          </div>
          <div>
            <a href="" className="enlace-clase">
              Enlace de Zoom
            </a>
          </div>
          <div>
            <button className="cancelar-cita">Cancelar cita</button>
          </div>
        </div>

        <div>
          <p>
          <p><span className="paginas">Página 1 de 1  [1... 1]</span></p>
          </p>
        </div>
      </main>
    </div>
  );
}

export default CitasDocente;