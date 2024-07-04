import React, { useState, useEffect } from 'react';
import Story from './Story';
import './StoryList.css';

function StoryList() {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState({ title: '', priority: '', description: '' });

  const addStory = () => {
    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStory),
    })
      .then((response) => response.json())
      .then((data) => {
        setStories([...stories, data]);
        setNewStory({ title: '', priority: '', description: '' });
      })
      .catch((error) => console.error('Error adding story:', error));
  };

  // const removeStory = (storyId) => {
  // };

  const getSingleStory = (storyId) => {
    fetch(`http://localhost:5000/${storyId}`)
      .then((response) => response.json())
      .then((data) => console.log('Single Story:', data))
      .catch((error) => console.error('Error fetching single story:', error));
  };

  return (
    <div>
      <h2>My Stories</h2>

      {}
      {stories.map((story) => (
        <Story
          key={story._id}
          {...story}
          // onRemove={() => removeStory(story._id)}
          onView={() => getSingleStory(story._id)} 
        />
      ))}

      {}
      <div>
        <h3>Add a New Story</h3>
        <label>Title:</label>
        <input
          type="text"
          value={newStory.title}
          onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
        />

        <label>Priority:</label>
        <input
          type="text"
          value={newStory.priority}
          onChange={(e) => setNewStory({ ...newStory, priority: e.target.value })}
        />

        <label>Description:</label>
        <input
          value={newStory.description}
          onChange={(e) => setNewStory({ ...newStory, description: e.target.value })}
        />

        <button onClick={addStory}>Add Story</button>
      </div>
    </div>
  );
}

export default StoryList;
