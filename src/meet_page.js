import React from 'react';
import styled from "styled-components";
import MeetingBG from './Picture/meet_Page_bg.png';
import MeetingManage from './Picture/participant_Page_Manage_Button.png';
import MeetingSearch from './Picture/participant_Page_Search_Button.png';
//未完

const MeetingBackGround={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+MeetingBG+')',
    wideth:"100vw",
    height:"100vh"
}

const ImgManage =styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 300px;

    position: relative;
 `;

 const ImgSearch =styled.img`
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
 left: 325px;
 background-color: unset;
 position: absolute;
 cursor: pointer;
`;

const Button2 =styled.button`
 border: none;   
 width: 310px;
 height: 310px;
 top: 225px;
 left: 900px;
 background-color: unset;
 position: absolute;
 cursor: pointer;
`;


const Meeting_Page=()=>{
    
    return(
        <div className='Meeting' style={MeetingBackGround}>
        
            <div>
                <Button1>
                    <ImgManage src={MeetingManage} alt="ManageButtonImage" />
                </Button1>
            </div>
            
            <div>
                <Button2>
                    <ImgSearch src={MeetingSearch} alt="SearchButtonImage"/>
                </Button2>
            </div>
            
        </div>
    )
}
export default Meeting_Page;