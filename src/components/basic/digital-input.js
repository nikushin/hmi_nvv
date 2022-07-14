import React, {Fragment, useEffect, useLayoutEffect, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {get} from "lodash";

const DigitalInputContainer = styled.div`
  background-color: white;
  width: 80px;
  height: 35px;
`;

const DigitalInputStyled = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 25px;
`;

const DigitalInput = ({path,input, min = 0, max = 100}) => {
    const dispatch = useDispatch();
    //const leaf = (obj, path) => (path.split('.').reduce((value,el) => value && value[el], obj));
    //const valueG = useSelector(state => leaf(state, path));
    const valueG = useSelector(state => get(state, path));
    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        if (valueG !== undefined) {
            setValue(valueG)
        } else {
            setValue('н/д')
        }
    }, [valueG]);

    const onChange = (e) =>  {
        setValue(e.target.value);
    };

    const onBlur = () =>  {
        if (value >= min && value <= max) {
            dispatch({type: 'CHANGE_DIGITAL_INPUT', payload: {value : value, path: path}});
        } else {
            setValue(valueG)
        }
    };

    return (
        <DigitalInputContainer>
                <DigitalInputStyled type="text" disabled={!input} value={value} onChange={(e) => onChange(e)} onBlur={onBlur}/>
        </DigitalInputContainer>
    )
};

export default DigitalInput