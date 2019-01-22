import axios from 'axios';
import React, {Component} from 'react';

import BaseLayout from '../components/layouts/BaseLayout';

export default class Index extends Component {
  static async getInitialProps() {
    let userData={};
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
    } catch (err) {
      console.log(err)
    }
    return {userData};
  }
  constructor(props) {
    super(props);

    this.state = {title: 'I am IndexPage'};
  }

  render() {
    const {userData } = this.props;

    return (
      <div>
        <BaseLayout>
          <h1>I am Subtitle</h1>
          <h2>{this.state.title}</h2>
          <button
    onClick = {
      () => {
        this.setState({title: 'I am UPdated'});
      }
    } />
        </BaseLayout > {' '} </div>
    );
  }
}
