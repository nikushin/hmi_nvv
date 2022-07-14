import {useSelector} from "react-redux";
import React, {Fragment, memo} from "react";
import styled, {css, keyframes} from 'styled-components'
import {get} from "lodash";

const size = '25';

const keyframesBlink = keyframes`
0% { background-color: rgb(110, 110, 110);
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 8px -1px inset, rgba(0, 0, 0, 0.6) 0 0 4px 0 inset, rgba(0, 0, 0, 0.9) -1px -1px 0 0, rgba(255, 255, 255, 0.1) 1px 1px 0 0; }
100% { background-color: rgb(${props => props.color});
      box-shadow: rgb(${props => props.color}) 0 0 8px 2px, rgba(0, 0, 0, 0.9) 1px 1px 0 0, rgba(255, 255, 255, 0.1) -1px -1px 0 0; } 
`;

const LampContainer = styled.div`
  display: flex;
  align-items : center;
`;

const LampStyle = styled.div`
    margin: 15px;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background-color: rgb(110, 110, 110);
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 8px -1px inset, rgba(0, 0, 0, 0.6) 0 0 4px 0 inset, rgba(0, 0, 0, 0.9) -1px -1px 0 0, rgba(255, 255, 255, 0.1) 1px 1px 0 0;
    background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);
    background-blend-mode: overlay;
    transition: all 100ms ease-in-out 0s;
    ${props => !props.switch && props.color_off !== undefined && css`
      background-color: rgb(${props => props.color_off});
      box-shadow: rgb(${props => props.color_off}) 0 0 8px 2px, rgba(0, 0, 0, 0.9) 1px 1px 0 0, rgba(255, 255, 255, 0.1) -1px -1px 0 0;
    `}
    ${props => props.switch && css`
      background-color: rgb(${props => props.color_on});
      box-shadow: rgb(${props => props.color_on}) 0 0 8px 2px, rgba(0, 0, 0, 0.9) 1px 1px 0 0, rgba(255, 255, 255, 0.1) -1px -1px 0 0;
    `}
    ${props => props.blink && css`
    animation: ${keyframesBlink} 500ms ease-out infinite; 
    transition: all 0ms ease-in-out 0s;
    `}
    `;

const Lamp = ({parameter, keeper, blink, name, color_on = '0 , 255 , 0', color_off}) => {
    //const leaf = (obj, path) => (path.split('.').reduce((value,el) => value && value[el], obj));
    //const on = useSelector(state => leaf(state, parameter));
    const on = useSelector(state => get(state, parameter));
    return(
        <LampContainer>
            <LampStyle switch={on} blink={blink} color_on={color_on} color_off={color_off}> </LampStyle>
            <div>{name}</div>
        </LampContainer>
)};

export default memo(Lamp);