import React, { Component } from "react";
import Link from 'next/link'
export default class Header extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/portfolios">
            <a>PortFolio</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
          <Link href="/">
            <a>CV</a>
          </Link>
        </React.Fragment>
      </div>
    );
  }
}
