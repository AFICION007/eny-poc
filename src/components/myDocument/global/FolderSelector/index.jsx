import React, { useState, useRef, useEffect } from 'react';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const FOLDER_DATA = [
  { name: 'Organization', count: 4 },
  { name: 'Mandate', count: 3 },
  { name: 'Preparation', count: 5 },
  { name: 'Marketing', count: 5 },
  { name: 'Bidding', count: 4 },
  { name: 'Documentation', count: 5 },
  { name: 'DueDiligence', count: 2 },
  { name: 'Closing', count: 5 },
  { name: 'Closing1', count: 6 },
  { name: 'Closing2', count: 7 },
  { name: 'Closing3', count: 8 },
  { name: 'Closing4', count: 9 },
];

const FolderSelector = ({ onFolderSelect }) => {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
    if (onFolderSelect) {
      onFolderSelect(folderName);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className={styles.folder_selector}>
        <p className={styles.selector_title}>Select Folder Name</p>
      
      <div className={styles.folders_container}>
        {showLeftArrow && (
          <div className={styles.scroll_indicator} onClick={handleScrollLeft}>
            <ArrowLeftOutlined className={styles.scroll_arrow} />
          </div>
        )}
        
        <div className={styles.folders_list} ref={scrollContainerRef}>
          {FOLDER_DATA.map((folder) => (
            <div
              key={folder.name}
              className={`${styles.folder_item} ${
                selectedFolder === folder.name ? styles.folder_item_selected : ''
              }`}
              onClick={() => handleFolderClick(folder.name)}
            >
              <span className={styles.folder_name}>{folder.name}</span>
              <div className={styles.folder_count}>
                <span className={styles.count}>{folder.count}</span>
              </div>
            </div>
          ))}
        </div>
        
        {showRightArrow && (
          <div className={styles.scroll_indicator} onClick={handleScrollRight}>
            <ArrowRightOutlined className={styles.scroll_arrow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderSelector;
