import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Table from "./Table"; // we’ll create this reusable table

// Import table data
import { equityHeaders, equityRows } from "./data/EquityTableData";
import { currencyHeaders, currencyRows } from "./data/CurrencyTableData";
import { commodityHeaders, commodityRows } from "./data/CommodityTableData";

function Brokerage() {
  const [tab, setTab] = useState(0);
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", padding: "5rem 10rem 2rem 10rem" }}>
        <Tabs value={tab} onChange={handleChange} className="border-bottom">
          <Tab
            label="Equity"
            style={{
              fontSize: "1.2rem",
              color: tab === 0 ? "#666" : "#387ed1",
              fontWeight: "600",
            }}
          />
          <Tab
            label="Currency"
            style={{
              fontSize: "1.2rem",
              color: tab === 1 ? "#666" : "#387ed1",
              fontWeight: "600",
            }}
          />
          <Tab
            label="Commodity"
            style={{
              fontSize: "1.2rem",
              color: tab === 2 ? "#666" : "#387ed1",
              fontWeight: "600",
            }}
          />
        </Tabs>
        <Box sx={{ mt: 3 }}>
          {tab === 0 && <Table headers={equityHeaders} rows={equityRows} />}
          {tab === 1 && <Table headers={currencyHeaders} rows={currencyRows} />}
          {tab === 2 && (
            <Table headers={commodityHeaders} rows={commodityRows} />
          )}
        </Box>
      </Box>
      <h5 className="text-center mb-5">
        <a href="#" style={{ textDecoration: "none" }}>
          Calculate your cost upfront
        </a>{" "}
        using our brokerage calculator
      </h5>
    </>
  );
}

export default Brokerage;
