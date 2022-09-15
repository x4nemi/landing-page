import React from 'react'

import { Layout } from '../components/layout'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useSelector } from 'react-redux'

export default function FaqsPage() {
  const { contacts } = useSelector((state) => state.contacts)
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Correo electrónico </TableCell>
              <TableCell>Comentario</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.nombre}</TableCell>
                <TableCell>{contact.correo}</TableCell>
                <TableCell>{contact.comentario}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}
