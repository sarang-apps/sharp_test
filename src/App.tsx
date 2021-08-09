import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';

// import imageThumbnail from 'image-thumbnail';
var filePath = '/Users/computerroom/Desktop/test_files';
var thumbsFolder = '/Users/computerroom/Desktop/test_files/thumbs/';

var Thumbnail = require('thumbnail');
async function thumbgen() {
  // try {
  //   const thumbnail = await imageThumbnail(filePath);
  //   console.log(thumbnail);
  // } catch (err) {
  //   console.error(err);
  // }

  let thumb = new Thumbnail(filePath, thumbsFolder);
  thumb.ensureThumbnail(
    'Screenshot 2021-02-08 at 3.40.15 PM.png',
    160,
    null,
    function (err: any, filename: any) {
      if (err != null) {
        console.error(err);
      }

      console.log('done generating thumb', filename);
    }
  );
}
const Hello = () => {
  thumbgen();
  const text = 'TEST(should not be empty) + ';
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              SHARP FORMAT:
            </span>
            <p>{text}</p>
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
