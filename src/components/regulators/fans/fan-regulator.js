import React, {Fragment} from "react";
import DigitalInput from "../../basic/digital-input";
import styled from "styled-components";
import {SubHeader} from "../../basic/basic-styles";

const DigitalInputContainer = styled.div`
    margin-bottom: 15px;
    display: flex;
    justify-content: space-around;
    > div {
        font-size: 20px;
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        >div {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            >div {
            margin: 5px;
        }
        }
    }
`;

const FanRegulator = ({header = 'Скорость приточного вентилятора, от углекислого газа в кабинете знач!',
                      path = {0: `memory.operative.flaps.cur_position.cabinet`,
                          1: `memory.operative.flaps.cur_position.cabinet[1]`,
                          2: `memory.operative.flaps.cur_position.cabinet[2]`,
                          3: `memory.operative.flaps.cur_position.cabinet[3]`},
                      name_string = {0:'0, CO2 >', 1:'1, CO2 >', 2:'2, CO2 >', 3:'3, CO2 >'}}) => {

    return (
        <Fragment>
            <SubHeader>{header}</SubHeader>
            <DigitalInputContainer>
                <div>
                    <div>
                        <div>{name_string[0]}</div>
                        <DigitalInput path={path[0]} max={4000}/>
                    </div>
                    <div>
                        <div>{name_string[1]}</div>
                        <DigitalInput path={path[1]} max={4000} input={true}/>
                    </div>
                </div>
                <div>
                    <div>
                        <div>{name_string[2]}</div>
                        <DigitalInput path={path[2]} max={4000} input={true}/>
                    </div>
                    <div>
                        <div>{name_string[3]}</div>
                        <DigitalInput path={path[3]} max={4000} input={true}/>
                    </div>
                </div>
            </DigitalInputContainer>
        </Fragment>
    )
};

export default FanRegulator;