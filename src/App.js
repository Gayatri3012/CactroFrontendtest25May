import React, { useEffect, useState } from 'react';
import StoryList from './Components/StoryList';
import StoryViewer from './Components/StoryViewer';
import './index.css';

function App() {
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(true);


  //Fetch story data when the app loads
  useEffect(() => {
    fetch('/storyData.json')
      .then(res => res.json())
      .then(data => {
        setStories(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  //Open the story viewer upon cliking the story in storylist
  const openStory = (index) =>{
    setCurrentIndex(index);
    console.log(index)
    console.log(stories)
  };

  //Close the story viewer upon clicking the close button in story viewer
  const closeViewer = () => setCurrentIndex(null);

  return (
    <div className="app">
      {loading ? (
        <img src='/loadingspinner.png' className='loadingSpinner'/> 
      ) 
      : (
      <>
        <div className='app-logo'>
          <img src='/instagram-icon.png' alt='instagram-icon'/>
          <img src='/Instagram.png' alt='instagram-logo'/>
        </div>

         <StoryList stories={stories} onStoryClick={openStory} />  
      </>
    )}

      {/* Show story viewer only when the currentIndex is present */}
      {currentIndex !== null && (
        <StoryViewer
          stories={stories}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          closeViewer={closeViewer}
        />
      )}
    </div>
  );
}

export default App;
