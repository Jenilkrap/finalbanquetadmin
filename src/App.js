import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import { userInputs } from "./formSource";
import { deptInputs } from "./formSource_dept";
import { plansInputs } from "./formSource_plans";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Calendar from "scenes/calendar/calendar";
import FAQ from "scenes/faq";
import Contacts from "./scenes/contacts";
import New from "scenes/new/New";
import List from "scenes/list/List";
import List_desg from "./scenes/list_desg/List_desg"
import List_plans from "scenes/list_plans/List_plans";
import New_plans from "./scenes/new_plans/New_plans"
import List_dept from "./scenes/list_dept/List_dept"
import New_dept from "./scenes/new_dept/New_dept"
import Page from "scenes/profilepage/Page";
import Login from '../src/scenes/mainlogin/login/Login'
import Tickets from './scenes/tickets/Tickets'
import Enquire from "scenes/mainlogin/enquire/Enquire";
import Forgot from "scenes/mainlogin/forgot/Forgot";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/profilepage" element={<Page />} />
              
              <Route path="/faq" element={<FAQ />} />
              <Route path="Users">
                <Route index element={<List />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="plans">
                <Route index element={<List_plans />} />
                <Route
                  path="new_plans"
                  element={<New_plans inputs={plansInputs} title="Add New plan" />}
                />
              </Route>
              <Route path="departments">
                <Route index element={<List_dept />} />
                <Route
                  path="new_dept"
                  element={<New_dept inputs={deptInputs} title="Add New plan" />}
                />
              </Route>
              <Route path="designation">
                <Route index element={<List_desg />} />
              </Route>
            </Route>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/enquire" element={<Enquire />} />
            <Route path="/forgot" element={<Forgot />} />

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
