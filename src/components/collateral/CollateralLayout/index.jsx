
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Input, Select, Dropdown, Button } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import VerticalFilter from '../../global/VerticalDropdown';
import SectorFilter from '../../global/SectorDropdown';

import styles from './styles.module.css';
import CompanyFilter from '../global/CompanyDropdown';
import IndustryFilter from '../global/IndustryDropdown';
import CollateralFilter from '../global/CompanyCollateral';

import collateralContext from '../contexts/collateralContext';
import CustomSearchIcon from '../../myDirectory/icons/search-icon';

const { Search } = Input;
const DropdownArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z" fill="#656579" />
    </svg>
)

const FileRuleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20833 15.0013C5.20833 14.6561 5.48816 14.3763 5.83333 14.3763H11.6667C12.0118 14.3763 12.2917 14.6561 12.2917 15.0013C12.2917 15.3465 12.0118 15.6263 11.6667 15.6263H5.83333C5.48816 15.6263 5.20833 15.3465 5.20833 15.0013Z" fill="#656579" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20833 11.668C5.20833 11.3228 5.48816 11.043 5.83333 11.043H6.66667C7.01184 11.043 7.29167 11.3228 7.29167 11.668C7.29167 12.0131 7.01184 12.293 6.66667 12.293H5.83333C5.48816 12.293 5.20833 12.0131 5.20833 11.668Z" fill="#656579" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20833 8.33464C5.20833 7.98946 5.48816 7.70964 5.83333 7.70964H8.33333C8.67851 7.70964 8.95833 7.98946 8.95833 8.33464C8.95833 8.67981 8.67851 8.95964 8.33333 8.95964H5.83333C5.48816 8.95964 5.20833 8.67981 5.20833 8.33464Z" fill="#656579" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20833 1.66797C5.20833 1.32279 5.48816 1.04297 5.83333 1.04297H13.75C13.9158 1.04297 14.0747 1.10882 14.1919 1.22603L17.9419 4.97603C18.0592 5.09324 18.125 5.25221 18.125 5.41797V15.8346C18.125 16.1798 17.8452 16.4596 17.5 16.4596C17.1548 16.4596 16.875 16.1798 16.875 15.8346V5.67685L13.4911 2.29297H5.83333C5.48816 2.29297 5.20833 2.01315 5.20833 1.66797Z" fill="#656579" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 4.79297C3.40482 4.79297 3.125 5.07279 3.125 5.41797V17.0846C3.125 17.4298 3.40482 17.7096 3.75 17.7096H13.75C14.0952 17.7096 14.375 17.4298 14.375 17.0846V7.34352L11.8244 4.79297H3.75ZM1.875 5.41797C1.875 4.38243 2.71447 3.54297 3.75 3.54297H11.8762C12.1746 3.54297 12.4607 3.6615 12.6717 3.87247L15.2955 6.49625C15.5065 6.70723 15.625 6.99337 15.625 7.29174V17.0846C15.625 18.1202 14.7855 18.9596 13.75 18.9596H3.75C2.71447 18.9596 1.875 18.1202 1.875 17.0846V5.41797Z" fill="#656579" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 3.54297C12.0118 3.54297 12.2917 3.82279 12.2917 4.16797V6.8763H15C15.3452 6.8763 15.625 7.15612 15.625 7.5013C15.625 7.84648 15.3452 8.1263 15 8.1263H12.1667C11.5453 8.1263 11.0417 7.62262 11.0417 7.0013V4.16797C11.0417 3.82279 11.3215 3.54297 11.6667 3.54297Z" fill="#656579" />
    </svg>
)

