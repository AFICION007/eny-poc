
import React from 'react';
import { Card } from 'antd';
import { 
  SearchOutlined, 
  FileTextOutlined, 
  BookOutlined, 
  MessageOutlined 
} from '@ant-design/icons';
import styles from './styles.module.css';

const iconMap = {
  search: SearchOutlined,
  'file-text': FileTextOutlined,
  book: BookOutlined,
  message: MessageOutlined
};

const FeatureCard = ({ feature, onClick }) => {
  const IconComponent = iconMap[feature.icon];
  
  return (
    <Card 
      className={styles.featureCard}
      hoverable
      onClick={() => onClick(feature)}
    >
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>{feature.title}</h3>
          <p className={styles.description}>{feature.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;