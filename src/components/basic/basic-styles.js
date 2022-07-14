import styled from "styled-components";

//Переключатель строкой
export const ToggleString = styled.div`
        display: flex;
        width: 270px;
        Justify-content: flex-end;
        align-items: center;
        >div {
          margin: 7px;
        }
        >div:last-child {
          flex-shrink: 0;
        }
`;
export const ToggleStringContainer = styled.div`
  margin-right: 30px;
  display: flex;
  flex-wrap : wrap;
  Justify-content: center;
`;

//Подзаголовок
export const SubHeader = styled.div`
    background-color: rgb(49,64,78);
    margin-bottom: 5px;
    padding: 10px;
`;

//контейнер 2