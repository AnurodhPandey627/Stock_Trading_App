export const commodityHeaders = ["", "Commodity futures", "Commodity options"];

export const commodityRows = [
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
      "0.01% on sell side (Non-Agri)",
      "0.05% on sell side"
    ]
  },
  {
    category: "Transaction charges",
    values: [
      <>
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          <li>MCX: 0.0021%</li>
          <li>NSE: 0.0001%</li>
        </ul>
      </>,
      <>
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          <li>MCX: 0.0418%</li>
          <li>NSE: 0.001%</li>
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
      <>
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          <li>Agri: ₹1 / crore</li>
          <li>Non-agri: ₹10 / crore</li>
        </ul>
      </>,
      "₹10 / crore"
    ]
  },
  {
    category: "Stamp charges",
    values: [
      "0.002% or ₹200 / crore on buy side",
      "0.003% or ₹300 / crore on buy side"
    ]
  }
];
