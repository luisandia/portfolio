import axios from 'axios';
import React, {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router'
import BasePage from '../components/BasePage';

class portfolio extends Component {
  static async getInitialProps({query}) {
      console.log("mi query");
    console.log(query.id )
    let portfolio = {};
    try {
      const response =
          await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      portfolio = response.data;
    } catch (err) {
        console.log("no pude cargar")
        console.log(query)
      console.log(err)
    }
    return {portfolio};
  }
  constructor(props) {
    super(props);

    this.state = {title: 'I am IndexPage'};
  }
  renderPosts(posts){
    return posts.map(
        (posts) => {
            return <li>{posts.id}</li>
        })
    }

  render() {
    const {portfolio} = this.props;

    return (
    <BaseLayout>
    <BasePage>
      <p>{portfolio.title}</p>
      <p>{portfolio.body}</p>
     </BasePage>
     </BaseLayout>
     )
  }
}
export default withRouter(portfolio)