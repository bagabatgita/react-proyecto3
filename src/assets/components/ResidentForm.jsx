import React from "react";
import "./styles/ResidentForm.css";
const ResidentForm = ({ handleSubmit }) => {
  return (
    <section className="residentForm">
      
     <div className="residentForm_content">
        <form onSubmit={handleSubmit}>
          <input type="text"  className="residentForm_input" id="idLocation" placeholder="type a location id" />
          <button >Search</button>
        </form>
      </div>
    </section>
  );
};

export default ResidentForm;
