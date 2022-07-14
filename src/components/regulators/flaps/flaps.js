import React, {Fragment} from 'react';
import {Flap} from "./flap";

const FlapsGeneral = () => {
    return (
        <Fragment>
            <Flap name='cabinet_inflow' name_string={'Кабинет приток'}/>
            <Flap name='cabinet_exhaust' name_string={'Кабинет вытяжка'}/>
            <Flap name='room2_inflow' name_string={'Комната 2 приток'}/>
            <Flap name='room2_exhaust' name_string={'Комната 2 вытяжка'}/>
            <Flap name='kitchen_inflow' name_string={'Кухня приток'}/>
            <Flap name='kitchen_exhaust' name_string={'Кухня вытяжка'}/>
            <Flap name='bathroom_inflow' name_string={'Ванная приток'}/>
            <Flap name='bathroom_exhaust' name_string={'Ванная вытяжка'}/>
            <Flap name='out_inflow' name_string={'Наружный приток'}/>
            <Flap name='out_exhaust' name_string={'Наружная вытяжка'}/>
        </Fragment>
    );
};

export default FlapsGeneral;


