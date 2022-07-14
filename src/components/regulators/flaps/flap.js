import React, {Fragment} from "react";
import DigitalInput from "../../basic/digital-input";
import styled from "styled-components";
import Lamp from "../../basic/lamp"
import {SubHeader} from "../../basic/basic-styles";

const DigitalInputContainer = styled.div`
    display: flex;
    Justify-content: space-around;
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
            > div:first-child {
        margin-bottom: 5px;
        }
    }
`;

const LampContainer = styled.div`
    display: flex;
    Justify-content: space-around;
    > div {
      width: 200px;
    }
`;

const color_green = '0 , 255 , 0';
const color_red = '255 , 0 , 0';
const color_yellow = '255 , 255 , 0';

export const Flap = ({name, name_string}) => {
    const path_sp = `memory.retain.sp.flaps.${name}`;
    const path_position = `memory.operative.flaps.cur_position.${name}`;
    return (
        <Fragment>
            <SubHeader>{name_string}</SubHeader>
            <DigitalInputContainer>
                <div>
                    <div>Уставка</div>
                    <DigitalInput path={path_sp} input={true} />
                </div>
                <div>
                    <div>Положение</div>
                    <DigitalInput path={path_position}/>
                </div>
            </DigitalInputContainer>
            <LampContainer>
                <div>
                    <Lamp parameter={`memory.operative.flaps.alarm.${name}`} name='Авария'
                          color_on={color_red}/>
                    <Lamp parameter={`memory.operative.flaps.ready.${name}`} name={'Калибровка'}
                          color_on={color_green}/>
                </div>
                <div>
                    <Lamp parameter={`memory.operative.discreteInput.ls_${name}_open`} name={'К.откр'}
                          color_on={color_yellow}/>
                    <Lamp parameter={`memory.operative.discreteInput.ls_${name}_close`} name={'К.закр'}
                          color_on={color_yellow}/>
                </div>
            </LampContainer>
        </Fragment>
    )
};