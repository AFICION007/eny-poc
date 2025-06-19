import React from "react";
import { Table } from "antd";

import LoadingTable from "../LoadingTable";

import styles from "./styles.module.css";
import Left from "../assets/table/Left";
import Right from "../assets/table/Right";

const CustomTable = ({
    tableObj,
    rowKey = null,
    rowSelection = null,
    onRow = () => {},
    scroll = {},
    pagination = {},
    loading = false,
    className = "",
    rowClassName = () => {},
    title = "",
    subtitle = "",
}) => {
    return (
    <div className={styles.tableContainer}>
    {(title || subtitle) && (
        <div className={styles.tableHeader}>
            {title && <h3 className={styles.table_title}>{title}</h3>}
            {subtitle && <p className={styles.table_subtitle}>{subtitle}</p>}
        </div>
    )}
    
    {loading ? (
        <LoadingTable columns={tableObj.columns} tableType="custom" />
    ) : (
        <Table
            {...tableObj}
            rowKey={rowKey}
            rowSelection={rowSelection}
            onRow={(record) => ({
                onClick: () => {
                  record.onRowClick?.();
                },
              })}                
            scroll={{ x: "max-content", ...scroll }}
            pagination={{
                simple: true,
                prevIcon: <Left />,
                nextIcon: <Right />,
                hideOnSinglePage: false,
                showSizeChanger: true,
                showQuickJumper: false,
                defaultPageSize: 10,
                total: pagination.total,
                current: pagination.current,
                onChange: pagination.onChange,
                rootClassName: styles.pagination,
                size: "small",
                ...pagination,
            }}
            className={`${styles.table} ${
                className && styles[`${className}_table`]
            }`}
            rowClassName={rowClassName}
        />
    )}
    </div>
)};

export default CustomTable;
