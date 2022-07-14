import React, {Fragment} from 'react';
import FanGeneral from '../regulators/fans/fans'
import {Route, Routes, Navigate} from "react-router-dom";
import {HeaderContainer} from "../header/header-styled";
import {StyledLink} from "../header/header";
import HeaterGeneral from "../regulators/heaters/heaters";
import FlapsGeneral from "../regulators/flaps/flaps";
import ValvesGeneral from "../regulators/valves/valves";


const RegulatorsPage = () => {

  return (
      <Fragment>
            <HeaderContainer>
                <StyledLink to="fan">Вентиляция</StyledLink>
                <StyledLink to="heat">Отопление</StyledLink>
                <StyledLink to="flaps">Заслонки</StyledLink>
                <StyledLink to="valves">Клапаны</StyledLink>
            </HeaderContainer>
          <Routes>
              <Route path="/" element={<Navigate to="fan"/>} />
              <Route path="fan" element={<FanGeneral/>}/>
              <Route path="heat" element={<HeaterGeneral/>}/>
              <Route path="flaps" element={<FlapsGeneral/>}/>
              <Route path="valves" element={<ValvesGeneral/>}/>
          </Routes>
      </Fragment>
  );
};

export default RegulatorsPage;


