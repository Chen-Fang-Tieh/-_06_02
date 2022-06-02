import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Participant_Page from './participant_page';
import BackGround from './Picture/top_Page_bg.png';
import ParticipantButtonImage from './Picture/top_Page_Participant_Button.png';
import MeetingButtonImage from './Picture/top_Page_Meeting_Button.png';
import TrackingButtonImage from './Picture/top_Page_Tracking_Button.png';


const HomeBackGround={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+BackGround+')',
    wideth:"100vw",
    height:"100vh"
}

const ImgParticipant =styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 300px;

    position: relative;
 `;

 const ImgMeeting =styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 300px;

    position: relative;
 `;

 const ImgTracking =styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 300px;

    position: relative;
 `;

 const Button1 =styled.button`
 border: none;
 width: 310px;
 height: 310px;
 top: 225px;
 left: 170px;
 background-color: unset;
 position: absolute;
 cursor: pointer;
`;

const Button2 =styled.button`
 border: none;   
 width: 310px;
 height: 310px;
 top: 225px;
 left: 600px;
 background-color: unset;
 position: absolute;
 cursor: pointer;
`;

const Button3 =styled.button`
 border: none;
 width: 310px;
 height: 310px;
 top: 225px;
 left: 1055px;
 background-color: unset;
 position: absolute;
 cursor: pointer;
`;


const Top_Page=()=>{
    
    
    return(
        <div className='home' style={HomeBackGround}>
        
            <div>
                <Button1>
                    <ImgParticipant src={ParticipantButtonImage} alt="ParticipantButtonImage"/>
                </Button1>
            </div>
            
            <div>
                <Button2>
                    <ImgMeeting src={MeetingButtonImage} alt="MeetingButtonImage"/>
                </Button2>
            </div>
            
            <div>
                <Button3>
                    <ImgTracking src={TrackingButtonImage} alt="TrackingButtonImage"/>
                </Button3>
            </div>
        </div>
    )
}
export default Top_Page;
