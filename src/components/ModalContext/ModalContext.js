import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Dialog, Typography, Button } from '@mui/material';
import { Error, Check, Warning, Close } from '@mui/icons-material';
import { useStyles } from './ModalContextStyles';
import ModalUseContext from '../../Context/Modal/ModalContext';

const ModalContext = ({ children, size }) => {
  const classes = useStyles();
  const {
    showModal,
    title,
    contentModal,
    changeVisibilityModal,
    close,
    handleContent
  } = useContext(ModalUseContext);

  const typeModal = (typeIcon) => {
    let iconShow;

    switch (typeIcon) {
      case 'success':
        iconShow = <Check className={classes.iconSuccess} fontSize="large" />;
        break;
      case 'Error':
        iconShow = <Error className={classes.iconError} fontSize="large" />;
        break;
      case 'warning':
        iconShow = <Warning className={classes.iconWarning} fontSize="large" />;
        break;
      case 'close':
        iconShow = <Close className={classes.iconClose} fontSize="large" />;
        break;

      default:
        break;
    }

    return (
      <Box display="flex" justifyContent="center" p={1}>
        {iconShow}
      </Box>
    );
  };

  return (
    <Dialog
      onClose={() => {
        changeVisibilityModal(!showModal);
        handleContent({});
      }}
      open={showModal}
      maxWidth={size}
      fullWidth
    >
      <Box p={2} className={classes.boxContent}>
        {title && typeModal(title)}

        {contentModal && (
          <Box
            width={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={2}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.fontWeightBold}
              >
                {contentModal}
              </Typography>
            </Box>
            {!close && (
              <Button
                className={classes.button}
                onClick={() => {
                  changeVisibilityModal(!showModal);
                  handleContent();
                }}
              >
                Aceptar
              </Button>
            )}
          </Box>
        )}
        {children}
      </Box>
    </Dialog>
  );
};
ModalContext.defaultProps = {
  modal: { close: true },
  size: 'md',
  actionButtons: undefined
};

ModalContext.propTypes = {
  modal: PropTypes.object,
  actions: PropTypes.object,
  children: PropTypes.node,
  size: PropTypes.string,
  actionButtons: PropTypes.array,
  helpText: PropTypes.string
};

export { ModalContext };
