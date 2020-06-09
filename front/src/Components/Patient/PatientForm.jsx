import React, { Component } from "react";
import Joi from "@hapi/joi";
import Form from "../Common/Form";

class PatientForm extends Form {
  state = {
    data: {
      nombre: "",
      apellidos: "",
      identificacion: "",
      genero: 0,
      sospecha: 0,
    },
    errors: {},
  };

  schema = {
    nombres: Joi.string().min(3).required().messages({
      "string.base": "El nombre deben ser caracteres",
      "string.required": "El nombre es requerido",
      "string.min": "El nombre debe ser de 3 caracteres mínimo",
    }),
    apellidos: Joi.string().required().messages({
      "string.base": "Ingrese un apellido valido",
      "string.required": "El apellido del paciente es requierido",
    }),
    identificacion: Joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviar formulario");
  };

  render() {
    return (
      <div>
        <h1>Ingresar nuevo paciente</h1>
        <div className="alert alert-danger" role="alert">
          <h4>Importante!</h4>
          <p>
            El siguiente formulario corresponde a una declaración jurada para
            hacer ingreso del paciente al recinto sanitario. En caso de mentir o
            falsear datos, tendrá repercusiones legales.
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("nombre", "Nombre", "text")}
          {this.renderInput("apellidos", "Apellidos", "text")}
          {this.renderInput(
            "identificacion",
            "Rut o número de pasaporte",
            "text"
          )}
          {this.renderRadioBox(
            "Género",
            [
              { label: "Masculino", value: 0 },
              { label: "Femenino", value: 1 },
              { label: "Otro", value: 2 },
            ],
            "genero"
          )}
          {this.renderRadioBox(
            "¿Ha tenido tos, fiebre o problemas respiratorios los últimos 14 días?",
            [
              { label: "Si", value: 1 },
              { label: "No", value: 0 },
            ]
          )}
          {this.renderRadioBox(
            "¿Ha tenido contacto directo con algún contagiado o sospechoso de contagio en los últimos 14 días?",
            [
              { label: "Si", value: 1 },
              { label: "No", value: 0 },
            ]
          )}
          {this.renderSubmitButton("Guardar")}
        </form>
      </div>
    );
  }
}

export default PatientForm;
