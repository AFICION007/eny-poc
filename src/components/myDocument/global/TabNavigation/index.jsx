
import React, { useState } from 'react';
import { Tabs } from 'antd';
import styles from './styles.module.css';

const TAB_ITEMS = [
  {
    key: 'relationship-notes',
    label: 'Relationship Notes',
  },
  {
    key: 'target-lists',
    label: 'Target Lists',
  },
  {
    key: 'market-screens',
    label: 'Market Screens',
  },
  {
    key: 'pitchbooks',
    label: 'Pitchbooks',
  },
];

const TabNavigation = ({ onTabChange, defaultActiveKey = 'relationship-notes' }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

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