import React, { useState, useEffect } from 'react';
import '../App.css';

import { BrowserRouter, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Comment from './Comment';
import { sendCommentData } from '../actions';

const Post = (props) => {
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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  let submitComment = () => {
    if (name !== '' && email !== '' && comment !== '') {
      var api = 'https://mewebsitebackend.herokuapp.com/api/comment';

      let commentItems = {
        postTitle: props.item.title,
        commentObject: [
          {
            email: email,
            name: name,
            comment: comment,
            time: new Date().toLocaleString(),
            likes: 0,
            dislikes: 0,
          },
        ],
      };
      axios
        .post(api, commentItems)

        .then(
          (response) => {
            console.log(response.data);
            setEmail('');
            setName('');
            setComment('');
            var api = 'https://mewebsitebackend.herokuapp.com/api/comment';
            axios.get(api).then((response) => {
              setAllComments(response.data);
            });
          },
          (error) => console.log(error)
        );
    } else {
      console.log('required field missing');
    }
  };

  let updateComment = () => {
    var api = 'https://mewebsitebackend.herokuapp.com/api/comment';
    axios.get(api).then((response) => {
      setAllComments(response.data);
    });
  };

  let commentFilter = (commentPost) => {
    return commentPost.postTitle === props.item.title;
  };

  const PostComments = allComments
    .filter(commentFilter)
    .map((item) => (
      <Comment item={item} key={item.id} updateComment={updateComment} />
    ));

  return (
    <BrowserRouter>
      <Switch>
        <body className='blog'>
          <div className='blogWelcome'>Welcome to Eunice Nnaji's Blog</div>
          <div className='blogMisson'>
            Inspiring Stories, Tutorials, Tech News and... so much more
          </div>
          <div className='allBlogPosts'>
            <div className='postTitle'>{props.item.title}</div>
            <img src={props.item.imageUrl} alt='post' className='postImage' />
            <div className='postDescription'>{props.item.description}</div>

            <div className='postDate'>
              <span>
                Posted on {props.item.date.toLocaleString()} |{' '}
                {PostComments.length} Comments
              </span>
            </div>
            <div class='sharethis-inline-share-buttons'></div>
            <div className='postComments'>Comments ({PostComments.length})</div>
            <div>{PostComments}</div>
            <div className='postTitle'>Add Your Comment</div>

            <p>
              <input
                placeholder='Name'
                className='nameOfCommenter'
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </p>
            <p>
              <input
                placeholder='Email'
                className='emailOfCommenter'
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </p>
            <p>
              <textarea
                placeholder='Enter your comment'
                type='textarea'
                className='postOfCommenter'
                value={comment}
                rows='6'
                onChange={(event) => {
                  setComment(event.target.value);
                }}
              />
            </p>
            <p>
              <button className='submitComment' onClick={submitComment}>
                Submit Comment
              </button>
            </p>
          </div>
          <div className='copyright'>&copy; Copyright EuniceNnaji 2020</div>
        </body>
      </Switch>
    </BrowserRouter>
  );
};

export default Post;
