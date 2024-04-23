import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

export default function Examples() {
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
  );
}
