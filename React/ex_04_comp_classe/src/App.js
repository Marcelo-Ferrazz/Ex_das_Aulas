import './App.css';
import Conteudo from './Components/Conteudo';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header name="Marcelo"/>
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
