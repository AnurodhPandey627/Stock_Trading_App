export const currencyHeaders = ["", "Currency futures", "Currency options"];

export const currencyRows = [
  {
    category: "Brokerage",
    values: [
      "0.03% or ₹ 20/executed order whichever is lower",
      "₹ 20/executed order"
    ]
  },
  {
    category: "STT/CTT",
    values: [
      "No STT",
      "No STT"
    ]
  },
  {
    category: "Transaction charges",
    values: [
      <>
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          <li>NSE: 0.00035%</li>
          <li>BSE: 0.00045%</li>
        </ul>
      </>,
      <>
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          <li>NSE: 0.0311%</li>
          <li>BSE: 0.001%</li>
        </ul>
      </>
    ]
  },
  {
    category: "GST",
    values: [
      "18% on (brokerage + SEBI charges + transaction charges)",
      "18% on (brokerage + SEBI charges + transaction charges)"
    ]
  },
  {
    category: "SEBI charges",
    values: [
      "₹10 / crore",
      "₹10 / crore"
    ]
  },
  {
    category: "Stamp charges",
    values: [
      "0.0001% or ₹10 / crore on buy side",
      "0.0001% or ₹10 / crore on buy side"
    ]
  }
];
