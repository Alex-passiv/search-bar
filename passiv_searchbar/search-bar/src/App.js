import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch-dom' ;
import { SearchBox } from 'react-instantsearch-dom';

const Hit = ({hit}) =>
  <div className="hit">
    <div className="hitImage">
      <img src={hit.image}/>
    </div>
      <div className = "hitName">
        <Highlight attribute = "name" hit = {hit}/>
      </div>
  </div>

  
const Content = () =>
<div className = "content">
  <Hits hitComponent = {Hit}/>
</div>


class App extends Component {
  render() {
    return (
      <InstantSearch
      appId="2CLSZKQ1OL"
      apiKey="bfa31b452d8736c6b7d1c232ed5ecbfe"
      indexName="passiv_index"
      >
      
      <header>
        <SearchBox translations = {{placeholder:'What can we help you with?'}}/>
      </header>

      </InstantSearch> 
    );
  }
}

export default App;