import React from "react";
import ReactDOM from "react-dom";
import { Machine, State } from "react-gizmo";

const state = {
  initialState: { text: "Hello" },
  flow: {
    initial: "start",
    states: {
      start: { on: {
          NEXT: "end",
          CANCEL: "cancelled"
        } 
     },
     cancelled: {},
      end: { on: { NEXT: "start" } }
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
        on="end"
        render={props => (
          <button
            onClick={() =>
              props.transition("NEXT", {
                off: "end",
                setState: { text: "Hello" }
              })
            }
          >
            {props.text}
          </button>
        )}
      />
      <State
        on="cancelled"
        render={props => (
          <button>cancelled :(
          </button>
        )}
      />
    </React.Fragment>
  </Machine>
);

ReactDOM.render(<MachineApp />, document.getElementById("root"));