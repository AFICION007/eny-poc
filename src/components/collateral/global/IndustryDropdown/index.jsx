import React, { useState } from 'react';
import { List } from 'antd';
import styles from './styles.module.css';

const INDUSTRY_OPTIONS = [
  "Industry Report 1",
  "Industry Report 2", 
  "Industry Report 3",
  "Industry Report 4",
  "Industry Report 5"
];

const IndustryFilter = ({ onSelectionChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    const newSelection = option === selectedOption ? null : option;
    setSelectedOption(newSelection);
    onSelectionChange(newSelection ? [newSelection] : []);
  };

  return (
    <div className={styles.vertical_filter}>
      <List
        dataSource={INDUSTRY_OPTIONS}
        renderItem={item => (
          <List.Item
            className={styles.list_item}
            onClick={() => handleSelect(item)}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default IndustryFilter;
