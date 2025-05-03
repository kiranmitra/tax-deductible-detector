import { useState } from "react";
import "./index.css";

function Home() {
  const [input, setInput]   = useState("");
  const [entries, setEntry] = useState([]);

  const keywords = [
    "uber","client","office","travel","equipment",
    "training","conference","laptop","software"
  ];

  function handleAdd() {
    const desc = input.trim();
    if (!desc) return;

    const isDeductible = keywords.some(k =>
      desc.toLowerCase().includes(k)
    );

    // prepend instead of append  ➜  newest first
    setEntry(prev => [
      { description: desc, deductible: isDeductible },
      ...prev
    ]);

    setInput("");
  }

  return (
    <div className="container">
      <h1 className="title">Tax Write‑Off Checker</h1>

      <div className="input-row">
        <input
          className="expense-input"
          type="text"
          placeholder="Enter expense description…"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>+</button>
      </div>

      <div className="entry-list">
        {entries.map((e, i) => (
          <div key={i} className="entry">
            <span className="entry-text">{e.description}</span>
            <span className="dash">-</span>
            <span className={`tag ${e.deductible ? "yes" : "no"}`}>
              {e.deductible ? "Deductible" : "Not Deductible"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
