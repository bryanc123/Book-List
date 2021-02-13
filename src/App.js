import logo from './logo.svg';
import './App.css';
import Books from './Books';

function App() {
  const headerStyle = {
    backgroundColor: "#E8E8E8",
    padding: "20px",
    minHeight: "100px"
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>Book Search</h1>
        <h2>Powered by OpenLibrary API</h2>
      </header>
      <Books />
    </div>
  );
}

export default App;
