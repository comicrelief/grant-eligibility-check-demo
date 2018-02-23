import React, { Component } from 'react';
import { Machine, State } from "react-gizmo";

const state = {
  initialState: { text: "Hello" },
  flow: {
    initial: "start",
    states: {
      start: { on: { NEXT: "end" } },
      end: { on: { NEXT: "start" } }
    }
  }
};

class App extends Component {
  render() {
    return (
      <Machine log state={state}>
        <React.Fragment>
          <State
            on="start"
            render={props => (
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
        </React.Fragment>
    </Machine>);
  }
}

export default App;
