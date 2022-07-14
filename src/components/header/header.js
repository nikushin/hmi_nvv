import React, {Fragment} from "react";
import {Link, NavLink} from "react-router-dom";
import {HeaderContainer} from "./header-styled";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    &.active {
    background-color: rgb(37,100,94);
    }
`;

export const Header = () => {
    return (
        <HeaderContainer>
                <StyledLink to="/regulators">Регуляторы</StyledLink>
                <StyledLink to="/settings">Настройки</StyledLink>
                <StyledLink to="/alarms">Аварии</StyledLink>
                <StyledLink to="/parameters">Параметры</StyledLink>
        </HeaderContainer>
    )
};