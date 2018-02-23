import React from "react";

import { State } from "react-gizmo";

import InitiativeInfo from "./component/InitiativeInfo";
import { loadInitiative } from "./util/initiative";
import Header from './component/Header';

const FinalState = () => (
    <React.Fragment>
        <State
            on="choose-initiative"
            render={props => (
            <React.Fragment>
                <Header />
                <main 
                    style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                <h1>We think you are eligable</h1>
                    <p>
                        We think you might be eligable for a grant from Comic Relief.
                    </p>
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
                </main>
            </React.Fragment>
            )}
        />
    </React.Fragment>
);

export default FinalState;