/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import _ from 'lodash';
import { useState, useEffect } from 'react';
import { instance } from '../api/instance';
import LoaderContext from '../Context/Loader/LoaderContext';
import ModalContext from '../Context/Modal/ModalContext';
import { Typography } from '@mui/material';

const useApi = ({ endpoint, method }) => {
  const { changeVisibility } = useContext(LoaderContext);
  const { handleContent, changeVisibilityModal } = useContext(ModalContext);
  const [responseData, setResponseData] = useState(null);
  const [responseCode, setResponseCode] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error || (responseCode && responseCode >= 400)) {
      changeVisibilityModal(true);
      handleContent({
        title: 'Error',
        content: _.get(
          error,
          ['name', 'data', 'headerResponse', 'message'],
          'Se generó un error externo'
        ),
        actions: null
      });
    }
  }, [error, responseCode]);

  useEffect(() => {
    changeVisibility(loading);
  }, [loading]);

  const handleFetch = async ({
    message = false,
    body = {},
    urlParams = null,
    text = ''
  } = {}) => {
    const url = `${endpoint}${urlParams ? `${urlParams}` : ''}`;
    setLoading(true);

    try {
      handleContent({});
      const response = await instance[method](url, body);
      if (message) {
        changeVisibilityModal(true);

        handleContent({});
        handleContent({
          title: 'succes',
          actions: '',
          content: (
            <Typography
              variant="h5"
              style={{ color: 'white', textAlign: 'center' }}
            >
              {text !== ''
                ? text
                : response.data.message}
            </Typography>
          )
        });
      }
      setResponseData(response.data);
      setStatus(response.status);
      setResponseCode(_.get(response, 'data.headerResponse.code', null));
      setError(null);
      return response.data;
    } catch (err) {
      setError({
        code: err.response.status,
        name: err.response
      });
      return err;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1050);
    }
  };

  return [handleFetch, responseData, loading, status];
};

export { useApi };
