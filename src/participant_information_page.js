import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import styled from "styled-components";
import PartInfoBG from './Picture/Participant_Information_Page/participant_info_bg.jpg';

import PartInfoNum from './Picture/Participant_Information_Page/participant_num.png';
import PartInfoName from './Picture/Participant_Information_Page/participant_name.png';
import PartInfoGender from './Picture/Participant_Information_Page/participant_gender.png';
import PartInfoIdentity from './Picture/Participant_Information_Page/participant_identity.png';
import PartInfoEmail from './Picture/Participant_Information_Page/participant_email.png';
import PartInfoAssPhone from './Picture/Participant_Information_Page/assistant_phone.png';

const PartInfoBackGround={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+PartInfoBG+')',
    wideth:"100vw",
    height:"100vh"
}

const ImgNum =styled.img`
    padding: 5px;
    width: 125px;
    top: 140px;
    left: 265px;

    position: absolute;
    z-index:100;
 `;

 const ImgName =styled.img`
    padding: 5px;
    width: 60px;
    top: 200px;
    left: 327px;

    position: absolute;
    z-index:100;
 `;

 const ImgGender =styled.img`
    padding: 5px;
    width: 60px;
    top: 200px;
    left: 625px;

    position: absolute;
    z-index:100;
 `;

 const ImgIdentity =styled.img`
    padding: 5px;
    width: 60px;
    top: 200px;
    left: 875px;

    position: absolute;
    z-index:100;
 `;

 const ImgEmail =styled.img`
    padding: 5px;
    width: 80px;
    top: 250px;
    left: 305px;

    position: absolute;
    z-index:100;
 `;

 const ImgAssPhone =styled.img`
    padding: 5px;
    width: 150px;
    top: 250px;
    left: 750px;

    position: absolute;
    z-index:100;
 `;

const Participant_Information_Page=()=>{
    return(
        <div className='participant_info' style={PartInfoBackGround}>
            <ImgNum src={PartInfoNum} alt="PartInfoNum"/>

            <div>
                <ImgName src={PartInfoName} alt="PartInfoName"/>
                <ImgGender src={PartInfoGender} alt="PartInfoGender"/>
                <ImgIdentity src={PartInfoIdentity} alt="PartInfoIdentity"/>
            </div>

            <div>
                <ImgEmail src={PartInfoEmail} alt="PartInfoEmail"/>
                <ImgAssPhone src={PartInfoAssPhone} alt="PartInfoAssPhone"/>
            </div>
        </div>
        )
}
export default Participant_Information_Page;