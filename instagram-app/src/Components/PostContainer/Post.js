import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';

import './Posts.css';

const Post = props => {
  return (

    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />

      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />

      
      <div className="imgFooter">
        <div className="icon">
          <i className="fa fa-heart" />
        </div>
        <div className="icon">   
          <i className="fa fa-comment" />
        </div>
      </div>


      

      <div> 
        <span className="likes">{props.post.likes} Likes</span>
      </div>
      
    </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;