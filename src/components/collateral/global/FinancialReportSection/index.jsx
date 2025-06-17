import React, { useState } from 'react';
import { Tabs, DatePicker } from 'antd';
import { FileTextOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const { RangePicker } = DatePicker;

const CustomFileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 6C5.25 5.58579 5.58579 5.25 6 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6C18.75 6.41421 18.4142 6.75 18 6.75H6C5.58579 6.75 5.25 6.41421 5.25 6Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 10C5.25 9.58579 5.58579 9.25 6 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H6C5.58579 10.75 5.25 10.4142 5.25 10Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.25 14C12.25 13.5858 12.5858 13.25 13 13.25L18 13.25C18.4142 13.25 18.75 13.5858 18.75 14C18.75 14.4142 18.4142 14.75 18 14.75L13 14.75C12.5858 14.75 12.25 14.4142 12.25 14Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.25 18C12.25 17.5858 12.5858 17.25 13 17.25H18C18.4142 17.25 18.75 17.5858 18.75 18C18.75 18.4142 18.4142 18.75 18 18.75H13C12.5858 18.75 12.25 18.4142 12.25 18Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.75 2.75V21.25H21.25V2.75H2.75ZM1.25 2.6C1.25 1.85441 1.85442 1.25 2.6 1.25H21.4C22.1456 1.25 22.75 1.85442 22.75 2.6V21.4C22.75 22.1456 22.1456 22.75 21.4 22.75H2.6C1.85441 22.75 1.25 22.1456 1.25 21.4V2.6Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H9C9.41421 13.25 9.75 13.5858 9.75 14V18C9.75 18.4142 9.41421 18.75 9 18.75H6C5.58579 18.75 5.25 18.4142 5.25 18V14ZM6.75 14.75V17.25H8.25V14.75H6.75Z" fill="black"/>
  </svg>
);

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
      
      <div className={styles.reportsScrollWrapper}>
      <div className={styles.reportsSection}>
        {getFilteredReports().map(report => (
          <div
            key={report.id}
            className={styles.reportItem}
            onClick={() => handleDownload(report)}
          >
            <div className={styles.reportContent}>
              <CustomFileIcon className={styles.reportIcon} />
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
    </div>
  );
};

export default FinancialReportSection;
