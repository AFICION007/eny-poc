
import React, { useState } from 'react';
import { Checkbox, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const VERTICAL_OPTIONS = [
  'Consumer',
  'Digital, Technology and Consumer',
  'Enterprise Technology and Services',
  'Financial Institution Group',
  'Healthcare',
  'Industrial',
  'Infrastructure and Real Assets'
];

const VerticalFilter = ({ onSelectionChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const filteredOptions = VERTICAL_OPTIONS.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionChange = (checkedValues) => {
    setSelectedOptions(checkedValues);
    setSelectAll(checkedValues.length === VERTICAL_OPTIONS.length);
    onSelectionChange(checkedValues);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    const newSelection = checked ? VERTICAL_OPTIONS : [];
    setSelectedOptions(newSelection);
    onSelectionChange(newSelection);
  };

  const handleClear = () => {
    setSelectedOptions([]);
    setSelectAll(false);
    onSelectionChange([]);
  };

  return (
    <div className={styles.vertical_filter}>
      <div className={styles.filter_header}>
        <h3 className={styles.filter_title}>Search Vertical</h3>
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
        <h4 className={styles.section_title}>Filter Vertical</h4>

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
            {filteredOptions.map(option => (
              <Checkbox
                key={option}
                value={option}
                className={styles.checkbox_item}
              >
                {option}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </div>
      </div>
    </div>
  );
};

export default VerticalFilter;