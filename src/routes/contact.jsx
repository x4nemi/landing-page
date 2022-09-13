import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Grid, TextField } from '@mui/material'
import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'
import { useParams } from 'react-router-dom'
import { useForm } from '../hooks'
import { emails, intRandom, lastNames, names, comments } from '../helpers'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { startNewContact } from '../store/thunks'

const formData = {
  nombre: '',
  correo: '',
  comentario: '',
}

const formValidations = {
  correo: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  nombre: [
    (value) => value.length >= 3,
    'El nombre debe de tener más de 3 letras',
  ],
  comentario: [
    (value) => value.length >= 10,
    'El comentario debe de tener más de 10 letras',
  ],
}

export default function ContactPage() {
  const dispatch = useDispatch()
  const { contacts } = useSelector((state) => state.contacts)

  const {
    correo,
    nombre,
    comentario,
    onInputChange,
    formState,
    correoValid,
    nombreValid,
    comentarioValid,
    isFormValid,
    setFormStates,
  } = useForm(formData, formValidations)

  const { code } = useParams()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)

    console.log(formState)
    if (!isFormValid) {
      toast.error('Formulario invalido')
      return
    } else {
      toast.success('Formulario enviado')
      setFormStates(formData)
      setFormSubmitted(false)
      dispatch(startNewContact(formState))
    }
  }

  useEffect(() => {
    const indexName = intRandom(0, names.length - 1)
    const indexLastName = intRandom(0, lastNames.length - 1)
    if (code == '1234') {
      setFormStates({
        nombre: names[indexName] + ' ' + lastNames[indexLastName],
        correo:
          (
            names[indexName] +
            '.' +
            lastNames[indexLastName]
          ).toLocaleLowerCase() + emails[intRandom(0, emails.length - 1)],
        comentario: comments[intRandom(0, comments.length - 1)],
      })
    }
  }, [code])

  return (
    <Layout>
      <Article>
        <ArticleContent title="Contacto">
          <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  fullWidth
                  name="nombre"
                  value={nombre}
                  onChange={onInputChange}
                  error={!!nombreValid && formSubmitted}
                  helperText={nombreValid}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo electrónico"
                  type="email"
                  placeholder="Escribe tu email"
                  fullWidth
                  name="correo"
                  value={correo}
                  onChange={onInputChange}
                  error={!!correoValid && formSubmitted}
                  helperText={correoValid}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Comentarios"
                  type="textarea"
                  placeholder="Escribe tu email"
                  multiline
                  rows={5}
                  fullWidth
                  name="comentario"
                  value={comentario}
                  onChange={onInputChange}
                  error={!!comentarioValid && formSubmitted}
                  helperText={comentarioValid}
                />
              </Grid>

              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" fullWidth>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </ArticleContent>
      </Article>
      <ToastContainer />
    </Layout>
  )
}
