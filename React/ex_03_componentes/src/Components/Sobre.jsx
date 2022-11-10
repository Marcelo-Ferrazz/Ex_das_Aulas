const estilo = { color: "brown" };

const Sobre = () => {
  return (
    <article>
      <h2 style={estilo}>Declarativo</h2>
      <p>
        React faz com que a criação de UIs interativas seja uma tarefa fácil.
        Crie views simples para cada estado na sua aplicação, e o React irá
        atualizar e renderizar de forma eficiente apenas os componentes
        necessários na medida em que os dados mudam.
      </p>
    </article>
  );
};

export default Sobre;
