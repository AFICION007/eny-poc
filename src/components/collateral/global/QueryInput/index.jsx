
import React, { useContext, useState } from 'react';
import { Input, Button } from 'antd';
import { SendOutlined, PaperClipOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import collateralContext from '../../contexts/collateralContext';

const QueryInput = ({ onSubmit, placeholder }) => {
  // const [query, setQuery] = useState('');
  const {query, setQuery} = useContext(collateralContext);
  console.log(query);
  
  const handleSubmit = () => {
    if (query.trim()) {
      onSubmit(query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={styles.queryContainer}>
      <div className={styles.inputWrapper}>
        <PaperClipOutlined className={styles.attachIcon} />
        <Input.TextArea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className={styles.queryInput}
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSubmit}
          className={styles.sendButton}
          disabled={!query.trim()}
        />
      </div>
    </div>
  );
};

export default QueryInput;