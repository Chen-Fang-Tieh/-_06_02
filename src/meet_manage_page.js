import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import styled from "styled-components";
//import ParticipantBG from './Picture/participant_Page_bg.png';
//import ParticipantManage from './Picture/participant_Page_Manage_Button.png';
//import ParticipantSearch from './Picture/participant_Page_Search_Button.png';
/*
const ParticipantBackGround={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+ParticipantBG+')',
    wideth:"100vw",
    height:"100vh"
}

const ImgManage =styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
    top: 225px;
    left: 317px;

    position: absolute;
 `;

 const ImgSearch =styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
    top: 225px;
    left: 900px;

    position: absolute;
 `;
*/


var participant_num = 'A1085544';
var participant_name = '陳芳蝶';
var participant_identity = '資工112';
var participant_phone = '0900637781';


const Meeting_Manage_Page=()=>{
    
    return(
        
        <div className='participant_manage' /*style={ParticipantBackGround}*/>
            
            <h1>
                成員管理系統
            </h1>
            <button>
                +
            </button>
            <table>
                <tr>
                    <th>會議編號</th>
                    <th>會議名稱</th>
                    <th>會議種類</th>
                    <th>開會時間</th>
                </tr>
                <tr>
                    <td>meet_num</td>
                    <td>meet_name</td>
                    <td>meet_type</td>
                    <td>meet_time</td>
                    <td>
                        <button>fix</button>
                    </td>
                    <td>
                        <button>X</button>
                    </td>
                </tr>
            </table>
            
        </div>
        
    )
}
export default Meeting_Manage_Page;