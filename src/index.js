import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import SmartForms from "./SmartForms";
import Forms from "./Forms";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <SmartForms patientId={12345} authorId={67890} questionnaire={Forms.FallsRiskAssessment} />
  </StrictMode>
);