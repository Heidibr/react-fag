import React, { Component } from 'react';

//API er en side med maaange objekter som vi leser fra
const API = 'https://hn.algolia.com/api/v1/search?query=';
//default query er hva du "søker på" når du henter ting fra API
const DEFAULT_QUERY = 'optimize';

class ResultSubjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state;

    return (
      <div>
        {hits.map(hit =>
          <div key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </div>
        )}
      </div>
    );
  }
}


export default ResultSubjects;
