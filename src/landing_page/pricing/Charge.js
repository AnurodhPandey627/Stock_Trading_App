import React from "react";

function Charge({ title, headers, rows, text }) {
  return (
    <div className="container">
      <div className="row ps-5 pe-5 pt-5 pb-3">
        <h4>{title}</h4>
      </div>
      <div className="ps-5 pe-5 pb-3">
        <table className="w-100 text-sm border">
          <thead>
            <tr style={{ backgroundColor: "#f9f9f9" }}>
              {headers.map((h, indx) => (
                <th
                  key={indx}
                  className="px-3 py-3 border-bottom text-left"
                  style={{ fontWeight: "600", backgroundColor: "white" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, indx) => (
              <tr
                key={indx}
                style={{
                  backgroundColor: indx % 2 === 0 ? "white" : "#f9f9f9",
                }}
              >
                {row.values.map((val, i) => (
                  <td key={i} className="px-4 py-4">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {text !== "" ? (
          <p className="mt-2" style={{ fontSize: "0.8rem" }}>
            {text}
            <a href="#" style={{ textDecoration: "none" }}>
              click here
            </a>
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Charge;
