import React, {Fragment} from "react";
import {
    BrowserRouter,
    Routes,
    Route, Navigate
} from "react-router-dom";
import {Header} from "../header/header";
import {GlobalStyle} from "./app-styled";
import {ParametersPage, RegulatorsPage, SettingsPage, AlarmsPage} from "../pages";



function App() {

  return (
    <Fragment>
        <GlobalStyle/>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/regulators" />}/>
                <Route path="/regulators/*" element={<RegulatorsPage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
                <Route path="/alarms" element={<AlarmsPage/>}/>
                <Route path="/parameters" element={<ParametersPage/>}/>
                }/>
            </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
