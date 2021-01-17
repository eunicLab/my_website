import React, { useState, useEffect } from 'react';
import '../App.css';
import { sendDisplayPost } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import { sendCommentData } from '../actions';

const PostOverview = (props) => {
  const [allComments, setAllComments] = useState([]);
  const commentData = useSelector((state) => state.commentData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (commentData === '') {
      var api = 'https://mewebsitebackend.herokuapp.com/api/comment';
      axios.get(api).then((response) => {
        setAllComments(response.data);
        dispatch(sendCommentData(response.data));
      });
    } else {
      setAllComments(commentData);
    }
  }, []);

  let commentFilter = (commentPost) => {
    return commentPost.postTitle === props.item.title;
  };

  const PostComments = allComments
    .filter(commentFilter)
    .map((item) => <Comment item={item} key={item.id} />);

  let handleReadMore = () => {
    dispatch(sendDisplayPost('display'));
  };

  return (
    <div className='blogPostOverview'>
      <div className='blogPostTitle'>{props.item.title}</div>
      <img src={props.item.imageUrl} alt='post' className='itemImage' />
      <div className='OverviewDescription'>
        {props.item.description.slice(0, 150) + '...'}
      </div>

      <div>
        <span className='postedDate'>
          Posted on {props.item.date.toLocaleString().slice(0, 10)} |{' '}
          {PostComments.length} Comments
        </span>
        <span className='readMore'>
          <Link exact to={'/Blog/' + props.item.title}>
            <button className='readMoreButton' onClick={handleReadMore}>
              Read more
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PostOverview;
