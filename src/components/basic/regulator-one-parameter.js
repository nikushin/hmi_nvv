import React, {Fragment, useEffect} from "react";

import {SubHeader as SubHeaderBasic , ToggleStringContainer, ToggleString} from "../basic/basic-styles";
import styled from "styled-components";
import {useSelector} from "react-redux";
import Lamp from "../basic/lamp";
import DigitalInput from "../basic/digital-input";
import {get} from "lodash";
import ToggleManualAuto from "./toggle-manual-auto";
import Toggle from "./toggle";

export const SubHeader = styled(SubHeaderBasic)`
    margin-bottom: 15px;
`;

export const LampContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const DigitalInputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
    >div {
        display: flex;
        justify-content: flex-end;
        margin: 5px;
        width: 230px;
        >div:first-child{
        margin-right: 10px;
        }
    }
`;


const RegulatorOneParameter = ({manual_mode_path, manual_sp_path, on_path, digital_cur_path, digital_sp_path,
                               string_lamp, string_toggle, string_header, string_sp ,max_sp = 30}) => {
    const manual_mode = useSelector(state => get(state, manual_mode_path));
    const LampOrToggle = () => {
        if (manual_mode) {
            return  <ToggleStringContainer>
                <ToggleString>
                    <div>{string_toggle}</div> <Toggle path={manual_sp_path}/>
                </ToggleString>
            </ToggleStringContainer>
        } else {
            return (
                <LampContainer>
                    <Lamp parameter={on_path} name={string_lamp}/>
                </LampContainer>
            )
        }
    };

    return (
        <Fragment>
            <SubHeader>{string_header}</SubHeader>
            <ToggleManualAuto path={manual_mode_path}/>
            {LampOrToggle()}
            <DigitalInputContainer>
                <div>
                    <div>Сейчас</div>
                    <DigitalInput path={digital_cur_path} />
                </div>
                <div>
                    <div>{string_sp}</div>
                    <DigitalInput path={digital_sp_path} max={max_sp} input={true}/>
                </div>
            </DigitalInputContainer>


        </Fragment>
    )
};

export default RegulatorOneParameter;