import React from 'react';
import CardFollow from '../CardFollow/CardFollow';
import './Following.css';

function Following() {
  return (
    <main className="card_follow_wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <CardFollow key={item} />
      ))}
    </main>
  );
}

export default Following;
