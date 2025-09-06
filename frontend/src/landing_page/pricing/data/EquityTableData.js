export const equityHeaders = [
  "", "Equity Delivery", "Equity Intraday", "F&O - Futures", "F&O - Options"
];

export const equityRows = [
  {
    category: "Brokerage",
    values: [
      "Zero Brokerage",
      "0.03% or Rs. 20/executed order whichever is lower",
      "0.03% or Rs. 20/executed order whichever is lower",
      "Flat Rs. 20 per executed order"
    ]
  },
  {
    category: "STT/CTT",
    values: [
      "0.1% on buy & sell",
      "0.025% on the sell side",
      "0.02% on the sell side",
      <>
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          <li>0.125% of intrinsic value on exercised options</li>
          <li>0.1% on sell side (premium)</li>
        </ul>
      </>
    ]
  },
  {
    category: "Transaction charges",
    values: [
        <>
          <ul style={{margin: 0,paddingLeft: "1rem"}}>
            <li>NSE: 0.00297%</li>
            <li>BSE: 0.00375%</li>
          </ul>
        </>,
        <>
          <ul style={{margin: 0,paddingLeft: "1rem"}}>
            <li>NSE: 0.00297%</li>
            <li>BSE: 0.00375%</li>
          </ul>
        </>,
        <>
          <ul style={{margin: 0,paddingLeft: "1rem"}}>
            <li>NSE: 0.00173%</li>
            <li>BSE: 0</li>
          </ul>
        </>,
        <>
          <ul style={{margin: 0,paddingLeft: "1rem"}}>
            <li>NSE: 0.03503%(on premium)</li>
            <li>BSE: 0.0325%(on premium)</li>
          </ul>
        </>
    ]
  },
  {
    category: "GST",
    values: [
      "18% on (brokerage + SEBI charges + transaction charges)",
      "18% on (brokerage + SEBI charges + transaction charges)",
      "18% on (brokerage + SEBI charges + transaction charges)",
      "18% on (brokerage + SEBI charges + transaction charges)"
    ] 
  },
  {
    category: "SEBI charges",
    values: [
      "₹10 / crore",
      "₹10 / crore",
      "₹10 / crore",
      "₹10 / crore"
    ] 
  },
  {
    category: "Stamp charges",
    values: [
      "0.015% or ₹1500 / crore on buy side",
      "0.003% or ₹300 / crore on buy side",
      "0.002% or ₹200 / crore on buy side",
      "0.003% or ₹300 / crore on buy side"
    ] 
  }
];