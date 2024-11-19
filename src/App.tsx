// 1_5_2 Adjust the image size based on a prop
/*
  В этом примере Avatar получает числовой параметр size, который определяет ширину и высоту <img>. В данном примере параметр size установлен на 40. Однако если вы откроете изображение в новой вкладке, вы заметите, что само изображение больше (160 пикселей). Реальный размер изображения определяется тем, какой размер миниатюры вы запрашиваете.

  Измените компонент Avatar, чтобы он запрашивал наиболее близкий размер изображения на основе параметра size. В частности, если size меньше 90, передавайте 's' ("small"), а не 'b' ("big") в функцию getImageUrl. Проверьте, что ваши изменения работают, отобразив аватары с разными значениями параметра size и открыв изображения в новой вкладке.
*/

import { Card } from './Card'

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img className="avatar" src="https://i.imgur.com/OKS67lhm.jpg" alt="Aklilu Lemma" width={70} height={70} />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  )
}
