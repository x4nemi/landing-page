import React, { useEffect, useState } from 'react'

import { Grid, TextField } from '@mui/material'
import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'
import { useLocation, useParams } from 'react-router-dom'

const names = [
  'Joressa',
  'Josiah',
  'Alondra',
  'Jesus',
  'Jazmyn',
  'Luis',
  'Juan',
  'Pedro',
  'Maria',
  'Jose',
  'Adela',
] //11

const lastNames = [
  'Garcia',
  'Rodriguez',
  'Lopez',
  'Gonzalez',
  'Perez',
  'Sanchez',
  'Ramirez',
  'Morales',
  'Hernandez',
  'Diaz',
  'Gomez',
  'Vasquez',
  'Castro',
  'Ramos',
  'Ortega',
  'Marquez',
  'Flores',
] //20

const comments = [
  'Adipisicing velit nulla amet aute labore sint.',
  'Do ut non culpa deserunt dolor sunt deserunt veniam laboris proident adipisicing dolor fugiat.',
  'Elit ipsum deserunt ullamco proident irure veniam anim ipsum ut nulla cupidatat consequat labore Lorem.',
  'Cupidatat eiusmod eiusmod eiusmod eiusmod.',
  'Minim aute nostrud minim exercitation irure aliqua cillum quis aliquip ut reprehenderit duis.',
  'Deserunt aute aute voluptate veniam aute officia quis quis minim sint elit.',
  'Cillum eiusmod eiusmod eiusmod eiusmod.',
  'In amet enim dolore cillum sit qui do laboris cillum et enim qui in.',
] // 8
const emails = [
  '@email.com',
  '@hotmail.com',
  '@gmail.com',
  '@yahoo.com',
  '@outlook.com',
  '@live.com',
  '@aol.com',
  '@icloud.com',
] //8

const intRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const { code } = useParams()

  useEffect(() => {
    const indexName = intRandom(0, names.length - 1)
    const indexLastName = intRandom(0, lastNames.length - 1)
    if (code == '1234') {
      setName(names[indexName] + ' ' + lastNames[indexLastName])
      const completeName = names[indexName] + ' ' + lastNames[indexLastName]
      setEmail(
        completeName.replace(' ', '.').toLocaleLowerCase() +
          emails[intRandom(0, 8)]
      )
      setComment(comments[intRandom(0, 8)])
    }
  }, [code])

  const handleNameInput = (event) => {
    setName(event.target.value)
  }

  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }

  const handleCommentInput = (event) => {
    setComment(event.target.value)
  }

  return (
    <Layout>
      <Article>
        <ArticleContent title="Contacto">
          <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  fullWidth
                  name="name"
                  value={name}
                  onChange={handleNameInput}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo electrónico"
                  type="email"
                  placeholder="Escribe tu email"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={handleEmailInput}
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
                  name="comment"
                  value={comment}
                  onChange={handleCommentInput}
                />
              </Grid>
            </Grid>
          </form>
        </ArticleContent>
      </Article>
    </Layout>
  )
}
