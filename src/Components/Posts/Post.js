import PostHeader from "./PostHeader";
import styles from './Post.module.css';

export default function Post(){
    return (
        <div className={styles.post}>
            <PostHeader />
            <div className={styles.postContent}>
                <img src="/images/postImage.png" alt="Post content"/>
            </div>
            <div className={styles.postButtons}>
                <img src="/images/Like.png" alt="" />
                <img src="/images/Comment.png" alt="" />
                <img src="/images/SharePosts.png" alt="" />
            </div>
        </div>
    )
}