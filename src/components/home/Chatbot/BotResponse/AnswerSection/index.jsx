import React from "react";

import MarkdownText from "../../Chat/MarkdownText";

import styles from "./styles.module.css";

const CONTENT = `
As an Alternative Investment Fund (AIF) in India seeking to invest overseas, you must comply with several regulations and obtain approvals from different regulatory bodies, primarily the Securities and Exchange Board of India (SEBI) and the Reserve Bank of India (RBI). Here’s a structured breakdown of the key compliances and approvals required:

✅ 1. SEBI Compliance
a. SEBI Approval for Overseas Investment
AIFs are allowed to invest overseas within an overall limit set by SEBI (USD 1,500 million as of recent circulars).
You must apply to SEBI for approval to invest in foreign securities. This is not automatic.
b. Eligibility Criteria for Overseas Investment (SEBI guidelines)
Invest in offshore venture capital undertakings (OVCUs) or foreign securities listed on recognized exchanges or that are backed by Indian promoters.
The foreign entity should have an Indian connection, or the investment should benefit the Indian economy.
c. Disclosures
Disclose foreign investments in your placement memorandum.
Any material changes must be reported to SEBI.

✅ 2. RBI Compliance (FEMA Regulations)
a. Overseas Direct Investment (ODI)
AIFs making direct investments in foreign unlisted equity shares (or similar instruments) need to comply with Foreign Exchange Management (Overseas Investment) Rules and Regulations, 2022.
You must register and file Form FC (Form ODI - Part I & II) via RBI’s new OIDB portal.
b. LRS or ODI Route
The investment route will depend on the structure:
Category I AIFs may be allowed through the ODI route.
If not eligible under ODI, investments may be considered under the Liberalized Remittance Scheme (LRS) for resident individuals, if applicable (though LRS is generally not applicable for AIFs themselves).`;

const AnswerSection = () => {
  return (
    <div className={styles.answer_section}>
      <MarkdownText content={CONTENT} />
    </div>
  );
};

export default AnswerSection;
