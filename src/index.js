import React from "react";
import ReactDOM from "react-dom";
import { Machine, State } from "react-gizmo";

import InitiativeInfo from "./component/InitiativeInfo";
import { loadInitiative } from "./util/initiative";

const state = {
  initialState: { text: "Hello" },
  flow: {
    initial: "start",
    states: {
      start: { on: {
          NEXT: "choose-initiative",
          CANCEL: "cancelled"
        }
      },
      cancelled: {},
      "choose-initiative": { on: { NEXT: "choose-initiative" } },
    }
  }
};

const MachineApp = () => (
  <Machine log state={state}>
    <React.Fragment>
      <State
        on="start"
        render={props => (
          <div>
          <button
            onClick={() =>
              props.transition("NEXT", {
                off: "start",
                setState: { text: "World" }
              })
            }
          >
            {props.text}
          </button>
          <button
            onClick={() =>
              props.transition("CANCEL", {
                off: "start"
              })
            }
          >
            cancel
          </button>
        </div>
        )}
      />
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
      <State
        on="cancelled"
        render={props => (
          <button>cancelled :(</button>
        )}
      />
    </React.Fragment>
  </Machine>
);

ReactDOM.render(<MachineApp />, document.getElementById("root"));
