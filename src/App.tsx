// 1_8_2 Fix a broken profile
/*
  Два компонента Profile отображаются бок о бок с разными данными. Нажмите "Свернуть" на первом профиле, а затем "Развернуть" его. Вы заметите, что теперь в обоих профилях отображается один и тот же человек. Это ошибка.

  Найдите причину ошибки и исправьте ее.

  Код ошибки находится в файле Profile.js. Убедитесь, что вы прочитали его сверху вниз!
*/

import Profile from './Profile'

export type Person = {
  imageId: string
  name: string
}

export default function App() {
  return (
    <>
      <Profile
        person={{
          imageId: 'lrWQx8l',
          name: 'Subrahmanyan Chandrasekhar'
        }}
      />
      <Profile
        person={{
          imageId: 'MK3eW3A',
          name: 'Creola Katherine Johnson'
        }}
      />
    </>
  )
}
