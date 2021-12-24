import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../pieces/Button';
import './UploadPost.css';

const UploadPost = (props) => {
  const fileRef = useRef(null);
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);

  const openInputFile = () => {
    fileRef.current.click();
  };

  const handleSubmit = () => {
    console.log({ caption, file });
  };

  const handleSelectFile = (e) => {
    if (!e.target?.files?.[0]) return;
    setFile(e.target.files[0]);
  };

  return (
    <div className="upload_post">
      <div className="upload_post--title">
        Upload video
        <div className="upload_post--subtitle">Post a video to your account</div>
      </div>
      <div className="upload_post--content">
        <div className="uploader" style={{ marginTop: 24 }}>
          <div className="upload">
            <img src="../../../public/images/uploadCloud.svg" alt="upload button" width="40px" height="29px" />
            <div className="upload--text-main">Select video to upload</div>
            <div className="upload--text-sub">Or drag and drop a file</div>
            <ul className="upload__info">
              <li>MP4 or WebM</li>
              <li>720x1280 resolution or higher</li>
              <li>Up to 5 minutes</li>
              <li>less than 2 GB</li>
            </ul>
            <Button className="upload--button" type="fill" onClick={openInputFile}>
              Select file
            </Button>
          </div>
          <input
            ref={fileRef}
            onChange={handleSelectFile}
            hidden
            type="file"
            name="upload-btn"
            accept="video/mp4,video/x-m4v,video/*"
          />
        </div>

        <div className="upload_right">
          <div className="form-wrap">
            <p className="form-title">Caption</p>
            <input className="input_text" onChange={(e) => setCaption(e.target.value)} />
          </div>
          <div className="form-wrap">
            <p className="form-title">Who can view this video</p>
            <select className="select_tag">
              <option>Public</option>
              <option>Private</option>
              <option>Friends</option>
            </select>
          </div>
          <div className="form-wrap">
            <p className="form-title">Topic</p>
            <select className="select_tag">
              <option>Comedy</option>
              <option>Fun</option>
              <option>Discover</option>
            </select>
          </div>
          <div className="form-wrap">
            <p className="form-title">Allow user to:</p>
            <label className="input_checkbox">
              <input type="checkbox" name="comment" /> Comment
            </label>
            <label className="input_checkbox">
              <input type="checkbox" name="duet" /> Duet
            </label>
            <label className="input_checkbox">
              <input type="checkbox" name="snitch" /> Snitch
            </label>
          </div>

          <div className="form-wrap">
            <div className="post__button-group" style={{ display: 'flex' }}>
              <Button size="medium" type="text" className="discard_button">
                Discard
              </Button>
              <Button size="medium" type="fill" className="post_button" onClick={handleSubmit}>
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UploadPost.propTypes = {};

export default UploadPost;
