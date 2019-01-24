import React, {Component} from 'react'
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';

export class About extends Component {
  render() {
    return (
      <BaseLayout>
      <BasePage className="about-page">
      <h1>I am about Page</h1>
      </BasePage>
      </BaseLayout>
    )
  }
}

export default About
