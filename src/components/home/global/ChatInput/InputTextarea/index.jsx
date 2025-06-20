import React, { useState } from "react";
import { Input, Dropdown } from "antd";

import styles from "../styles.module.css";

const InputTextarea = ({
  minRows,
  maxRows,
  value,
  onChange,
  onKeyDown,
  options,
  onClickOption,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (value) => {
    setOpen(value);
  };

  return (
    <Dropdown
      menu={{ items: options, onClick: onClickOption }}
      trigger={["click"]}
      open={open}
      onOpenChange={handleOpenChange}
      getPopupContainer={(triggerNode) =>
        triggerNode?.getRootNode()?.host ||
        triggerNode?.parentNode ||
        document.body
      }
      overlayClassName={styles.dropdown_menu}
    >
      <Input.TextArea
        autoSize={{ minRows, maxRows }}
        placeholder="Enter a Keyword or a Sentence to find People, Industry, Case Studies, etc."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`${styles.chat_box} ${styles.chat_textarea}`}
      ></Input.TextArea>
    </Dropdown>
  );
};

export default InputTextarea;
