import { Card, Tag } from 'antd';
import styles from './styles.module.css';

const ArticleCard = ({ article, hasImage = true }) => {
    return (
        <Card
            className={hasImage ? styles.article_card_with_image : styles.article_card_without_image}
            hoverable
        >
            {hasImage && (
                <div
                    className={styles.article_image}
                    style={{ backgroundImage: `url(${article.imageUrl})` }}
                />
            )}

            <div className={hasImage ?styles.article_content:styles.article_content_without_image}>
                <h3 className={styles.article_category}>
                    {article.category}
                </h3>
                <div className={styles.article_read_time}>
                    Read Time: {article.readTime}
                </div>

                <h2 className={styles.article_title}>
                    {article.title}
                </h2>

                <p className={styles.article_description}>
                    {article.description}
                </p>
            </div>
        </Card>
    );
};

export default ArticleCard;
