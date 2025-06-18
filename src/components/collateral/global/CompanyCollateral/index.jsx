
import React, { useState } from 'react'
import styles from './styles.module.css'
import { Button, Dropdown } from 'antd'
import FinancialReportContentSection from './FinancialReporyContentSection'
import ReportAndPublicationContentSection from './ReportAndPublicationContentPage'
import CompanyFilter from '../CompanyDropdown'

const FinancialIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0001 7.83588C16.6877 8.17967 16.875 8.53897 16.875 8.75C16.875 8.96103 16.6877 9.32033 16.0001 9.66412C15.3499 9.98922 14.4079 10.2083 13.3333 10.2083C12.2587 10.2083 11.3168 9.98922 10.6666 9.66412C9.97899 9.32033 9.79167 8.96103 9.79167 8.75C9.79167 8.53897 9.97899 8.17967 10.6666 7.83588C11.3168 7.51078 12.2587 7.29167 13.3333 7.29167C14.4079 7.29167 15.3499 7.51078 16.0001 7.83588ZM16.5591 6.71784C15.7013 6.28892 14.5599 6.04167 13.3333 6.04167C12.1068 6.04167 10.9654 6.28892 10.1075 6.71784C9.28709 7.12807 8.54167 7.81044 8.54167 8.75C8.54167 9.68956 9.28709 10.3719 10.1075 10.7822C10.9654 11.2111 12.1068 11.4583 13.3333 11.4583C14.5599 11.4583 15.7013 11.2111 16.5591 10.7822C17.3796 10.3719 18.125 9.68956 18.125 8.75C18.125 7.81044 17.3796 7.12807 16.5591 6.71784Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.4583C17.1548 11.4583 16.875 11.7382 16.875 12.0833C16.875 12.2944 16.6877 12.6537 16.0001 12.9975C15.3499 13.3226 14.4079 13.5417 13.3333 13.5417C12.2587 13.5417 11.3168 13.3226 10.6666 12.9975C9.97899 12.6537 9.79167 12.2944 9.79167 12.0833C9.79167 11.7382 9.51184 11.4583 9.16667 11.4583C8.82149 11.4583 8.54167 11.7382 8.54167 12.0833C8.54167 13.0229 9.28709 13.7053 10.1075 14.1155C10.9654 14.5444 12.1068 14.7917 13.3333 14.7917C14.5599 14.7917 15.7013 14.5444 16.5591 14.1155C17.3796 13.7053 18.125 13.0229 18.125 12.0833C18.125 11.7382 17.8452 11.4583 17.5 11.4583Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.29167C2.15482 7.29167 1.875 7.57149 1.875 7.91667C1.875 8.85623 2.62042 9.53859 3.44088 9.94882C4.29872 10.3777 5.44008 10.625 6.66667 10.625C7.66993 10.625 8.61135 10.4597 9.38686 10.1684C9.70999 10.047 9.87354 9.68667 9.75215 9.36354C9.63076 9.04041 9.27041 8.87687 8.94728 8.99825C8.32989 9.23018 7.53978 9.375 6.66667 9.375C5.59206 9.375 4.65009 9.15589 3.9999 8.83079C3.31232 8.487 3.125 8.1277 3.125 7.91667C3.125 7.57149 2.84518 7.29167 2.5 7.29167Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 10.2083C2.15482 10.2083 1.875 10.4882 1.875 10.8333C1.875 11.7729 2.62042 12.4553 3.44088 12.8655C4.29872 13.2944 5.44008 13.5417 6.66667 13.5417C7.66973 13.5417 8.61099 13.3765 9.38641 13.0852C9.70955 12.9639 9.87312 12.6036 9.75176 12.2804C9.6304 11.9573 9.27006 11.7937 8.94692 11.9151C8.32958 12.1469 7.53961 12.2917 6.66667 12.2917C5.59206 12.2917 4.65009 12.0726 3.9999 11.7475C3.31232 11.4037 3.125 11.0444 3.125 10.8333C3.125 10.4882 2.84518 10.2083 2.5 10.2083Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3.95833C2.15482 3.95833 1.875 4.23816 1.875 4.58333V13.75C1.875 14.6896 2.62042 15.3719 3.44088 15.7822C4.29872 16.2111 5.44008 16.4583 6.66667 16.4583C7.66983 16.4583 8.61104 16.293 9.38641 16.0018C9.70955 15.8804 9.87313 15.5201 9.75176 15.1969C9.6304 14.8738 9.27006 14.7102 8.94692 14.8316C8.3295 15.0635 7.53956 15.2083 6.66667 15.2083C5.59206 15.2083 4.65009 14.9892 3.9999 14.6641C3.31232 14.3203 3.125 13.961 3.125 13.75V4.58333C3.125 4.23816 2.84518 3.95833 2.5 3.95833Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 3.95833C10.4882 3.95833 10.2083 4.23816 10.2083 4.58333V7.08333C10.2083 7.42851 10.4882 7.70833 10.8333 7.70833C11.1785 7.70833 11.4583 7.42851 11.4583 7.08333V4.58333C11.4583 4.23816 11.1785 3.95833 10.8333 3.95833Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 8.125C17.1548 8.125 16.875 8.40482 16.875 8.75V15.4167C16.875 15.6277 16.6877 15.987 16.0001 16.3308C15.3499 16.6559 14.4079 16.875 13.3333 16.875C12.2587 16.875 11.3168 16.6559 10.6666 16.3308C9.97899 15.987 9.79167 15.6277 9.79167 15.4167V8.75C9.79167 8.40482 9.51184 8.125 9.16667 8.125C8.82149 8.125 8.54167 8.40482 8.54167 8.75V15.4167C8.54167 16.3562 9.28709 17.0386 10.1075 17.4488C10.9654 17.8777 12.1068 18.125 13.3333 18.125C14.5599 18.125 15.7013 17.8777 16.5591 17.4488C17.3796 17.0386 18.125 16.3562 18.125 15.4167V8.75C18.125 8.40482 17.8452 8.125 17.5 8.125Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33344 3.66921C10.021 4.013 10.2083 4.3723 10.2083 4.58333C10.2083 4.79436 10.021 5.15367 9.33344 5.49746C8.68324 5.82255 7.74127 6.04167 6.66667 6.04167C5.59206 6.04167 4.65009 5.82255 3.9999 5.49746C3.31232 5.15367 3.125 4.79436 3.125 4.58333C3.125 4.3723 3.31232 4.013 3.9999 3.66921C4.65009 3.34411 5.59206 3.125 6.66667 3.125C7.74127 3.125 8.68324 3.34411 9.33344 3.66921ZM9.89245 2.55118C9.03461 2.12226 7.89325 1.875 6.66667 1.875C5.44008 1.875 4.29872 2.12226 3.44088 2.55118C2.62042 2.96141 1.875 3.64377 1.875 4.58333C1.875 5.5229 2.62042 6.20526 3.44088 6.61549C4.29872 7.04441 5.44008 7.29167 6.66667 7.29167C7.89325 7.29167 9.03461 7.04441 9.89245 6.61549C10.7129 6.20526 11.4583 5.5229 11.4583 4.58333C11.4583 3.64377 10.7129 2.96141 9.89245 2.55118Z" fill="currentColor" />
  </svg>
)

const DropdownArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z" fill="#656579" />
    </svg>
)

const FileRuleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20833 15.0013C5.20833 14.6561 5.48816 14.3763 5.83333 14.3763H11.6667C12.0118 14.3763 12.2917 14.6561 12.2917 15.0013C12.2917 15.3465 12.0118 15.6263 11.6667 15.6263H5.83333C5.48816 15.6263 5.20833 15.3465 5.20833 15.0013Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20833 11.668C5.20833 11.3228 5.48816 11.043 5.83333 11.043H6.66667C7.01184 11.043 7.29167 11.3228 7.29167 11.668C7.29167 12.0131 7.01184 12.293 6.66667 12.293H5.83333C5.48816 12.293 5.20833 12.0131 5.20833 11.668Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20833 8.33464C5.20833 7.98946 5.48816 7.70964 5.83333 7.70964H8.33333C8.67851 7.70964 8.95833 7.98946 8.95833 8.33464C8.95833 8.67981 8.67851 8.95964 8.33333 8.95964H5.83333C5.48816 8.95964 5.20833 8.67981 5.20833 8.33464Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20833 1.66797C5.20833 1.32279 5.48816 1.04297 5.83333 1.04297H13.75C13.9158 1.04297 14.0747 1.10882 14.1919 1.22603L17.9419 4.97603C18.0592 5.09324 18.125 5.25221 18.125 5.41797V15.8346C18.125 16.1798 17.8452 16.4596 17.5 16.4596C17.1548 16.4596 16.875 16.1798 16.875 15.8346V5.67685L13.4911 2.29297H5.83333C5.48816 2.29297 5.20833 2.01315 5.20833 1.66797Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 4.79297C3.40482 4.79297 3.125 5.07279 3.125 5.41797V17.0846C3.125 17.4298 3.40482 17.7096 3.75 17.7096H13.75C14.0952 17.7096 14.375 17.4298 14.375 17.0846V7.34352L11.8244 4.79297H3.75ZM1.875 5.41797C1.875 4.38243 2.71447 3.54297 3.75 3.54297H11.8762C12.1746 3.54297 12.4607 3.6615 12.6717 3.87247L15.2955 6.49625C15.5065 6.70723 15.625 6.99337 15.625 7.29174V17.0846C15.625 18.1202 14.7855 18.9596 13.75 18.9596H3.75C2.71447 18.9596 1.875 18.1202 1.875 17.0846V5.41797Z" fill="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 3.54297C12.0118 3.54297 12.2917 3.82279 12.2917 4.16797V6.8763H15C15.3452 6.8763 15.625 7.15612 15.625 7.5013C15.625 7.84648 15.3452 8.1263 15 8.1263H12.1667C11.5453 8.1263 11.0417 7.62262 11.0417 7.0013V4.16797C11.0417 3.82279 11.3215 3.54297 11.6667 3.54297Z" fill="currentColor" />
  </svg>
)

