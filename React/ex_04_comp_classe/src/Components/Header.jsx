import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <section>
        <h1>Olá, me chamo {props.name}.</h1>
        <p  style={{fontWeight: "bold"}}>esse é meu exercício da aula 04</p>
    </section>
  )
}
Header.defaultProps = {
  nome: "Nome padrão",
};

Header.propTypes = {
  nome: PropTypes.string,
};

export default Header