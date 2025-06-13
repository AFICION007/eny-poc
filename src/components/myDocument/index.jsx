
import React, { useState } from 'react';
import { Input, Select, Dropdown } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import VerticalFilter from '../global/VerticalDropdown';
import SectorFilter from '../global/SectorDropdown';

import styles from './styles.module.css';
import ProjectFilter from './global/ProjectFilter';
import FolderSelector from './global/FolderSelector';
import TabNavigation from './global/TabNavigation';
import Documents from './global/Documents';
import CustomSearchIcon from './icons/search-icon';


const { Search } = Input;



const DocumentPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedProject, setSelectedProject] = useState('');
    const [selectedVertical, setSelectedVertical] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedFolder, setSelectedFolder] = useState('');


    const handleSearch = (value) => {
        // logic
        setSearchValue(value);
    };

    const handleFolderSelect = (folderName) => {
        setSelectedFolder(folderName);
        console.log('Selected folder:', folderName);
        // logic 
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

    const projectFilterMenu = (
        <ProjectFilter
            onSelectionChange={(selected) => {
                setSelectedProject(selected.length > 0 ? selected.join(', ') : 'Project BlueStar');
            }}
        />
    );

    return (
        <div className={styles.directory_page}>
            <div className={styles.top}>
                <div className={styles.header}>
                    <h1 className={styles.title}>MY DOCUMENTS</h1>
                </div>

                <div className={styles.filters_container}>
                    <div className={styles.search_container}>
                        <Input
                            placeholder="Give me NDA for Bluestar"
                            allowClear
                            value={searchValue}
                            onChange={(e) => handleSearch(e.target.value)}
                            className={styles.search_input}
                            suffix={<CustomSearchIcon />}
                        />
                    </div>

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
                                    <span className={styles.dropdown_text}>{selectedSector || "B2B e-commerce"}</span>
                                    <DownOutlined className={styles.dropdown_arrow} />
                                </div>
                            </Dropdown>
                        </div>
                        <div className={styles.dropdown_wrapper}>
                            <span className={styles.dropdown_label}>Project</span>
                            <Dropdown
                                overlay={projectFilterMenu}
                                trigger={['click']}
                                placement="bottomLeft"
                            >
                                <div className={styles.dropdown_button}>
                                    <span className={styles.dropdown_text}>{selectedProject || "Project BlueStar"}</span>
                                    <DownOutlined className={styles.dropdown_arrow} />
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.content_wrapper}>
                <div className={styles.section}>
                    <FolderSelector onFolderSelect={handleFolderSelect} />
                </div>
                <div className={styles.section}>
                    <TabNavigation />
                </div>
                <div className={styles.section}>
                    <Documents />
                </div>
            </div>
        </div>
    );
};

export default DocumentPage;



