import React, { useState, useEffect } from "react";
import { Input, Dropdown, Select, DatePicker } from "antd";
import { DownOutlined } from "@ant-design/icons";

import VerticalFilter from "../global/VerticalDropdown";
import SectorFilter from "../global/SectorDropdown";
import CustomTable from "../global/CustomTable"; // ✅ Replacing ResponsiveTable
import styles from "./styles.module.css";
import CustomSearchIcon from "../myDirectory/icons/search-icon";
import EditButton from "../global/EditButton";
import DeleteButton from "../global/DeleteButton";

// Table 1 Dummy Data
const table1Data = [
  ["TechNova Pvt Ltd", "Technology / SaaS", "Bengaluru, India", "Rs.150 million", "25%", "Cloud-based software", "Rahul Mehta", "10-Apr"],
  ["InfoTech Pvt Ltd", "Technology / SaaS", "Mumbai, India", "Rs. 300 million", "15%", "Cloud-based software", "Anjali Sharma", "15-May"],
  ["Frontend Developer", "Healthcare", "New York, USA", "Rs. 1.2 billion", "20%", "Diagnostic devices", "Vikram Singh", "20-May"],
  ["AgroTech Solutions", "Agriculture / IoT", "Amsterdam, NL", "Rs. 80 million", "30%", "Precision farming tools", "Neha Desai", "25-May"],
  ["FinEdge Capital", "Financial Services", "London, UK", "Rs. 450 million", "20%", "Digital lending platform", "Ramesh Patel", "30-Mar"],
  ["Info Solutions Pvt Ltd", "Technology / SaaS", "San Francisco, USA", "Rs. $2 billion", "8%", "Cloud-based software", "Pooja Kapoor", "28-Apr"]
];

const table1Columns = [
  { dataIndex: "companyName", title: "Company Name" },
  { dataIndex: "sector", title: "Sector" },
  { dataIndex: "headquarters", title: "Headquarters" },
  { dataIndex: "valuation", title: "Valuation" },
  { dataIndex: "ownership", title: "Ownership" },
  { dataIndex: "focus", title: "Key Focus Area" },
  { dataIndex: "lead", title: "Avendus Lead" },
  { dataIndex: "lastInteraction", title: "Last Interaction" },
  { dataIndex: "action", title: "Action" }
];

// Table 2 Dummy Data (Team/Sector Coverage)
const table2Data = [
  ["IndiaMART", "B2B Marketplace / Tech", "Noida", "~$2.5B", "Public", "SME-focused product marketplace", "Rahul Mehta", "10-Jan-2025"],
  ["Moglix", "Industrial B2B / Tech", "Gurugram", "~$2.6B", "PE-Backed", "ProdMRO & capex procurement", "Anjali Sharma", "25-Jan-2025"],
  ["Udaan", "Digital Trade / B2B", "Bengaluru", "~$1.5–2B", "PE-Backed", "Wholesale trade (FMCG, pharma, apparel)", "Vikram Singh", "10-Feb-2025"],
  ["OfBusiness", "B2B Commerce + Lending", "Gurugram", "~$5B", "PE-Backed", "Raw materials + supply chain finance", "Vikram Singh", "15-Feb-2025"],
  ["Zepto", "Quick Commerce / Consumer Tech", "Mumbai", "$3.6B", "PE-Backed", "10-min grocery delivery", "Anjali Sharma", "25-Feb-2025"],
  ["Swiggy", "Food Delivery & Instamart", "Bengaluru", "~$10.7B", "PE-Backed", "Food delivery, grocery", "Vikram Singh", "10-Mar-2025"],
  ["Zomato", "Food Tech / Delivery / B2B", "New Delhi", "~$18–20B (Listed)", "Public", "Food delivery, Hyperpure (B2B supply)", "Pooja Kapoor", "10-Apr-2025"],
  ["TradeIndia", "B2B Marketplace", "New Delhi", "Private", "Family-Owned", "SME listings & connections", "Pooja Kapoor", "10-May-2025"],
  ["Amazon Business India", "B2B E-Commerce", "Bengaluru", "Amazon: $1.8T (Global)", "Public (Parent)", "B2B vertical for SME procurement", "Pooja Kapoor", "15-May-2025"]
];

