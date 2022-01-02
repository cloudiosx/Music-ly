import React from 'react';
import Tag from '../../pieces/Tag';
import './Discover.css';

const Discover = (props) => {
  return (
    <div className="wrapper_with_divider discover">
      <h4 className="title">Discover</h4>
      <div className="discover_tags_wrapper">
        {[
          'aejeans',
          'itemcofounder',
          'ColorCustomizer',
          '123PandoraME',
          'aepartner',
          'duet',
          'wethetourists',
          'socialtouristcofounder',
          'parallel',
          'winterwonderland',
          'letitsnow',
          'gingerbreadhouse',
          'trick',
          'thedamelioshow',
          'aliens',
          'park',
          'trickshots',
          'GivingTuesday',
          'JustDance2022',
          'kingrichard',
          'DeepDiveDubai',
          'BestShapeOfMyLife',
          'FreshPrinceReunion',
          'DSHPPartner',
          'metgala',
          'valentinohautecouture',
          'JBLPartyBox',
          'JBLAudio',
          'ad',
          'ZicamZincThatCold',
          'ColdShortening',
          'followyou',
          'happyhalloween',
          '2021recap',
          'answer',
          'ToiletTunesdance',
          'CharminPartne',
        ].map((tagName, idx) => (
          <Tag key={idx} content={tagName} />
        ))}
      </div>
    </div>
  );
};

Discover.propTypes = {};

export default Discover;
