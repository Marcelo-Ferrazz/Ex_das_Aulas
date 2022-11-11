import { Component } from "react";

class Conteudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
      like: false,
      deslike: false,
    };
  }

  render() {
    return (
      <div>
        <h2>Componentes com Classe</h2>
        <p style={{textDecoration:"underline"}}>aonde ao clicar no botão, será alterado o texto a cima </p>
        <p id="lido">Você não leu</p>
        <button
          onClick={() => {
              let read = document.getElementById("lido");
              read.innerHTML = "Você leu !";
          }}
        >
          clique se tiver lido
        </button>

        <p id="like">Dê seu like se tiver gostado</p>
        <button onClick={() => {
          let like = document.getElementById("like");
              like.innerHTML = "Você gostou ! ";
        }}
        >
          Like
        </button>

        <p id="deslike">Dê seu deslike se não tiver gostado</p>
        <button onClick={() => {
          let deslike = document.getElementById("deslike");
          deslike.innerHTML = "Como podemos melhorar ? ";
        }}
        >
          Deslike
        </button>
      </div>
    );
  }
}
export default Conteudo;
