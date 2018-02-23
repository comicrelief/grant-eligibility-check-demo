import React from "react";
import ReactDOM from "react-dom";
import { Machine, State } from "react-gizmo";
import logo from './logo.svg';

const NotMachine = () => (
    <React.Fragment>
        <header role="banner" style={{
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div className="header">
                <a href="https://www.comicrelief.com/" rel="home" className="header-logo">
                <img 
                    src={logo}
                    style={{
                        height: '40px',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}
                />
                <span className="visually-hidden">Go to Home Page</span>
                </a>
            </div>
        </header>
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <h1 className="text-align-center">
            Apply for grant
        </h1>
        <p className="text-align-center font--xlarge">
            Are you a UK based charity?
        </p>
        <p style={{ width: '700px'}}>
            For projects in the UK, we fund work in England, Northern Ireland, Scotland, Wales, the Channel Islands and the Isle of Man. Depending on the funding initiative, Comic Relief may also welcome proposals from organisations registered outside of the UK.
        </p>
        <div style={{display: 'flex'}}>
            <button className="btn btn--red" href="#">Yes</button>
            <button className="btn btn--red">
                No
            </button>
        </div>
        </main>
    </React.Fragment>
)

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

ReactDOM.render(<NotMachine />, document.getElementById("root"));