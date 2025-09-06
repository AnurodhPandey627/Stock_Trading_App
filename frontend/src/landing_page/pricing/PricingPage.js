import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import Charge from "./Charge";
import ChargesExplanation from "./ChargesExplanation";
import {
  accountOpeningHeaders,
  accountOpeningRows,
} from "./data/ChargesData/AccountOpening";
import { dematAMCHeaders, dematAMCRows } from "./data/ChargesData/DematAMC";
import {
  optionalVASHeaders,
  optionalVASRows,
} from "./data/ChargesData/OptionalVAS";

function PricingPage() {
  return (
    <>
      <Hero />
      <Brokerage />
      <Charge
        title="Charges for account opening"
        headers={accountOpeningHeaders}
        rows={accountOpeningRows}
        text=""
      />
      <Charge
        title="Demat AMC (Annual Maintenance Charge)"
        headers={dematAMCHeaders}
        rows={dematAMCRows}
        text=""
      />
      <Charge
        title="Charges for optional value added services"
        headers={optionalVASHeaders}
        rows={optionalVASRows}
        text="* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, "
      />
      <ChargesExplanation />
    </>
  );
}

export default PricingPage;
