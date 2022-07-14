import React, {Fragment} from "react";
import FanSpeed from "./fan-speed";
import FanRegulator from "./fan-regulator";
import ToggleManualAuto from "../../basic/toggle-manual-auto";

const FanGeneral = () => {

    return (
        <Fragment>
            <ToggleManualAuto path={'memory.retain.manual.fans.mode'}/>
            <FanSpeed set_path={'memory.retain.manual.fans.inflow_fan_speed'}
                      get_path={'memory.operative.fan.inflow_fan_speed'} name_string={'Вентилятор приток'}/>
            <FanSpeed set_path={'memory.retain.manual.fans.exhaust_fan_speed'}
                      get_path={'memory.operative.fan.exhaust_fan_speed'} name_string={'Вентилятор вытяжка'}/>
            <FanRegulator name_string={{0:'Сейчас:', 1:'1, CO2 >', 2:'2, CO2 >', 3:'3, CO2 >'}}
                          header={'Скорость приточного вентилятора, от углекислого газа в кабинете'}
                          path={{0: `memory.operative.modbus.co2_cabinet`,
                              1: `memory.retain.sp.fans.cabinet_inflow_co2.1`,
                              2: `memory.retain.sp.fans.cabinet_inflow_co2.2`,
                              3: `memory.retain.sp.fans.cabinet_inflow_co2.3`}}/>
            <FanRegulator name_string={{0:'Сейчас:', 1:'1, CO2 >', 2:'2, CO2 >', 3:'3, CO2 >'}}
                          header={'Скорость вытяжного вентилятора, от углекислого газа в кабинете'}
                          path={{0: `memory.operative.modbus.co2_cabinet`,
                              1: `memory.retain.sp.fans.cabinet_exhaust_co2.1`,
                              2: `memory.retain.sp.fans.cabinet_exhaust_co2.2`,
                              3: `memory.retain.sp.fans.cabinet_exhaust_co2.3`}}/>
            <FanRegulator name_string={{0:'Сейчас:', 1:'1, % >', 2:'2, % >', 3:'3, % >'}}
                          header={'Скорость приточного вентилятора, от влажности в ванной'}
                          path={{0: `memory.operative.modbus.hum_bathroom`,
                              1: `memory.retain.sp.fans.bathroom_inflow_hum.1`,
                              2: `memory.retain.sp.fans.bathroom_inflow_hum.2`,
                              3: `memory.retain.sp.fans.bathroom_inflow_hum.3`}}/>
            <FanRegulator name_string={{0:'Сейчас:', 1:'1, % >', 2:'2, % >', 3:'3, % >'}}
                          header={'Скорость вытяжного вентилятора, от влажности в ванной'}
                          path={{0: `memory.operative.modbus.hum_bathroom`,
                              1: `memory.retain.sp.fans.bathroom_exhaust_hum.1`,
                              2: `memory.retain.sp.fans.bathroom_exhaust_hum.2`,
                              3: `memory.retain.sp.fans.bathroom_exhaust_hum.3`}}/>
        </Fragment>
    )
};

export default FanGeneral;