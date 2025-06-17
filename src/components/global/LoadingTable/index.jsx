import React, { useMemo } from "react";
import { Skeleton } from "antd";


import styles from "./styles.module.css";
import CustomTable from "../CustomTable";

const LoadingTable = ({ columns, tableType, numColumns = 6, numRows = 10 }) => {
    const skeletonButton = useMemo(
        () => (
            <Skeleton.Input
                style={{ width: "100%" }}
                size="small"
                className={styles.skeleton}
            />
        ),
        [],
    );

    const fallbackSkeletonColumns = useMemo(
        () =>
            Array.from({ length: numColumns }).map((_, index) => ({
                title: skeletonButton,
                dataIndex: `col-${index}`,
                render: () => skeletonButton,
            })),
        [numColumns, skeletonButton],
    );

    const skeletonColumns = columns
        ? columns?.map((column) => ({
              ...column,
              render: () => skeletonButton,
          }))
        : fallbackSkeletonColumns;

    const skeletonData = useMemo(
        () =>
            Array.from({ length: numRows }).map((_, rowIndex) => {
                const rowSkeleton = {};
                skeletonColumns.forEach((col) => {
                    rowSkeleton[col.dataIndex] = "";
                });

                return { key: rowIndex, ...rowSkeleton };
            }),
        [numRows, skeletonColumns],
    );

    return(
        <CustomTable
            tableObj={{ columns: skeletonColumns, dataSource: skeletonData }}
        />
)};

export default LoadingTable;
