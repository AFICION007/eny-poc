import React, { useState } from 'react';
import { Checkbox, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const SECTOR_OPTIONS = {
  'Category 1': [
    'Agritech B2B',
    'B2B e-commerce',
    'Content, Media & Gaming',
    'Defence Tech',
    'EdTech',
    'Etail'
  ],
  'Category 2': [
    'Fintech - InsurTech',
    'Fintech - Lending',
    'Fintech - Others',
    'Fintech - Payments',
    'Healthtech',
    'Online Services'
  ],
  'Others': [
    'Online Services',
    'Online travel and mobility',
    'Others',
    'SaaS',
    'Spacetech',
    'Web-3'
  ]
};

const SectorFilter = ({ onSelectionChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const allOptions = Object.values(SECTOR_OPTIONS).flat();

  const filteredCategories = Object.entries(SECTOR_OPTIONS).reduce((acc, [category, options]) => {
    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredOptions.length > 0) {
      acc[category] = filteredOptions;
    }
    return acc;
  }, {});

  const handleOptionChange = (checkedValues) => {
    setSelectedOptions(checkedValues);
    setSelectAll(checkedValues.length === allOptions.length);
    onSelectionChange(checkedValues);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    const newSelection = checked ? allOptions : [];
    setSelectedOptions(newSelection);
    onSelectionChange(newSelection);
  };

  const handleClear = () => {
    setSelectedOptions([]);
    setSelectAll(false);
    onSelectionChange([]);
  };

  return (
    <div className={styles.sector_filter}>
      <div className={styles.filter_header}>
        <h3 className={styles.filter_title}>Search Sector</h3>
        <button className={styles.clear_button} onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className={styles.search_container}>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined className={styles.search_icon} />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.search_input}
        />
      </div>

      <div className={styles.filter_section}>
        <h4 className={styles.section_title}>Filter Sector</h4>

        <div className={styles.options_list}>
          <div className={styles.select_all}>
            <Checkbox
              checked={selectAll}
              onChange={handleSelectAll}
              className={styles.checkbox_item}
            >
              Select All
            </Checkbox>
          </div>
          <Checkbox.Group
            value={selectedOptions}
            onChange={handleOptionChange}
            className={styles.checkbox_group}
          >
            {Object.entries(filteredCategories).map(([category, options]) => (
              <div key={category} className={styles.category_section}>
                <h5 className={styles.category_title}>{category}</h5>
                <div className={styles.category_options}>
                  {options.map(option => (
                    <Checkbox
                      key={option}
                      value={option}
                      className={styles.checkbox_item}
                    >
                      {option}
                    </Checkbox>
                  ))}
                </div>
              </div>
            ))}
          </Checkbox.Group>
        </div>
      </div>
    </div>
  );
};

export default SectorFilter;