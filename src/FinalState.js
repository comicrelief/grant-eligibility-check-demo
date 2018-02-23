import React from "react";

import { State } from "react-gizmo";

import InitiativeInfo from "./component/InitiativeInfo";
import { loadInitiative } from "./util/initiative";

const FinalState = () => (
    <State
    on="choose-initiative"
    render={props => (
      <React.Fragment>
        <select
          defaultValue="-1"
          onChange={changeEvent => {
            props.transition("NEXT", {
              setState: {
                initiativeName: changeEvent.target.value,
              }
            })
          }}
        >
          <option value="-1">Please choose a programme...</option>
          <option value="Tech for Good">Tech for Good</option>
          <option value="A.N. Other Initiative">A.N. Other Initiative</option>
        </select>

        <InitiativeInfo
          initiative={loadInitiative(props.initiativeName)}
        />
      </React.Fragment>
    )}
  />
);

export default FinalState;