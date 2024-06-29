import logo from './logo.svg';
import './App.css';

import MarkdownEditor from './componentes/MarkdownEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
      <main>
        <MarkdownEditor />
      </main>
    </div>
  );
}

export default App;
