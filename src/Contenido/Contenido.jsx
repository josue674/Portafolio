import "./Contenido.css";
import "./Perfil.css";
import "./Menu.css";
import "./Idioma.css";
import "./Proyectos.css";
import "./Formacion.css";
import "./Aprendiendo.css";
import "./AboutMe.css";

import idioma from "../idiomas.json";

import foto from "../Imagenes/foto.jpg";
import EmpanaTica from "../Imagenes/Proyectos/EmpanaTica.png";
import Recipe from "../Imagenes/Proyectos/Recipe.png";
import Veterinaria from "../Imagenes/Proyectos/Veterinario.png";

import fide from "../Imagenes/fide.jpg";
import Scrum from "../Imagenes/Scrum.png";
import udemy from "../Imagenes/udemy.jpg";
import Azure from "../Imagenes/JSX/Azure.jsx";
import Css from "../Imagenes/JSX/css.jsx";
import Html from "../Imagenes/JSX/html.jsx";
import Java from "../Imagenes/JSX/java.jsx";
import Javascript from "../Imagenes/JSX/javascrip.jsx";
import Spring from "../Imagenes/JSX/spring.jsx";
import Reactjs from "../Imagenes/JSX/react.jsx";
import { useState } from "react";

function Contenido() {
  const [miEmail, setEmail] = useState("@walterjosue");
  const [estadoIdioma, setEstadoIdioma] = useState(true);
  const [miIdioma, setIdioma] = useState("es");

  const cambiarIdioma = () => {
    if (estadoIdioma) {
      setEstadoIdioma(false);
      setIdioma("en");
    } else {
      setEstadoIdioma(true);
      setIdioma("es");
    }
  };
  const copiar = () => {
    const textoACopiar = "info@walterjosue.com"; // Texto que quieres copiar al portapapeles

    // Intenta copiar el texto al portapapeles
    navigator.clipboard
      .writeText(textoACopiar)
      .then(() => {
        setEmail(idioma.traducciones[0][miIdioma]);
        setTimeout(() => {
          setEmail("@walterjosue");
        }, 5000);
      })
      .catch((err) => {
        console.error("Error al copiar texto al portapapeles:", err);
        alert("Error al copiar texto al portapapeles");
      });
  };

  const enviarCorreo = () => {
    const destinatario = "info@walterjosue.com";

    const mailtoLink = `mailto:${destinatario}`;

    window.open(mailtoLink);
  };

  const abrirPDF = () => {
    const urlPDF = "https://ejemplo.com/ejemplo.pdf"; // URL del archivo PDF que quieres abrir en una nueva ventana

    window.open(urlPDF, "_blank"); // Abre el PDF en una nueva ventana del navegador
  };

  return (
    <section className="container">
      <div className="Perfil">
        <div className="Perfil1">
          <div className="ContenedorTextoPerfil">
            <h1 className="TituloPerfil">
              {idioma.traducciones[19][miIdioma]}{" "}
              <span className="nombre">
                {idioma.traducciones[20][miIdioma]}
              </span>
            </h1>
            <p className="TextoPerfil">
              {idioma.traducciones[21][miIdioma]}
              <span className="textoPerfilEnfoqueNet">
                {idioma.traducciones[22][miIdioma]}
              </span>
              {idioma.traducciones[23][miIdioma]}
              <span className="textoPerfilEnfoqueReact">
                {" "}
                {idioma.traducciones[24][miIdioma]}{" "}
              </span>{" "}
              {idioma.traducciones[25][miIdioma]}
            </p>
          </div>
          <div className="contentFotoPerfil">
            <img className="fotoPerfil" src={foto} />
          </div>
        </div>
      </div>
      <div className="Menu">
        <div className="contetnMenu">
          <div className="icono bgIcono1">
            <i className="bi bi-file-earmark-pdf-fill"></i>
            <div className="contentButtoContat">
              <button className="btnActionContat" onClick={abrirPDF}>
                <h4 className="correoContact">JosueAguirre.pdf</h4>
                <i className="bi bi-download"></i>
              </button>
            </div>
          </div>
          <div className="icono bgIcono2">
            <i className="bi bi-github"></i>
            <div className="contentButtoContat">
              <button
                className="btnActionContat"
                onClick={() => window.open("https://github.com/josue674")}
              >
                <h4 className="correoContact">josue674</h4>
                <i className="bi bi-globe2"></i>
              </button>
            </div>
          </div>
          <div className="icono bgIcono3">
            <i className="bi bi-linkedin"></i>
            <div className="contentButtoContat">
              <button
                className="btnActionContat"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/josue-aguirre-466b67251/"
                  )
                }
              >
                <h4 className="correoContact">josue aguirre</h4>
                <i className="bi bi-globe2"></i>
              </button>
            </div>
          </div>
          <div className="icono bgIcono4">
            <i className="bi bi-envelope-open-fill"></i>
            <div className="contentButtoContat">
              <button className="btnActionContat" onClick={enviarCorreo}>
                <i className="bi bi-send"></i>
              </button>
              <button className="btnActionContat" onClick={copiar}>
                <i className="bi bi-clipboard-check"></i>
                <h4 className="correoContact">{miEmail}</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Idioma">
        <div className="IdiomaContent" onClick={cambiarIdioma}>
          <i className="bi bi-translate"></i>
        </div>
      </div>
      <div className="Proyecto">
        <div className="card">
          <div className="card-title">
            <div className="tituloProyecto">
              <span>Empana-tica S.A </span>
            </div>
            <div className="accionesCard">
              <div className="contentActivoPoryecto">
                <i className="bi bi-activity"></i>
                <span>{idioma.traducciones[1][miIdioma]}</span>
              </div>
              <button className="contenLinkPoryecto" onClick={() => window.open("https://github.com/mpicado30750/Empana-tica_Web")} >
                <i className="bi bi-github"></i>
                <span>Github</span>
              </button>
              <button className="contenLinkPoryectoNo">
                <i className="bi bi-globe2"></i>
                <span>Web</span>
              </button>
            </div>
          </div>
          <div className="ContentInfoProyectos">
            <img className="fotoProyecto" src={EmpanaTica} />
            <div className="card-body">{idioma.traducciones[2][miIdioma]}</div>
          </div>
          <div className="card-footer">
            <div className="contentTecPoryecto html">
              <span>HTML</span>
            </div>
            <div className="contentTecPoryecto boostrap">
              <span>Boostrap</span>
            </div>
            <div className="contentTecPoryecto netcore">
              <span>.Net core 8</span>
            </div>
            <div className="contentTecPoryecto jwt">
              <span>JWT</span>
            </div>
            <div className="contentTecPoryecto entity">
              <span>EntityFrameWork</span>
            </div>
            <div className="contentTecPoryecto identity">
              <span>Identity</span>
            </div>
            <div className="contentTecPoryecto sql">
              <span>SQL Server</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <div className="tituloProyecto">
              <span>{idioma.traducciones[3][miIdioma]}</span>
            </div>
            <div className="accionesCard">
              <div className="contentFinalizadoPoryecto">
                <i className="bi bi-slash-circle"></i>
                <span>{idioma.traducciones[4][miIdioma]}</span>
              </div>
              <button className="contenLinkPoryecto" onClick={() => window.open("https://github.com/josue674/Sistema_Veterinario")}>
                <i className="bi bi-github"></i>
                <span>Github</span>
              </button>
              <button className="contenLinkPoryectoNo">
                <i className="bi bi-globe2"></i>
                <span>Web</span>
              </button>
            </div>
          </div>
          <div className="ContentInfoProyectos">
            <img className="fotoProyecto" src={Veterinaria} />
            <div className="card-body">{idioma.traducciones[5][miIdioma]}</div>
          </div>
          <div className="card-footer">
            <div className="contentTecPoryecto html">
              <span>HTML</span>
            </div>
            <div className="contentTecPoryecto boostrap">
              <span>Boostrap</span>
            </div>
            <div className="contentTecPoryecto netcore">
              <span>.Net core 8</span>
            </div>
            <div className="contentTecPoryecto entity">
              <span>EntityFrameWork</span>
            </div>
            <div className="contentTecPoryecto identity">
              <span>Identity</span>
            </div>
            <div className="contentTecPoryecto sql">
              <span>SQL Server</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <div className="tituloProyecto">
              <span>{idioma.traducciones[6][miIdioma]}</span>
            </div>
            <div className="accionesCard">
              <div className="contentFinalizadoPoryecto">
                <i className="bi bi-slash-circle"></i>
                <span>{idioma.traducciones[4][miIdioma]}</span>
              </div>
              <button className="contenLinkPoryecto" onClick={() => window.open("https://github.com/josue674/RandomRecipeAI")}>
                <i className="bi bi-github"></i>
                <span>Github</span>
              </button>
              <button className="contenLinkPoryecto" onClick={() => window.open("https://randomrecipeai.netlify.app")}>
                <i className="bi bi-globe2"></i>
                <span>Web</span>
              </button>
            </div>
          </div>
          <div className="ContentInfoProyectos">
            <img className="fotoProyecto" src={Recipe} />
            <div className="card-body">{idioma.traducciones[7][miIdioma]}</div>
          </div>
          <div className="card-footer">
            <div className="contentTecPoryecto html">
              <span>HTML</span>
            </div>
            <div className="contentTecPoryecto boostrap">
              <span>Tailwind</span>
            </div>
            <div className="contentTecPoryecto jwt">
              <span>React</span>
            </div>
            <div className="contentTecPoryecto entity">
              <span>JavaScript</span>
            </div>
            <div className="contentTecPoryecto identity">
              <span>Open AI</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Formacion">
        <div className="contenedorFormacion">
          <div className="contentInstituciones">
            <div className="contentFotoFormacion">
              <img className="fotoFromacion" src={fide} />
            </div>
            <div className="infoFormacion">
              <span className="tituloInfo">
                {idioma.traducciones[8][miIdioma]}
              </span>
              <span className="infoInformacion">
                {idioma.traducciones[9][miIdioma]}
              </span>
            </div>
          </div>
          <div className="contentInstituciones">
            <div className="contentFotoFormacion">
              <img className="fotoFromacion" src={Scrum} />
            </div>
            <div className="infoFormacion">
              <span className="tituloInfo">
                {idioma.traducciones[10][miIdioma]}
              </span>
              <span className="infoInformacion">
                {idioma.traducciones[11][miIdioma]}
              </span>
            </div>
          </div>
          <div className="contentInstituciones">
            <div className="contentFotoFormacion">
              <img className="fotoFromacion" src={udemy} />
            </div>
            <div className="infoFormacion">
              <span className="tituloInfo">
                {idioma.traducciones[12][miIdioma]}
              </span>
              <span className="infoInformacion">
                {idioma.traducciones[13][miIdioma]}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="Aprendiendo">
        <div className="contenedorAprendiendo">
          <span className="tituloAprendiendo">
            {idioma.traducciones[14][miIdioma]}
          </span>
          <div className="contentIconos">
            <div className="IconosAprendiendo">
              <Azure />
            </div>
            <div className="IconosAprendiendo">
              <Java />
            </div>
            <div className="IconosAprendiendo">
              <Html />
            </div>
            <Javascript className="IconosAprendiendo" />
            <div className="IconosAprendiendo">
              <Css />
            </div>
            <Spring className="IconosAprendiendo" />
            <Reactjs className="IconosAprendiendo" />
          </div>
        </div>
      </div>
      <div className="AboutMe">
        <div className="contenedorAbout">
          <span className="tituloAboutMe">
            {idioma.traducciones[15][miIdioma]}
          </span>
          <div className="contentInformacionAbout">
            <span className="description">
              {idioma.traducciones[16][miIdioma]}
            </span>
            <span className="description">
              {idioma.traducciones[17][miIdioma]}
            </span>
            <span className="description">
              {idioma.traducciones[18][miIdioma]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contenido;
