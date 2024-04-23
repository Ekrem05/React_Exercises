import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => {
          return <CoreConcept {...item} />;
        })}
      </ul>
    </section>
  );
}
