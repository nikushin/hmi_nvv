import React, {Fragment} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {get} from "lodash";

const Header = styled.div`
margin-bottom: 10px;
font-size: 25px;
    `;

const RadioInputFanSpeed = styled.div`
  background-color: ${props => props.checked ? '#FF853B' : 'none'};
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
    `;
const InputFanSpeedContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  > div {
    border: 1px solid white;
    border-right: none;
  }
  > div:last-child {
    border: 1px solid white;
    border-radius: 0 6px 6px 0;
  }
   > div:first-child {
    border-radius: 6px 0 0 6px;
  }
    `;

const FanSpeed = ({get_path, set_path , name_string}) => {
    const dispatch = useDispatch();
    const Speed = useSelector(state => get(state, get_path));
    const manual = useSelector(state => state.memory.retain.manual.fans.mode);
    const Change = (value) => {
        if (manual) {
            dispatch({type: 'CHANGE_DIGITAL_INPUT', payload: {value : value, path: set_path}})
        }
    };
    return (
        <Fragment>
            <Header>{name_string}</Header>
            <InputFanSpeedContainer speed={Speed}>
                <RadioInputFanSpeed checked={Speed === 0} onPointerDown={() => Change(0)}>0</RadioInputFanSpeed>
                <RadioInputFanSpeed checked={Speed === 1} onPointerDown={() => Change(1)}>1</RadioInputFanSpeed>
                <RadioInputFanSpeed checked={Speed === 2} onPointerDown={() => Change(2)}>2</RadioInputFanSpeed>
                <RadioInputFanSpeed checked={Speed === 3} onPointerDown={() => Change(3)}>3</RadioInputFanSpeed>
            </InputFanSpeedContainer>
        </Fragment>
    )
};

export default FanSpeed