
import React from 'react';

export default class Footer extends React.Component {
  static propTypes = {
    broj: 7
  };

  constructor(props) {
    super(props);
    this.state = {broj:Footer.propTypes.broj}
  }

  render() {
    return (
      <div>Footer {this.state.broj}</div>
    );
  }
}