const table2Columns = [
  { dataIndex: "companyName", title: "Company Name" },
  { dataIndex: "sector", title: "Sector / Sub-Sector" },
  { dataIndex: "headquarters", title: "Headquarters" },
  { dataIndex: "valuation", title: "Valuation" },
  { dataIndex: "ownership", title: "Ownership" },
  { dataIndex: "focus", title: "Key Focus Area" },
  { dataIndex: "lead", title: "Avendus Lead" },
  { dataIndex: "lastInteraction", title: "Last Interaction" },
  { dataIndex: "action", title: "Action" }
];

const transformRows = (rows, columns, { onEdit, onDelete } = {}) =>
  rows.map((row, i) => {
    const obj = { id: i };
    columns.forEach((col, index) => {
      obj[col.dataIndex] = row[index];
    });
    if (columns.some((col) => col.dataIndex === "action")) {
      obj.action = (
        <div style={{ display: "flex", gap: "8px" }}>
          <EditButton onClick={() => onEdit?.(row)} />
          <DeleteButton onClick={() => onDelete?.(row)} />
        </div>
      );
    }
    return obj;
  });

const CoverageUniverse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVertical, setSelectedVertical] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [filtered1, setFiltered1] = useState(table1Data);
  const [filtered2, setFiltered2] = useState(table2Data);

  useEffect(() => {
    const filter = (data) =>
      data.filter((row) =>
        row.some((val) =>
          val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    setFiltered1(filter(table1Data));
    setFiltered2(filter(table2Data));
  }, [searchTerm]);

  const verticalFilterMenu = (
    <VerticalFilter
      onSelectionChange={(selected) =>
        setSelectedVertical(selected.length > 0 ? selected.join(", ") : "")
      }
    />
  );

  const sectorFilterMenu = (
    <SectorFilter
      onSelectionChange={(selected) =>
        setSelectedSector(selected.length > 0 ? selected.join(", ") : "")
      }
    />
  );

  return (
    <div className={styles.coverage_page}>
      <div className={styles.top}>
        <div className={styles.header}>
          <h1 className={styles.title}>COVERAGE UNIVERSE</h1>
        </div>

        <div className={styles.filters_container}>
          <div className={styles.search_container}>
            <Input
              placeholder="Search Companies"
              allowClear
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.search_input}
              suffix={<CustomSearchIcon />}
            />
          </div>

          <div className={styles.dropdowns_container}>
            <div className={styles.dropdown_wrapper}>
              <span className={styles.dropdown_label}>Vertical</span>
              <Dropdown overlay={verticalFilterMenu} trigger={["click"]}>
                <div className={styles.dropdown_button}>
                  <span className={styles.dropdown_text}>
                    {selectedVertical || "Digital, Technology and Consumer"}
                  </span>
                  <DownOutlined className={styles.dropdown_arrow} />
                </div>
              </Dropdown>
            </div>

            <div className={styles.dropdown_wrapper}>
              <span className={styles.dropdown_label}>Sector</span>
              <Dropdown overlay={sectorFilterMenu} trigger={["click"]}>
                <div className={styles.dropdown_button}>
                  <span className={styles.dropdown_text}>
                    {selectedSector || "B2B E-Commerce"}
                  </span>
                  <DownOutlined className={styles.dropdown_arrow} />
                </div>
              </Dropdown>
            </div>
          </div>

          <div className={styles.dropdowns_container_bottom}>
            <div className={styles.dropdown_wrapper}>
              <span className={styles.dropdown_label}>Topic</span>
              <div className={styles.select_wrapper}>
                <Select
                  placeholder="Select Topic"
                  style={{ width: "100%" }}
                  className={styles.select_input}
                />
              </div>
            </div>

            <div className={styles.dropdown_wrapper}>
              <span className={styles.dropdown_label}>Date Range</span>
              <div className={styles.datepicker_wrapper}>
                <DatePicker.RangePicker
                  format="DD-MM-YYYY"
                  style={{ width: "100%" }}
                  className={styles.datepicker_input}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section (Tables) */}
      <div className={styles.results_container}>
        <CustomTable
          title="My Coverage"
          subtitle="Descriptive text that describes about this table"
          tableObj={{
            columns: table1Columns,
            dataSource: transformRows(filtered1, table1Columns, {
              onEdit: (row) => console.log("Edit clicked:", row),
              onDelete: (row) => console.log("Delete clicked:", row),
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
            }),
          }}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default CoverageUniverse;
