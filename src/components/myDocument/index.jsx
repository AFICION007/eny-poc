import React, { useState } from "react";
import { Input, Select, Dropdown } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import VerticalFilter from "../global/VerticalDropdown";
import SectorFilter from "../global/SectorDropdown";

import styles from "./styles.module.css";
import ProjectFilter from "./global/ProjectFilter";
import FolderSelector from "./global/FolderSelector";
import TabNavigation from "./global/TabNavigation";
import Documents from "./global/Documents";
import CustomSearchIcon from "./icons/search-icon";

const { Search } = Input;

const TAB_ITEMS = [
  {
    key: "relationship-notes",
    label: "Relationship Notes",
  },
  {
    key: "target-lists",
    label: "Target Lists",
  },
  {
    key: "market-screens",
    label: "Market Screens",
  },
  {
    key: "pitchbooks",
    label: "Pitchbooks",
  },
];

const DropdownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z"
      fill="#656579"
    />
  </svg>
);

const DocumentPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedVertical, setSelectedVertical] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");

  const handleSearch = (value) => {
    // logic
    setSearchValue(value);
  };

  const handleFolderSelect = (folderName) => {
    setSelectedFolder(folderName);
    console.log("Selected folder:", folderName);
    // logic
  };

  const verticalFilterMenu = (
    <VerticalFilter
      onSelectionChange={(selected) => {
        setSelectedVertical(selected.length > 0 ? selected.join(", ") : "");
      }}
    />
  );

  const sectorFilterMenu = (
    <SectorFilter
      onSelectionChange={(selected) => {
        setSelectedSector(selected.length > 0 ? selected.join(", ") : "");
      }}
    />
  );

  const projectFilterMenu = (
    <ProjectFilter
      onSelectionChange={(selected) => {
        setSelectedProject(
          selected.length > 0 ? selected.join(", ") : "Project BlueStar"
        );
      }}
    />
  );

  return (
    <div className={styles.document_page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Search My Documents</h1>
        <div className={styles.search_container}>
          <Input
            placeholder="Give me NDA for Bluestar"
            allowClear
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className={styles.search_input}
            suffix={<CustomSearchIcon />}
          />
        </div>

        <div className={styles.filters_container}>
          <div className={styles.dropdown_wrapper}>
            <span className={styles.dropdown_label}>Vertical</span>
            <Dropdown
              overlay={verticalFilterMenu}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className={styles.dropdown_button}>
                <span className={styles.dropdown_text}>
                  {selectedVertical || "Digital, Technology and Consumer"}
                </span>
                <div className={styles.icon_wrapper}>
                  <DropdownArrow className={styles.dropdown_arrow} />
                </div>
              </div>
            </Dropdown>
          </div>

          <div className={styles.dropdown_wrapper}>
            <span className={styles.dropdown_label}>Sector</span>
            <Dropdown
              overlay={sectorFilterMenu}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className={styles.dropdown_button}>
                <span className={styles.dropdown_text}>
                  {selectedSector || "B2B e-commerce"}
                </span>
                <div className={styles.icon_wrapper}>
                  <DropdownArrow className={styles.dropdown_arrow} />
                </div>
              </div>
            </Dropdown>
          </div>
          <div className={styles.dropdown_wrapper}>
            <span className={styles.dropdown_label}>Project</span>
            <Dropdown
              overlay={projectFilterMenu}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className={styles.dropdown_button}>
                <span className={styles.dropdown_text}>
                  {selectedProject || "Project BlueStar"}
                </span>
                <div className={styles.icon_wrapper}>
                  <DropdownArrow className={styles.dropdown_arrow} />
                </div>
              </div>
            </Dropdown>
          </div>
        </div>

        <div className={styles.folder_name}>
          <FolderSelector onFolderSelect={handleFolderSelect} />
        </div>

        <div className={styles.tab_navigator}>
          <TabNavigation TAB_ITEMS={TAB_ITEMS} />
        </div>

        <div className={styles.document}>
          <Documents />
        </div>
      </div>

      {/* <div className={styles.content_wrapper}>
                <div className={styles.section}>
                    <FolderSelector onFolderSelect={handleFolderSelect} />
                </div>
                <div className={styles.section}>
                    <TabNavigation />
                </div>
                <div className={styles.section}>
                    <Documents />
                </div>
            </div> */}
    </div>
  );
};

export default DocumentPage;
