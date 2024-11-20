// 1_8_3 Fix a broken story tray
/*
  Генеральный директор вашей компании просит вас добавить "истории" в ваше приложение онлайн-часов, и вы не можете отказать. Вы написали компонент StoryTray, который принимает список stories, за которым следует заполнитель "Create Story".

  Вы реализовали заполнитель "Create Story", поместив еще одну фальшивую историю в конец массива stories, который вы получаете в качестве пропса. Но по какой-то причине "Create Story" появляется более одного раза. Исправьте эту проблему.
*/

export interface Story {
  id: string
  label: string
}

const stories: Story[] = []
export default function Wrapper() {
  return <StoryTray stories={stories} />
}

function StoryTray({ stories }: { stories: Story[] }) {
  const storiesWithCreate = [
    ...stories,
    {
      id: 'create',
      label: 'Create Story'
    }
  ]

  return (
    <ul>
      {storiesWithCreate.map(story => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  )
}
