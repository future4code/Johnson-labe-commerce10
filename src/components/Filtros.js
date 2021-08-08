import React from "react";
import styled from "styled-components";

const FiltrosContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`

const InputsContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class Filtros extends React.Component {
  render() {
    return <FiltrosContainer>
      <h3>Filtros</h3>
      <InputsContainer>
      <div>
        <label>
          Valor Mínimo:
          <input/>
        </label>
      </div>
      <div>
        <label>
          Valor Máximo:
          <input/>
        </label>
      </div>
      <div>
        <label>
          Nome:
          <input/>
        </label>
      </div>
      </InputsContainer>
    </FiltrosContainer>
  }
}