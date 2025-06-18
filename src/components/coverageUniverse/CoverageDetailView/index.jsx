import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Button } from "antd";
import TabNavigation from "../../myDocument/global/TabNavigation";
import CustomTable from "../../global/CustomTable";
import CustomButton from "../../global/CustomButton";
import { useNavigate } from "react-router-dom";

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.4419 4.55806C10.686 4.80214 10.686 5.19786 10.4419 5.44194L6.50888 9.375H15.4167C15.7618 9.375 16.0417 9.65482 16.0417 10C16.0417 10.3452 15.7618 10.625 15.4167 10.625H6.50888L10.4419 14.5581C10.686 14.8021 10.686 15.1979 10.4419 15.4419C10.1979 15.686 9.80214 15.686 9.55806 15.4419L4.55806 10.4419C4.31398 10.1979 4.31398 9.80214 4.55806 9.55806L9.55806 4.55806C9.80214 4.31398 10.1979 4.31398 10.4419 4.55806Z"
      fill="#3A3A4A"
    />
  </svg>
);

const GroupIcon = () => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.374 7.23438C16.4202 7.23438 16.4754 7.25465 16.5234 7.30664C16.5728 7.36021 16.6074 7.44195 16.6074 7.53613V11.5928C16.6073 12.9241 15.6203 13.9217 14.499 13.9219H14.498C14.0776 13.9225 13.6653 13.7809 13.3145 13.5166L13.3525 13.3994C13.6763 13.6302 14.068 13.7695 14.499 13.7695C15.6791 13.7693 16.5575 12.7501 16.5576 11.5928V7.38672H13.7051L13.7012 7.23438H16.374Z"
      fill="#747480"
      stroke="#747480"
      stroke-width="1.2"
    />
    <path
      d="M13.0645 7.23438V12.4941C13.0643 14.6968 11.4232 16.4014 9.49609 16.4014C7.74789 16.4013 6.23559 14.9985 5.96973 13.0938H6.02441C6.29111 14.8515 7.7093 16.249 9.49609 16.249C11.4821 16.249 13.0136 14.5228 13.0137 12.4941V7.38672H8.8457V7.23438H13.0645Z"
      fill="#747480"
      stroke="#747480"
      stroke-width="1.2"
    />
    <path
      d="M4.69908 10.2395V7.08454M4.69908 7.08454H3.24027M4.69908 7.08454H6.15789M11.4721 3.02817C11.4721 4.14829 10.6324 5.05633 9.59652 5.05633C8.56064 5.05633 7.7209 4.14829 7.7209 3.02817C7.7209 1.90804 8.56064 1 9.59652 1C10.6324 1 11.4721 1.90804 11.4721 3.02817ZM16.2654 3.81692C16.2654 4.50144 15.7522 5.05635 15.1192 5.05635C14.4861 5.05635 13.9729 4.50144 13.9729 3.81692C13.9729 3.13239 14.4861 2.57748 15.1192 2.57748C15.7522 2.57748 16.2654 3.13239 16.2654 3.81692ZM1.57305 4.83102H7.8251C8.05529 4.83102 8.2419 5.0328 8.2419 5.28172V12.0423C8.2419 12.2912 8.05529 12.493 7.8251 12.493H1.57305C1.34286 12.493 1.15625 12.2912 1.15625 12.0423V5.28172C1.15625 5.0328 1.34286 4.83102 1.57305 4.83102Z"
      stroke="#747480"
      stroke-width="1.2"
      stroke-linecap="round"
    />
  </svg>
);