const CompanyCollateral = () => {
  const [activeButton, setActiveButton] = useState('financial')
  const [selectedCompany, setSelectedCompany] = useState('');
  const financialButtonClick = () => {
    setActiveButton('financial')
  }

  const reportButtonClick = () => {
    setActiveButton('regulatory')
  }

  const companyFilterMenu = (
    <CompanyFilter
      onSelectionChange={(selected) => {
        setSelectedCompany(selected.length > 0 ? selected.join(', ') : '');
      }}
    />
  )
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Company collaterals</h1>

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

      <div className={styles.financial_button_wrapper}>
        <Button
          className={`${styles.curated_button} ${activeButton === 'financial' ? styles.active_button : ''}`}
          onClick={financialButtonClick}
          type='default'
          size='large'
        >
          <FinancialIcon className={`${styles.file_icon} ${activeButton === 'financial' ? styles.active_icon : ''}`} />
          <span className={`${styles.button_text} ${activeButton === 'financial' ? styles.active_text : ''}`}>Financial Results</span>
        </Button>
      </div>

      <div className={styles.report_button_wrapper}>
        <Button
          className={`${styles.curated_button} ${activeButton === 'regulatory' ? styles.active_button : ''}`}
          onClick={reportButtonClick}
          type='default'
          size='large'
        >
          <FileRuleIcon className={`${styles.file_icon} ${activeButton === 'regulatory' ? styles.active_icon : ''}`} />
          <span className={`${styles.button_text} ${activeButton === 'regulatory' ? styles.active_text : ''}`}>Reports and Publications</span>
        </Button>
      </div>

      <div className={styles.content}>
        {activeButton === 'financial' ? <FinancialReportContentSection /> :
          <ReportAndPublicationContentSection />}
      </div>

    </div>
  )
}

export default CompanyCollateral;
