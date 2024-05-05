import "./App.css";
import Contenido from "./Contenido/Contenido";
import Particulas from "./animaciones/Particulas";

function App() {
  return (
    <section className="SeccionPrincipal">
      <Particulas/>
      <Contenido/>
    </section>
  );
}

export default App;
