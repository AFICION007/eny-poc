import React, { useState } from 'react';
import { List } from 'antd';
import styles from './styles.module.css';

const FILE_TYPE = ["PDF", "DOCX", "XLSX", "PPTX", "TXT"];


const CompanyFilter = ({ onSelectionChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    const newSelection = option === selectedOption ? null : option;
    setSelectedOption(newSelection);
    onSelectionChange(newSelection ? [newSelection] : []);
  };

  return (
    <div className={styles.vertical_filter}>
      <List
        dataSource={FILE_TYPE}
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

export default CompanyFilter;
