import React, { useState } from 'react'
import styles from './styles.module.css'
import TabNavigation from '../../../../myDocument/global/TabNavigation'
import { Button, DatePicker } from 'antd';
import ReportCard from '../../CompanyWiseCollateral/ReportCard';

const TAB_ITEMS = [
    {
        key: 'annual-reports',
        label: 'Annual Reports',
    },
    {
        key: 'earning-presentation',
        label: 'Earning Presentation',
    },
    {
        key: 'data-book',
        label: 'DataBook',
    },
];

const FINANCIAL_REPORTS = [
    {
        category: 'annual-reports',
        year: 2025,
        title: 'Annual Report FY2025',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'annual-reports',
        year: 2024,
        title: 'Annual Report FY2024',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'earning-presentation',
        year: 2025,
        title: 'Earning Presentation Q1 FY2025',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'earning-presentation',
        year: 2023,
        title: 'Earning Presentation Q4 FY2023',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'data-book',
        year: 2024,
        title: 'DataBook FY2024',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'data-book',
        year: 2023,
        title: 'DataBook FY2023',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'annual-reports',
        year: 2023,
        title: 'Annual Report FY2023',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'earning-presentation',
        year: 2022,
        title: 'Earning Presentation FY2022 Summary',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'data-book',
        year: 2025,
        title: 'DataBook FY2025',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
    {
        category: 'annual-reports',
        year: 2022,
        title: 'Annual Report FY2022',
        url: '/MINSHU_SHAW_CV_2025.pdf',
    },
];


const YEARS = [2025, 2024, 2023, 2022];

const { RangePicker } = DatePicker;
const ContentSection = () => {
    const dateFormat = 'YYYY/MM/DD';
    const [selectedYears, setSelectedYears] = useState([]);
    const [tab, setTab] = useState(TAB_ITEMS[0].key);
    const [dateRange, setDateRange] = useState([]);

    const handleYearSelect = (year) => {
    setSelectedYears((prev) =>
        prev.includes(year)
            ? prev.filter((y) => y !== year)
            : [...prev, year]
    );
    setDateRange([]); // Clear date range when selecting years
};


    const handleDateChange = (dates) => {
        setDateRange(dates);
        setSelectedYears([]); 
    };

   const getFilteredReports = () => {
    return FINANCIAL_REPORTS.filter((report) => {
        if (report.category !== tab) return false;

        const hasDateRange = dateRange && dateRange.length === 2 && dateRange[0] && dateRange[1];

        if (tab === 'annual-reports') {
            if (!hasDateRange) return true;
            const startYear = dateRange[0].year();
            const endYear = dateRange[1].year();
            return report.year >= startYear && report.year <= endYear;
        }

        if (hasDateRange) {
            const startYear = dateRange[0].year();
            const endYear = dateRange[1].year();
            return report.year >= startYear && report.year <= endYear;
        }

        if (selectedYears.length > 0) {
            return selectedYears.includes(report.year);
        }

        return true;
    });
};



    const filteredReports = getFilteredReports();

    return (
        <div className={styles.page}>
            <div className={styles.tab_navigator}>
                <TabNavigation TAB_ITEMS={TAB_ITEMS} onTabChange={setTab} />
            </div>

            {tab !== 'annual-reports' && (
                <div className={styles.year_container}>
                    {YEARS.map((year) => (
                        <Button
                            key={year}
                            // type={selectedYear === year ? 'primary' : 'default'}
                            size="large"
                            className={`${styles.year_button} ${selectedYears.includes(year) ? styles.selected_year : ''}`}
                            onClick={() => handleYearSelect(year)}
                        >
                            <span className={styles.year_text}>{year}</span>
                        </Button>
                    ))}
                </div>
            )}

            <RangePicker
                className={styles.date_picker}
                format={dateFormat}
                onChange={handleDateChange}
                value={dateRange}
            />

            <div className={styles.report_section}>
                <div className={styles.report_grid}>
                    {filteredReports.map((report) => (
                        <div key={`${report.category}-${report.year}`} className={styles.report_card_wrapper}>
                            <ReportCard report={report} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ContentSection