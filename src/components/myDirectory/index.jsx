
import React, { useState } from 'react';
import { Input, Select, Dropdown } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import VerticalFilter from '../global/VerticalDropdown';
import SectorFilter from '../global/SectorDropdown';
import ProfileCard from './global/PersonCard';
import styles from './styles.module.css';
import CustomSearchIcon from './icons/search-icon';


const { Search } = Input;

const DropdownArrow = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z" fill="#656579" />
  </svg>
)

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
      <div className={styles.header}>
        <h1 className={styles.title}>MY DIRECTORY</h1>
        <div className={styles.search_container}>
          <Input
            placeholder="Search for people"
            allowClear
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className={styles.search_input}
            suffix={<CustomSearchIcon className={styles.search_icon} />}
          />
        </div>
        <div className={styles.filter_wrapper}>
          <div className={styles.dropdown_wrapper}>

            <Dropdown
              overlay={verticalFilterMenu}
              trigger={['click']}
              placement="bottomLeft"
            >
              <div className={styles.dropdown_button}>
                <div className={styles.span_wrapper}>
                  <span className={styles.dropdown_label}>Vertical</span>
                  <span className={styles.dropdown_text}>{selectedVertical || "Digital, Technology and Consumer"}</span>
                </div>
                <div className={styles.icon_wrapper}>
                  <DropdownArrow className={styles.dropdown_arrow} />
                </div>
              </div>
            </Dropdown>
          </div>

          <div className={styles.dropdown_wrapper}>
            <Dropdown
              overlay={sectorFilterMenu}
              trigger={['click']}
              placement="bottomLeft"
              className={styles.dropdown}
            >
              <div className={styles.dropdown_button}>
                <div className={styles.span_wrapper}>
                  <span className={styles.dropdown_label}>Sector</span>
                  <span className={styles.dropdown_text}>{selectedSector || "B2B e-commerce"}</span>
                </div>
                <div className={styles.icon_wrapper}>
                  <DropdownArrow className={styles.dropdown_arrow} />
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* <div className={styles.content}>
        <div className={styles.results_container}>
          {filteredProfiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div> */}

      <div className={styles.picture_section}>
        <img
          src="/directory1.png"
          alt="Organization Chart"
        />
      </div>
    </div>
  );
};

export default DirectoryPage;


