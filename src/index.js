import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Top_Page from './top_page';

import Participant_Page from './participant_page';
import Participant_Manage_Page from './participant_manage_page';
import Participant_Information_Page from './participant_information_page';

import Meeting_Page from './meet_page';
import Meeting_Manage_Page from './meet_manage_page';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Participant_Manage_Page/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
