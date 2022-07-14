import React, {Fragment} from "react";
import RegulatorOneParameter from "../../basic/regulator-one-parameter";
import {SubHeader, ToggleString, ToggleStringContainer} from "../../basic/basic-styles";
import Toggle from "../../basic/toggle";



const ValvesGeneral = () => {
    return (
        <Fragment>
            <RegulatorOneParameter manual_mode_path={'memory.retain.manual.vlv_to_rooms_tob.mode'}
                                   manual_sp_path={'memory.retain.manual.vlv_to_rooms_tob.value'}
                                   on_path={'memory.operative.status.vlv_to_rooms_tob'}
                                   digital_cur_path={'memory.operative.analog.rec_te_to_rooms_tob'}
                                   digital_sp_path={'memory.retain.sp.valve_cooling'}
            string_lamp={'Клапан открыт'} string_toggle={'Включить'} string_sp={'Вкл. если t >'} string_header={'Охлаждение'}/>
            <SubHeader>Клапан коллектора</SubHeader>
            <ToggleStringContainer>
                <ToggleString>
                    <div>Открыть</div> <Toggle path={'memory.retain.manual.vlv_collector'}/>
                </ToggleString>
            </ToggleStringContainer>
        </Fragment>
    )
};

export default ValvesGeneral;