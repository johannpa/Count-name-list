// import Like from "./components/Likes";
// import NameList from "./components/NameList";

import LevelA from "./components/LevelA";
import MailContextProvider from "./contexts/MailContext";

// import Calculator from "./components/Calculator";

// import PostList from "./components/PostList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mon Appli React</h1>
        {/* <Like/> */}
        {/* <NameList/> */}
        {/* <PostList/> */}
        {/* <Calculator/> */}
        <MailContextProvider>
          <LevelA/>
        </MailContextProvider>
      </header>
    </div>
  );
}

export default App;
