import React from 'react';

function Story({ _id, title, priority, description, onRemove, onView }) {
  return (
    <div className="story">
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <p>{description}</p>

      {}
      <div>
        <button onClick={onView}>View</button>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
}

export default Story;
