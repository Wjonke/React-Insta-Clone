import React from 'react';
/*
this section replaces what I added manually on day 1, 
with a functional like button and "add like" counter
*/



const LikeSection = props => {
  return [

    <div className="like-section" key="likes-icons-container" onClick={props.incrementLike}>

        <div className="like-section-wrapper">
          <i className="far fa-heart" /> 
        </div>

        <div className="like-section-wrapper">
         {'Likes:'} {props.likes} {' '}
        </div>
        
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>

    </div>,



  ];
};


export default LikeSection;
