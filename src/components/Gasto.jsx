import React from "react";

const Gasto = ({ gasto }) => {
  const { categoria, nombre, cantidad, id } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <div className="categoria">{categoria}</div>
          <div className="categoria">{nombre}</div>
        </div>
      </div>
    </div>
  );
};

export default Gasto;
