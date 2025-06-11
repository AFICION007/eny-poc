
import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { FileTextOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const { Option } = Select;

const ReportAndPublicationSection = () => {
  const [activeFilter, setActiveFilter] = useState('Avendus');
  const [selectedReportType, setSelectedReportType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Expanded dummy data for reports with multiple years
  const avendusReports = [
    // 2025 reports
    { id: 1, name: 'Q1 2025 Results.pdf', year: '2025', type: 'Quarterly Result Updates' },
    { id: 2, name: 'Annual Report 2025.pdf', year: '2025', type: 'Annual Updates' },
    { id: 3, name: 'Market Outlook 2025.pdf', year: '2025', type: 'Other' },
    
    // 2024 reports
    { id: 4, name: 'Q4 2024 Results.pdf', year: '2024', type: 'Quarterly Result Updates' },
    { id: 5, name: 'Q3 2024 Results.pdf', year: '2024', type: 'Quarterly Result Updates' },
    { id: 6, name: 'Q2 2024 Results.pdf', year: '2024', type: 'Quarterly Result Updates' },
    { id: 7, name: 'Q1 2024 Results.pdf', year: '2024', type: 'Quarterly Result Updates' },
    { id: 8, name: 'H2 2024 Update.pdf', year: '2024', type: 'Half Updates' },
    { id: 9, name: 'H1 2024 Update.pdf', year: '2024', type: 'Half Updates' },
    { id: 10, name: 'Annual Report 2024.pdf', year: '2024', type: 'Annual Updates' },
    { id: 11, name: 'Flash Report Q4 2024.pdf', year: '2024', type: 'Flash Report' },
    { id: 12, name: 'Flash Report Q3 2024.pdf', year: '2024', type: 'Flash Report' },
    { id: 13, name: 'Market Analysis 2024.pdf', year: '2024', type: 'Other' },
    { id: 14, name: 'Investment Overview 2024.pdf', year: '2024', type: 'Other' },
    
    // 2023 reports
    { id: 15, name: 'Q4 2023 Results.pdf', year: '2023', type: 'Quarterly Result Updates' },
    { id: 16, name: 'Q3 2023 Results.pdf', year: '2023', type: 'Quarterly Result Updates' },
    { id: 17, name: 'H2 2023 Update.pdf', year: '2023', type: 'Half Updates' },
    { id: 18, name: 'H1 2023 Update.pdf', year: '2023', type: 'Half Updates' },
    { id: 19, name: 'Annual Report 2023.pdf', year: '2023', type: 'Annual Updates' },
    { id: 20, name: 'Flash Report Q4 2023.pdf', year: '2023', type: 'Flash Report' },
    { id: 21, name: 'Strategic Review 2023.pdf', year: '2023', type: 'Other' },
    
    // 2022 reports
    { id: 22, name: 'Q4 2022 Results.pdf', year: '2022', type: 'Quarterly Result Updates' },
    { id: 23, name: 'H2 2022 Update.pdf', year: '2022', type: 'Half Updates' },
    { id: 24, name: 'Annual Report 2022.pdf', year: '2022', type: 'Annual Updates' },
    { id: 25, name: 'Flash Report Q4 2022.pdf', year: '2022', type: 'Flash Report' },
    { id: 26, name: 'Business Review 2022.pdf', year: '2022', type: 'Other' },
  ];

  const analystReports = [
    // 2025 reports
    { id: 1, name: 'Q1 2025 Analyst Results.pdf', year: '2025', type: 'Quarterly Result Updates' },
    { id: 2, name: 'Annual Analyst Report 2025.pdf', year: '2025', type: 'Annual Updates' },
    
    // 2024 reports
    { id: 3, name: 'Q4 2024 Analyst Results.pdf', year: '2024', type: 'Quarterly Result Updates' },
    { id: 4, name: 'Q3 2024 Analyst Results.pdf', year: '2024', type: 'Quarterly Result Updates' },
    { id: 5, name: 'Q2 2024 Analyst Results.pdf', year: '2024', type: 'Quarterly Result Updates' },
    { id: 6, name: 'H2 2024 Analyst Update.pdf', year: '2024', type: 'Half Updates' },
    { id: 7, name: 'H1 2024 Analyst Update.pdf', year: '2024', type: 'Half Updates' },
    { id: 8, name: 'Annual Analyst Report 2024.pdf', year: '2024', type: 'Annual Updates' },
    { id: 9, name: 'Flash Analyst Report Q4 2024.pdf', year: '2024', type: 'Flash Report' },
    { id: 10, name: 'Flash Analyst Report Q3 2024.pdf', year: '2024', type: 'Flash Report' },
    
    // 2023 reports
    { id: 11, name: 'Q4 2023 Analyst Results.pdf', year: '2023', type: 'Quarterly Result Updates' },
    { id: 12, name: 'H2 2023 Analyst Update.pdf', year: '2023', type: 'Half Updates' },
    { id: 13, name: 'Annual Analyst Report 2023.pdf', year: '2023', type: 'Annual Updates' },
    { id: 14, name: 'Flash Analyst Report Q4 2023.pdf', year: '2023', type: 'Flash Report' },
    
    // 2022 reports
    { id: 15, name: 'Q4 2022 Analyst Results.pdf', year: '2022', type: 'Quarterly Result Updates' },
    { id: 16, name: 'Annual Analyst Report 2022.pdf', year: '2022', type: 'Annual Updates' },
    { id: 17, name: 'Flash Analyst Report Q4 2022.pdf', year: '2022', type: 'Flash Report' },
  ];

  // Dropdown options for Avendus
  const avendusReportTypes = [
    'Quarterly Result Updates',
    'Half Updates', 
    'Annual Updates',
    'Flash Report',
    'Other'
  ];

  // Dropdown options for Analyst coverage
  const analystReportTypes = [
    'Quarterly Result Updates',
    'Half Updates', 
    'Annual Updates',
    'Flash Report',
  ];

  // Available years
  const availableYears = ['2025', '2024', '2023', '2022'];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setSelectedReportType(null);
    setSelectedYear(null);
  };

  const handleReportTypeChange = (value) => {
    setSelectedReportType(value);
    setSelectedYear(null); // Reset year filter when report type changes
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const getFilteredReports = () => {
    let reports = activeFilter === 'Avendus' ? avendusReports : analystReports;
    
    // Filter by report type
    if (selectedReportType) {
      reports = reports.filter(report => report.type === selectedReportType);
    }
    
    // Filter by year
    if (selectedYear) {
      reports = reports.filter(report => report.year === selectedYear);
    }
    
    return reports;
  };

  const getCurrentReportTypes = () => {
    return activeFilter === 'Avendus' ? avendusReportTypes : analystReportTypes;
  };

  const handleDownload = (reportName) => {
    console.log(`Downloading ${reportName}`);
    // Simulate download functionality
    alert(`Downloading ${reportName}`);
  };

  return (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.title}>Reports and Publications</h1>

      <div className={styles.filterSection}>
        <div className={styles.filterButtons}>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'Avendus' ? styles.active : ''}`}
            onClick={() => handleFilterChange('Avendus')}
          >
            Avendus
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'Analyst coverage' ? styles.active : ''}`}
            onClick={() => handleFilterChange('Analyst coverage')}
          >
            Analyst coverage
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className={styles.reportsLabel}>Reports</span>
          <Select
            className={styles.dropdown}
            placeholder="Select Reports"
            value={selectedReportType}
            onChange={handleReportTypeChange}
            allowClear
            style={{ minWidth: 200 }}
          >
            {getCurrentReportTypes().map(option => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>

    {/* Year Filter */}
    {selectedReportType && (
      <div className={styles.yearFilter}>
        <div className={styles.yearButtons}>
          {availableYears.map(year => (
            <button
              key={year}
              className={`${styles.yearButton} ${selectedYear === year ? styles.active : ''}`}
              onClick={() => handleYearChange(selectedYear === year ? null : year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    )}

    {/* Horizontally scrollable report list */}
    <div className={styles.reportsScrollWrapper}>
      <div className={styles.reportsList}>
        {getFilteredReports().map(report => (
          <div key={report.id} className={styles.reportItem}>
            <div className={styles.reportContent}>
              <FileTextOutlined className={styles.reportIcon} />
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