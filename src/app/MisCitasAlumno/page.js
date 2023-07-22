'use client'

import React from 'react';
import citas from './citasalumno.css';
import Image from 'next/image'

const CitasAlumno = () => {
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
            <li><a href="">Principal</a></li>
            <li><a href="">Busqueda</a></li>
            <li><a href="">Citas</a></li>
            <li><a href="">Cerrar Sesion</a></li>
          </ul>
        </nav>
      </aside>
      <main>
        <div className="main-header">
          <button className="programar-cita"><a href="./busquedaCita/page.js">Programar una cita</a></button>
          <h2>Mis Citas</h2>
        </div>
        <hr />
        <div className="citas-pasadas-section">
          <button className="citas-pasadas"><a href="">Ver citas pasadas</a></button>
          <p>Citas de asesoría reservadas:</p>
        </div>

        <div className="cita">
          <div>
            <button className="iniciales">JL</button>
          </div>
          <div className="cita-details">
            <h3>Juan López</h3>
            <p>Mg. Ingeniería de Sistemas</p>
          </div>
          <div className="cita-image">
            <img className="foto-docente" src='/profesor.jpg' alt="" />
          </div>
          <div className="cita-info">
            <p><span className="cita-fecha">Lunes, 22 de mayo de 2023 - 08:00 am</span></p>
            <p>Curso: <span className="cita-curso">Programación Web</span></p>
          </div>
          <div>
            <a href="" className="enlace-clase">Enlace de Zoom</a>
          </div>
          <div>
            <button className="cancelar-cita">Cancelar cita</button>
          </div>
        </div>

        <div className="cita">
          <div>
            <button className="iniciales">AS</button>
          </div>
          <div className="cita-details">
            <h3>Adriana Sánchez</h3>
            <p>Mg. Ingeniería de Software</p>
          </div>
          <div className="cita-image">
            <img className="foto-docente" src='/profesor2.jpg' alt="" />
          </div>
          <div className="cita-info">
            <p><span className="cita-fecha">Martes, 23 de mayo de 2023 - 04:00pm</span></p>
            <p>Curso: <span className="cita-curso">Ing. de Software II</span></p>
          </div>
          <div>
            <a href="" className="enlace-clase">Enlace de Zoom</a>
          </div>
          <div>
            <button className="cancelar-cita">Cancelar cita</button>
          </div>
        </div>
        <div>
          <p><span className="paginas">Página 1 de 1  [1... 1]</span></p>
        </div>
      </main>
    </div>
  );
};

export default CitasAlumno;