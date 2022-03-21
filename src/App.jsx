import "./App.css";

function Titulo(){
  return(
  <h2>Lista de Compras:</h2>
  );
}

function Botao(){
  return(
    <form className="form-add-item" action="#" method="post">
    <fieldset>
      <div className="form-group mb-3">
        <label htmlFor="item">Adicionar Novo Item na Lista:</label>
        <input type="text" className="form-control" id="item" />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </fieldset>
  </form>
  );
}

function Lista(){
  return(
  
    <ul className="lista-items">
    <li>Queijo</li>
    <li>Leite</li>
    <li>Pão</li>
  </ul>    

  );
}

function App() {
  return (
    <div className="App">
      <header>
        <Titulo/>
      </header>
        <div className="lista-compras-container">
        <Lista/>

          </div>
            <Botao/>
          </div>
  );
}

export default App;
