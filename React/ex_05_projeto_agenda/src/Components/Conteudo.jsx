const Conteudo = () => {
  return (
    <section>
      <h2 id="up">Olá</h2>
      <button
        onClick={() => {
        let add = document.getElementById("up");
        add.innerHTML = "Mais um !"
        }}
      >
        clique
      </button>
      
    </section>
  );
};

export default Conteudo;
