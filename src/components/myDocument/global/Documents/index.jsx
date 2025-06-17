import React, { useState } from 'react';
import { Table, Checkbox, Button, DatePicker, Select, Space, Modal, Upload, Progress, message, Dropdown } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
    UploadOutlined,
    EyeOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import styles from './styles.module.css';
import DocumentCard from './DocumentCard'

const { RangePicker } = DatePicker;

const DropdownArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 7.05806C4.80214 6.81398 5.19786 6.81398 5.44194 7.05806L10 11.6161L14.5581 7.05806C14.8021 6.81398 15.1979 6.81398 15.4419 7.05806C15.686 7.30214 15.686 7.69786 15.4419 7.94194L10.4419 12.9419C10.1979 13.186 9.80214 13.186 9.55806 12.9419L4.55806 7.94194C4.31398 7.69786 4.31398 7.30214 4.55806 7.05806Z" fill="#656579" />
    </svg>
)

const DOCUMENTS = [
    {
        title: "Swiggy_RelationshipNotes_2024-11-10.docx",
        url: "/MINSHU_SHAW_CV_2025.pdf",
    },
    {
        title: "Flipkart_MeetingNotes_2025-01-15.docx",
        url: "/flipkart_meeting_notes.docx",
    },
    {
        title: "Zomato_BusinessPlan_2025-03-01.pdf",
        url: "/zomato_business_plan.pdf",
    },
    {
        title: "Amazon_StrategyDeck_2025-04-12.pptx",
        url: "/amazon_strategy_deck.pptx",
    },
    {
        title: "Meesho_ClientFeedback_2025-02-20.docx",
        url: "/meesho_feedback.docx",
    },
    {
        title: "Nykaa_AnnualSummary_2024-12-05.pdf",
        url: "/nykaa_annual_summary.pdf",
    },
];



const FILE_TYPE_OPTIONS = [
    { label: 'Word files', value: 'word' },
    { label: 'Excel files', value: 'excel' },
    { label: 'Power Point files', value: 'powerpoint' },
    { label: 'PDF files', value: 'pdf' },
];

const INITIAL_DOCUMENTS = [
    {
        key: '1',
        documentName: 'Swiggy_RelationshipNotes_2024-11-10.pdf',
        format: 'PDF',
        sharedBy: 'Rahul Sharma',
        sharedDate: '05-02-2024',
        dateModified: '05-02-2024',
    },
    {
        key: '2',
        documentName: 'RelNotes_Swiggy_Origination_Q3FY24.pdf',
        format: 'PDF',
        sharedBy: 'Aditya Kale',
        sharedDate: '05-02-2024',
        dateModified: '05-02-2024',
    },
    {
        key: '3',
        documentName: '4QFY24 review_Swiggy (Rating_Revised to ADD, TP_ Rs.210).pdf',
        format: 'PDF',
        sharedBy: 'Mohit Khanna',
        sharedDate: '05-02-2024',
        dateModified: '05-02-2024',
    },
    {
        key: '4',
        documentName: '3QFY25 review_Swiggy (Rating_ADD, TP_ Rs. 255).pdf',
        format: 'PDF',
        sharedBy: 'Mohit Khanna',
        sharedDate: '05-02-2024',
        dateModified: '05-02-2024',
    },
];

