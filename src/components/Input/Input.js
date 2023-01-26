import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Typography, FilledInput } from '@mui/material';
import { useStyles } from './InputStyles';

const Input = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  background,
  helperText,
  inputProps,
  ...morProps
}) => {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <FormControl
        size="small"
        variant="filled"
        fullWidth
        className={background ? classes.rootbg : helperText ? classes.error : classes.root}
      >
        <InputLabel>{label}</InputLabel>
        <FilledInput
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
          {...morProps}
          disableUnderline
          inputProps={inputProps}
        />
      </FormControl>
      {helperText && <Typography className={classes.helperText}>{helperText}</Typography>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  background: PropTypes.bool,
  inputProps: PropTypes.object,
};

export { Input };
