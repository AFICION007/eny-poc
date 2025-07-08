import React, { useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import {
  FileTextOutlined,
  ArrowRightOutlined,
  DownOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";

const CustomFileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 6C5.25 5.58579 5.58579 5.25 6 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6C18.75 6.41421 18.4142 6.75 18 6.75H6C5.58579 6.75 5.25 6.41421 5.25 6Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 10C5.25 9.58579 5.58579 9.25 6 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H6C5.58579 10.75 5.25 10.4142 5.25 10Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.25 14C12.25 13.5858 12.5858 13.25 13 13.25L18 13.25C18.4142 13.25 18.75 13.5858 18.75 14C18.75 14.4142 18.4142 14.75 18 14.75L13 14.75C12.5858 14.75 12.25 14.4142 12.25 14Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.25 18C12.25 17.5858 12.5858 17.25 13 17.25H18C18.4142 17.25 18.75 17.5858 18.75 18C18.75 18.4142 18.4142 18.75 18 18.75H13C12.5858 18.75 12.25 18.4142 12.25 18Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 2.75V21.25H21.25V2.75H2.75ZM1.25 2.6C1.25 1.85441 1.85442 1.25 2.6 1.25H21.4C22.1456 1.25 22.75 1.85442 22.75 2.6V21.4C22.75 22.1456 22.1456 22.75 21.4 22.75H2.6C1.85441 22.75 1.25 22.1456 1.25 21.4V2.6Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H9C9.41421 13.25 9.75 13.5858 9.75 14V18C9.75 18.4142 9.41421 18.75 9 18.75H6C5.58579 18.75 5.25 18.4142 5.25 18V14ZM6.75 14.75V17.25H8.25V14.75H6.75Z"
      fill="black"
    />
  </svg>
);

const ReportAndPublicationSection = () => {
  const [activeFilter, setActiveFilter] = useState("Friday");
  const [selectedReportType, setSelectedReportType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const avendusReports = [
    {
      id: 1,
      name: "Q1 2025 Results.pdf",
      year: "2025",
      type: "Quarterly Result Updates",
    },
    {
      id: 2,
      name: "Annual Report 2025.pdf",
      year: "2025",
      type: "Annual Updates",
    },
    { id: 3, name: "Market Outlook 2025.pdf", year: "2025", type: "Other" },
    {
      id: 4,
      name: "Q4 2024 Results.pdf",
      year: "2024",
      type: "Quarterly Result Updates",
    },
    {
      id: 5,
      name: "Q3 2024 Results.pdf",
      year: "2024",
      type: "Quarterly Result Updates",
    },
    {
      id: 6,
      name: "Q2 2024 Results.pdf",
      year: "2024",
      type: "Quarterly Result Updates",
    },
    {
      id: 7,
      name: "Q1 2024 Results.pdf",
      year: "2024",
      type: "Quarterly Result Updates",
    },
    { id: 8, name: "H2 2024 Update.pdf", year: "2024", type: "Half Updates" },
    { id: 9, name: "H1 2024 Update.pdf", year: "2024", type: "Half Updates" },
    {
      id: 10,
      name: "Annual Report 2024.pdf",
      year: "2024",
      type: "Annual Updates",
    },
    {
      id: 11,
      name: "Flash Report Q4 2024.pdf",
      year: "2024",
      type: "Flash Report",
    },
    {
      id: 12,
      name: "Flash Report Q3 2024.pdf",
      year: "2024",
      type: "Flash Report",
    },
    { id: 13, name: "Market Analysis 2024.pdf", year: "2024", type: "Other" },
    {
      id: 14,
      name: "Investment Overview 2024.pdf",
      year: "2024",
      type: "Other",
    },
    {
      id: 15,
      name: "Q4 2023 Results.pdf",
      year: "2023",
      type: "Quarterly Result Updates",
    },
    {
      id: 16,
      name: "Q3 2023 Results.pdf",
      year: "2023",
      type: "Quarterly Result Updates",
    },
    { id: 17, name: "H2 2023 Update.pdf", year: "2023", type: "Half Updates" },
    { id: 18, name: "H1 2023 Update.pdf", year: "2023", type: "Half Updates" },
    {
      id: 19,
      name: "Annual Report 2023.pdf",
      year: "2023",
      type: "Annual Updates",
    },
    {
      id: 20,
      name: "Flash Report Q4 2023.pdf",
      year: "2023",
      type: "Flash Report",
    },
    { id: 21, name: "Strategic Review 2023.pdf", year: "2023", type: "Other" },
    {
      id: 22,
      name: "Q4 2022 Results.pdf",
      year: "2022",
      type: "Quarterly Result Updates",
    },
    { id: 23, name: "H2 2022 Update.pdf", year: "2022", type: "Half Updates" },
    {
      id: 24,
      name: "Annual Report 2022.pdf",
      year: "2022",
      type: "Annual Updates",
    },
    {
      id: 25,
      name: "Flash Report Q4 2022.pdf",
      year: "2022",
      type: "Flash Report",
    },
    { id: 26, name: "Business Review 2022.pdf", year: "2022", type: "Other" },
  ];

  const analystReports = [
    {
      id: 1,
      name: "Q1 2025 Analyst Results.pdf",
      year: "2025",
      type: "Quarterly Result Updates",
    },
    {
      id: 2,
      name: "Annual Analyst Report 2025.pdf",
      year: "2025",
      type: "Annual Updates",
    },
    {
      id: 3,
      name: "Q4 2024 Analyst Results.pdf",
      year: "2024",
      type: "Quarterly Result Updates",
    },
    {
      id: 4,
      name: "Q3 2024 Analyst Results.pdf",
      year: "2024",
      type: "Quarterly Result Updates",
    },
    {
      id: 5,
      name: "Q2 2024 Analyst Results.pdf",
      year: "2024",
      type: "Quarterly Result Updates",
    },
    {
      id: 6,
      name: "H2 2024 Analyst Update.pdf",
      year: "2024",
      type: "Half Updates",
    },
    {
      id: 7,
      name: "H1 2024 Analyst Update.pdf",
      year: "2024",
      type: "Half Updates",
    },
    {
      id: 8,
      name: "Annual Analyst Report 2024.pdf",
      year: "2024",
      type: "Annual Updates",
    },
    {
      id: 9,
      name: "Flash Analyst Report Q4 2024.pdf",
      year: "2024",
      type: "Flash Report",
    },
    {
      id: 10,
      name: "Flash Analyst Report Q3 2024.pdf",
      year: "2024",
      type: "Flash Report",
    },
    {
      id: 11,
      name: "Q4 2023 Analyst Results.pdf",
      year: "2023",
      type: "Quarterly Result Updates",
    },
    {
      id: 12,
      name: "H2 2023 Analyst Update.pdf",
      year: "2023",
      type: "Half Updates",
    },
    {
      id: 13,
      name: "Annual Analyst Report 2023.pdf",
      year: "2023",
      type: "Annual Updates",
    },
    {
      id: 14,
      name: "Flash Analyst Report Q4 2023.pdf",
      year: "2023",
      type: "Flash Report",
    },
    {
      id: 15,
      name: "Q4 2022 Analyst Results.pdf",
      year: "2022",
      type: "Quarterly Result Updates",
    },
    {
      id: 16,
      name: "Annual Analyst Report 2022.pdf",
      year: "2022",
      type: "Annual Updates",
    },
    {
      id: 17,
      name: "Flash Analyst Report Q4 2022.pdf",
      year: "2022",
      type: "Flash Report",
    },
  ];

  const avendusReportTypes = [
    "Quarterly Result Updates",
    "Half Updates",
    "Annual Updates",
    "Flash Report",
    "Other",
  ];
  const analystReportTypes = [
    "Quarterly Result Updates",
    "Half Updates",
    "Annual Updates",
    "Flash Report",
  ];
  const availableYears = ["2025", "2024", "2023", "2022"];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setSelectedReportType(null);
    setSelectedYear(null);
  };

  const handleReportTypeChange = (value) => {
    if (value === selectedReportType) {
      setSelectedReportType(null);
    } else {
      setSelectedReportType(value);
    }
    setSelectedYear(null);
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const getFilteredReports = () => {
    let reports = activeFilter === "Friday" ? avendusReports : analystReports;
    if (selectedReportType) {
      reports = reports.filter((report) => report.type === selectedReportType);
    }
    if (selectedYear) {
      reports = reports.filter((report) => report.year === selectedYear);
    }
    return reports;
  };

  const getCurrentReportTypes = () => {
    return activeFilter === "Friday" ? avendusReportTypes : analystReportTypes;
  };

  const handleDownload = (reportName) => {
    alert(`Downloading ${reportName}`);
  };

  const reportTypeMenu = (
    <Menu onClick={({ key }) => handleReportTypeChange(key)}>
      {getCurrentReportTypes().map((option) => (
        <Menu.Item key={option}>{option}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reports and Publications</h1>

        <div className={styles.filterSection}>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${
                activeFilter === "Friday" ? styles.active : ""
              }`}
              onClick={() => handleFilterChange("Friday")}
            >
              Friday
            </button>
            <button
              className={`${styles.filterButton} ${
                activeFilter === "Analyst coverage" ? styles.active : ""
              }`}
              onClick={() => handleFilterChange("Analyst coverage")}
            >
              Analyst coverage
            </button>
          </div>

          <div className={styles.reportFilterRowWrapper}>
            <div className={styles.reportFilterRow}>
              <span className={styles.reportsLabel}>Reports</span>
              <Dropdown overlay={reportTypeMenu} trigger={["click"]}>
                <Button className={styles.dropdown}>
                  <span className={styles.dropdown_text}>
                    {selectedReportType || "Quarterly Result Updates"}
                  </span>
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      {selectedReportType && (
        <div className={styles.yearFilter}>
          <div className={styles.yearButtons}>
            {availableYears.map((year) => (
              <button
                key={year}
                className={`${styles.yearButton} ${
                  selectedYear === year ? styles.active : ""
                }`}
                onClick={() =>
                  handleYearChange(selectedYear === year ? null : year)
                }
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className={
          !selectedReportType
            ? styles.reportsScrollWrapper
            : styles.reportsScrollWrapper_selected_report
        }
      >
        <div className={styles.reportsList}>
          {getFilteredReports().map((report) => (
            <div key={report.id} className={styles.reportItem}>
              <div className={styles.reportContent}>
                <CustomFileIcon className={styles.reportIcon} />
                <span className={styles.reportName}>{report.name}</span>
              </div>
              <button
                className={styles.downloadButton}
                onClick={() => handleDownload(report.name)}
                title="Download report"
              >
                <ArrowRightOutlined />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportAndPublicationSection;
