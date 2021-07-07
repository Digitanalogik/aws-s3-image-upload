import React, { useState } from 'react';
import ReactS3, { uploadFile } from 'react-s3';
import './App.css';

const config = {
  bucketName: 'AWS_S3_BUCKET',
  dirName: 'DIRECTORY_PATH',
  region: 'eu-north-1',
  accessKeyId: 'AWS_ACCESS_KEY_ID',
  secretAccessKey: 'AWS_SECRET_ACCESS_KEY_CHANGE_REAL_VALUES',
}

const App = () => {
  const [image, setImage] = useState(null);

  const uploadFile = (e) => {
    console.log("Upload!", e.target.files[0]);
    ReactS3.uploadFile(e.target.files[0], config)
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
      {image && <img src={image} className="preview" />}
    </div>
  );
}

export default App;
