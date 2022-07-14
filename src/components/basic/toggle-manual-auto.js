import React, {Fragment} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {get} from "lodash";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  >div {
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

const Mode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 40px;
  font-size: 25px;
  background-color: ${props => props.checked ? '#00922a' : 'none'};
`;

const ToggleManualAuto = ({path}) => {
    const dispatch = useDispatch();
    const manual = useSelector(state => get(state, path));
    const ModeChange = () => {
        dispatch({type: 'SWITCH_BOOL', payload : path})
    };
    return (
        <Fragment>
            <Container onPointerDown={ModeChange}>
                <Mode checked={!manual}>Авт</Mode>
                <Mode checked={manual}>Руч</Mode>
            </Container>
        </Fragment>
    )
};

export default ToggleManualAuto;