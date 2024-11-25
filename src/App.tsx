// 4_5_5 Populate a chain of select boxes
/*
  В этом примере есть два поля выбора. Одно поле позволяет пользователю выбрать планету. Другое поле позволяет пользователю выбрать место на этой планете. Второе поле пока не работает. Ваша задача - заставить его показывать места на выбранной планете.

  Посмотрите, как работает первое поле выбора. Оно заполняет состояние planetList результатом вызова API "/planets". ID выбранной планеты хранится в переменной состояния planetId. Вам нужно найти, куда добавить дополнительный код, чтобы переменная состояния placeList заполнялась результатом вызова API "/planets/" + planetId + "/places".

  Если вы реализуете это правильно, выбор планеты должен заполнить список мест. Изменение планеты должно изменить список мест.
*/

import { useState, useEffect } from 'react'
import { fetchData, GeoObj } from './api'

export default function Page() {
  const [planetList, setPlanetList] = useState<GeoObj[]>([])
  const [planetId, setPlanetId] = useState<string>('')

  const [placeList, setPlaceList] = useState<GeoObj[]>([])
  const [placeId, setPlaceId] = useState<string>('')

  useEffect(() => {
    let ignore = false
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.')
        setPlanetList(result)
        setPlanetId(result[0].id)
      }
    })
    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    let ignore = false
    if (planetId) {
      fetchData('/planets/' + planetId + '/places').then(result => {
        if (!ignore) {
          console.log('Fetched a list of places for planet:', planetId)
          setPlaceList(result)
          setPlaceId(result[0]?.id || '')
        }
      })
    }
    return () => {
      ignore = true
    }
  }, [planetId])

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select
          value={planetId}
          onChange={e => {
            setPlanetId(e.target.value)
          }}
        >
          {planetList.map(planet => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select
          value={placeId}
          onChange={e => {
            setPlaceId(e.target.value)
          }}
        >
          {placeList.map(place => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || '???'} on {planetId || '???'}{' '}
      </p>
    </>
  )
}
