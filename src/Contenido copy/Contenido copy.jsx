import "./Contenido.css";
import "./Perfil.css";
import "./Menu.css";
import "./Idioma.css";
import "./Proyectos.css";
import "./Formacion.css";
import "./Aprendiendo.css";
import "./AboutMe.css";
import foto from "../Imagenes/foto.jpg";
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

function Contenido() {
  return (
    <section className="container">
      <div className="Perfil">
        <div className="Perfil1">
          <div className="ContenedorTextoPerfil">
            <h1 className="TituloPerfil">
              👋 !Hola¡,yo soy <span className="nombre">Walter Josue</span>
            </h1>
            <p className="TextoPerfil">
              Soy una programador
              <span className="textoPerfilEnfoqueNet">Backend de .Net</span>
              intentado programar en el fronend un interfaz bonita con
              <span className="textoPerfilEnfoqueReact"> React </span> sin morir
              en el intento.
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
              <button className="btnActionContat">
                <h4 className="correoContact">JosueAguirre.pdf</h4>
                <i className="bi bi-download"></i>
              </button>
            </div>
          </div>
          <div className="icono bgIcono2">
            <i className="bi bi-github"></i>
            <div className="contentButtoContat">
              <button className="btnActionContat">
                <h4 className="correoContact">josue674</h4>
                <i className="bi bi-globe2"></i>
              </button>
            </div>
          </div>
          <div className="icono bgIcono3">
            <i className="bi bi-linkedin"></i>
            <div className="contentButtoContat">
              <button className="btnActionContat">
                <h4 className="correoContact">josue aguirre</h4>
                <i className="bi bi-globe2"></i>
              </button>
            </div>
          </div>
          <div className="icono bgIcono4">
            <i className="bi bi-envelope-open-fill"></i>
            <div className="contentButtoContat">
              <button className="btnActionContat">
                <i className="bi bi-send"></i>
              </button>
              <button className="btnActionContat">
                <i className="bi bi-clipboard-check"></i>
                <h4 className="correoContact">@walterjosue</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Idioma">
        <div className="IdiomaContent">
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
                <span>Activo</span>
              </div>
              <button className="contenLinkPoryecto">
                <i className="bi bi-github"></i>
                <span>Github</span>
              </button>
              <button className="contenLinkPoryecto">
                <i className="bi bi-globe2"></i>
                <span>Web</span>
              </button>
            </div>
          </div>
          <div className="">
            <img className="fotoProyecto" src={foto} />
            <div className="card-body">
              Empana-tica es una empreza qeu se dedica a la elaboracion de
              comida y su distribucuion a diferentes sucursales, nuestra
              investigacion nos dio como resultado que ellos estan teniendo un
              problema a la hora de administrar su inventario y gestionar sus
              recursos humanos.
            </div>
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
              <span>Empanadita S.A </span>
            </div>
            <div className="accionesCard">
              <div className="contentActivoPoryecto">
                <i className="bi bi-activity"></i>
                <span>Activo</span>
              </div>
              <button className="contenLinkPoryecto">
                <i className="bi bi-github"></i>
                <span>Github</span>
              </button>
              <button className="contenLinkPoryecto">
                <i className="bi bi-globe2"></i>
                <span>Web</span>
              </button>
            </div>
          </div>
          <div className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quaerat quas, quo quidem, quibusdam quasi, necessitatibus
            voluptatibus voluptas quia quo quod.Con mis conocimientos en .NET,
            Java y Frontend con React,
          </div>
          <div className="card-footer">
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <div className="tituloProyecto">
              <span>Empanadita S.A </span>
            </div>
            <div className="accionesCard">
              <div className="contentActivoPoryecto">
                <i className="bi bi-activity"></i>
                <span>Activo</span>
              </div>
              <button className="contenLinkPoryecto">
                <i className="bi bi-github"></i>
                <span>Github</span>
              </button>
              <button className="contenLinkPoryecto">
                <i className="bi bi-globe2"></i>
                <span>Web</span>
              </button>
            </div>
          </div>
          <div className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quaerat quas, quo quidem, quibusdam quasi, necessitatibus
            voluptatibus voluptas quia quo quod.Con mis conocimientos en .NET,
            Java y Frontend con React,
          </div>
          <div className="card-footer">
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
            <div className="contentActivoPoryecto">
              <span>Activo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item Formacion">
        <div className="contenedorFormacion">
          <div className="contentInstituciones">
            <div className="contentFotoFormacion">
              <img className="fotoFromacion" src={fide} />
            </div>
            <div className="infoFormacion">
              <span className="tituloInfo">Univesidad Fidélitas</span>
              <span className="infoInformacion">Ingenieria en Sistemas</span>
            </div>
          </div>
          <div className="contentInstituciones">
            <div className="contentFotoFormacion">
              <img className="fotoFromacion" src={Scrum} />
            </div>
            <div className="infoFormacion">
              <span className="tituloInfo">Scrum Study</span>
              <span className="infoInformacion">Scrum Fundamentals</span>
            </div>
          </div>
          <div className="contentInstituciones">
            <div className="contentFotoFormacion">
              <img className="fotoFromacion" src={udemy} />
            </div>
            <div className="infoFormacion">
              <span className="tituloInfo">Udemy</span>
              <span className="infoInformacion">Univerdidad de ASP .Net</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item Aprendiendo">
        <div className="contenedorAprendiendo">
          <span className="tituloContenedores">Aprendiendo</span>
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
      <div className="grid-item AboutMe">
        <div className="contenedorAbout">
          <span className="tituloContenedores">About me</span>
          <div className="contentInformacionAbout">
            <span className="description">
              Me llamo Walter Josue pero mis amigos me llaman Jo, soy de Costa
              Rica. estoy terminando mis estudios de ingenieria en sistemas.
              Actualmente estoy enfocado en desarrollo de aplicaciones
              administrativas con .net core 8.
            </span>
            <span className="description">
              Entre mis aptitudes destaco que durante el grado superior, me
              esfuerzo para que el codigo que realiso este los mas optimizado y
              limpio posible, ya que soy creyente que el mejor codigo es el mas
              optimizado y facil decomprender por otros programadores .
            </span>
            <span className="description">
              Cuento con experiencia desarrollando sistemas de sofware
              administrativos con .net core, en este momento me encuetro
              realizando un sistema de adminstracion para una empresa
              costarisence llamada Empanadita S.A, como parte de mi programa de
              formacion como ingeniero.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contenido;
