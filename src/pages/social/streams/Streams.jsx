import React, { useRef } from 'react';
import '@pages/social/streams/Streams.scss';
import Suggestions from 'src/components/suggestions/Suggestions';

const Streams = () => {
  const bodyRef = useRef(null);
  const bottomLineRef = useRef();
  return (
    <div className="streams">
      <div className="streams-content">
        <div className="streams-post" ref={bodyRef} style={{ backgroundColor: 'lightgrey' }}>
          <div className="post-form">Post Form</div>
          <div className="post-items">Posts Items</div>
          <div style={{ marginBottom: '50px', height: '50px' }} ref={bottomLineRef}></div>
        </div>
        <div className="streams-suggestions">
          <div className="suggestions">
            <Suggestions />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streams;
