import React from "react";
const Years = ({ years, filterNotes }) => {
  return (
    <div className="btn-container">
      {years.map((year, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterNotes(year)}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
};

export default Years;
