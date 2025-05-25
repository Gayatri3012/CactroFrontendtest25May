import styles from './Post.module.css'

export default function PostHeader(){
    return <div className={styles.postHeader}>
        <div className={styles.authorImage}>
            <img src="/images/Prfilepic.png" alt="Profile picture" />
        </div>
        <p>User name</p>
        <img className={styles.moreOption} src="/images/More.png" alt="more options" />
        
    </div>
}