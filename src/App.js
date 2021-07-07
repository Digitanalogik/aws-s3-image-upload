import React, { useState } from 'react';
import ReactS3 from 'react-s3';
import './App.css';
import { s3_config } from './private/aws.js';

const App = () => {
  const [image, setImage] = useState(null);

  const uploadFile = (e) => {
    console.log("Upload!", e.target.files[0]);
    ReactS3.uploadFile(e.target.files[0], s3_config)
      .then( (data) => {
        console.log(data);
        setImage(data.location);
      })
      .catch( (err) => {
        alert(err);
      })
  }

  return (
    <div className="App">
      <h3>AWS S3 Upload</h3>
      <input type="file" onChange={(e) => uploadFile(e)} />
      {image && <img src={image} className="preview" alt="Succesful upload" />}
    </div>
  );
}

export default App;
