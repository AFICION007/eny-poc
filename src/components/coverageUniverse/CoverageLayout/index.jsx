import React, { useState } from 'react'
import styles from './styles.module.css';
import VerticalFilter from '../../global/VerticalDropdown';
import SectorFilter from '../../global/SectorDropdown';
import { DatePicker, Dropdown, Input } from 'antd';
import CustomSearchIcon from '../../myDirectory/icons/search-icon';
import coverageContext from '../contexts/coverageContext'
import { Outlet } from 'react-router-dom';


const { RangePicker } = DatePicker;
const DropdownArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z" fill="#656579" />
  </svg>
)
const CoverageLayout = () => {
  const dateFormat = "YYYY/MM/DD"
  const [query, setQuery] = useState('');
  const [selectedVertical, setSelectedVertical] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

    const contextValue = {
        selectedVertical,
        setSelectedVertical,
        selectedSector,
        setSelectedSector,
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
  const topicFilterMenu = (
    <>
    </>
  )

  const handleSearch = (value) => {
    // logic
    setQuery(value);
  };
  return (
    <div className={styles.coverage_layout}>
      <div className={styles.content}>

        <h1 className={styles.title}>COVERAGE UNIVERSE</h1>

        {/* <div className={styles.filter_wrapper}> */}
          <div className={styles.dropdown_wrapper_left}>
            <Dropdown
              overlay={verticalFilterMenu}
              trigger={['click']}
              placement="bottomLeft"
            >
              <div className={styles.dropdown_button}>
                <div className={styles.span_wrapper}>
                  <span className={styles.dropdown_label}>Vertical</span>
                  <span className={styles.dropdown_text_left}>{selectedVertical || "Digital, Technology and Consumer"}</span>
                </div>
                <div className={styles.icon_wrapper}>
                  <DropdownArrow className={styles.dropdown_arrow} />
                </div>
              </div>
            </Dropdown>
          </div>

          <div className={styles.dropdown_wrapper_right}>
            <Dropdown
              overlay={sectorFilterMenu}
              trigger={['click']}
              placement="bottomLeft"
              className={styles.dropdown}
            >
              <div className={styles.dropdown_button}>
                <div className={styles.span_wrapper}>
                  <span className={styles.dropdown_label}>Sector</span>
                  <span className={styles.dropdown_text_right}>{selectedSector || "B2B e-commerce"}</span>
                </div>
                <div className={styles.icon_wrapper}>
                  <DropdownArrow className={styles.dropdown_arrow} />
                </div>
              </div>
            </Dropdown>
          </div>
        {/* </div> */}

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
          <span className={styles.dropdown_label_company}>Topic</span>
          <Dropdown
            overlay={topicFilterMenu}
            trigger={['click']}
            placement="bottomLeft"
            className={styles.dropdown}
          >
            <div className={styles.dropdown_button_company}>
              <span className={styles.dropdown_text_company}>{selectedTopic || "Select Topic"}</span>
              <div className={styles.icon_wrapper}>
                <DropdownArrow className={styles.dropdown_arrow} />
              </div>
            </div>
          </Dropdown>
        </div>
        <RangePicker className={styles.date_picker} format={dateFormat} /> */}
      </div>
      <coverageContext.Provider value={contextValue}>
        <Outlet />
      </coverageContext.Provider>
    </div>
  )
}

export default CoverageLayout