import React, { Component } from 'react';
import Article from './Article';

export default class Articles extends Component {

  render() {
    const { articles } = this.props;

    return (
      <ul>
        {articles.map((article, i) => (
          <Article key={i} article={article}/>
        ))}
      </ul>
    );
  }
}