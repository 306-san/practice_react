/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  function onClick(e) {
    // e is SyntheticEvent
    console.log('clicked');
    console.log(e);
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
          <h1>カウンターだよん</h1>
          <h2>{this.state.count}</h2>
          <button onClick={onClick}>+1</button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
