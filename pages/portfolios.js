import axios from 'axios';
import React, {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
// import Link from 'next/link'
import {Link} from '../routes'


export default class portfolios extends Component {
  static async getInitialProps() {
    let posts = {};
    try {
      const response =
          await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch (err) {
      console.log(err)
    }
    return {posts: posts.splice(0, 10)};
  }
  constructor(props) {
    super(props);

    this.state = {title: 'I am IndexPage'};
  }
  renderPosts(posts){
    //   debugger;
      console.log(this)
    return posts.map(
        (posts,index) => {
            return <li key={index}>
              <Link route={`/portfolio/${posts.id}`}>
            <a>{posts.title}</a>
          </Link>
            </li>
        })
    }

  render() {
    const {posts} = this.props;
1
    return (<BaseLayout><ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>)
  }
}
