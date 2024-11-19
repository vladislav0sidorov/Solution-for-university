// 1_5_1 Extract a component
/*
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { Profile } from './Profile'

const list = [
  {
    name: 'Maria Skłodowska-Curie',
    urlHash: 'szV5sdG',
    profession: 'physicist and chemist',
    awardsCount: 4,
    awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
    discovered: 'polonium (chemical element)'
  },
  {
    name: 'Katsuko Saruhashi',
    urlHash: 'YfeOqp2',
    profession: 'geochemist',
    awardsCount: 2,
    awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
    discovered: 'a method for measuring carbon dioxide in seawater'
  }
]

export default function TodoList() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {list.map(profile => (
        <Profile
          key={profile.urlHash}
          name={profile.name}
          urlHash={profile.urlHash}
          profession={profile.profession}
          awardsCount={profile.awardsCount}
          awards={profile.awards}
          discovered={profile.discovered}
        />
      ))}
    </div>
  )
}
