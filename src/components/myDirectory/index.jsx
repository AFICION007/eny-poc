
import React, { useState } from 'react';
import { Input, Select, Dropdown } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import VerticalFilter from '../global/VerticalDropdown';
import SectorFilter from '../global/SectorDropdown';
import ProfileCard from './global/PersonCard';
import styles from './styles.module.css';



const { Search } = Input;

const DUMMY_PROFILES = [
  {
    id: 1,
    name: "Founder and CEO, Adendus",
    experience: "25+ years",
    previousRole: "ICICI Bank",
    education: "MBA Calcutta, B.Tech - IIT Kanpur",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Co-founder and CEO, Adendus",
    experience: "25+ years",
    previousRole: "ICICI Bank",
    education: "MBA Calcutta, B.Tech - IIT Kanpur",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Co-founder and CEO, Adendus",
    experience: "25+ years",
    previousRole: "ICICI Bank",
    education: "MBA Calcutta, B.Tech - IIT Kanpur",
    avatar: "/placeholder.svg"
  }
];

const DirectoryPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedVertical, setSelectedVertical] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(DUMMY_PROFILES);

  const handleSearch = (value) => {
    setSearchValue(value);
    // Filter profiles based on search value
    const filtered = DUMMY_PROFILES.filter(profile =>
      profile.name.toLowerCase().includes(value.toLowerCase()) ||
      profile.previousRole.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  const verticalFilterMenu = (
    <VerticalFilter
      onSelectionChange={(selected) => {
        setSelectedVertical(selected.length > 0 ? selected.join(', ') : '');
      }}
    />
  );

  const sectorFilterMenu = (
    <SectorFilter
      onSelectionChange={(selected) => {
        setSelectedSector(selected.length > 0 ? selected.join(', ') : '');
      }}
    />
  );

  return (
    <div className={styles.directory_page}>
      <div className={styles.top}>
        <div className={styles.header}>
          <h1 className={styles.title}>MY DIRECTORY</h1>
        </div>

        <div className={styles.filters_container}>
          <div className={styles.search_container}>
            <Input
              placeholder="Search"
              allowClear
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              className={styles.search_input}
              suffix={<SearchOutlined className={styles.search_icon} />}
            />
          </div>

          <div className={styles.dropdowns_container}>
            <div className={styles.dropdown_wrapper}>
              <span className={styles.dropdown_label}>Vertical</span>
              <Dropdown
                overlay={verticalFilterMenu}
                trigger={['click']}
                placement="bottomLeft"
              >
                <div className={styles.dropdown_button}>
                  <span className={styles.dropdown_text}>{selectedVertical}</span>
                  <DownOutlined className={styles.dropdown_arrow} />
                </div>
              </Dropdown>
            </div>

            <div className={styles.dropdown_wrapper}>
              <span className={styles.dropdown_label}>Sector</span>
              <Dropdown
                overlay={sectorFilterMenu}
                trigger={['click']}
                placement="bottomLeft"
                className={styles.dropdown}
              >
                <div className={styles.dropdown_button}>
                  <span className={styles.dropdown_text}>{selectedSector}</span>
                  <DownOutlined className={styles.dropdown_arrow} />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.results_container}>
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default DirectoryPage;






{/* <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className={styles.directory_search}
        /> */}