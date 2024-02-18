import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { Drinks } from '../../components/Drinks/Drinks';

// ==============
import recipes from '../../helpers/Data/recipes.json';
// ==============

export default function DrinksPage() {
  return (
    <div>
      <PageTitle title="Drinks" />
      <DrinksSearch />
      <Drinks drinks={recipes} />
    </div>
  );
}
