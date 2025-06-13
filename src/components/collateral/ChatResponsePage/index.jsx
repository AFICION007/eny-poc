import React, { useContext, useState } from 'react';
import { Card, Typography, Space, Button, Input, message } from 'antd';
import {
  ArrowLeftOutlined,
  EyeOutlined,
  CopyOutlined,
  PaperClipOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import collateralContext from '../contexts/collateralContext';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const complianceData = [
  {
    id: 1,
    type: 'section',
    title: '11. Documentation',
    content: `Maintain proper documentation for all overseas investments...`,
    source: null,
    docName: 'Documentation compliance information',
  },
  {
    id: 2,
    type: 'info',
    content: `The maximum limit for overseas investments by AIFs cannot exceed 25% of the investible funds...`,
    source: {
      text: 'SEBI AIF Regulations PDF (Page 10)',
      doc: 'SEBI AIF Regulations FAQ',
    },
    docName: 'Investment limit information',
  },
  {
    id: 3,
    type: 'bullets',
    bullets: [
      'AIFs have a time limit of 6 months from the date of SEBI approval...',
      'Unutilized limits may be reallocated by SEBI to other applicants.',
    ],
    source: {
      text: 'SEBI AIF Time Limits (Page 10)',
      doc: 'SEBI AIF Time Limits',
    },
    docName: 'Time limit information',
  },
  {
    id: 4,
    type: 'info',
    content: `Category I or II AIFs cannot create encumbrance on their foreign investments.`,
    source: {
      text: 'SEBI Circular 2024-04-26 (Page 3)',
      doc: 'SEBI Encumbrance Circular',
    },
    docName: 'Encumbrance restriction information',
  },
];

const ChatResponsePage = () => {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(collateralContext);
  // const placeholder = 'Type your question about AIF compliances...';

  const handleBack = () => navigate('/collaterals');

  const handleSubmit = () => {
    if (query.trim()) {
      console.log('Submitted:', query);
      message.success('Query submitted!');
      setQuery('');
    } else {
      message.warning('Please enter a query.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleViewDocument = (docName) => {
    console.log('View document:', docName);
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    message.success('Copied to clipboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          className={styles.backButton}
        >
          Back
        </Button>
        <Title level={2} className={styles.mainTitle}>
          What can I help with?
        </Title>
      </div>
      <div className={styles.queryContainer}>
        <div className={styles.inputWrapper}>
          <PaperClipOutlined className={styles.attachIcon} />
          <TextArea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={query}
            className={styles.queryInput}
            // autoSize={{ minRows: 1, maxRows: 4 }}
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
      <Space direction="vertical" size="large" className={styles.content}>
        {complianceData.map((item) => (
          <Card key={item.id} className={styles.infoCard}>
            {item.type === 'section' && (
              <>
                <Title level={4} className={styles.sectionNumber}>
                  {item.title}
                </Title>
                <Paragraph className={styles.sectionDescription}>
                  {item.content}
                </Paragraph>
              </>
            )}
            {item.type === 'info' && (
              <Paragraph className={styles.limitText}>
                {item.content}
              </Paragraph>
            )}
            {item.type === 'bullets' && (
              <div className={styles.bulletPoints}>
                {item.bullets.map((point, index) => (
                  <Text key={index}>• {point}<br /></Text>
                ))}
              </div>
            )}
            {item.source && (
              <div className={styles.sourceInfo}>
                <Text type="secondary" className={styles.sourceText}>
                  Source: {item.source.text}
                </Text>
                <Button
                  type="link"
                  icon={<EyeOutlined />}
                  onClick={() => handleViewDocument(item.source.doc)}
                  className={styles.viewDocButton}
                >
                  View document
                </Button>
              </div>
            )}
            <Button
              type="text"
              icon={<CopyOutlined />}
              className={styles.copyButton}
              onClick={() => handleCopyText(item.docName)}
            />
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default ChatResponsePage;