const CollateralLayout = () => {
    const [query, setQuery] = useState('');
    const [selectedVertical, setSelectedVertical] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedCollateral, setSelectedCollateral] = useState('');

    const contextValue = {
        selectedVertical,
        setSelectedVertical,
        selectedSector,
        setSelectedSector,
        selectedCompany,
        setSelectedCompany,
        selectedIndustry,
        setSelectedIndustry,
        selectedCollateral,
        setSelectedCollateral,
        query,
        setQuery
    };

    const handleSearch = (value) => {
        // logic
        setQuery(value);
    };

    const onClick = () => {

    }

    const verticalFilterMenu = (
        <VerticalFilter
            onSelectionChange={(selected) => {
                setSelectedVertical(selected.length > 0 ? selected.join(', ') : '');
            }}
        />
    );

    const sectorFilterMenu = (
        <SectorFilter
            onSelectionChange={(selected) => {
                setSelectedSector(selected.length > 0 ? selected.join(', ') : '');
            }}
        />
    );

    const companyFilterMenu = (
        <CompanyFilter
            onSelectionChange={(selected) => {
                setSelectedCompany(selected.length > 0 ? selected.join(', ') : '');
            }}
        />
    )

    const industryFilterMenu = (
        <IndustryFilter
            onSelectionChange={(selected) => {
                setSelectedIndustry(selected.length > 0 ? selected.join(', ') : '');
            }}
        />
    )

    const collateralFilterMenu = (
        <CollateralFilter
            onSelectionChange={(selected) => {
                setSelectedCollateral(selected.length > 0 ? selected.join(', ') : '');
            }}
        />
    )


    return (

        <div className={styles.collateral_layout_page}>
            <h1 className={styles.title}>Collaterals</h1>

            <div className={styles.filter_wrapper}>
                <div className={styles.dropdown_wrapper}>
                    <Dropdown
                        overlay={verticalFilterMenu}
                        trigger={['click']}
                        placement="bottomLeft"
                    >
                        <div className={styles.dropdown_button}>
                            <div className={styles.span_wrapper}>
                                <span className={styles.dropdown_label}>Vertical</span>
                                <span className={styles.dropdown_text}>{selectedVertical || "Digital, Technology and Consumer"}</span>
                            </div>
                            <div className={styles.icon_wrapper}>
                                <DropdownArrow className={styles.dropdown_arrow} />
                            </div>
                        </div>
                    </Dropdown>
                </div>

                <div className={styles.dropdown_wrapper}>
                    <Dropdown
                        overlay={sectorFilterMenu}
                        trigger={['click']}
                        placement="bottomLeft"
                        className={styles.dropdown}
                    >
                        <div className={styles.dropdown_button}>
                            <div className={styles.span_wrapper}>
                                <span className={styles.dropdown_label}>Sector</span>
                                <span className={styles.dropdown_text}>{selectedSector || "B2B e-commerce"}</span>
                            </div>
                            <div className={styles.icon_wrapper}>
                                <DropdownArrow className={styles.dropdown_arrow} />
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </div>
            <div className={styles.search_container}>
                <Input
                    placeholder="Give me NDA for Bluestar"
                    allowClear
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    className={styles.search_input}
                    suffix={<CustomSearchIcon />}
                />
            </div>

            {/* <div className={styles.dropdown_wrapper_company}>
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
            </div> */}

            <div className={styles.curated_wrapper}>
                <Button
                    className={styles.curated_button}
                    icon={<FileRuleIcon className={styles.file_icon} />}
                    onClick={onClick}
                    type='default'
                    size='large'
                >
                    <span className={styles.button_text}>Curated Collaterals</span>
                </Button>
            </div>

            {/* <div className={styles.filters_container}>
                    <div className={styles.dropdowns_container}>
                        <div className={styles.dropdown_wrapper}>
                            <span className={styles.dropdown_label}>Vertical</span>
                            <Dropdown
                                overlay={verticalFilterMenu}
                                trigger={['click']}
                                placement="bottomLeft"
                            >
                                <div className={styles.dropdown_button}>
                                    <span className={styles.dropdown_text}>{selectedVertical || "Digital, Technology and Consumer"}</span>
                                    <DownOutlined className={styles.dropdown_arrow} />
                                </div>
                            </Dropdown>
                        </div>

                        <div className={styles.dropdown_wrapper}>
                            <span className={styles.dropdown_label}>Sector</span>
                            <Dropdown
                                overlay={sectorFilterMenu}
                                trigger={['click']}
                                placement="bottomLeft"
                            >
                                <div className={styles.dropdown_button}>
                                    <span className={styles.dropdown_text}>{selectedSector || "Content, Media & Gaming"}</span>
                                    <DownOutlined className={styles.dropdown_arrow} />
                                </div>
                            </Dropdown>
                        </div>

                        <div className={styles.dropdown_wrapper}>
                            <span className={styles.dropdown_label}>Industry</span>
                            <Dropdown
                                overlay={industryFilterMenu}
                                trigger={['click']}
                                placement="bottomLeft"
                            >
                                <div className={styles.dropdown_button}>
                                    <span className={styles.dropdown_text}>{selectedIndustry || "Industry Report 1"}</span>
                                    <DownOutlined className={styles.dropdown_arrow} />
                                </div>
                            </Dropdown>
                        </div>

                        <div className={styles.dropdown_wrapper}>
                            <span className={styles.dropdown_label}>Company</span>
                            <Dropdown
                                overlay={companyFilterMenu}
                                trigger={['click']}
                                placement="bottomLeft"
                            >
                                <div className={styles.dropdown_button}>
                                    <span className={styles.dropdown_text}>{selectedCompany || "Project BlueStar"}</span>
                                    <DownOutlined className={styles.dropdown_arrow} />
                                </div>
                            </Dropdown>
                        </div>

                        <div className={styles.dropdown_wrapper}>
                            <span className={styles.dropdown_label}>Collateral</span>
                            <Dropdown
                                overlay={collateralFilterMenu}
                                trigger={['click']}
                                placement="bottomLeft"
                            >
                                <div className={styles.dropdown_button}>
                                    <span className={styles.dropdown_text}>{selectedCollateral || "Reports and Publications"}</span>
                                    <DownOutlined className={styles.dropdown_arrow} />
                                </div>
                            </Dropdown>
                        </div>
                    </div> 
                </div> */}
            <collateralContext.Provider value={contextValue}>
                <Outlet />
            </collateralContext.Provider>
        </div>

    );
};

export default CollateralLayout;



