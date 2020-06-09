import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PersonBoundingBox, PlusCircle, CircleFill } from "../Common/icons";
import ReactTooltip from "react-tooltip";

class PatientView extends Component {
  state = {};
  render() {
    return (
      <div>
        <ReactTooltip />
        <h1>
          Pacientes
          <Link className="float-right" to="pacientes/nuevo">
            <PlusCircle
              width="30px"
              height="30px"
              data-tip="Agregar paciente"
              data-place="left"
            />
          </Link>
        </h1>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Habitación</th>
              <th>Edad</th>
              <th>Estado</th>
              <th>Ver paciente</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>Juan Pérez</td>
              <td>204</td>
              <td>64 años</td>
              <td>
                <CircleFill color="red" style={{ marginBottom: 4 }} /> Crítico
              </td>
              <td>
                <Link to="/pacientes/0" className="btn btn-primary">
                  <PersonBoundingBox />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PatientView;
