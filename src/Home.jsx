import { useState } from "react";
import "./index.css";

function Home() {
  // defaults to current quarter
  const getCurrentQuarter = () => {
    const month = new Date().getMonth() + 1;
    return `Q${Math.ceil(month / 3)}`;
  };
  
  const [input, setInput] = useState({
    desc: "",
    amount: "",
    quarter: getCurrentQuarter()
  });
  
  const [entries, setEntry] = useState([]);

  const keywords = [
    "uber", "client", "office", "travel", "equipment",
    "training", "conference", "laptop", "software", "work", "meeting",
    "consulting", "marketing", "advertising", "hosting", "domain",
    "tools", "legal", "supplies", "phone", "internet",
    "education", "books", "seminar", "printer", "business", "zoom"
  ];

  function handleAdd() {
    const desc = input.desc.trim();
    const amount = parseFloat(input.amount);
    if (!desc || isNaN(amount)) return;

    const isDeductible = keywords.some(k =>
      desc.toLowerCase().includes(k)
    );

    const quarter = input.quarter || getCurrentQuarter();

    setEntry(prev => [
      {
        description: desc,
        amount,
        deductible: isDeductible,
        quarter
      },
      ...prev
    ]);

    setInput({ desc: "", amount: "" });
  }

  // group entries by quarter
  const grouped = entries.reduce((acc, entry) => {
    acc[entry.quarter] = acc[entry.quarter] || [];
    acc[entry.quarter].push(entry);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1 className="title">Tax Write‑Off Checker</h1>

      <div className="input-row">
        <input
          className="expense-input"
          type="text"
          placeholder="Description"
          value={input.desc}
          onChange={e => setInput({ ...input, desc: e.target.value })}
        />
        <input
          className="expense-input"
          type="number"
          placeholder="Amount"
          value={input.amount}
          onChange={e => setInput({ ...input, amount: e.target.value })}
        />
        <select
          className="expense-input"
          value={input.quarter || getCurrentQuarter()}
          onChange={e => setInput({ ...input, quarter: e.target.value })}
        >
        
        {/* include dropdown for quarters */}
          <option value="Q1">Q1 (Jan–Mar)</option>
          <option value="Q2">Q2 (Apr–Jun)</option>
          <option value="Q3">Q3 (Jul–Sep)</option>
          <option value="Q4">Q4 (Oct–Dec)</option>
        </select>
        <button className="add-btn" onClick={handleAdd}>+</button>
      </div>

      <div className="entry-list">
        {Object.entries(grouped).map(([quarter, qEntries]) => {
          const deductibleTotal = qEntries
            .filter(e => e.deductible)
            .reduce((sum, e) => sum + e.amount, 0);
          const refund = (deductibleTotal * 0.3).toFixed(2);

          return (
            <div key={quarter}>
              <h3>{quarter} – Estimated Refund: ${refund}</h3>
              {qEntries.map((e, i) => (
                <div key={i} className="entry">
                  <span className="entry-text">{e.description} (${e.amount})</span>
                  <span className="dash"> - </span>
                  <span className={`tag ${e.deductible ? "yes" : "no"}`}>
                    {e.deductible ? "Deductible" : "Not Deductible"}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
