import React, { useState, useMemo } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import styles from "./styles.module.css";
import TabNavigation from "../../../../myDocument/global/TabNavigation";
import ReportCard from "../../CompanyWiseCollateral/ReportCard";

const { RangePicker } = DatePicker;

const TAB_ITEMS = [
  {
    key: "avendus-eye",
    label: "Friday Eye",
  },
  {
    key: "analyst-coverage",
    label: "Analyst Coverage",
  },
];

const REPORTS_AND_PUBLICATIONS = [
  {
    category: "avendus-eye",
    year: 2025,
    title: "Friday Eye FY2025 Edition",
    url: "/publications/avendus-eye/2025.pdf",
  },
  {
    category: "avendus-eye",
    year: 2024,
    title: "Friday Eye FY2024 Edition",
    url: "/publications/avendus-eye/2024.pdf",
  },
  {
    category: "avendus-eye",
    year: 2023,
    title: "Friday Eye FY2023 Insight",
    url: "/publications/avendus-eye/2023.pdf",
  },
  {
    category: "avendus-eye",
    year: 2022,
    title: "Friday Eye FY2022 Recap",
    url: "/publications/avendus-eye/2022.pdf",
  },
  {
    category: "analyst-coverage",
    year: 2025,
    title: "Analyst Coverage FY2025",
    url: "/publications/analyst-coverage/2025.pdf",
  },
  {
    category: "analyst-coverage",
    year: 2024,
    title: "Analyst Coverage FY2024",
    url: "/publications/analyst-coverage/2024.pdf",
  },
  {
    category: "analyst-coverage",
    year: 2023,
    title: "Analyst Coverage FY2023",
    url: "/publications/analyst-coverage/2023.pdf",
  },
  {
    category: "analyst-coverage",
    year: 2022,
    title: "Analyst Coverage FY2022",
    url: "/publications/analyst-coverage/2022.pdf",
  },
  {
    category: "avendus-eye",
    year: 2023,
    title: "Friday Eye Special Edition 2023",
    url: "/publications/avendus-eye/2023-special.pdf",
  },
  {
    category: "analyst-coverage",
    year: 2022,
    title: "Analyst Insights FY2022",
    url: "/publications/analyst-coverage/2022-insights.pdf",
  },
];

const ReportAndPublicationContentSection = () => {
  const dateFormat = "YYYY/MM/DD";
  const [tab, setTab] = useState(TAB_ITEMS[0].key);
  const [dateRange, setDateRange] = useState([]);

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const filteredReports = useMemo(() => {
    // Always filter by selected tab
    const filteredByTab = REPORTS_AND_PUBLICATIONS.filter(
      (report) => report.category === tab
    );

    // If no valid date range is selected, return only tab-filtered reports
    if (!dateRange?.[0] || !dateRange?.[1]) {
      return filteredByTab;
    }

    // Extract start and end year from date range
    const startYear = dayjs(dateRange[0]).year();
    const endYear = dayjs(dateRange[1]).year();

    // Further filter by year range
    return filteredByTab.filter(
      (report) => report.year >= startYear && report.year <= endYear
    );
  }, [tab, dateRange]);

  return (
    <div className={styles.page}>
      <div className={styles.tab_navigator}>
        <TabNavigation TAB_ITEMS={TAB_ITEMS} onTabChange={setTab} />
      </div>

      <RangePicker
        className={styles.date_picker}
        format={dateFormat}
        onChange={handleDateChange}
        value={dateRange}
      />

      <div className={styles.report_section}>
        <div className={styles.report_grid}>
          {filteredReports.map((report) => (
            <div
              key={`${report.category}-${report.year}`}
              className={styles.report_card_wrapper}
            >
              <ReportCard report={report} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportAndPublicationContentSection;
