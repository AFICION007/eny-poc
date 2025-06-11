
import React, { useState } from 'react';
import { Typography, message } from 'antd';
import FeatureCard from '../FeatureCard';
import QueryInput from '../QueryInput'
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;


export const complianceFeatures = [
  {
    id: 1,
    title: "Search protocol",
    description: "Find and analyze specific protocols in our database",
    icon: "search"
  },
  {
    id: 2,
    title: "Legal Analysis",
    description: "Get insights on legal implications and requirements",
    icon: "file-text"
  },
  {
    id: 3,
    title: "Compliance Guide",
    description: "Navigate through compliance requirements and best practices",
    icon: "book"
  },
  {
    id: 4,
    title: "Chat with Documents",
    description: "Upload and analyze your own documents",
    icon: "message"
  }
];

export const sampleQueries = [
  "I am an AIF who wants to invest overseas, what compliances should I be aware of?",
  "What are the regulatory requirements for cross-border investments?",
  "How do I ensure compliance with foreign investment regulations?",
  "What documentation is required for overseas portfolio investments?"
];

const ComplianceAssistant = () => {
  // const [selectedFeature, setSelectedFeature] = useState(null);
  const navigate = useNavigate();

  // const handleFeatureClick = (feature) => {
  //   setSelectedFeature(feature);
  //   message.success(`Selected: ${feature.title}`);
  //   console.log('Feature selected:', feature);
  // };

  const handleQuerySubmit = (query) => {
    message.success('Query submitted successfully!');
    console.log('Query submitted:', query);
    // Here you would typically send the query to your backend
    navigate(`/collaterals/thread/1234`)
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={1} className={styles.mainTitle}>
          What can I help with?
        </Title>
        
        <QueryInput 
          onSubmit={handleQuerySubmit}
          placeholder={sampleQueries[0]}
        />
      </div>

      <div className={styles.featuresGrid}>
        {complianceFeatures.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            // onClick={handleFeatureClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ComplianceAssistant;