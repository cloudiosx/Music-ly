import React from 'react';
import Tag from '../../pieces/Tag';
import './Discover.css';

const Discover = (props) => {
  return (
    <div className="wrapper_with_divider discover">
      <h4 className="title">Discover</h4>
      <div className="discover_tags_wrapper">
        {[
          'Hello',
          'Beauty',
          'Love',
          'something',
          'happyholidays',
          'askonmusicly',
          'dreamer',
          'giving',
          'AVeryLongContentTextLine',
          'AVeryLongContentTextLine',
          'AVeryLongContentTextLine',
          'AVeryLongContentTextLine',
          'AVeryLongContentTextLine',
        ].map((tagName, idx) => (
          <Tag key={idx} content={tagName} />
        ))}
      </div>
    </div>
  );
};

Discover.propTypes = {};

export default Discover;
