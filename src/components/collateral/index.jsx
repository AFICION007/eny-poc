
import { useContext } from 'react';

import styles from './styles.module.css';
import { ConfigProvider } from 'antd';
import ComplianceAssistant from "./global/ComplianceAssistant"

import collateralContext from './contexts/collateralContext'
import ReportAndPublicationSection from './global/ReportAndPublications';
import FinancialReportSection from './global/FinancialReportSection';
import { DatePicker } from 'antd';
import ArticleCard from './global/ArticalCard';
import CompanyWiseCollateralPage from './global/CompanyWiseCollateral';

const { RangePicker } = DatePicker;

const articles = [
    {
        id: 1,
        title: "Gold has delivered, what should investors do now?",
        category: "Wealth Management",
        readTime: "5 min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "/image1.png",
    },
    {
        id: 2,
        title: "AI Human and India's Role in this Tech Revolution",
        category: "Investment Banking",
        readTime: "10 min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: null
    },
    {
        id: 3,
        title: "AI Human and India's Role in this Tech Revolution",
        category: "Investment Banking",
        readTime: "10 min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: null
    },
    {
        id: 4,
        title: "AI Human and India's Role in this Tech Revolution",
        category: "Investment Banking",
        readTime: "10 min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: null
    },
    {
        id: 5,
        title: "AI Human and India's Role in this Tech Revolution",
        category: "Investment Banking",
        readTime: "10 min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercutation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: null
    },
    {
        id: 6,
        title: "AI Human and India's Role in this Tech Revolution",
        category: "Investment Banking",
        readTime: "10 min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: null
    },
    {
        id: 7,
        title: "Gold has delivered, what should investors do now?",
        category: "Wealth Management",
        readTime: "5 min",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "/image1.png",
    }
];


const CollateralPage = () => {
    const dateFormat = 'YYYY/MM/DD';
    const { selectedCollateral } = useContext(collateralContext);
    return (
        <div className={styles.collateral_page}>
            <h3 className={styles.title}>Industry Reports</h3>
            <RangePicker className={styles.date_picker} format={dateFormat} />

            <div className={styles.article_section}>
                <div className={styles.article_grid}>
                    {articles.map((article) => (
                        <div key={article.id} className={styles.article_card_wrapper}>
                            <ArticleCard article={article} hasImage={!!article.imageUrl} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.company_wise_div}>
                <CompanyWiseCollateralPage />
            </div>


            {/* <div className={styles.bottom}>
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
            </div> */}
        </div>
    );
};

export default CollateralPage;



