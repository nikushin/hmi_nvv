import React, {Fragment} from 'react';
import Toggle from "../basic/toggle";
import {SubHeader, ToggleString as ToggleStringBasic, ToggleStringContainer} from "../basic/basic-styles";
import styled from "styled-components";
import DigitalInput from "../basic/digital-input";

const ToggleString = styled(ToggleStringBasic)`
      width: 350px;
    `;

const DigitalString = styled.div`
margin-top: 15px;
      display: flex;
      justify-content: space-evenly;
    `;


const SettingsPage = () => {
  const base_path = 'memory.retain.in_work.flaps.';
  return (
      <Fragment>
        <SubHeader>Какие заслонки в работе</SubHeader>
          <ToggleStringContainer>
              <ToggleString>
                  <div>Кабинет приток</div> <Toggle path={base_path + 'cabinet_inflow'}/>
              </ToggleString>
              <ToggleString>
                  <div>Кабинет вытяжка</div> <Toggle path={base_path + 'cabinet_exhaust'}/>
              </ToggleString>
              <ToggleString>
                  <div>Комната 2 приток</div> <Toggle path={base_path + 'room2_inflow'}/>
              </ToggleString>
              <ToggleString>
                  <div>Комната 2 вытяжка</div> <Toggle path={base_path + 'room2_exhaust'}/>
              </ToggleString>
              <ToggleString>
                  <div>Кухня приток</div> <Toggle path={base_path + 'kitchen_inflow'}/>
              </ToggleString>
              <ToggleString>
                  <div>Кухня вытяжка</div> <Toggle path={base_path + 'kitchen_exhaust'}/>
              </ToggleString>
              <ToggleString>
                  <div>Ванная приток</div> <Toggle path={base_path + 'bathroom_inflow'}/>
              </ToggleString>
              <ToggleString>
                  <div>Ванная вытяжка</div> <Toggle path={base_path + 'bathroom_exhaust'}/>
              </ToggleString>
              <ToggleString>
                  <div>Наруж. приток</div> <Toggle path={base_path + 'out_inflow'}/>
              </ToggleString>
              <ToggleString>
                  <div>Наруж. вытяжка</div> <Toggle path={base_path + 'out_exhaust'}/>
              </ToggleString>
          </ToggleStringContainer>
          <DigitalString>
              <div>Ход заслонки, с</div>
             <DigitalInput path={'memory.retain.sp.flaps.full_move_time'} max={200} input={true}/>
          </DigitalString>

      </Fragment>
  );
};

export default SettingsPage;


