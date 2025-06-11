
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Input, Select, Dropdown } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import VerticalFilter from '../../global/VerticalDropdown';
import SectorFilter from '../../global/SectorDropdown';

import styles from './styles.module.css';
import CompanyFilter from '../global/CompanyDropdown';
import IndustryFilter from '../global/IndustryDropdown';
import CollateralFilter from '../global/CompanyCollateral';

import collateralContext from '../contexts/collateralContext';

const { Search } = Input;

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

        <div className={styles.directory_page}>
            <div className={styles.top}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Collaterals</h1>
                </div>

                <div className={styles.filters_container}>


                    <div className={styles.dropdowns_container}>
                        <div className={styles.dropdown_wrapper}>
                            <span className={styles.dropdown_label}>Vertical</span>
                            <Dropdown
                                overlay={verticalFilterMenu}
                                trigger={['click']}
                                placement="bottomLeft"
                            >
                                <div className={styles.dropdown_button}>
                                    <span className={styles.dropdown_text}>{selectedVertical}</span>
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
                                    <span className={styles.dropdown_text}>{selectedSector}</span>
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
                                    <span className={styles.dropdown_text}>{selectedIndustry}</span>
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
                                    <span className={styles.dropdown_text}>{selectedCompany}</span>
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
                                    <span className={styles.dropdown_text}>{selectedCollateral}</span>
                                    <DownOutlined className={styles.dropdown_arrow} />
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <collateralContext.Provider value={contextValue}>
                <Outlet />
            </collateralContext.Provider>
        </div>

    );
};

export default CollateralLayout;



