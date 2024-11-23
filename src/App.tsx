import { useState } from 'react'

// 3_1_1 Add and remove a CSS class
/*
    Сделайте так, чтобы щелчок на картинке удалял CSS-класс background--active из внешнего <div>, но добавлял класс picture--active к <img>. Повторный щелчок по фону восстановит исходные CSS-классы.

    Визуально вы должны увидеть, что щелчок на изображении удаляет фиолетовый фон и выделяет границу изображения. Щелчок за пределами изображения выделяет фон, но убирает выделение границы изображения.
*/

export default function Picture() {
  const [isImageActive, setIsImageActive] = useState(false)

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsImageActive(true)
  }

  const handleBackgroundClick = () => {
    setIsImageActive(false)
  }

  return (
    <div className={`background ${!isImageActive ? 'background--active' : ''}`} onClick={handleBackgroundClick}>
      <img
        className={`picture ${isImageActive ? 'picture--active' : ''}`}
        onClick={handleImageClick}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  )
}
