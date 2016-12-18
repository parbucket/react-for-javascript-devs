import React from 'react';
import FeaturedImage from './FeaturedImage';
import TextDetails from './TextDetails';
import PostedBy from './PostedBy';

const Pin = (props) => {
  return (
    <div className="pin">
      <FeaturedImage
        image_description={props.pinData.pin.image_description}
        image_url={props.pinData.pin.image} />
      <TextDetails
        repinned={props.pinData.pin.repinned}
        title={props.pinData.pin.title}
        main_content={props.pinData.pin.text} />
      <PostedBy
        avatar_url={props.pinData.user.avatar}
        name={props.pinData.user.username}
        topic={props.pinData.pin.topic} />
    </div>
  );
}

export default Pin;
