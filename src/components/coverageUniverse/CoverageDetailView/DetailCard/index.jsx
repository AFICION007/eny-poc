import { Card, Tag } from 'antd';
import styles from './styles.module.css';

const ArticleCard = ({ article }) => {
    return (
        <Card
            className={styles.article_card_with_image}
            hoverable
        >
            <div
                className={styles.article_image}
                style={{ backgroundImage: `url(${article.imageUrl})` }}
            />

            <div className={styles.article_content}>
                <p className={styles.article_description}>
                    {article.description}
                </p>
            </div>
        </Card>
    );
};

export default ArticleCard;
