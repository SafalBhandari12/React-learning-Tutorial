import { CORE_CONCEPTS } from "../assets/data";
import CoreConcept from "./CoreConcept";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul className="fl">
        {CORE_CONCEPTS.map((coreItem) => (
          <CoreConcept key={coreItem.title} {...coreItem} />
        ))}
      </ul>
    </section>
  );
}
