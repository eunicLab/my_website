import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import axios from 'axios';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

let Admin = () => {
  const loginData = useSelector((state) => state.loginData);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState(EditorState.createEmpty());

  let handleAddProductSubmit = () => {
    if (title !== '' && description !== '' && image !== '') {
      var api = 'https://mewebsitebackend.herokuapp.com/api/stuff';
      const thing = {
        id: '',
        title: title,
        preview: description.getCurrentContent().getPlainText('').slice(0, 150),
        description: convertToRaw(description.getCurrentContent()),
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
            <div>
              <p className='label'>Title</p>
              <input
                placeholder='Title of blog post'
                className='addProductInput'
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div>
              <p className='label'>Image url</p>
              <input
                placeholder='Image URL'
                className='addProductInput'
                value={image}
                onChange={(event) => {
                  setImage(event.target.value);
                }}
              />
            </div>

            <div>
              <p className='label'> Full Post</p>
              <Editor
                editorState={description}
                handlePastedText={() => false}
                wrapperClassName='wrapper-class'
                editorClassName='editor-class'
                toolbarClassName='toolbar-class'
                wrapperStyle={{
                  border: '2px solid green',
                  marginBottom: '20px',
                }}
                editorStyle={{ height: '300px', padding: '10px' }}
                onEditorStateChange={(editorState) =>
                  setDescription(editorState)
                }
              />
            </div>
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
