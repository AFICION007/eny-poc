
import React, { useState } from 'react';
import { Checkbox, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const PROJECT_OPTIONS = [
  'Project BlueStar',
  'Project Apollo',
  'Project Quantum',
  'Project Alpha',
  'Project Gamma'
];

const ProjectFilter = ({ onSelectionChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(['Project BlueStar']);
  const [selectAll, setSelectAll] = useState(false);

  const filteredOptions = PROJECT_OPTIONS.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionChange = (checkedValues) => {
    setSelectedOptions(checkedValues);
    setSelectAll(checkedValues.length === PROJECT_OPTIONS.length);
    onSelectionChange(checkedValues);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    const newSelection = checked ? PROJECT_OPTIONS : [];
    setSelectedOptions(newSelection);
    onSelectionChange(newSelection);
  };

  const handleClear = () => {
    setSelectedOptions([]);
    setSelectAll(false);
    onSelectionChange([]);
  };

  return (
    <div className={styles.project_filter}>
      <div className={styles.filter_header}>
        <h3 className={styles.filter_title}>Search Project</h3>
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
        <h4 className={styles.section_title}>Filter Project</h4>
        
        <div className={styles.options_list}>
          <Checkbox
            checked={selectAll}
            onChange={handleSelectAll}
            className={styles.checkbox_item}
          >
            Select All
          </Checkbox>

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

export default ProjectFilter;