const Phone = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.70651 0.833985L5.20712 0.833984C5.41537 0.833984 5.60181 0.963057 5.67512 1.15797L6.64541 3.73791C6.67753 3.8233 6.68567 3.91586 6.66895 4.00555L6.18276 6.61352C6.78033 8.01888 7.76739 8.96325 9.40452 9.8104L11.9811 9.31112C12.0726 9.29339 12.1672 9.30158 12.2543 9.33476L14.8422 10.3209C15.036 10.3948 15.1641 10.5807 15.1641 10.7881L15.1641 13.1776C15.1641 14.2613 14.2093 15.1407 13.0925 14.8977C11.0567 14.4547 7.28522 13.3289 4.64389 10.6875C2.1138 8.15745 1.2661 4.66233 0.980747 2.77311C0.817924 1.69513 1.68246 0.833985 2.70651 0.833985ZM4.86098 1.83398L2.70651 1.83398C2.22716 1.83398 1.90782 2.2152 1.96953 2.62376C2.24471 4.44563 3.04979 7.67923 5.351 9.98043C7.78327 12.4127 11.3191 13.4884 13.3051 13.9206C13.7413 14.0155 14.1641 13.6833 14.1641 13.1776L14.1641 11.1327L12.0314 10.32L9.4259 10.8249C9.31749 10.8459 9.20518 10.8304 9.10649 10.7809C7.17699 9.8124 5.92436 8.66423 5.19987 6.85301C5.16468 6.76502 5.15521 6.66884 5.17258 6.57568L5.66032 3.95939L4.86098 1.83398Z"
      fill="#747480"
    />
  </svg>
);

const TAB_ITEMS = [
  {
    key: "company-info",
    label: "Company Information",
  },
  {
    key: "leadership",
    label: "Leadership",
  },
  {
    key: "coverage-metrics",
    label: "Coverage Metrics",
  },
  {
    key: "transaction-history",
    label: "Transaction History",
  },
];

const article = {
  imageUrl: "/Swiggy.png",
  description:
    "Swiggy Limited is a leading player in the quick commerce sector, headquartered in Bengaluru, Karnataka, India, and currently operates in over 580 cities across the country. The company is listed on the National Stock Exchange (NSE) under the ticker SWIGGY.NS, having gone public in November 2024. As of the latest available data, Swiggy has a market capitalization of ₹73,318 crore (approximately $8.66 billion USD). The company reported revenues of ₹15,227 crore ($1.79 billion USD) and a net loss of ₹2,403.9 crore ($300 million USD).",
};

const leadershipColumns = [
  { title: "Sr. No.", dataIndex: "srNo", key: "srNo" },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <span style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {text}
        <GroupIcon />
      </span>
    ),
  },
  { title: "Designation", dataIndex: "designation", key: "designation" },
];

const leadershipData = [
  {
    srNo: 1,
    name: "Sriharsha Majety",
    designation: "Managing Director and Group CEO",
  },
  {
    srNo: 2,
    name: "Lakshmi Nandan Reddy Obula",
    designation: "Whole-time Director, Head of Innovation",
  },
  { srNo: 3, name: "Rohit Kapoor", designation: "CEO, Food Marketplace" },
  {
    srNo: 4,
    name: "Phani Kishan Addepalli",
    designation: "Chief Growth Officer",
  },
  { srNo: 5, name: "Amitesh Jha", designation: "CEO, Instamart" },
  { srNo: 6, name: "Rahul Bothra", designation: "Chief Financial Officer" },
  {
    srNo: 7,
    name: "Girish Menon",
    designation: "Chief Human Resources Officer",
  },
  {
    srNo: 8,
    name: "Madhusudhan Rao Subbarao",
    designation: "Chief Technology Officer",
  },
];

const boardColumns = [
  { title: "Sr. No.", dataIndex: "srNo", key: "srNo" },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <span style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {text}
        <GroupIcon />
      </span>
    ),
  },
  { title: "Designation", dataIndex: "designation", key: "designation" },
];

const boardData = [
  { srNo: 1, name: "Anand Kripalu", designation: "Chairman" },
  { srNo: 2, name: "Shailesh Haribhakti", designation: "Independent Director" },
  { srNo: 3, name: "Suparna Mitra", designation: "Independent Director" },
  {
    srNo: 4,
    name: "Roger Clarks Rabalai",
    designation: "Non-Executive Director",
  },
  { srNo: 5, name: "Ashutosh Sharma", designation: "Non-Executive Director" },
  { srNo: 6, name: "Sumer Juneja", designation: "Non-Executive Director" },
  { srNo: 7, name: "Anand Daniel", designation: "Non-Executive Director" },
  { srNo: 8, name: "Pooja Kapoor", designation: "Chief Technology Officer" },
];

