import React, {Fragment} from 'react';
import Toggle from "../basic/toggle";
import {SubHeader} from "../basic/basic-styles";
import styled, {css} from "styled-components";
import Lamp from "../basic/lamp";

const LampContainer = styled.div`
    margin-right: 15px;
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ResetButton = styled.div`
    box-shadow: rgb(0, 0, 0) 0 0 8px -1px inset, rgba(0, 0, 0, 0.8) 0px 0px 8px 0px inset, rgba(0, 0, 0, 0.9) -1px -1px 0px 0px, rgba(255, 255, 255, 0.1) 1px 1px 0px 0px;
    width: 90px;
    height: 40px;
    ${props => props.switch && css`
      background: rgb(234,12,3) linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%) repeat scroll 0% 0% / auto padding-box border-box;
`}
     ${props => !props.switch && css`
      background: rgb(34, 39, 42) linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%) repeat scroll 0% 0% / auto padding-box border-box;
`}
    border-radius: 45px;  
    padding: 2.25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Alarm = ({name, string}) => {
    const base_path = `memory.operative.flaps.alarm.`;
    return (
        <Fragment>
            <LampContainer>
                <Lamp parameter={base_path + name} name={string}/>
                <ResetButton switch={true}>Сброс</ResetButton>
            </LampContainer>
        </Fragment>
    );
};

const AlarmsPage = () => {
    return (
        <Fragment>
            <Alarm name={'cabinet_inflow'} string={'Кабинет приток'} />
            <Alarm name={'cabinet_exhaust'} string={'Кабинет приток'} />
        </Fragment>
    );
};

export default AlarmsPage;


