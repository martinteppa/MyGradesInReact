import React, { useState } from "react";
import Libreta from "./Libreta";
import Years from "./Years";
import notas from "./notas";
const allYears = ["all", ...new Set(notas.map((nota) => nota.año))];

function App() {
  const [notes, setNotas] = useState(notas);
  const [years, setYears] = useState(allYears);

  const filterNotes = (año) => {
    if (año === "all") {
      setNotas(notas);
      return;
    }
    const newNotas = notas.filter((nota) => nota.año === año);
    setNotas(newNotas);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>My Qualifications</h2>
        </div>
        <Years years={years} filterNotes={filterNotes} />
        <Libreta notes={notes} />
      </section>
    </main>
  );
}
export default App;
