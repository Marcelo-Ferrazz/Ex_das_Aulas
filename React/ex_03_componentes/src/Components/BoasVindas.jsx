import PropTypes from 'prop-types';

const BoasVindas = (props) => {
  return (
    <section>
      <h1>Olá, me chamo {props.name}</h1>
      <p style={{color:"blue"}}>Vamos conhecer um pouco mais sobre REACT</p>
    </section>
  );
};

BoasVindas.defaultProps = {
  nome: "Nome padrão",
};

BoasVindas.propTypes = {
  nome: PropTypes.string,
};
export default BoasVindas;
