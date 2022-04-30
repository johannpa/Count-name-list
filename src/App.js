import Like from "./components/Likes";
import NameList from "./components/NameList";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mon Appli React</h1>
        <Like/>
        <NameList/>
      </header>
    </div>
  );
}

export default App;
