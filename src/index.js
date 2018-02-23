import React from "react";
import ReactDOM from "react-dom";
import { Machine, State } from "react-gizmo";
import logo from './logo.svg';

import FinalState from './FinalState';

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
      <FinalState />
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
