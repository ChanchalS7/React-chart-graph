import React, { useState } from "react";
import Plot from "react-plotly.js";
import "./App.css"; // Import the CSS file for styling

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "Item 1", value: 10 },
    { id: 2, name: "Item 2", value: 20 },
    { id: 3, name: "Item 3", value: 30 },
    { id: 4, name: "Item 4", value: 40 },
    { id: 5, name: "Item 5", value: 50 },
    // Add more data as needed
  ]);

  const [checkedRows, setCheckedRows] = useState([1, 2, 3, 4, 5]);

  const handleCheckboxChange = (id) => {
    const updatedCheckedRows = checkedRows.includes(id)
      ? checkedRows.filter((rowId) => rowId !== id)
      : [...checkedRows, id];

    setCheckedRows(updatedCheckedRows);
  };

  const chartData = checkedRows.map((id) => ({
    x: [data[id - 1].name],
    y: [data[id - 1].value],
    type: "bar",
    name: `Item ${id}`,
  }));

  return (
    <div className="container">
      <h2>Data Table</h2>
      <table>

        <thead>
          <tr>
            <th>Checkbox</th>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedRows.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chart-container">
        <h2>Bar Char-visualization</h2>
        <Plot data={chartData} />
      </div>
    </div>
  );
};

export default App;
