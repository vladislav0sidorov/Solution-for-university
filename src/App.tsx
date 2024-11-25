// 4_2_3 Scrolling an image carouse
/*
  Эта карусель изображений имеет кнопку "Next", которая переключает активное изображение. Заставьте галерею прокручиваться горизонтально до активного изображения по щелчку. Для этого нужно вызвать scrollIntoView() на DOM-узле активного изображения:

  node.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
*/
import { useState, useRef, useEffect } from 'react'

export default function CatFriends() {
  const [index, setIndex] = useState(0)
  const itemsRef = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    itemsRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }, [index])

  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1)
            } else {
              setIndex(0)
            }
          }}
        >
          Next
        </button>
      </nav>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0, gap: '10px' }}>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={el => (itemsRef.current[i] = el)}>
              <img className={index === i ? 'active' : ''} src={cat.imageUrl} alt={'Cat #' + cat.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

type PlaceType = {
  id: number
  imageUrl: string
}

const catList: PlaceType[] = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/320/240?cat=' + i
  })
}
