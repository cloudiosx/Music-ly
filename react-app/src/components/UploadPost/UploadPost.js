import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../pieces/Button';
import './UploadPost.css';
import { savePost } from '../../store/post/actions';
import { renderErrorMessage } from '../../util/validation';

const UploadPost = (props) => {
  const fileRef = useRef(null);
  const [caption, setCaption] = useState('');
  const [music, setMusic] = useState('');
  const [file, setFile] = useState(null);
  const [allows, setAllows] = useState([]);
  const [topic, setTopic] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const openInputFile = () => {
    fileRef.current.click();
  };

  const handleSubmit = () => {
    console.log({ caption, file, topic, allows, music });
    if (captionError || musicError || allowsError || topicError || fileError) {
      setIsSubmitted(true);
      return;
    }
    const postData = {
      file: file.file,
      topic,
      videoType: JSON.stringify(allows),
      caption,
      music,
    };
    console.log('postData', postData);
    dispatch(savePost(postData));
  };

  useEffect(() => {
    return () => {
      !!file && URL.revokeObjectURL(file.previewVideo);
    };
  }, [file]);

  const handleSelectFile = (e) => {
    if (!e.target?.files?.[0]) return;
    const _file = e.target.files[0];

    const preview = URL.createObjectURL(_file);
    const fileData = {
      name: _file.name,
      duration: preview.duration,
      file: _file,
      previewVideo: preview,
    };
    setFile(fileData);
    fileRef.current.value = '';
  };

  const handleChangeVideo = () => {
    URL.revokeObjectURL(file.previewVideo);
    fileRef.current.value = '';
    setFile(null);
  };

  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };

  const handleChangeAllow = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAllows((prev) => [...prev, value]);
    } else {
      const tempAllows = [...allows];
      const removeIndex = tempAllows.findIndex((item) => item === value);
      tempAllows.splice(removeIndex, 1);
      setAllows(tempAllows);
    }
  };

  const captionError = useMemo(() => renderErrorMessage(caption, { empty: true, min: 5, max: 20 }), [caption]);
  const musicError = useMemo(() => renderErrorMessage(music, { empty: true, min: 8, max: 20 }), [music]);
  const allowsError = useMemo(() => renderErrorMessage(allows, { empty: true }), [allows]);
  const topicError = useMemo(() => renderErrorMessage(topic, { empty: true }), [topic]);

  const fileError = useMemo(() => renderErrorMessage(file, { existed: true }), [file]);

  const disabled = captionError || musicError || allowsError || topicError || fileError;

  return (
    <div className="upload_post">
      <div className="upload_post--title">
        Upload video
        <div className="upload_post--subtitle">Post a video to your account</div>
      </div>
      <div className="upload_post--content">
        <div className="uploader" style={{ marginTop: 24, display: file ? 'none' : 'block' }}>
          <div className="upload">
            <img
              src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/uploadCloud.svg"
              alt="upload button"
              width="40px"
              height="29px"
            />
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
            {(!!file || isSubmitted) && !!fileError && <p className="error_message">{fileError}</p>}
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
        {file && file?.previewVideo && (
          <div className="preview">
            <div className="preview_video">
              <video src={file.previewVideo} preload="auto" autoPlay></video>
            </div>
            <div className="preview_buttons">
              <span className="preview_buttons--file_name">{file.name}</span>
              <span onClick={handleChangeVideo} className="preview_buttons--change">
                Change video
              </span>
            </div>
          </div>
        )}

        <div className="upload_right">
          <div className="form-wrap">
            <p className="form-title">Caption</p>
            <input className="input_text" value={caption} onChange={(e) => setCaption(e.target.value)} />
            {(!!caption || isSubmitted) && !!captionError && <p className="error_message">{captionError}</p>}
          </div>

          <div className="form-wrap">
            <p className="form-title">Music</p>
            <input className="input_text" value={music} onChange={(e) => setMusic(e.target.value)} />
            {(!!music || isSubmitted) && !!musicError && <p className="error_message">{musicError}</p>}
          </div>

          <div className="form-wrap">
            <p className="form-title">Topic</p>
            <select className="select_tag" value={topic} defaultValue={''} onChange={handleChangeTopic}>
              <option value="" disabled>
                Select topic
              </option>
              <option value="Comedy">Comedy</option>
              <option value="Fun">Fun</option>
              <option value="Discover">Discover</option>
            </select>
            {(!!topic || isSubmitted) && !!topicError && <p className="error_message">{topicError}</p>}
          </div>

          <div className="form-wrap">
            <p className="form-title">Allow user to:</p>
            <label className="input_checkbox">
              <input type="checkbox" name="comment" value="comment" onChange={handleChangeAllow} /> Comment
            </label>
            <label className="input_checkbox">
              <input type="checkbox" name="duet" value="duet" onChange={handleChangeAllow} /> Duet
            </label>
            <label className="input_checkbox">
              <input type="checkbox" name="snitch" value="snitch" onChange={handleChangeAllow} /> Snitch
            </label>
            {(!!allows.length || isSubmitted) && !!allowsError && <p className="error_message">{allowsError}</p>}
          </div>

          <div className="form-wrap">
            <div className="post__button-group" style={{ display: 'flex' }}>
              <Button size="medium" type="text" className="discard_button">
                Discard
              </Button>
              <Button size="medium" type="fill" className="post_button" onClick={handleSubmit} disabled={disabled}>
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
