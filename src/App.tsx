// 1_7_3 Extracting a list item component
/*
  Создайте список рецептов из этого массива! Для каждого рецепта в массиве выведите его название в виде <h2> и список ингредиентов в виде <ul>. Это потребует вложения двух различных вызовов map.
*/

import { recipes } from './data'

interface RecipeProps {
  id: string
  name: string
  ingredients: string[]
}

function Recipe({ name, ingredients }: RecipeProps) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient: string) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} />
      ))}
    </div>
  )
}
