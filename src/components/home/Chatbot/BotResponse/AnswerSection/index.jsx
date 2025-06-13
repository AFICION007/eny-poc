import React from "react";

import MarkdownText from "../../Chat/MarkdownText";
import SourceCard from "../global/SourceCard";

import styles from "./styles.module.css";

import {
  internal_sources,
  web_sources,
  deep_web_sources,
  deep_internal_sources,
} from "./sources";

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

const SUBCONTECT = `
### **Comprehensive Comparative Analysis: Swiggy vs. Zomato**

This report provides a detailed comparison of Swiggy and Zomato based on operational efficiency, financial performance, and growth potential. The analysis integrates proprietary insights and publicly available data to offer a holistic view of the two companies.

---

## **1. Financial Performance**

### **Revenue Growth**
| Metric                  | Zomato (FY22-FY24 CAGR) | Swiggy (FY22-FY24 CAGR) |
|-------------------------|-------------------------|-------------------------|
| Revenue Growth          | **39%**                | **17%**                |
| FY24 Revenue (₹ crore)  | **121.1 billion**      | **61 billion**         |

- **Zomato** has consistently outpaced **Swiggy** in revenue growth, driven by its focus on food delivery and cost optimization.
- Swiggy’s slower growth reflects its diversification into adjacencies like quick commerce, which are still in the investment phase.

### **Profitability**
| Metric                  | Zomato (FY24)          | Swiggy (FY24)          |
|-------------------------|-------------------------|-------------------------|
| Adjusted EBITDA Margin  | **0%**                 | **-0.2%**              |
| Net Profit/Loss (₹ crore)| **₹527 crore profit** | **₹3,117 crore loss**  |

- Zomato has achieved profitability in FY24, marking a significant turnaround. Swiggy, while improving, remains unprofitable, particularly due to losses in quick commerce.

### **Gross Margins**
- **Zomato**: Improved gross margins from **55.4% in FY22** to **60.7% in FY23**, showcasing better cost management.
- **Swiggy**: Gross margin data is unavailable, but its higher cost structure suggests lower efficiency compared to Zomato.

---

## **2. Operational Efficiency**

### **Delivery Metrics**
| Metric                  | Zomato                 | Swiggy                 |
|-------------------------|-------------------------|-------------------------|
| Average Delivery Time   | **30-33 minutes**      | **32-35 minutes**      |
| Cost per Delivery (₹)   | **₹60-65**             | **₹65-70**             |
| Order Density           | **4.8-5.2 orders/day** | **4.5-5.0 orders/day** |

- Zomato leads Swiggy in delivery time, cost per delivery, and order density, reflecting superior fleet optimization and resource utilization.

### **Market Share**
| Metric                  | Zomato (FY24)          | Swiggy (FY24)          |
|-------------------------|-------------------------|-------------------------|
| Food Delivery Market Share | **57%**             | **43%**                |
| Quick Commerce Market Share | **58% (Blinkit)**  | **42% (Instamart)**    |

- Zomato has steadily increased its market share in food delivery, while Swiggy has lost ground. In quick commerce, Zomato’s Blinkit leads Swiggy’s Instamart.

---

## **3. Revenue Diversification**

### **Revenue Mix**
| Revenue Source          | Zomato                 | Swiggy                 |
|-------------------------|-------------------------|-------------------------|
| Food Delivery           | **86%**               | **~70%**               |
| Quick Commerce          | **12% (Blinkit)**     | **25% (Instamart)**    |
| Other Services          | **2%**                | **5%**                 |

- **Swiggy** has a more diversified revenue base, including quick commerce, out-of-home consumption, and B2B services. This diversification provides growth opportunities but increases operational complexity.
- **Zomato** remains focused on food delivery, with limited diversification. However, its narrower focus has enabled faster profitability.

---`;

const AnswerSection = ({ response, sources }) => {
  return (
    <div className={styles.answer_section}>
      <div className={styles.answer_sources}>
        {sources.map((source, index) => (
          <SourceCard
            key={source.title}
            type="answer"
            source={{ ...source, count: index + 1 }}
          />
        ))}
      </div>
      <MarkdownText content={response} />
    </div>
  );
};

export default AnswerSection;
