import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/StoryViewer.module.css';


function StoryViewer({ stories, currentIndex, setCurrentIndex, closeViewer }) {
    const autoNextRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fade, setFade] = useState(true);

    // Handle story change with a small delay for fade effect
    const changeStory = (index) => {
        setFade(false); // start fade out
        setTimeout(() => {
            setCurrentIndex(index);  // update story
            setFade(true);  // fade in new one
        }, 300); 
    };

    const handleNext  = () => {
        if (currentIndex < stories.length - 1) {
            changeStory(currentIndex + 1);
        } else {
        closeViewer();  // if last story, close viewer
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            changeStory(currentIndex - 1);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        const img = new Image();
        img.src = stories[currentIndex].image;
        img.onload = () => {
            setIsLoading(false);
        };

        // auto move to next story after 5s
        autoNextRef.current = setTimeout(() => {
            handleNext();
        }, 5000);

         // cleanup timeout when user changes story manually
        return () => clearTimeout(autoNextRef.current);
    }, [currentIndex]);

      // handle tap for going forward/backward
    const handleTap = (e) => {
        const x = e.clientX;
        if (x < window.innerWidth / 2) {
            handlePrev();
        } else {
            handleNext();
        }
    };

    return (
        <div className={styles.storyViewer} onClick={handleTap}>
            <button className={styles.closeBtn} onClick={(e) =>{
                e.stopPropagation();
                closeViewer()
                }}
            >
                ✕
            </button>

            {isLoading 
                ? <img src='/loadingspinner.png' className={styles.loadingSpinner}/> 
                : (
                <img src={stories[currentIndex].image} className={`${styles.storyImg} ${fade ? styles.fadeIn : styles.fadeOut}`} alt="current story" />
            )}
            
        
        </div>
    );
}

export default StoryViewer;
