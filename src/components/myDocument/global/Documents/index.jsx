import React, { useState } from 'react';
import { Table, Checkbox, Button, DatePicker, Select, Space, Modal, Upload, Progress, message } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined,
    UploadOutlined,
    EyeOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import styles from './styles.module.css';

const { RangePicker } = DatePicker;

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
    const [selectedFileTypes, setSelectedFileTypes] = useState(['pdf']);
    const [selectAll, setSelectAll] = useState(false);
    const [documents, setDocuments] = useState(INITIAL_DOCUMENTS);

    const [uploadModalVisible, setUploadModalVisible] = useState(false);
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);

    const [modal, contextHolder] = Modal.useModal();

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
                    {text}
                    <span className={styles.user_icon}>👤</span>
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
            {contextHolder}
            <div className={styles.documents_header}>
                <h2 className={styles.documents_title}>Documents</h2>
                <div className={styles.date_range_picker}>
                    <RangePicker placeholder={['06/01/2024', '13/01/2024']} className={styles.date_picker} />
                </div>
            </div>

            <div className={styles.content_wrapper}>
                <div className={styles.sidebar}>
                    <div className={styles.file_type_section}>
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
                    </div>
                </div>

                <div className={styles.main_content}>
                    <div className={styles.actions_toolbar}>
                        <span className={styles.actions_label}>Actions:</span>
                        <Space>
                            <Button icon={<EditOutlined />} className={styles.action_btn}>
                                Edit
                            </Button>
                            <Button
                                icon={<DeleteOutlined />}
                                className={styles.action_btn}
                                onClick={handleDelete}
                                disabled={selectedRowKeys.length === 0}
                            >
                                Delete
                            </Button>
                            <Button
                                icon={<DownloadOutlined />}
                                className={styles.action_btn}
                                onClick={handleDownload}
                                disabled={selectedRowKeys.length === 0}
                            >
                                Download
                            </Button>
                            <Button
                                icon={<UploadOutlined />}
                                className={styles.action_btn}
                                onClick={() => setUploadModalVisible(true)}
                            >
                                Upload
                            </Button>
                        </Space>
                    </div>

                    <div className={styles.table_wrapper}>
                        <Table
                            columns={columns}
                            dataSource={documents}
                            rowSelection={{
                                selectedRowKeys,
                                onChange: (keys) => setSelectedRowKeys(keys.map((k) => String(k))),
                            }}
                            pagination={{
                                showSizeChanger: true,
                                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
                                pageSize: 10,
                                current: 1,
                                total: documents.length,
                                className: styles.pagination,
                            }}
                            className={styles.documents_table}
                            rowKey="key"
                        />
                    </div>
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
            </Modal>

        </div>
    );
};

export default Documents;
