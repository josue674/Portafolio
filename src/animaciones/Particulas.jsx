import "./Particulas.css";

function Particulas() {
  return (
    <div className="containerParticulas">
      <div className="bubble">
      {[...Array(30)].map((_, index) => (
                <span key={index} style={{ '--rand': Math.random() * 1 }}>
                    {/* Contenido opcional dentro de la burbuja */}
                </span>
            ))}
      </div>
    </div>
  );
}

export default Particulas;
