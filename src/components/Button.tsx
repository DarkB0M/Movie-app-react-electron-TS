import React from 'react'
  import axios from 'axios'
import { Container, FullButton, New } from './styles'

export const Button = (props:any) => {
  return (
    <Container>
      <FullButton onClick={props.onClick}>
        <New>Discover A New Film</New>
      </FullButton>
    </Container>
  )
}
