import React, { useContext } from 'react';
import { Card, Typography, Space, Button, Input, message } from 'antd';
import {
  ArrowLeftOutlined,
  EyeOutlined,
  PaperClipOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import collateralContext from '../contexts/collateralContext';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.25 9.6C8.25 8.85442 8.85442 8.25 9.6 8.25H19.4C20.1456 8.25 20.75 8.85442 20.75 9.6V19.4C20.75 20.1456 20.1456 20.75 19.4 20.75H9.6C8.85442 20.75 8.25 20.1456 8.25 19.4V9.6ZM9.75 9.75V19.25H19.25V9.75H9.75Z" fill="#747480"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4.6C3.25 3.85442 3.85442 3.25 4.6 3.25H14.4C15.1456 3.25 15.75 3.85442 15.75 4.6V9C15.75 9.41421 15.4142 9.75 15 9.75C14.5858 9.75 14.25 9.41421 14.25 9V4.75H4.75V14.25H9C9.41421 14.25 9.75 14.5858 9.75 15C9.75 15.4142 9.41421 15.75 9 15.75H4.6C3.85442 15.75 3.25 15.1456 3.25 14.4V4.6Z" fill="#747480"/>
  </svg>
);

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

  const handleBack = () => navigate('/collaterals');

  const handleSubmit = () => {
    if (query.trim()) {
      console.log('Submitted:', query);
      message.success('Query submitted!');
      navigate('/collaterals/thread/123');
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
            placeholder="Type your query here..."
            className={styles.queryInput}
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
            <div className={styles.cardFooter}>
              <Button
                type="text"
                icon={<CopyIcon />}
                className={styles.copyButton}
                onClick={() => handleCopyText(item.docName)}
                aria-label="Copy document name"
              />
            </div>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default ChatResponsePage;