const Documents = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [fileType, setFileType] = useState('');
    const [selectedFileTypes, setSelectedFileTypes] = useState(['pdf']);
    const [selectAll, setSelectAll] = useState(false);
    const [documents, setDocuments] = useState(INITIAL_DOCUMENTS);
    const [uploadModalVisible, setUploadModalVisible] = useState(false);
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [modal, contextHolder] = Modal.useModal();

    const dateFormat = "YYYY/MM/DD"
    const fileTypeFilterMenu = (
        <></>
    );

    const handleDelete = () => {
        modal.confirm({
            title: 'Delete Document?',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to delete selected document?',
            okText: 'Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk() {
                const remaining = documents.filter((doc) => !selectedRowKeys.includes(String(doc.key)));
                setDocuments(remaining);
                setSelectedRowKeys([]);
            },
        });
    };

    const handleFileTypeChange = (checkedValues) => {
        setSelectedFileTypes(checkedValues);
    };

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        const allFileTypes = checked ? FILE_TYPE_OPTIONS.map((option) => option.value) : [];
        setSelectedFileTypes(allFileTypes);
    };

    const handleDownload = () => {
        selectedRowKeys.forEach((key) => {
            const doc = documents.find((d) => String(d.key) === String(key));
            if (doc) {
                const blob = new Blob([`You downloaded ${doc.documentName}`], { type: 'text/plain' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = doc.documentName;
                link.click();
            }
        });
    };

    const handleUploadFiles = () => {
        setUploading(true);
        setUploadProgress(0);

        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    const newDocs = uploadingFiles.map((file, index) => ({
                        key: `${Date.now()}-${index}`,
                        documentName: file.name,
                        format: file.name.split('.').pop().toUpperCase(),
                        sharedBy: 'You',
                        sharedDate: new Date().toLocaleDateString('en-GB'),
                        dateModified: new Date().toLocaleDateString('en-GB'),
                    }));
                    setDocuments((prevDocs) => [...prevDocs, ...newDocs]);
                    setUploading(false);
                    setUploadingFiles([]);
                    setUploadModalVisible(false);
                    message.success('Files uploaded successfully');
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    const columns = [
        {
            title: 'Document Name',
            dataIndex: 'documentName',
            className: styles.document_name_column,
        },
        {
            title: 'Format',
            dataIndex: 'format',
            width: 100,
        },
        {
            title: 'Shared by',
            dataIndex: 'sharedBy',
            width: 150,
            render: (text) => (
                <div className={styles.shared_by}>
                    <div className={styles.shared_by_text}>{text}</div>
                    <div className={styles.user_icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <mask id="path-1-inside-1_46821_27733" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9331 12.1377C13.1376 12.7402 13.6718 13.17 14.2984 13.17C15.1017 13.17 15.753 12.4637 15.753 11.5925V7.98688H12.9206L12.8958 6.74744L11.7524 7.01122C11.8293 6.89466 11.9307 6.79969 12.0483 6.73422C12.1658 6.66874 12.2961 6.63464 12.4282 6.63477H16.1686C16.389 6.63477 16.6004 6.72974 16.7563 6.89878C16.9122 7.06783 16.9998 7.29711 16.9998 7.53617V11.5925C16.9998 13.2104 15.7903 14.5221 14.2984 14.5221C13.6012 14.5231 12.9308 14.2308 12.4283 13.7066L12.9331 12.1377Z" />
                            </mask>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9331 12.1377C13.1376 12.7402 13.6718 13.17 14.2984 13.17C15.1017 13.17 15.753 12.4637 15.753 11.5925V7.98688H12.9206L12.8958 6.74744L11.7524 7.01122C11.8293 6.89466 11.9307 6.79969 12.0483 6.73422C12.1658 6.66874 12.2961 6.63464 12.4282 6.63477H16.1686C16.389 6.63477 16.6004 6.72974 16.7563 6.89878C16.9122 7.06783 16.9998 7.29711 16.9998 7.53617V11.5925C16.9998 13.2104 15.7903 14.5221 14.2984 14.5221C13.6012 14.5231 12.9308 14.2308 12.4283 13.7066L12.9331 12.1377Z" fill="#2E2E38" />
                            <path d="M12.9331 12.1377L14.3534 11.6555L12.8946 7.35937L11.5051 11.6784L12.9331 12.1377ZM15.753 7.98688H17.253V6.48688H15.753V7.98688ZM12.9206 7.98688L11.4209 8.01692L11.4503 9.48688H12.9206V7.98688ZM12.8958 6.74744L14.3954 6.7174L14.3584 4.87058L12.5585 5.28584L12.8958 6.74744ZM11.7524 7.01122L10.5003 6.18537L8.43564 9.31584L12.0897 8.47282L11.7524 7.01122ZM12.4282 6.63477L12.4268 8.13477H12.4282V6.63477ZM14.2984 14.5221V13.0221L14.2962 13.0221L14.2984 14.5221ZM12.4283 13.7066L11.0004 13.2473L10.7264 14.0989L11.3456 14.7447L12.4283 13.7066ZM12.9331 12.1377L11.5127 12.62C11.8961 13.7493 12.947 14.67 14.2984 14.67V13.17V11.67C14.3147 11.67 14.3318 11.673 14.3469 11.6783C14.3613 11.6834 14.3696 11.689 14.3723 11.6911C14.3765 11.6943 14.3635 11.6852 14.3534 11.6555L12.9331 12.1377ZM14.2984 13.17V14.67C16.0424 14.67 17.253 13.1753 17.253 11.5925H15.753H14.253C14.253 11.6525 14.2312 11.6836 14.2242 11.6911C14.2212 11.6944 14.2248 11.6892 14.2392 11.6826C14.2551 11.6753 14.2766 11.67 14.2984 11.67V13.17ZM15.753 11.5925H17.253V7.98688H15.753H14.253V11.5925H15.753ZM15.753 7.98688V6.48688H12.9206V7.98688V9.48688H15.753V7.98688ZM12.9206 7.98688L14.4203 7.95683L14.3954 6.7174L12.8958 6.74744L11.3961 6.77749L11.4209 8.01692L12.9206 7.98688ZM12.8958 6.74744L12.5585 5.28584L11.4152 5.54961L11.7524 7.01122L12.0897 8.47282L13.233 8.20905L12.8958 6.74744ZM11.7524 7.01122L13.0046 7.83706C12.9541 7.91375 12.8792 7.98835 12.7783 8.04461L12.0483 6.73422L11.3183 5.42383C10.9822 5.61104 10.7046 5.87557 10.5003 6.18537L11.7524 7.01122ZM12.0483 6.73422L12.7783 8.04461C12.6764 8.10133 12.5555 8.13488 12.4268 8.13477L12.4282 6.63477L12.4296 5.13477C12.0366 5.1344 11.6552 5.23615 11.3183 5.42383L12.0483 6.73422ZM12.4282 6.63477V8.13477H16.1686V6.63477V5.13477H12.4282V6.63477ZM16.1686 6.63477V8.13477C15.9501 8.13477 15.7679 8.03956 15.6536 7.91563L16.7563 6.89878L17.8591 5.88194C17.433 5.41991 16.8279 5.13477 16.1686 5.13477V6.63477ZM16.7563 6.89878L15.6536 7.91563C15.5431 7.79577 15.4998 7.65744 15.4998 7.53617H16.9998H18.4998C18.4998 6.93677 18.2813 6.33988 17.8591 5.88194L16.7563 6.89878ZM16.9998 7.53617H15.4998V11.5925H16.9998H18.4998V7.53617H16.9998ZM16.9998 11.5925H15.4998C15.4998 12.4988 14.8497 13.0221 14.2984 13.0221V14.5221V16.0221C16.7309 16.0221 18.4998 13.922 18.4998 11.5925H16.9998ZM14.2984 14.5221L14.2962 13.0221C14.0273 13.0225 13.7433 12.9108 13.5111 12.6685L12.4283 13.7066L11.3456 14.7447C12.1183 15.5507 13.1751 16.0237 14.3005 16.0221L14.2984 14.5221ZM12.4283 13.7066L13.8562 14.166L14.361 12.5971L12.9331 12.1377L11.5051 11.6784L11.0004 13.2473L12.4283 13.7066Z" fill="#2E2E38" mask="url(#path-1-inside-1_46821_27733)" />
                            <mask id="path-3-inside-2_46821_27733" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15625 12.4939C5.15625 14.983 7.01699 17.001 9.31223 17.001C11.6075 17.001 13.4682 14.983 13.4682 12.4939V7.08547C13.4682 6.96594 13.4244 6.8513 13.3465 6.76677C13.2685 6.68225 13.1628 6.63477 13.0526 6.63477H8.06543V7.98688H12.2214V12.4939C12.2214 14.2363 10.9189 15.6488 9.31223 15.6488C7.70553 15.6488 6.40304 14.2363 6.40304 12.4939H5.15625Z" />
                            </mask>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15625 12.4939C5.15625 14.983 7.01699 17.001 9.31223 17.001C11.6075 17.001 13.4682 14.983 13.4682 12.4939V7.08547C13.4682 6.96594 13.4244 6.8513 13.3465 6.76677C13.2685 6.68225 13.1628 6.63477 13.0526 6.63477H8.06543V7.98688H12.2214V12.4939C12.2214 14.2363 10.9189 15.6488 9.31223 15.6488C7.70553 15.6488 6.40304 14.2363 6.40304 12.4939H5.15625Z" fill="#2E2E38" />
                            <path d="M5.15625 12.4939V10.9939H3.65625V12.4939H5.15625ZM8.06543 6.63477V5.13477H6.56543V6.63477H8.06543ZM8.06543 7.98688H6.56543V9.48688H8.06543V7.98688ZM12.2214 7.98688H13.7214V6.48688H12.2214V7.98688ZM6.40304 12.4939H7.90304V10.9939H6.40304V12.4939ZM5.15625 12.4939H3.65625C3.65625 15.6946 6.07635 18.501 9.31223 18.501V17.001V15.501C7.95762 15.501 6.65625 14.2715 6.65625 12.4939H5.15625ZM9.31223 17.001V18.501C12.5481 18.501 14.9682 15.6946 14.9682 12.4939H13.4682H11.9682C11.9682 14.2715 10.6668 15.501 9.31223 15.501V17.001ZM13.4682 12.4939H14.9682V7.08547H13.4682H11.9682V12.4939H13.4682ZM13.4682 7.08547H14.9682C14.9682 6.6056 14.7936 6.12335 14.4492 5.74993L13.3465 6.76677L12.2437 7.78362C12.0553 7.57924 11.9682 7.32627 11.9682 7.08547H13.4682ZM13.3465 6.76677L14.4492 5.74993C14.1011 5.37242 13.6017 5.13477 13.0526 5.13477V6.63477V8.13477C12.724 8.13477 12.436 7.99208 12.2437 7.78362L13.3465 6.76677ZM13.0526 6.63477V5.13477H8.06543V6.63477V8.13477H13.0526V6.63477ZM8.06543 6.63477H6.56543V7.98688H8.06543H9.56543V6.63477H8.06543ZM8.06543 7.98688V9.48688H12.2214V7.98688V6.48688H8.06543V7.98688ZM12.2214 7.98688H10.7214V12.4939H12.2214H13.7214V7.98688H12.2214ZM12.2214 12.4939H10.7214C10.7214 13.5248 9.9783 14.1488 9.31223 14.1488V15.6488V17.1488C11.8596 17.1488 13.7214 14.9479 13.7214 12.4939H12.2214ZM9.31223 15.6488V14.1488C8.64616 14.1488 7.90304 13.5248 7.90304 12.4939H6.40304H4.90304C4.90304 14.9479 6.76489 17.1488 9.31223 17.1488V15.6488ZM6.40304 12.4939V10.9939H5.15625V12.4939V13.9939H6.40304V12.4939Z" fill="#2E2E38" mask="url(#path-3-inside-2_46821_27733)" />
                            <path d="M4.53258 10.2395V7.08454M4.53258 7.08454H3.07799M4.53258 7.08454H5.98717M11.286 3.02817C11.286 4.14829 10.4487 5.05633 9.41586 5.05633C8.38298 5.05633 7.54567 4.14829 7.54567 3.02817C7.54567 1.90804 8.38298 1 9.41586 1C10.4487 1 11.286 1.90804 11.286 3.02817ZM16.0654 3.81692C16.0654 4.50144 15.5537 5.05635 14.9225 5.05635C14.2913 5.05635 13.7796 4.50144 13.7796 3.81692C13.7796 3.13239 14.2913 2.57748 14.9225 2.57748C15.5537 2.57748 16.0654 3.13239 16.0654 3.81692ZM1.4156 4.83102H7.64956C7.87909 4.83102 8.06516 5.0328 8.06516 5.28172V12.0423C8.06516 12.2912 7.87909 12.493 7.64956 12.493H1.4156C1.18607 12.493 1 12.2912 1 12.0423V5.28172C1 5.0328 1.18607 4.83102 1.4156 4.83102Z" stroke="#2E2E38" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            ),
        },
        {
            title: 'Shared Date',
            dataIndex: 'sharedDate',
            width: 120,
        },
        {
            title: 'Date Modified',
            dataIndex: 'dateModified',
            width: 120,
        },
        {
            title: 'Action',
            key: 'action',
            width: 150,
            render: () => (
                <Button type="text" icon={<EyeOutlined />} className={styles.action_button}>
                    Button CTA
                </Button>
            ),
        },
    ];

    return (
        <div className={styles.documents_container}>
            <h2 className={styles.documents_title}>Documents</h2>
            <div className={styles.dropdown_wrapper}>
                <span className={styles.dropdown_label}>File Type</span>
                <Dropdown
                    overlay={fileTypeFilterMenu}
                    trigger={['click']}
                    placement="bottomLeft"
                >
                    <div className={styles.dropdown_button}>
                        <span className={styles.dropdown_text}>{fileType || "PDF"}</span>
                        <div className={styles.icon_wrapper}>
                            <DropdownArrow className={styles.dropdown_arrow} />
                        </div>
                    </div>
                </Dropdown>
            </div>

            <RangePicker className={styles.date_picker} format={dateFormat} />

            <div className={styles.document_section}>
                <div className={styles.document_grid}>
                    {DOCUMENTS.map((doc) => (
                        <div className={styles.card_wrapper} key={doc.title}>
                            <DocumentCard title={doc.title} url={doc.url} />
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className={styles.sidebar}>
                <h3 className={styles.section_title}>Select File Type</h3>
                <div className={styles.select_all_wrapper}>
                    <Checkbox
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className={styles.select_all_checkbox}
                    >
                        Select All
                    </Checkbox>
                </div>
                <div className={styles.divider}></div>

                <Checkbox.Group
                    value={selectedFileTypes}
                    onChange={handleFileTypeChange}
                    className={styles.checkbox_group}
                >
                    {FILE_TYPE_OPTIONS.map((option) => (
                        <Checkbox key={option.value} value={option.value} className={styles.file_type_checkbox}>
                            {option.label}
                        </Checkbox>
                    ))}
                </Checkbox.Group>
            </div> */}
            {/* <div className={styles.main_content}>
                <div className={styles.actions_toolbar}>
                    <span className={styles.actions_label}>Actions:</span>
                    <div className={styles.action_btn_wrap}>
                        <Button className={styles.action_btn} icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.875 17.5C1.875 17.1549 2.15482 16.875 2.5 16.875H17.5C17.8452 16.875 18.125 17.1549 18.125 17.5C18.125 17.8452 17.8452 18.125 17.5 18.125H2.5C2.15482 18.125 1.875 17.8452 1.875 17.5Z" fill="#4D4D5C" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.1086 7.06673C17.3527 6.82265 17.3527 6.42693 17.1086 6.18285L12.9838 2.05806C12.7397 1.81398 12.344 1.81398 12.0999 2.05806L5.07074 9.08725C4.79725 9.36074 4.64361 9.73167 4.64361 10.1184V13.8981C4.64361 14.2432 4.92343 14.5231 5.26861 14.5231H9.04822C9.43499 14.5231 9.80593 14.3694 10.0794 14.0959L17.1086 7.06673ZM15.7828 6.62479L14.3096 8.09793L11.0687 4.85702L12.5419 3.38388L15.7828 6.62479ZM10.1849 5.74091L13.4258 8.98181L9.19553 13.212C9.15646 13.2511 9.10347 13.2731 9.04822 13.2731H5.89361V10.1184C5.89361 10.0632 5.91556 10.0102 5.95463 9.97113L10.1849 5.74091Z" fill="#4D4D5C" />
                            </svg>
                        }>
                            Edit
                        </Button>

                        <Button
                            className={styles.action_btn}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7749 6.88379C17.1149 6.94357 17.342 7.26762 17.2822 7.60758L15.6197 17.0628C15.6197 18.1586 14.4753 18.9577 13.3627 18.9577H6.63728C5.52472 18.9577 4.5729 18.1586 4.38024 17.0628L2.71778 7.60758C2.658 7.26762 2.88514 6.94357 3.2251 6.88379C3.56507 6.82402 3.88912 7.05116 3.94889 7.39112L5.61136 16.8464C5.69893 17.3445 6.1316 17.7077 6.63728 17.7077H13.3627C13.8684 17.7077 14.3011 17.3445 14.3886 16.8464L16.0511 7.39112C16.1109 7.05115 16.4349 6.82402 16.7749 6.88379Z" fill="#4D4D5C" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.85417 2.29102C8.27887 2.29102 7.8125 2.75739 7.8125 3.33268V4.37435H12.1875V3.33268C12.1875 2.75738 11.7211 2.29102 11.1458 2.29102H8.85417ZM6.5625 4.37435V3.33268C6.5625 2.06703 7.58851 1.04102 8.85417 1.04102H11.1458C12.4115 1.04102 13.4375 2.06704 13.4375 3.33268V4.37435H17.5C17.8452 4.37435 18.125 4.65417 18.125 4.99935C18.125 5.34453 17.8452 5.62435 17.5 5.62435H2.5C2.15482 5.62435 1.875 5.34453 1.875 4.99935C1.875 4.65417 2.15482 4.37435 2.5 4.37435H6.5625Z" fill="#4D4D5C" />
                                </svg>
                            }
                            onClick={handleDelete}
                            disabled={selectedRowKeys.length === 0}
                        >
                            Delete
                        </Button>

                        <Button
                            className={styles.action_btn}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.375 15C4.375 14.6548 4.65482 14.375 5 14.375L15 14.375C15.3452 14.375 15.625 14.6548 15.625 15C15.625 15.3452 15.3452 15.625 15 15.625L5 15.625C4.65482 15.625 4.375 15.3452 4.375 15Z" fill="#4D4D5C" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.55806 12.1086C9.80214 12.3527 10.1979 12.3527 10.4419 12.1086L13.3586 9.19194C13.6027 8.94786 13.6027 8.55214 13.3586 8.30806C13.1145 8.06398 12.7188 8.06398 12.4747 8.30806L10.625 10.1578V5C10.625 4.65482 10.3452 4.375 10 4.375C9.65482 4.375 9.375 4.65482 9.375 5V10.1578L7.52528 8.30806C7.2812 8.06398 6.88547 8.06398 6.64139 8.30806C6.39731 8.55214 6.39731 8.94786 6.64139 9.19194L9.55806 12.1086Z" fill="#4D4D5C" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.125 3.125V16.875H16.875V3.125H3.125ZM1.875 3C1.875 2.37868 2.37868 1.875 3 1.875H17C17.6213 1.875 18.125 2.37868 18.125 3V17C18.125 17.6213 17.6213 18.125 17 18.125H3C2.37868 18.125 1.875 17.6213 1.875 17V3Z" fill="#4D4D5C" />
                                </svg>
                            }
                            onClick={handleDownload}
                            disabled={selectedRowKeys.length === 0}
                        >
                            Download
                        </Button>

                        <Button
                            className={styles.action_btn}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.375 16.6673C4.375 16.3221 4.65482 16.0423 5 16.0423H15C15.3452 16.0423 15.625 16.3221 15.625 16.6673C15.625 17.0125 15.3452 17.2923 15 17.2923H5C4.65482 17.2923 4.375 17.0125 4.375 16.6673Z" fill="#4D4D5C" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.55806 2.89204C9.80214 2.64796 10.1979 2.64796 10.4419 2.89204L13.3586 5.80871C13.6027 6.05279 13.6027 6.44851 13.3586 6.69259C13.1145 6.93667 12.7188 6.93667 12.4747 6.69259L10.625 4.84287V13.334C10.625 13.6792 10.3452 13.959 10 13.959C9.65482 13.959 9.375 13.6792 9.375 13.334V4.84287L7.52527 6.69259C7.2812 6.93667 6.88547 6.93667 6.64139 6.69259C6.39731 6.44851 6.39731 6.05279 6.64139 5.80871L9.55806 2.89204Z" fill="#4D4D5C" />
                                </svg>
                            }
                            onClick={() => setUploadModalVisible(true)}
                        >
                            Upload
                        </Button>
                    </div>
                </div>

                <div className={styles.table_wrapper}>
                    <Table
                        columns={columns}
                        dataSource={documents}
                        rowSelection={{
                            selectedRowKeys,
                            onChange: (keys) => setSelectedRowKeys(keys.map((k) => String(k))),
                        }}
                        rowClassName={(record) =>
                            selectedRowKeys.includes(record.key) ? styles.selected_row : ''
                        }
                        pagination={{
                            showSizeChanger: true,
                            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
                            pageSize: 10,
                            current: 1,
                            total: documents.length,
                            className: styles.pagination,
                            position: ['bottomRight'],
                        }}
                        className={styles.documents_table}
                        rowKey="key"
                    />
                </div>
            </div>


            <Modal
                title="Upload Document"
                open={uploadModalVisible}
                onCancel={() => setUploadModalVisible(false)}
                onOk={handleUploadFiles}
                okText="Upload"
                okButtonProps={{ disabled: uploadingFiles.length === 0 || uploading }}
            >
                {!uploading ? (
                    <>
                        <Upload.Dragger
                            beforeUpload={(file) => {
                                setUploadingFiles((prev) => [...prev, file]);
                                return false; // prevent auto upload
                            }}
                            fileList={uploadingFiles}
                            multiple
                            onRemove={(file) => {
                                setUploadingFiles((prev) => prev.filter((f) => f.uid !== file.uid));
                            }}
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                        >
                            <p className="ant-upload-drag-icon">
                                <UploadOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag files to this area to upload</p>
                            <p className="ant-upload-hint">Support for Word, Excel, PowerPoint, and PDF (max. 2MB)</p>
                        </Upload.Dragger>
                    </>
                ) : (
                    <>
                        <p>Uploading files...</p>
                        <Progress percent={uploadProgress} status="active" />
                    </>
                )}
            </Modal> */}
        </div>
    );
};

export default Documents;
