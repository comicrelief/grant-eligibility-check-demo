import React, { Component } from 'react'

export default class InitiativeInfo extends Component {
  render() {
    const {initiative} = this.props

    if (!initiative) {
      return 'Choose an initiative to see info.';
    }

    return (
      <div style={{ width: '700px'}}>
        <h2>{initiative.name}</h2>
        <p>{initiative.description}</p>
        <h3>Grants range</h3>
        <p>We typically give between {initiative.project_funding_min.amount} {initiative.project_funding_min.currency} and  {initiative.project_funding_max.amount} {initiative.project_funding_max.currency} to grants in the {initiative.name} initatives.</p>
        <h3>Countries</h3>
        <p>
          <ul>
              {
                initiative.eligible_organisation_countries.map((country) => <li>{country}</li>)
              }
          </ul>
        </p>
        <h3>Common mistakes</h3>
        <p>
          <ul>
            {
              initiative.common_mistakes.map((mistake) => <li>{mistake.summary}</li>)
            }
          </ul>
        </p>
        <h3>Good ideas</h3>
        <p>
          <ul>
            {
              initiative.good_stuff.map((goodThing) => <li>{goodThing.summary}</li>)
            }
          </ul>
        </p>
        <h3>
          Success rate for last year
        </h3>
        <p>
          {initiative.past_acceptances[0].accepted_percent}% &ndash; that's&nbsp;
            {initiative.past_acceptances[0].accepted_number} applications.
        </p>
      </div>
    );
  }
}
