// 2_7_4 Fix the mutations using Immer
/*
    В этом примере все обработчики событий в App.js используют мутацию. В результате редактирование и удаление todos не работает. Перепишите handleAddTodo, handleChangeTodo и handleDeleteTodo с помощью Immer
*/

import { useState, useContext } from 'react'
import { places, PlaceType } from './data'
import { getImageUrl } from './utils'
import { ImageSizeContext } from './Context'

export default function App() {
  const [isLarge, setIsLarge] = useState(false)
  const imageSize = isLarge ? 150 : 100

  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked)
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  )
}

function List() {
  const listItems = places.map(place => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ))
  return <ul>{listItems}</ul>
}

function Place({ place }: { place: PlaceType }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  )
}

function PlaceImage({ place }: { place: PlaceType }) {
  const imageSize = useContext(ImageSizeContext)
  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />
}
