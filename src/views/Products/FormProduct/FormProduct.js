import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Input } from '../../../components/Input/Input';
import { Button, Grid } from '@mui/material';


const defaultValues = {
  name: '',
  description: '',
  minAge: '',
  enterprise: '',
  price: ''
}
export const FormProduct = ({ initialValues = defaultValues, onSubmit }) => {
  const requiredFieldError = 'Este campo es obligatorio'
  const validationSchema = Yup.object({
    name: Yup.string().required('Ingresa un nombre'),
    description: Yup.string(),
    minAge: Yup.number().typeError('Ingresa un número'),
    enterprise: Yup.string().required(requiredFieldError),
    price: Yup.number().typeError('Ingresa un número').required(requiredFieldError).nullable(true)
  });
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => onSubmit(values)
  });

  const inputs = [
    {
      label: 'Nombre',
      placeHolder: 'Barbie',
      name: 'name',
      type: 'text',
    },
    {
      label: 'description',
      placeHolder: 'Descripcción del producto',
      name: 'description',
      type: 'text',
    },
    {
      label: 'Edad minima',
      placeHolder: 'Edad minima',
      name: 'minAge',
      type: 'text',
    },
    {
      label: 'Empresa',
      placeHolder: 'Matel',
      name: 'enterprise',
      type: 'text',
    },
    {
      label: 'Precio',
      placeHolder: '10',
      name: 'price',
      type: 'text',
    }
  ]
  return (
    <>
      <form
        key="Register"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        style={{ width: '100%' }}
      >
        <Grid container spacing={2}>
          {inputs.map(input =>
            <Grid item md={6} xs={12} key={input.name}>
              <Input
                value={formik.values[input.name]}
                onChange={formik.handleChange}
                label={input.label}
                placeholder={input.placeHolder}
                type={input.type}
                id={input.name}
                error={formik.touched[input.name] && Boolean(formik.errors[input.name])}
                helperText={formik.touched[input.name] && formik.errors[input.name]}
                background
              />
            </Grid>
          )}
          <Grid item md={12} xs={12}>
            <Button variant="contained" color="secondary" type="submit">Enviar</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
