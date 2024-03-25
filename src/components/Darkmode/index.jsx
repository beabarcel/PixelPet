import PropTypes from "prop-types"; // Importe PropTypes

function Darkmode({ toggleDarkMode }) {
  return (
    <div className="darkmode">
      <button onClick={() => toggleDarkMode()}>Alternar Modo</button>
    </div>
  );
}

// Defina as propTypes para o componente Darkmode
Darkmode.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired, // toggleDarkMode deve ser uma função e é obrigatória
};

export default Darkmode;
