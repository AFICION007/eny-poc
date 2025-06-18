
import React, { useState } from 'react';
import { Tabs } from 'antd';
import styles from './styles.module.css';



const TabNavigation = ({ onTabChange, defaultActiveKey ,TAB_ITEMS }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || TAB_ITEMS[0]?.key);

  const handleTabChange = (key) => {
    setActiveKey(key);
    if (onTabChange) {
      onTabChange(key);
    }
  };

  return (
    <div className={styles.tab_navigation}>
      <Tabs
        activeKey={activeKey}
        onChange={handleTabChange}
        items={TAB_ITEMS}
        className={styles.custom_tabs}
        size="large"
      />
    </div>
  );
};

export default TabNavigation;