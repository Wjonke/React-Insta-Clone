import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }


/*mount function - store comments added */ 
  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } 
    else {
      this.setComments();
    }
  }
/*mount function - store comments added */ 


    /*unmount function*/

  componentWillUnmount() {
    this.setComments();
  };

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };
    /*unmount function */




  

    /* Event Handlers */

  commentHandler = e =>{this.setState({ 
    comment: e.target.value})
  };
                                                /* username is set to a static name since no login system is in place */
  handleCommentSubmit = e =>{
    e.preventDefault();
    const newComment= {text: this.state.comment, username: 'Gunbunny37th'};
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: ''})
    setTimeout(() => {
      this.setComments();
    }, 500);  
  };

    /* Event Handlers */








  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}



CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;