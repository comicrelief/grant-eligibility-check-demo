import React, { Component } from 'react'

export default class InitiativeInfo extends Component {
  render() {
    const {initiative} = this.props

    if (!initiative) {
      return 'Choose an initiative to see info.';
    }

    return (
      <ul>
        <li><strong>Name</strong>: {initiative.name}</li>
        <li><strong>Grants range</strong>:&nbsp;
          {initiative.project_funding_min.amount} {initiative.project_funding_min.currency} &ndash;&nbsp;
          {initiative.project_funding_max.amount} {initiative.project_funding_max.currency}
        </li>
        <li><strong>Countries</strong>:
          <ul>
              {
                initiative.eligible_organisation_countries.map((country) => <li>{country}</li>)
              }
          </ul>
        </li>
      </ul>
    );
  }
}
