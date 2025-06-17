import React, { useState } from 'react'
import styles from './styles.module.css'
import { DatePicker, Dropdown } from 'antd'
import CompanyFilter from '../CompanyDropdown'
import ReportCard from './ReportCard';


const { RangePicker } = DatePicker;

const REPORTS = [
  {
    title: "FY2025 Annual Report",
    url: "/reports/FY2025_Annual_Report.pdf",
  },
  {
    title: "FY2024 Annual Report",
    url: "/reports/FY2024_Annual_Report.pdf",
  },
  {
    title: "Q4 FY2025 Earnings Presentation",
    url: "/reports/Q4_FY2025_Earnings.pdf",
  },
  {
    title: "Investor DataBook FY2025",
    url: "/reports/FY2025_Investor_DataBook.xlsx",
  },
];



const DropdownArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z" fill="#656579" />
    </svg>
)
const CompanyWiseCollateralPage = () => {
    const [selectedCompany, setSelectedCompany] = useState('');
    const dateFormat = "YYYY/MM/DD"
    const companyFilterMenu = (
        <CompanyFilter
            onSelectionChange={(selected) => {
                setSelectedCompany(selected.length > 0 ? selected.join(', ') : '');
            }}
        />
    )
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Company wise collaterals</h1>

            <div className={styles.dropdown_wrapper_company}>
                <span className={styles.dropdown_label_company}>Company</span>
                <Dropdown
                    overlay={companyFilterMenu}
                    trigger={['click']}
                    placement="bottomLeft"
                    className={styles.dropdown}
                >
                    <div className={styles.dropdown_button_company}>
                        <span className={styles.dropdown_text_company}>{selectedCompany || "Swiggy"}</span>
                        <div className={styles.icon_wrapper}>
                            <DropdownArrow className={styles.dropdown_arrow} />
                        </div>
                    </div>
                </Dropdown>
            </div>
            <RangePicker className={styles.date_picker} format={dateFormat} />

            <div className={styles.report_section}>
                <div className={styles.report_grid}>
                    {REPORTS.map((report) => (
                        <div key={report.id} className={styles.report_card_wrapper}>
                            <ReportCard report={report}/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CompanyWiseCollateralPage