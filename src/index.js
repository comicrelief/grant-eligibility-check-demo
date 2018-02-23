import React from "react";
import ReactDOM from "react-dom";
import { Machine, State } from "react-gizmo";
import logo from './logo.svg';

import FinalState from './FinalState';
import Header from "./component/Header";
import SubHeader from "./component/SubHeader";
import MainWrapper from "./component/MainWrapper";

const state = {
  initialState: {},
  flow: {
    initial: "chooseCountry",
    states: {
      chooseCountry: {
        on: {
          IN: "charityOrNot",
          OUT: "globalEligibilityRules",
        }
      },
      charityOrNot: {
        on: {
          YES: "charityNumber",
          NO: "constitutionDoc",
        }
      },
      charityNumber: {
        on: {
          VALID: "globalEligibilityRules",
          INVALID: "charityNumber",
        }
      },
      constitutionDoc: {
        on: {
          YES: "globalEligibilityRules",
          NO: "sorry",
        }
      },
      globalEligibilityRules: {
        on: {
          PASS: "faithBased",
          FAIL: "sorry",
        }
      },
      faithBased: {
        on: {
          YES: "diversityPolicy",
          NO: "chooseInitiative",
        }
      },
      diversityPolicy: {
        on: {
          YES: "chooseInitiative",
          NO: "sorry",
        }
      },
      chooseInitiative: {
        on: {
          NEXT: "chooseInitiative",
        }
      },
      sorry: {},
    }
  }
};

const MachineApp = () => (
  <Machine log state={state}>
    <React.Fragment>
      <State
        on="chooseCountry"
        render={props => (
          <React.Fragment>
            <main style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Header />
              <SubHeader />
              <p>Is your organisation based in the UK, or outside?</p>
              <div>
                <button
                  onClick={() =>
                    props.transition("IN", {off: "chooseCountry"})
                  }
                  className="btn btn--red"
                >Inside</button>
                <button
                  onClick={() =>
                    props.transition("OUT", {off: "chooseCountry"})
                  }
                  className="btn btn--red"
                >Outside
                </button>
              </div>
            </main>
          </React.Fragment>
        )}
      />
      <State
        on="charityOrNot"
        render={props => (
          <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Header />
            <SubHeader />
            <p>Are you a registered UK charity?</p>
            <div>
              <button
                onClick={() =>
                  props.transition("YES", {off: "charityOrNot"})
                }
                className="btn btn--red"
              >
                Yes
              </button>
              <button 
                onClick={() =>
                  props.transition("NO", {off: "charityOrNot"})
                }
                className="btn btn--red"
              >No</button>
            </div>
          </main>
        )}
      />
      <State
        on="constitutionDoc"
        render={props => (
          <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Header />
            <SubHeader />
            <p>That's OK, my mum's not a charity either. You do need a&nbsp;
              <a href="https://example.com">consitution doc</a> for us to proceed though.</p>
            <p>Do you have one?</p>
            <div>
              <button onClick={() =>
                props.transition("YES", {off: "constitutionDoc"})
              }
              className="btn btn--red"
              >Yes</button>
              <button onClick={() =>
                props.transition("NO", {off: "constitutionDoc"})
              }
              className="btn btn--red"
              >No</button>
            </div>
          </main>
        )}
      />
      <State
        on="charityNumber"
        render={props => (
          <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Header />
            <SubHeader />
            <p>Please enter your registered UK charity number.</p>
            <input ref={(input) => { this.charityNumber = input; }}  type="text" style={{ marginBottom: '20px'}}/>
            { props.error && <p>{props.error}</p>}
            <button
              onClick={() => {
                if (this.charityNumber.value.length) {
                  // Any non-empty charity number is considered valid for this demo.
                  props.transition("VALID", {off: "charityNumber"});
                } else {
                  props.transition("INVALID", {
                    setState: {
                      error: "Please enter a charity number!"
                    }
                  });
                }
              }}
              className="btn btn--red"
            >This is my charity number</button>
          </main>
        )}
      />
      <State
        on="globalEligibilityRules"
        render={props => (
          <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Header />
            <SubHeader />
            <p>Just a few quick questions about what you do.</p>
            <p>Does your organisation:</p>
            <ul>
              <li>Want to run a general appeal?</li>
              <li>Evangelise?</li>
              <li>Take a partisan political stance?</li>
            </ul>
            <div>
              <button onClick={() =>
                props.transition("FAIL", {off: "globalEligibilityRules"})
              }
              className="btn btn--red"
              >
                Yes, one or more of these
              </button>
              <button onClick={() =>
                props.transition("PASS", {off: "globalEligibilityRules"})
              }
                className="btn btn--red"
              >
                No, none of these
              </button>
            </div>
          </main>
        )}
      />
      <State
        on="faithBased"
        render={props => (
          <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Header />
            <SubHeader />
            <p>Is yours a faith-based organisation?</p>
            <div>
              <button onClick={() =>
                props.transition("YES", {off: "faithBased"})
              }
              className="btn btn--red"
              >Yes</button>
              <button onClick={() =>
                props.transition("NO", {off: "faithBased"})
              }
              className="btn btn--red"
              >No</button>
            </div>
          </main>
        )}
      />
      <State
        on="diversityPolicy"
        render={props => (
          <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Header />
            <SubHeader />
            <p>That's cool, but we need to see your diversity policy to check everyone's included.</p>
            <p>Got one?</p>
            <div>
              <button onClick={() =>
                props.transition("YES", {off: "diversityPolicy"})
              }
              className="btn btn--red"
              >Yes</button>
              <button onClick={() =>
                props.transition("NO", {off: "diversityPolicy"})
              }
              className="btn btn--red"
              >No</button>
            </div>
          </main>
        )}
      />
      <State
        on="sorry"
        render={() => (
          <p>Sorry, you don't meet our requirements to apply right now.</p>
        )}
      />
      <FinalState />
    </React.Fragment>
  </Machine>
);

ReactDOM.render(<MachineApp />, document.getElementById("root"));
