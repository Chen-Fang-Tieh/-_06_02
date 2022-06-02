import React from 'react';
import styled from "styled-components";
import ParticipantBG from './Picture/participant_Page_bg.png';
import ParticipantManage from './Picture/participant_Page_Manage_Button.png';
import ParticipantSearch from './Picture/participant_Page_Search_Button.png';

const ParticipantBackGround={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+ParticipantBG+')',
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


const Participant_Page=()=>{
    
    return(
        <div className='participant' style={ParticipantBackGround}>
        
            <div>
                <Button1>
                    <ImgManage src={ParticipantManage} alt="ManageButtonImage"/>
                </Button1>
            </div>
            
            <div>
                <Button2>
                    <ImgSearch src={ParticipantSearch} alt="SearchButtonImage"/>
                </Button2>
            </div>
            
        </div>
    )
}
export default Participant_Page;