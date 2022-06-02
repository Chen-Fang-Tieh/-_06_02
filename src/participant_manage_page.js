import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import styled from "styled-components";
import PartManageBG from './Picture/Participant_Manage_Page/participant_manage_Page_bg.png';
import PartManageAdd from './Picture/Participant_Manage_Page/participant_manage_button_add.png';
import PartManageEdit from './Picture/Participant_Manage_Page/participant_manage_button_edit.png';
import PartManageDelete from './Picture/Participant_Manage_Page/participant_manage_button_delete.png';
import PartManageAttr1 from './Picture/Participant_Manage_Page/participant_manage_attr1.png';
import PartManageAttr2 from './Picture/Participant_Manage_Page/participant_manage_attr2.png';
import PartManageAttr3 from './Picture/Participant_Manage_Page/participant_manage_attr3.png';
import PartManageAttr4 from './Picture/Participant_Manage_Page/participant_manage_attr4.png';

const PartManageBackGround={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+PartManageBG+')',
    wideth:"100vw",
    height:"100vh"
}

const ImgAdd =styled.img`
    padding: 5px;
    width: 45px;

    position: relative;
 `;

 const ImgHeader =styled.img`
    padding: 5px;
    position: relative;
 `;

 const ImgFix =styled.img`
    position: relative;
 `;

 const SelectAdd =styled.select`
    border: 5px solid #79B4B7;
    border-radius: 4px;
    padding: 5px;
    width: 115px;
    height: 45px;
    top: 130px;
    left: 1115px;

    position: absolute;
    z-index:100;
 `;

 const TableSet =styled.table`
    top: 200px;
    left: 160px;
    position: absolute;
    tr:nth-child(2n+1){background-color:#F8F0DF;}
    tr:nth-child(2n+2){background-color:#FEFBF3;}
    
    overflow-y: scroll;
    height: 430px;
    display: block;
    
    -webkit-overflow-scrolling: touch;
    
 `;
 const TableHead =styled.table`
    top: 140px;
    left: 160px;
    position: absolute;
    
 `;

 const ButtonAdd =styled.button`
 border: none;
 width: 60px;
 height: 60px;
 top: 125px;
 left: 1245px;
 background-color: unset;
 position: relative;
 cursor: pointer;
 
 z-index:100;
`;

 const ButtonFix =styled.button`
    border: none;
    width: 60px;
    height: 60px;
    left: 25px;
    background-color: unset;
    position: relative;
    cursor: pointer;
 `;

 



var participant_num = 'A1085544';
var participant_name = '陳芳蝶';
var participant_identity = '資工112';
var participant_phone = '0900637781';


const Participant_Manage_Page=()=>{
    
    return(
        
        <div className='participant_manage' style={PartManageBackGround}>
            <SelectAdd>
                <option>請選擇身分</option>
                <option>系助理</option>
                <option>系上老師</option>
                <option>校外老師</option>
                <option>業界專家</option>
                <option>學生代表</option>
            </SelectAdd>
            <div>
                <ButtonAdd><ImgAdd width='50px' src={PartManageAdd} alt="ManageButtonImage"/></ButtonAdd>
            </div>
            <div>
                <TableHead className='participant_manage_table1'>
                    <tr>
                        <th width='200px'><ImgHeader width='100px' height='25px' src={PartManageAttr1} alt="PartManageAttr1"/></th>
                        <th width='150px'><ImgHeader width='50px' height='25px' src={PartManageAttr2} alt="PartManageAttr2"/></th>
                        <th width='300px'><ImgHeader width='100px' height='25px' src={PartManageAttr3} alt="PartManageAttr3"/></th>
                        <th width='290px'><ImgHeader width='50px' height='25px' src={PartManageAttr4} alt="PartManageAttr4"/></th>
                    </tr>
                </TableHead>
                <form>
                    <TableSet className='participant_manage_table2'>  
                        <tr>
                            <td width='200px'> </td>
                            <td width='150px'> </td>
                            <td width='300px'> </td>
                            <td width='290px'> </td>

                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>

                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td width='100px'>
                                <ButtonFix type="button" ><ImgFix width='50px' src={PartManageEdit} alt="ButtonFix"/></ButtonFix>
                            </td>
                            <td width='100px'>
                                <ButtonFix><ImgFix width='50px' src={PartManageDelete} alt="ButtonDelete"/></ButtonFix>
                            </td>
                        </tr>
                    </TableSet>
                </form>
            </div>

            
        </div>
        
    )
}
export default Participant_Manage_Page;