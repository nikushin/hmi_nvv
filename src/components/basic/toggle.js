import React, {Fragment, memo, useEffect, useLayoutEffect, useState} from "react";
import styled, {css} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {get} from 'lodash';

const ToggleContainer = styled.div`
    box-shadow: rgb(0, 0, 0) 0 0 8px -1px inset, rgba(0, 0, 0, 0.8) 0px 0px 8px 0px inset, rgba(0, 0, 0, 0.9) -1px -1px 0px 0px, rgba(255, 255, 255, 0.1) 1px 1px 0px 0px;
    width: 90px;
    height: 40px;
    ${props => props.switch && css`
      background: rgb(0, 234, 100) linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%) repeat scroll 0% 0% / auto padding-box border-box;
`}
     ${props => !props.switch && css`
      background: rgb(34, 39, 42) linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%) repeat scroll 0% 0% / auto padding-box border-box;
`}
    border-radius: 45px;  
    margin: 0 2.25px;
    padding: 2.25px; 
`;

const Button = styled.div`
    box-shadow: rgba(52, 52, 52, 0.4) 0 0 1px 0 inset, rgba(0, 0, 0, 0.2) 0 0 0 1px inset, rgba(0, 0, 0, 0.7) 1px 1px 2px 0;
    height: 40px;
    width: 40px;
        ${props => props.switch && css`
      background: rgb(0, 234, 100) linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%) repeat scroll 0 0% / auto padding-box border-box;
     transform: matrix(1, 0, 0, 1, 48, 0); //48 - положение право
`}
     ${props => !props.switch && css`
      background: rgb(34, 39, 42) linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%) repeat scroll 0 0% / auto padding-box border-box;
      transform: matrix(1, 0, 0, 1, 2, 0);
`}
    background: rgb(14, 16, 18) linear-gradient(135deg, rgba(255, 255, 255, 0.5) -20%, rgba(0, 0, 0, 0.7) 100%) repeat scroll 0 0% / auto padding-box border-box;
    border-radius: 50%;
    transition: all 0.4s ease 0s;
`;

const Toggle = ({path, active = true}) => {
    //const leaf = (obj, path) => (path.split('.').reduce((value,el) => value && value[el], obj));
    //const on = useSelector(state => leaf(state, path));
    const on = useSelector(state => get(state, path));
    const dispatch = useDispatch();
    const Switch = () => {
        if (active) {
            dispatch({type: 'SWITCH_BOOL', payload: path})
        }
    };

    return (
        <ToggleContainer switch={on===true} onPointerDown={Switch}>
            <Button switch={on===true}/>
        </ToggleContainer>
    )
};

export default Toggle;