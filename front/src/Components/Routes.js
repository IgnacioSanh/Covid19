import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Common/Home";
import Error from "./Common/Error";
import Login from "./Login/Login";
import Register from "./Login/Register";
import UserView from "./User/UserView";
import CovidForm from "./Forms/CovidForm";
import FormsView from "./Forms/FormsView";
import PatientView from "./Patient/PatientView";
import PatientDetail from "./Patient/PatientDetail";
import PatientForm from "./Patient/PatientForm";

const Routes = () => {
  return (
    <Switch>
      <Route path="/pacientes/nuevo" component={PatientForm} />
      <Route path="/pacientes/:id" component={PatientDetail} />
      <Route path="/formularios/covid" component={CovidForm} />
      <Route path="/formularios" component={FormsView} />
      <Route path="/pacientes" component={PatientView} />
      <Route path="/users" component={UserView} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/not-found" component={Error} />
      <Route path="/" exact component={Home} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
