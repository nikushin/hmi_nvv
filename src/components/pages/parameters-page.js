import React, {Fragment} from 'react';
import styled from "styled-components";
import DigitalInput from "../basic/digital-input";
import {SubHeader} from "../basic/basic-styles";

const DigitalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 15px;
    > div {
        display: flex;
        align-items: center;
        //Justify-content: flex-end;
        //min-width: 300px;
        margin-right: 30px;
        margin-bottom: 15px;
            > div:first-child {
        margin-bottom: 5px;
        margin-right: 20px;
        }
    }
`;

const ParametersPage = () => {
    return (
        <Fragment>
            <SubHeader>Температура</SubHeader>
            <DigitalContainer>
                <div>
                    <div>Бойлер</div>
                    <DigitalInput path={'memory.operative.analog.te_boiler'}/>
                </div>
                <div>
                    <div>Наружная</div>
                    <DigitalInput path={'memory.operative.analog.te_outdoor'}/>
                </div>
                <div>
                    <div>В комнаты</div>
                    <DigitalInput path={'memory.operative.analog.rec_te_to_rooms'}/>
                </div>
                <div>
                    <div>После т/об</div>
                    <DigitalInput path={'memory.operative.analog.rec_te_to_rooms_tob'}/>
                </div>
                <div>
                    <div>Из комнат</div>
                    <DigitalInput path={'memory.operative.analog.rec_te_from_rooms'}/>
                </div>
                <div>
                    <div>На выходе</div>
                    <DigitalInput path={'memory.operative.analog.rec_te_out'}/>
                </div>
                <div>
                    <div>Коллектор t1</div>
                    <DigitalInput path={'memory.operative.analog.col_te_t1'}/>
                </div>
                <div>
                    <div>Коллектор t2</div>
                    <DigitalInput path={'memory.operative.analog.col_te_t2'}/>
                </div>
                <div>
                    <div>Коллектор</div>
                    <DigitalInput path={'memory.operative.analog.col_te_sk'}/>
                </div>
                <div>
                    <div>Чердак</div>
                    <DigitalInput path={'memory.operative.analog.te_garret'}/>
                </div>
                <div>
                    <div>Гараж</div>
                    <DigitalInput path={'memory.operative.analog.te_garage'}/>
                </div>
                <div>
                    <div>Ванная</div>
                    <DigitalInput path={'memory.operative.modbus.te_bathroom'}/>
                </div>
                <div>
                    <div>Кабинет</div>
                    <DigitalInput path={'memory.operative.modbus.te_cabinet'}/>
                </div>
            </DigitalContainer>
            <SubHeader>Давление</SubHeader>
            <DigitalContainer>
                <div>
                    <div>Коллектор</div>
                    <DigitalInput path={'memory.operative.analog.col_pe_sk'}/>
                </div>
                <div>
                    <div>pde Приток</div>
                    <DigitalInput path={'memory.operative.modbus.pde_out_to_in'}/>
                </div>
                <div>
                    <div>pde Вытяжка</div>
                    <DigitalInput path={'memory.operative.modbus.pde_in_to_out'}/>
                </div>
                <div>
                    <div>pde Баланс</div>
                    <DigitalInput path={'memory.operative.analog.pe_out_rooms'}/>
                </div>
            </DigitalContainer>
            <SubHeader>Влажность</SubHeader>
            <DigitalContainer>
                <div>
                    <div>Чердак</div>
                    <DigitalInput path={'memory.operative.analog.hum_garret'}/>
                </div>
                <div>
                    <div>Гараж</div>
                    <DigitalInput path={'memory.operative.analog.hum_garage'}/>
                </div>
                <div>
                    <div>Ванная</div>
                    <DigitalInput path={'memory.operative.modbus.hum_bathroom'}/>
                </div>
                <div>
                    <div>Кабинет</div>
                    <DigitalInput path={'memory.operative.modbus.hum_cabinet'}/>
                </div>
            </DigitalContainer>
            <SubHeader>Разное</SubHeader>
            <DigitalContainer>
                <div>
                    <div>Ток</div>
                    <DigitalInput path={'memory.operative.modbus.transformer_cur'}/>
                </div>
                <div>
                    <div>CO2 кабинет</div>
                    <DigitalInput path={'memory.operative.modbus.co2_cabinet'}/>
                </div>
                <div>
                    <div>Свет ванная</div>
                    <DigitalInput path={'memory.operative.modbus.light_bathroom'}/>
                </div>
                <div>
                    <div>Движение ванная</div>
                    <DigitalInput path={'memory.operative.modbus.move_bathroom'}/>
                </div>
                <div>
                    <div>Движение кабинет</div>
                    <DigitalInput path={'memory.operative.modbus.move_cabinet'}/>
                </div>
            </DigitalContainer>
        </Fragment>
    );
};

export default ParametersPage;


