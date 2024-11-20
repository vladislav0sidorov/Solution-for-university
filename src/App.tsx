// 1_7_2 Nested lists in one component
/*
  Создайте список рецептов из этого массива! Для каждого рецепта в массиве выведите его название в виде <h2> и список ингредиентов в виде <ul>. Это потребует вложения двух различных вызовов map.
*/

import { recipes } from './data'

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
