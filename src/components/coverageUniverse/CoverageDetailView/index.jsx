import React, { useState } from 'react'
import styles from "./styles.module.css"
import { Button } from 'antd'
import TabNavigation from '../../myDocument/global/TabNavigation';
import { useNavigate } from 'react-router-dom';

const LeftArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4419 4.55806C10.686 4.80214 10.686 5.19786 10.4419 5.44194L6.50888 9.375H15.4167C15.7618 9.375 16.0417 9.65482 16.0417 10C16.0417 10.3452 15.7618 10.625 15.4167 10.625H6.50888L10.4419 14.5581C10.686 14.8021 10.686 15.1979 10.4419 15.4419C10.1979 15.686 9.80214 15.686 9.55806 15.4419L4.55806 10.4419C4.31398 10.1979 4.31398 9.80214 4.55806 9.55806L9.55806 4.55806C9.80214 4.31398 10.1979 4.31398 10.4419 4.55806Z" fill="#3A3A4A" />
  </svg>
)

const TAB_ITEMS = [
  {
    key: 'company-info',
    label: 'Company Information',
  },
  {
    key: 'leadership',
    label: 'Leadership',
  },
  {
    key: 'coverage-metrics',
    label: 'Coverage Metrics',
  },
  {
    key: 'transaction-history',
    label: 'Transaction History',
  },
];

const article = {
  imageUrl: '/Swiggy.png',
  description: 'Swiggy Limited is a leading player in the quick commerce sector, headquartered in Bengaluru, Karnataka, India, and currently operates in over 580 cities across the country. The company is listed on the National Stock Exchange (NSE) under the ticker SWIGGY.NS, having gone public in November 2024. As of the latest available data, Swiggy has a market capitalization of ₹73,318 crore (approximately $8.66 billion USD). The company reported revenues of ₹15,227 crore ($1.79 billion USD) and a net loss of ₹2,403.9 crore ($300 million USD).'
}

const CoverageDetailView = () => {
  const [tab, setTab] = useState(TAB_ITEMS[0]?.key)
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/coverage-universe');
  };

  return (
    <div className={styles.detail_page}>
      <div className={styles.content}>
        <Button
          type="text"
          icon={<LeftArrow className={styles.left_arrow} />}
          onClick={handleBack}
          className={styles.backButton}
        />
        <span className={styles.title}>Swiggy</span>

        <div className={styles.tab_navigator}>
          <TabNavigation TAB_ITEMS={TAB_ITEMS} onTabChange={setTab} />
        </div>

        {tab === TAB_ITEMS[0].key && (
          <>
            <div
              className={styles.article_image}
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            />
            <p className={styles.article_description}>
              {article.description}
            </p>
          </>
        )}

      </div>
    </div>
  )
}

export default CoverageDetailView