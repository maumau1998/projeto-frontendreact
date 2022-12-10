import React from "react";
import {Organizar} from './style'

function Ordenar(props){
  
  const onChangeOrdenar = (e) => {
       props.setOrdenar(e.target.value)
   }
    return(
        <Organizar>
          <h3>🌍 Astrodev 🌍</h3>
          <div>
          <label htmlFor="select">Ordenar: </label>
          <select onChange={onChangeOrdenar} id="select">
            <option>Selecione</option>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
          </div>
        </Organizar>
      )
}
export default Ordenar