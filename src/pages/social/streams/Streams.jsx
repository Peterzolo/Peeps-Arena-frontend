import React, { useRef } from 'react';
import '@pages/social/streams/Streams.scss';

const Streams = () => {
  const bodyRef = useRef(null);
  const bottomLineRef = useRef();
  return (
    <div className="streams">
      <div className="streams-content">
        <div className="streams-post">
          <div className="post-form">Post Form</div>
          <div className="post-items">Posts Items</div>
          <div style={{ marginBottom: '50px', height: '50px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Streams;
