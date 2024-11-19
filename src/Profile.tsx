import { getImageUrl } from './utils'

interface ProfileProps {
  name: string
  urlHash: string
  profession: string
  awardsCount: number
  awards: string
  discovered: string
}

export const Profile: React.FC<ProfileProps> = props => {
  const { name, urlHash, profession, awardsCount, awards, discovered } = props

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img className="avatar" src={getImageUrl(urlHash)} alt={name} width={70} height={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardsCount} </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  )
}
