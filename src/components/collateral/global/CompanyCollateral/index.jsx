import React, { useState } from 'react';
import { List } from 'antd';
import styles from './styles.module.css';

const COLLATERAL_OPTIONS = [
  'Financial Results',
  'Reports and Publications',
];

const CollateralFilter = ({ onSelectionChange }) => {
const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    const newSelection = option === selectedOption ? null : option;
    setSelectedOption(newSelection);
    onSelectionChange(newSelection ? [newSelection] : []);
  };

  return (
    <div className={styles.vertical_filter}>
      <List
        dataSource={COLLATERAL_OPTIONS}
        renderItem={item => (
          <List.Item
            className={`${styles.list_item} ${selectedOption === item ? styles.selected_item : ''}`}
            onClick={() => handleSelect(item)}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default CollateralFilter;
