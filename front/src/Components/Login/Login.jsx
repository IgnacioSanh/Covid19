import React from "react";
import Joi from "@hapi/joi";
import Form from "../Common/Form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login, auth } from "../../Services/authService";
import "./login.css";

class Login extends Form {
  state = {
    data: {
      dni: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    dni: Joi.string().required().label("Rut"),
    password: Joi.string().min(3).required().label("Contraseña"),
  };

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form className="col-6 offset-3" onSubmit={this.handleSubmit}>
          <h1>Ingresar</h1>
          <hr />
          {this.renderInput("dni", "Rut paciente", "text")}
          {this.renderInput("password", "Contraseña", "password")}
          <div className="row">
            <div className="col-12 align-text-bottom">
              {this.renderSubmitButton("Ingresar")}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
