import React, { useState } from 'react';
import { Tabs, DatePicker } from 'antd';
import { FileTextOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const { RangePicker } = DatePicker;

const FinancialReportSection = () => {
  const [activeYear, setActiveYear] = useState('2025');
  const [activeTab, setActiveTab] = useState('annual-reports');
  const [dateRange, setDateRange] = useState(null);

  const reportsData = {
    'annual-reports': [
      { id: 1, name: 'Annual Report FY 2025.pdf', year: '2025' },
      { id: 2, name: 'Sustainability Report 2025.pdf', year: '2025' },
      { id: 3, name: 'Corporate Governance Report 2025.pdf', year: '2025' },
      { id: 4, name: 'Annual Report FY 2024.pdf', year: '2024' },
    ],
    'earning-presentation': [
      { id: 5, name: 'Q4 2025 Earnings Presentation.pdf', year: '2025' },
      { id: 6, name: 'Q3 2025 Earnings Presentation.pdf', year: '2025' },
    ],
    'databook': [
      { id: 7, name: 'Financial DataBook 2025.pdf', year: '2025' },
      { id: 8, name: 'Statistical DataBook 2025.pdf', year: '2025' },
    ],
  };

  const years = ['2025', '2024', '2023', '2022'];

  const tabItems = [
    { key: 'annual-reports', label: 'Annual Reports' },
    { key: 'earning-presentation', label: 'Earning Presentation' },
    { key: 'databook', label: 'DataBook' },
  ];

  const handleDownload = (report) => {
    console.log(`Downloading ${report.name}`);
  };

  const getFilteredReports = () => {
    const reports = reportsData[activeTab] || [];
    const startYear = dateRange?.[0]?.year();
    const endYear = dateRange?.[1]?.year();

    return reports.filter(report => {
      const reportYear = parseInt(report.year);
      if (activeTab === 'annual-reports') {
        return !startYear || !endYear || (reportYear >= startYear && reportYear <= endYear);
      }
      return reportYear === parseInt(activeYear);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Financial Results</h1>
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} size="large" className={styles.tabs} />

        <div className={styles.filterSection}>
          {(activeTab === 'earning-presentation' || activeTab === 'databook') && (
            <div className={styles.yearFilter}>
              {years.map(year => (
                <button
                  key={year}
                  className={`${styles.yearButton} ${activeYear === year ? styles.yearButtonActive : ''}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          )}

          <div className={styles.datePickerContainer}>
            <RangePicker
              onChange={(dates) => setDateRange(dates)}
              placeholder={['Start Date', 'End Date']}
            />
          </div>
        </div>
      </div>

      <div className={styles.reportsSection}>
        {getFilteredReports().map(report => (
          <div
            key={report.id}
            className={styles.reportItem}
            onClick={() => handleDownload(report)}
          >
            <div className={styles.reportContent}>
              <FileTextOutlined className={styles.reportIcon} />
              <span className={styles.reportName}>{report.name}</span>
            </div>
            <ArrowRightOutlined className={styles.downloadIcon} />
          </div>
        ))}

        {getFilteredReports().length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#8c8c8c' }}>
            No reports available for the selected criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialReportSection;
