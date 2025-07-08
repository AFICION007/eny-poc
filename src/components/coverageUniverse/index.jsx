import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker, Dropdown } from "antd";

import CustomTable from "../global/CustomTable";
import CustomButton from "../global/CustomButton";
import DeleteButton from "../global/DeleteButton";

import styles from "./styles.module.css";

const { RangePicker } = DatePicker;
const DropdownArrow = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z"
      fill="#656579"
    />
  </svg>
);

const table1Data = [
  [
    "TechNova Pvt Ltd",
    "Technology / SaaS",
    "Bengaluru, India",
    "Rs.150 million",
    "25%",
    "Cloud-based software",
    "Rahul Mehta",
    "10-Apr",
  ],
  [
    "InfoTech Pvt Ltd",
    "Technology / SaaS",
    "Mumbai, India",
    "Rs. 300 million",
    "15%",
    "Cloud-based software",
    "Anjali Sharma",
    "15-May",
  ],
  [
    "Frontend Developer",
    "Healthcare",
    "New York, USA",
    "Rs. 1.2 billion",
    "20%",
    "Diagnostic devices",
    "Vikram Singh",
    "20-May",
  ],
  [
    "AgroTech Solutions",
    "Agriculture / IoT",
    "Amsterdam, NL",
    "Rs. 80 million",
    "30%",
    "Precision farming tools",
    "Neha Desai",
    "25-May",
  ],
  [
    "FinEdge Capital",
    "Financial Services",
    "London, UK",
    "Rs. 450 million",
    "20%",
    "Digital lending platform",
    "Ramesh Patel",
    "30-Mar",
  ],
  [
    "Info Solutions Pvt Ltd",
    "Technology / SaaS",
    "San Francisco, USA",
    "Rs. $2 billion",
    "8%",
    "Cloud-based software",
    "Pooja Kapoor",
    "28-Apr",
  ],
];

const table1Columns = [
  { dataIndex: "companyName", title: "Company Name" },
  { dataIndex: "sector", title: "Sector" },
  { dataIndex: "headquarters", title: "Headquarters" },
  { dataIndex: "valuation", title: "Valuation" },
  { dataIndex: "ownership", title: "Ownership" },
  { dataIndex: "focus", title: "Key Focus Area" },
  { dataIndex: "lead", title: "Friday Lead" },
  { dataIndex: "lastInteraction", title: "Last Interaction" },
  { dataIndex: "action", title: "Action" },
];

const table2Data = [
  [
    "IndiaMART",
    "B2B Marketplace / Tech",
    "Noida",
    "~$2.5B",
    "Public",
    "SME-focused product marketplace",
    "Rahul Mehta",
    "10-Jan-2025",
  ],
  [
    "Moglix",
    "Industrial B2B / Tech",
    "Gurugram",
    "~$2.6B",
    "PE-Backed",
    "ProdMRO & capex procurement",
    "Anjali Sharma",
    "25-Jan-2025",
  ],
  [
    "Udaan",
    "Digital Trade / B2B",
    "Bengaluru",
    "~$1.5–2B",
    "PE-Backed",
    "Wholesale trade (FMCG, pharma, apparel)",
    "Vikram Singh",
    "10-Feb-2025",
  ],
  [
    "OfBusiness",
    "B2B Commerce + Lending",
    "Gurugram",
    "~$5B",
    "PE-Backed",
    "Raw materials + supply chain finance",
    "Vikram Singh",
    "15-Feb-2025",
  ],
  [
    "Zepto",
    "Quick Commerce / Consumer Tech",
    "Mumbai",
    "$3.6B",
    "PE-Backed",
    "10-min grocery delivery",
    "Anjali Sharma",
    "25-Feb-2025",
  ],
  [
    "Swiggy",
    "Food Delivery & Instamart",
    "Bengaluru",
    "~$10.7B",
    "PE-Backed",
    "Food delivery, grocery",
    "Vikram Singh",
    "10-Mar-2025",
  ],
  [
    "Zomato",
    "Food Tech / Delivery / B2B",
    "New Delhi",
    "~$18–20B (Listed)",
    "Public",
    "Food delivery, Hyperpure (B2B supply)",
    "Pooja Kapoor",
    "10-Apr-2025",
  ],
  [
    "TradeIndia",
    "B2B Marketplace",
    "New Delhi",
    "Private",
    "Family-Owned",
    "SME listings & connections",
    "Pooja Kapoor",
    "10-May-2025",
  ],
  [
    "Amazon Business India",
    "B2B E-Commerce",
    "Bengaluru",
    "Amazon: $1.8T (Global)",
    "Public (Parent)",
    "B2B vertical for SME procurement",
    "Pooja Kapoor",
    "15-May-2025",
  ],
];

