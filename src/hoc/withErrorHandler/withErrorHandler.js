import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqIntercepter = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });

    const resIntercepter = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err);
      }
    );

    useEffect(() => {
      // runs when component mounts
      return () => {
        // runs when component unmounts
        axios.interceptors.request.eject(reqIntercepter);
        axios.interceptors.request.eject(resIntercepter);
      };
    }, [reqIntercepter, resIntercepter]);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <>
        <Modal modalClosed={errorConfirmedHandler} show={error}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
