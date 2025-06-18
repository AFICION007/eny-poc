
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className={styles.profile_card}>
      <Avatar
        size={64}
        src={profile.avatar}
        icon={<UserOutlined />}
        className={styles.avatar}
      />

      <div className={styles.profile_info}>
        <p className={styles.profile_name}>{profile.name}</p>
        <div className={styles.profile_details}>
          <p className={styles.detail_item}>
            Experience:{profile.experience}
          </p>
          <p className={styles.detail_item}>
            Previously:{profile.previousRole}
          </p>
          <p className={styles.detail_item}>
            Education:{profile.education}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;