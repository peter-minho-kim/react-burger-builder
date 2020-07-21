import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqIntercepter = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resIntercepter = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqIntercepter);
      axios.interceptors.request.eject(this.resIntercepter);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal
            modalClosed={this.errorConfirmedHandler}
            show={this.state.error}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
