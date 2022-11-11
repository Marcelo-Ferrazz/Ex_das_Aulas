import { Component } from "react";

class Conteudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
      like:false,
      deslike:false,
    };
  }
  

  render() {
    return (
      <div>
        <h2>h</h2>
        <p>lkshtejtej</p>
        <p>Você leu {this.state.read} vezes</p>
        <button
          onClick={() => this.setState({ read: true})}
        >
          Clique aqui
        </button>

        <p>Você Gostou {this.state.like} vezes</p>
        <button
          onClick={() => this.setState({ like: true})}
        
        >
          Like
        </button>

        <p>Você Gostou {this.state.deslike} vezes</p>
        <button
          onClick={() => this.setState({ deslike: true })}
        >
          Deslike
        </button>
      </div>
    );
  }
}
export default Conteudo;