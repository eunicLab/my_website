import React from 'react';
import '../App.css';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import axios from 'axios';

const Comment = (props) => {
  let upDatedLikes = {
    postTitle: props.item.title,
    commentObject: [
      {
        email: props.item.commentObject[0].email,
        name: props.item.commentObject[0].name,
        comment: props.item.commentObject[0].comment,
        time: props.item.commentObject[0].time,
        likes: props.item.commentObject[0].likes + 1,
        dislikes: props.item.commentObject[0].dislikes,
      },
    ],
  };

  let upDatedDoubleLikes = {
    postTitle: props.item.title,
    commentObject: [
      {
        email: props.item.commentObject[0].email,
        name: props.item.commentObject[0].name,
        comment: props.item.commentObject[0].comment,
        time: props.item.commentObject[0].time,
        likes: props.item.commentObject[0].likes - 1,
        dislikes: props.item.commentObject[0].dislikes,
      },
    ],
  };

  let upDatedDislikes = {
    postTitle: props.item.title,
    commentObject: [
      {
        email: props.item.commentObject[0].email,
        name: props.item.commentObject[0].name,
        comment: props.item.commentObject[0].comment,
        time: props.item.commentObject[0].time,
        likes: props.item.commentObject[0].likes,
        dislikes: props.item.commentObject[0].dislikes + 1,
      },
    ],
  };
  let upDatedDoubleDislikes = {
    postTitle: props.item.title,
    commentObject: [
      {
        email: props.item.commentObject[0].email,
        name: props.item.commentObject[0].name,
        comment: props.item.commentObject[0].comment,
        time: props.item.commentObject[0].time,
        likes: props.item.commentObject[0].likes,
        dislikes: props.item.commentObject[0].dislikes - 1,
      },
    ],
  };
  let handleDislikeComment = () => {
    let likesHistory = localStorage.getItem(props.item._id);

    if (likesHistory == null) {
      axios
        .put(
          'https://mewebsitebackend.herokuapp.com/api/comment/' +
            props.item._id,
          upDatedDislikes
        )
        .then((res) => {
          console.log('dislike updated successfully');
          props.updateComment();
        });

      localStorage.setItem(props.item._id, 'dislike');
    }
    if (likesHistory === 'dislike') {
      axios
        .put(
          'https://mewebsitebackend.herokuapp.com/api/comment/' +
            props.item._id,
          upDatedDoubleDislikes
        )
        .then((res) => {
          console.log('dislike updated successfully');
          props.updateComment();
        });
      localStorage.removeItem(props.item._id);
    }
  };

  let handleLikeComment = () => {
    let likesHistory = localStorage.getItem(props.item._id);

    if (likesHistory == null) {
      axios
        .put(
          'https://mewebsitebackend.herokuapp.com/api/comment/' +
            props.item._id,
          upDatedLikes
        )
        .then((res) => {
          console.log('like updated successfully');
          props.updateComment();
        });

      localStorage.setItem(props.item._id, 'like');
    }
    if (likesHistory === 'like') {
      axios
        .put(
          'https://mewebsitebackend.herokuapp.com/api/comment/' +
            props.item._id,
          upDatedDoubleLikes
        )
        .then((res) => {
          console.log('like updated successfully');
          props.updateComment();
        });
      localStorage.removeItem(props.item._id);
    }
  };
  return (
    <div className='commentItem'>
      <p>
        <span className='commenterName'>
          {props.item.commentObject[0].name}
        </span>
        <span className='commentTime'>{props.item.commentObject[0].time}</span>
      </p>
      <p className='commentOfCommenter'>
        {props.item.commentObject[0].comment}
      </p>
      <FiThumbsUp
        size='20'
        className='likeComment'
        color='rgb(133, 121, 139)'
        onClick={handleLikeComment}
      />
      <span>
        {props.item.commentObject[0].likes > 0
          ? props.item.commentObject[0].likes
          : ''}
      </span>
      <FiThumbsDown
        size='20'
        className='dislikeComment'
        color='rgb(133, 121, 139)'
        onClick={handleDislikeComment}
      />
      <span>
        {props.item.commentObject[0].dislikes > 0
          ? props.item.commentObject[0].dislikes
          : ''}
      </span>
    </div>
  );
};

export default Comment;
