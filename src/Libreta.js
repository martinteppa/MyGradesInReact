import React from "react";
const Libreta = ({ notes }) => {
  return (
    <div className="section-center">
      {notes.map((note, index) => {
        const { nombre, año, nota } = note;
        return (
          <article key={index} className="menu-item">
            <div className="item-info">
              <header>
                <h4>{nombre}</h4>
                <h4 className="price">{nota}</h4>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Libreta;
