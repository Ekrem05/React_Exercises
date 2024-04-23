import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import Examples from "./Examples.jsx";
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
