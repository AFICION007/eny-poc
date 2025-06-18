import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import styles from "./styles.module.css";

// size: small, medium, large
const SpinLoader = ({ size = "medium" }) => {
    return (
        <Spin
            indicator={<LoadingOutlined spin />}
            size="large"
            className={`${styles.spin} ${styles[`${size}_spin`]}`}
        />
    );
};

export default SpinLoader;