const table2Columns = [
  { dataIndex: "companyName", title: "Company Name" },
  { dataIndex: "sector", title: "Sector / Sub-Sector" },
  { dataIndex: "headquarters", title: "Headquarters" },
  { dataIndex: "valuation", title: "Valuation" },
  { dataIndex: "ownership", title: "Ownership" },
  { dataIndex: "focus", title: "Key Focus Area" },
  { dataIndex: "lead", title: "Friday Lead" },
  { dataIndex: "lastInteraction", title: "Last Interaction" },
  { dataIndex: "action", title: "Action" },
];

const transformRows = (rows, columns, { onEdit, onDelete, onRowClick } = {}) =>
  rows.map((row, i) => {
    const obj = { id: i };
    columns.forEach((col, index) => {
      obj[col.dataIndex] = row[index];
    });
    if (columns.some((col) => col.dataIndex === "action")) {
      obj.action = (
        <div style={{ display: "flex", gap: "8px" }}>
          <CustomButton
            text={"Edit"}
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(row);
            }}
          />
          <DeleteButton
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(row);
            }}
          />
        </div>
      );
    }

    obj.onRowClick = () => onRowClick(row);

    return obj;
  });

const CoverageUniversePage = () => {
  const navigate = useNavigate();
  const dateFormat = "YYYY/MM/DD";
  const [selectedTopic, setSelectedTopic] = useState("");
  const [filtered1, setFiltered1] = useState(table1Data);
  const [filtered2, setFiltered2] = useState(table2Data);

  const handleRowClick = (row) => {
    console.log("CLicked on: ", row);
    navigate("detail", { state: { data: row } });
  };

  const topicFilterMenu = <></>;

  useEffect(() => {
    const filter = (data) =>
      data.filter((row) =>
        row.some((val) =>
          val?.toString().toLowerCase().includes(selectedTopic.toLowerCase())
        )
      );

    setFiltered1(filter(table1Data));
    setFiltered2(filter(table2Data));
  }, [selectedTopic]);

  return (
    <div className={styles.coverage_page}>
      <div className={styles.content}>
        <div className={styles.dropdown_wrapper_company}>
          <span className={styles.dropdown_label_company}>Topic</span>
          <Dropdown
            overlay={topicFilterMenu}
            trigger={["click"]}
            placement="bottomLeft"
            className={styles.dropdown}
          >
            <div className={styles.dropdown_button_company}>
              <span className={styles.dropdown_text_company}>
                {selectedTopic || "Select Topic"}
              </span>
              <div className={styles.icon_wrapper}>
                <DropdownArrow className={styles.dropdown_arrow} />
              </div>
            </div>
          </Dropdown>
        </div>
        <RangePicker className={styles.date_picker} format={dateFormat} />
        <div className={styles.results_container}>
          <CustomTable
            title="My Coverage"
            subtitle="Descriptive text that describes about this table"
            tableObj={{
              columns: table1Columns,
              dataSource: transformRows(filtered1, table1Columns, {
                onEdit: (row) => console.log("Edit clicked:", row),
                onDelete: (row) => console.log("Delete clicked:", row),
                onRowClick: handleRowClick,
              }),
            }}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />

          <CustomTable
            title="Team/Sector Coverage"
            subtitle="Descriptive text that describes about this table"
            tableObj={{
              columns: table2Columns,
              dataSource: transformRows(filtered2, table2Columns, {
                onEdit: (row) => console.log("Edit clicked:", row),
                onDelete: (row) => console.log("Delete clicked:", row),
                onRowClick: handleRowClick,
              }),
            }}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CoverageUniversePage;
