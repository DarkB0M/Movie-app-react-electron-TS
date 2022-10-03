import { GlobalStyle } from './styles/GlobalStyle'
import Container from './components/container'
import { Button } from './components/Button'
import axios from 'axios'
import { useState } from 'react'

export function App() {

const [name, setName] = useState<string>('')
const [image, setImage] = useState<string>('')
const [description,setDescription] = useState<string>('')
async function HandleSearch() {
  let RandomNumber = Math.floor(Math.random() * 999) + 1;
  const response = await axios
  .get(
    `https://api.themoviedb.org/3/movie/${RandomNumber}?api_key=${'e002ee5e60ea9167cb0e71f71c8c7154'}`
    ).then((async response => {
      setName(response.data.title)
      setDescription(response.data.overview)
      setImage(
        `https://image.tmdb.org/t/p/w220_and_h330_face/${response.data.poster_path}`
    )
    if(response.status === 404){
      let RandomNumber = Math.floor(Math.random() * 999) + 1;
      const response = await axios
  .get(
    `https://api.themoviedb.org/3/movie/${RandomNumber}?api_key=${'e002ee5e60ea9167cb0e71f71c8c7154'}`
    ).then((response) => {
      setName(response.data.title)
      setDescription(response.data.overview)
      setImage(
        `https://image.tmdb.org/t/p/w220_and_h330_face/${response.data.poster_path}`
    )
    }
    )
    }
    }))

    
    return response
}




return (
    <>
      {/* @ts-ignore */}
      <Container src={image} text={name} description={description} />
      <Button onClick={HandleSearch}/>

      <GlobalStyle />
    </>
  )
}
// o container tem a imagem o texto e a descrição
// o btn tem apenas o onclick para chamar a função handleSearch