const coverageColumns = [
  { title: "Sr. No.", dataIndex: "srNo", key: "srNo" },
  {
    title: "Client Lead",
    dataIndex: "clientLead",
    key: "clientLead",
    render: (text) => (
      <span style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {text}
        <Phone />
      </span>
    ),
  },
  { title: "Designation", dataIndex: "designation", key: "designation" },
  { title: "Department", dataIndex: "department", key: "department" },
  {
    title: "Avendus Relationship",
    dataIndex: "relationship",
    key: "relationship",
  },
  { title: "Avendus Lead", dataIndex: "avendusLead", key: "avendusLead" },
  { title: "Coverage Level", dataIndex: "coverageLevel", key: "coverageLevel" },
  {
    title: "Last Interaction Date",
    dataIndex: "lastInteraction",
    key: "lastInteraction",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <CustomButton text={"View Details"} onClick={()=>{}}/>
    ),
  },
];

const coverageData = [
  {
    srNo: 1,
    clientLead: "Rahul Bothra",
    designation: "CFO",
    department: "-",
    relationship: "Yes",
    avendusLead: "A. Mehta",
    coverageLevel: "-",
    lastInteraction: "15 Mar 2025",
  },
  {
    srNo: 2,
    clientLead: "Aadit Palicha",
    designation: "Co-founder",
    department: "-",
    relationship: "Yes",
    avendusLead: "R. Singh",
    coverageLevel: "-",
    lastInteraction: "20 Feb 2025",
  },
  {
    srNo: 3,
    clientLead: "Akshant Goyal",
    designation: "CFO",
    department: "-",
    relationship: "No",
    avendusLead: "-",
    coverageLevel: "-",
    lastInteraction: "-",
  },
];

const transactionColumns = [
  { title: "Deal Status", dataIndex: "dealStatus", key: "dealStatus" },
  { title: "Deal Type", dataIndex: "dealType", key: "dealType" },
  { title: "Deal Value", dataIndex: "dealValue", key: "dealValue" },
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Coverage Priority", dataIndex: "priority", key: "priority" },
  { title: "Notes", dataIndex: "notes", key: "notes" },
];

const transactionData = [
  {
    dealStatus: "Potential",
    dealType: "IPO",
    dealValue: "$200M",
    date: "20 March 2025",
    priority: "Tier 1",
    notes: "Exploring IPO plans",
  },
  {
    dealStatus: "Potential",
    dealType: "M&A / Fundraise",
    dealValue: "$500M",
    date: "05 Feb 2025",
    priority: "Tier 2",
    notes: "Raised Series E",
  },
  {
    dealStatus: "Live",
    dealType: "M&A",
    dealValue: "$500M",
    date: "15 Jan 2025",
    priority: "Tier 1",
    notes: "Evaluating tuck-in acquisitions",
  },
];

const CoverageDetailView = () => {
  const [tab, setTab] = useState(TAB_ITEMS[0]?.key);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/coverage-universe");
  };

  return (
    <div className={styles.detail_page}>
      <div className={styles.content}>
        <Button
          type="text"
          icon={<LeftArrow className={styles.left_arrow} />}
          onClick={handleBack}
          className={styles.backButton}
        />
        <span className={styles.title}>Swiggy</span>

        <div className={styles.tab_navigator}>
          <TabNavigation TAB_ITEMS={TAB_ITEMS} onTabChange={setTab} />
        </div>

        {tab === TAB_ITEMS[0].key && (
          <>
            <div
              className={styles.article_image}
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            />
            <p className={styles.article_description}>{article.description}</p>
          </>
        )}

        {tab === "leadership" && (
          <div className={styles.leadership_container}>
            <div style={{ width: "630px" }}>
              <CustomTable
                title="Leadership Team"
                tableObj={{
                  columns: leadershipColumns,
                  dataSource: leadershipData,
                }}
              />
            </div>
            <div style={{ width: "630px" }}>
              <CustomTable
                title="Board of Directors"
                tableObj={{ columns: boardColumns, dataSource: boardData }}
              />
            </div>
          </div>
        )}

        {tab === "coverage-metrics" && (
          <div className={styles.metrics_container}>
            <CustomTable
              title="Coverage Metrics"
              subtitle="Descriptive text that describes about this table"
              tableObj={{ columns: coverageColumns, dataSource: coverageData }}
            />
          </div>
        )}

        {tab === "transaction-history" && (
          <div className={styles.history_container}>
            <CustomTable
              title="Transactions"
              subtitle="Descriptive text that describes about this table"
              tableObj={{
                columns: transactionColumns,
                dataSource: transactionData,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverageDetailView;
