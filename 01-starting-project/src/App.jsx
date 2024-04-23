import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
function App() {
  const [content, setContent] = useState();
  function changeContent(name) {
    setContent(name);
  }
  let tabContent = content ? (
    <div id="tab-content">
      <h3>{EXAMPLES[content].title}</h3>
      <p>{EXAMPLES[content].description}</p>
      <pre>
        <code>{EXAMPLES[content].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => {
              return <CoreConcept {...item} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isClicked={content === "components"}
              handleClick={() => changeContent("components")}
            >
              Components
            </TabButton>
            <TabButton
              isClicked={content === "jsx"}
              handleClick={() => changeContent("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isClicked={content === "props"}
              handleClick={() => changeContent("props")}
            >
              Props
            </TabButton>
            <TabButton
              isClicked={content === "state"}
              handleClick={() => changeContent("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
