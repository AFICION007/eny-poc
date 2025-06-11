
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className={styles.profile_card}>
      <div className={styles.avatar_container}>
        <Avatar 
          size={64}
          src={profile.avatar}
          icon={<UserOutlined />}
          className={styles.avatar}
        />
      </div>
      
      <div className={styles.profile_info}>
        <h3 className={styles.profile_name}>{profile.name}</h3>
        <div className={styles.profile_details}>
          <p className={styles.detail_item}>
            <span className={styles.detail_label}>Experience:</span> {profile.experience}
          </p>
          <p className={styles.detail_item}>
            <span className={styles.detail_label}>Previously:</span> {profile.previousRole}
          </p>
          <p className={styles.detail_item}>
            <span className={styles.detail_label}>Education:</span> {profile.education}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;