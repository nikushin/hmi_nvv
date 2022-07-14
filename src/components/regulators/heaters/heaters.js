import React, {Fragment} from "react";
import Toggle from "../../basic/toggle";

import {SubHeader , ToggleStringContainer, ToggleString} from "../../basic/basic-styles";
import RegulatorOneParameter from "../../basic/regulator-one-parameter";
const HeaterGeneral = () => {

    return (
        <Fragment>
            <RegulatorOneParameter manual_mode_path={'memory.retain.manual.burner.mode'}
                                   manual_sp_path={'memory.retain.manual.burner.value'}
                                   on_path={'memory.operative.transistorOutput.burner'}
                                   digital_cur_path={'memory.operative.analog.te_boiler'}
                                   digital_sp_path={'memory.retain.sp.burner_for_boiler'}
                                   string_lamp={'Котел в работе'} string_toggle={'Включить'} string_sp={'t бойл. <'} string_header={'Котел'}/>
            <SubHeader>Насосы</SubHeader>
            <ToggleStringContainer>
                <ToggleString>
                    <div>Отопление</div> <Toggle path={'memory.retain.pumps.heating'}/>
                </ToggleString>
                <ToggleString>
                    <div>Солн.колл.</div> <Toggle path={'memory.retain.pumps.collector'}/>
                </ToggleString>
                <ToggleString>
                    <div>Бассейн</div> <Toggle path={'memory.retain.pumps.pool'}/>
                </ToggleString>
                <ToggleString>
                    <div>Тепл.пол</div> <Toggle path={'memory.retain.pumps.floor'}/>
                </ToggleString>
            </ToggleStringContainer>
        </Fragment>
    )
};

export default HeaterGeneral;