import { Button } from '@material-ui/core';
import React, { Component } from 'react';

class ErrorPage extends Component {
  constructor(props) {
    super(props);

    this.error_code = this.props.match.params.error_code;
    switch (this.error_code) {
      case '400':
        this.message = 'BAD_REQUEST';
        break;
      case '401':
        this.message = 'UNAUTHORIZED';
        break;
      case '403':
        this.message = 'FORBIDDEN';
        break;
      case '404':
        this.message = 'NOT_FOUND';
        break;
      case '500':
        this.message = 'INTERNAL_SERVER_ERROR';
        break;
      default:
        this.message = 'ERROR';
        break;
    }
  }

  onReturnClick = () => {
    this.props.history.goBack();
  };

  render() {
    const style = {
      margin: 12,
    };
    return (
      <>
        <h1>
          {this.error_code} {this.message}
        </h1>
        <Button label="back" style={style} onClick={this.onReturnClick}>
          BACK
        </Button>
      </>
    );
  }
}

export default ErrorPage;
