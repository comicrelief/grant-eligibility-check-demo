import React from "react";
import ReactDOM from "react-dom";
import { Machine, State } from "react-gizmo";
import logo from './logo.svg';

import FinalState from './FinalState';

const state = {
  initialState: {},
  flow: {
    initial: "chooseCountry",
    states: {
      chooseCountry: {
        on: {
          IN: "charityOrNot",
          OUT: "globalEligibilityRules"
        }
      },
      charityOrNot: {
        on: {
          YES: "charityNumber",
          NO: "constitutionDoc"
        }
      },
      charityNumber: {
        on: {
          ENTERED: "globalEligibilityRules",
          NONE: "sorry",
        }
      },
      constitutionDoc: {
        on: {
          YES: "globalEligibilityRules",
          NO: "sorry"
        }
      },
      globalEligibilityRules: {
        on: {
          PASS: "choose-initiative",
          FAIL: "sorry"
        }
      },
      "choose-initiative": { on: { NEXT: "choose-initiative" } },
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
          <div>
            <p>Is your organisation based in the UK, or outside?</p>
            <button
              onClick={() =>
                props.transition("IN", {off: "chooseCountry"})
              }
            >Inside</button>
            <button
              onClick={() =>
                props.transition("OUT", {off: "chooseCountry"})
              }
            >Outside</button>
          </div>
        )}
      />
      <State
        on="charityOrNot"
        render={props => (
          <div>
            <p>Are you a registered UK charity?</p>
            <button onClick={() =>
              props.transition("YES", {off: "charityOrNot"})
            }>Yes</button>
            <button onClick={() =>
              props.transition("NO", {off: "charityOrNot"})
            }>No</button>
          </div>
        )}
      />
      <State
        on="constitutionDoc"
        render={props => (
          <div>
            <p>That's OK, my mum's not a charity either. You do need a&nbsp;
              <a href="https://example.com">consitution doc</a> for us to proceed though.</p>
            <p>Do you have one?</p>
            <button onClick={() =>
              props.transition("YES", {off: "constitutionDoc"})
            }>Yes</button>
            <button onClick={() =>
              props.transition("NO", {off: "constitutionDoc"})
            }>No</button>
          </div>
        )}
      />
      <State
        on="charityNumber"
        render={props => (
          <div>
            <p>Please enter your registered UK charity number.</p>
            <input />
            <button onClick={() =>
              props.transition("ENTERED", {off: "charityNumber"})
            }>Proceed</button>
            <button onClick={() =>
              props.transition("NONE", {off: "charityNumber"})
            }>I don't have one, cancel</button>
          </div>
        )}
      />
      <State
        on="globalEligibilityRules"
        render={props => (
          <div>
            <p>Just a few quick questions about what you do.</p>

            <p>Does your organisation:</p>
            <ul>
              <li>Want to run a general appeal?</li>
              <li>Evangelise?</li>
              <li>Take a partisan political stance?</li>
            </ul>

            <button onClick={() =>
              props.transition("FAIL", {off: "globalEligibilityRules"})
            }>Yes, one or more of these</button>
            <button onClick={() =>
              props.transition("PASS", {off: "globalEligibilityRules"})
            }>No, none of these</button>
          </div>
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
