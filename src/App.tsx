// 4_2_1 Play and pause the video
/*
  В этом примере кнопка переключает переменную состояния для перехода между воспроизведением и паузой. Однако для того, чтобы действительно воспроизвести или поставить видео на паузу, переключения состояния недостаточно. Вам также необходимо вызвать play() и pause() на элементе DOM для <video>. Добавьте к нему ссылку и заставьте кнопку работать.

  Для решения дополнительной задачи синхронизируйте кнопку "Play" с тем, воспроизводится ли видео, даже если пользователь щелкает правой кнопкой мыши на видео и воспроизводит его с помощью встроенных элементов управления мультимедиа браузера. Для этого вам может понадобиться прослушать onPlay и onPause на видео.
*/

import { useState, useRef } from 'react'

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleClick() {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if (nextIsPlaying) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
      <video width="250" ref={videoRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
      </video>
    </>
  )
}
