
import { useContext } from 'react';

import styles from './styles.module.css';
import { ConfigProvider } from 'antd';
import ComplianceAssistant from "./global/ComplianceAssistant"

import collateralContext from './contexts/collateralContext'
import ReportAndPublicationSection from './global/ReportAndPublications';
import FinancialReportSection from './global/FinancialReportSection';


const CollateralPage = () => {
    const {selectedCollateral} = useContext(collateralContext);
    return (
        <div className={styles.directory_page}>
            <div className={styles.bottom}>
                <div>
                    {!selectedCollateral && 
                    <div className={styles.report_container}>
                        <p className={styles.report_message}>Choose filters above to display reports</p>
                    </div>
                    }
                    {
                        selectedCollateral == 'Reports and Publications' ?<ReportAndPublicationSection/> : selectedCollateral && <FinancialReportSection/>
                    }
                </div>
                <div>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#1890ff',
                                borderRadius: 8,
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                            },
                        }}
                    >
                        <ComplianceAssistant />
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
};

export default CollateralPage;



