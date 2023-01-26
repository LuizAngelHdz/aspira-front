import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Paper, IconButton, DialogTitle, DialogContent, Dialog } from '@mui/material'
import { Container } from '@mui/system'
import { ContentLayout } from '../../Layout/ContentLayout'
import { Table } from '../../components/Table'
import { Add } from '@mui/icons-material/';
import { FormProduct } from '../Products/FormProduct/FormProduct'
import { useApi } from '../../Hooks';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material/';

export const Home = () => {
  const headers = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Nombre' },
    { key: 'description', label: 'Descripcción' },
    { key: 'minAge', label: 'Edad minima' },
    { key: 'enterprise', label: 'Compañia' },
    { key: 'price', label: 'Precio' },
    { key: 'edit', label: '' },
    { key: 'delete', label: '' }
  ]
  const [data, setdata] = useState([])
  const [showModal, setshowModal] = useState(false)
  const [editProduct, seteditProduct] = useState(null)
  const [getallproducts] = useApi({
    endpoint: '/products',
    method: 'get'
  });
  const [addProducts] = useApi({
    endpoint: '/products/add',
    method: 'post'
  });
  const [deleteProducts] = useApi({
    endpoint: '/products/delete',
    method: 'delete'
  });
  const [updateProducts] = useApi({
    endpoint: '/products/update/',
    method: 'put'
  });

  useEffect(() => {
    getProducts()
  }, []);

  const getProducts = async () => {
    const response = await getallproducts({
      body: {},
      messages: false,
    });
    const mapData = response.payload?.map(item => {
      return ({
        ...item,
        edit: <IconButton onClick={() => seteditProduct(item)}><EditIcon /></IconButton >,
        delete: <IconButton onClick={() => deleteProduct(item.id)}><DeleteIcon /></IconButton >
      })
    })
    setdata(mapData)
  }
  const addProduct = async (values) => {
    const response = await addProducts({
      body: values,
      message: true
    });
    if (response.code === 200) {
      reload()
    }
  }
  const deleteProduct = async (id) => {
    const response = await deleteProducts({
      body: {},
      message: true,
      urlParams: `/${id}`
    });
    if (response.code === 200) {
      reload()
    }
  }

  const reload = () => setTimeout(() => {
    window.location = '/';
  }, 1290);

  const editUser = async (values) => {
    const response = await updateProducts({
      body: values,
      message: true,
      urlParams: values.id
    });
    if (response.code === 200) {
      reload()
    }
  }

  return (
    <ContentLayout>
      <Container>
        <Grid container>
          <Grid item md={12} xs={12}>
            <Typography style={{ fontSize: '25px' }}>Lista de Jugetes</Typography>
          </Grid>
          <Grid item md={12} xs={12} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4vh' }}>
            <Button variant="outlined" startIcon={<Add />} onClick={() => setshowModal(!showModal)}>Agregar producto</Button>
          </Grid>
          <Grid item md={12} style={{ overflow: 'hidden' }}>
            <Paper sx={{ p: 1 }} className="container">
              <Table headers={headers} options={data} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Dialog
        open={showModal}
        onClose={() => setshowModal(!showModal)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Agregar producto
        </DialogTitle>
        <DialogContent>
          <FormProduct onSubmit={(values) => addProduct(values)} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={editProduct !== null}
        onClose={() => seteditProduct(null)}
      >
        <DialogTitle id="alert-dialog-title">
          Editar producto
        </DialogTitle>
        <DialogContent>
          <FormProduct onSubmit={(values) => editUser(values)} initialValues={editProduct} />
        </DialogContent>
      </Dialog>
    </ContentLayout>
  )
}
