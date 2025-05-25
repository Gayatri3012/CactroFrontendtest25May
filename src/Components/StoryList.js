import styles from '../styles/StoryList.module.css';

function StoryList({ stories, onStoryClick }) {
  return (
    <div className={styles.storyList}>
      {stories.map((story, index) => (
        <div key={story.id} className={styles.storyThumbnail} onClick={() => onStoryClick(index)}>
          <img src={story.image} alt={`story ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default StoryList;
