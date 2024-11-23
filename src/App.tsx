// 3_4_4 Clear an image while it’s loading
/*
  Когда вы нажимаете кнопку "Далее", браузер начинает загрузку следующего изображения. Однако, поскольку оно отображается в том же теге img, по умолчанию вы будете видеть предыдущее изображение, пока не загрузится следующее. Это может быть нежелательно, если важно, чтобы текст всегда совпадал с изображением. Измените это так, чтобы при нажатии кнопки "Next" предыдущее изображение сразу же убиралось.
*/

import { useState, useEffect } from 'react'

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const hasNext = index < images.length - 1

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
    setIsLoading(true)
  }

  useEffect(() => {
    if (isLoading) {
      const img = new Image()
      img.onload = () => {
        setIsLoading(false)
      }
      img.src = images[index].src
    }
  }, [isLoading, index])

  const image = images[index]
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      {isLoading ? <p>Loading...</p> : <img src={isLoading ? '' : image.src} alt={image.place} />}
      <p>{image.place}</p>
    </>
  )
}

const images = [
  {
    place: 'Penang, Malaysia',
    src: 'https://i.imgur.com/FJeJR8M.jpg'
  },
  {
    place: 'Lisbon, Portugal',
    src: 'https://i.imgur.com/dB2LRbj.jpg'
  },
  {
    place: 'Bilbao, Spain',
    src: 'https://i.imgur.com/z08o2TS.jpg'
  },
  {
    place: 'Valparaíso, Chile',
    src: 'https://i.imgur.com/Y3utgTi.jpg'
  },
  {
    place: 'Schwyz, Switzerland',
    src: 'https://i.imgur.com/JBbMpWY.jpg'
  },
  {
    place: 'Prague, Czechia',
    src: 'https://i.imgur.com/QwUKKmF.jpg'
  },
  {
    place: 'Ljubljana, Slovenia',
    src: 'https://i.imgur.com/3aIiwfm.jpg'
  }
]
