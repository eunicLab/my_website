import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import axios from 'axios';
import { BrowserRouter, Switch } from 'react-router-dom';

let Admin = () => {
  const loginData = useSelector((state) => state.loginData);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  let handleAddProductSubmit = () => {
    if (title !== '' && description !== '' && image !== '') {
      var api = 'https://mewebsitebackend.herokuapp.com/api/stuff';
      const thing = {
        id: '',
        title: title,
        description: description,
        imageUrl: image,
        email: loginData.email,
        date: new Date().toLocaleString(),
      };

      axios
        .post(api, thing, {
          headers: { Authorization: `Bearer ${loginData.token}` },
        })

        .then(
          (response) => {
            console.log(response.data);
            setDescription('');
            setImage('');
            setTitle('');
          },
          (error) => console.log(thing)
        );
    } else {
      console.log('required field missing');
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <div className='fullBackground'>
          <div className='addProduct'>
            <p className='label'>Title</p>
            <input
              placeholder='Title of blog post'
              className='addProductInput'
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <p className='label'>Image url</p>
            <input
              placeholder='Image URL'
              className='addProductInput'
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
            {/*  <p>
              <label className='btnAddProduct'>
                Add Image
                <input type='file' name='file' onChange={onImageChange} />
              </label>
              <p>{$imagePreview}</p>
         </p>*/}

            <p className='label'>Description</p>
            <textarea
              placeholder='blog post write up'
              className='textArea'
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <div className='btnAddProduct' onClick={handleAddProductSubmit}>
              Submit
            </div>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default Admin;
