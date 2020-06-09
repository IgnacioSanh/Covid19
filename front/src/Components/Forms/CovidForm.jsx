import React, { Component } from "react";
import Form from "../Common/Form";

class CovidForm extends Form {
  state = { patient: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  render() {
    const { patient } = this.state;
    const binaryArray = [
      { label: "Si", value: 1 },
      { label: "No", value: 0 },
    ];
    return (
      <div>
        <h1>Hola {patient}!</h1>
        <h3>Bienvenido al formulario de seguimiento Covid-19</h3>

        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Atención!</h4>
          <p>
            Las preguntas que se le harán a continuación corresponden a las
            últimas 24 horas.
          </p>
          <p>
            El objetivo de este test es hacer seguimiento de la enfermedad, y
            así poder hacer ayudarlo de mejor forma a futuro. Por favor no
            manipule datos ni falsee las respuestas. El único perjudicado será
            usted.
          </p>
        </div>

        <form onSubmit={this.handleSubmit}>
          {this.renderRadioBox(
            "¿Ha presentado fiebre mayor a 38º Celsius?", //Title
            binaryArray,
            "question1"
          )}
          {this.renderRadioBox(
            "¿Ha tenido diarrea?", //Title
            binaryArray,
            "question2"
          )}

          {this.renderRadioBox(
            "¿Ha tosido frecuentemente?", //Title
            binaryArray,
            "question3"
          )}

          {this.renderRadioBox(
            "¿Ha tenido secreciones nasales?", //Title
            binaryArray,
            "question4"
          )}
          {this.renderRadioBox(
            "¿Ha presentado pérdida del sentido del olfato o gusto?", //Title
            [
              { label: "Si", value: 1 },
              { label: "No", value: 0 },
            ],
            "question5"
          )}
          {this.renderRadioBox(
            "¿Ha tenido malestares?", //Title
            [
              { label: "Si", value: 1 },
              { label: "No", value: 0 },
            ],
            "question6"
          )}
          {this.renderRadioBox(
            "¿Ha tenido dificultades para respirar?", //Title
            [
              { label: "Si", value: 1 },
              { label: "No", value: 0 },
            ],
            "question7"
          )}
          {this.renderRadioBox(
            "¿Ha presentado debilidades en las extremidades?", //Title
            [
              { label: "Si", value: 1 },
              { label: "No", value: 0 },
            ],
            "question7"
          )}

          {this.renderSubmitButton("Enviar")}
        </form>
        <br />
      </div>
    );
  }
}

export default CovidForm;
