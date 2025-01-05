import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';
const Meals = () => {

    const requestConfig = {}

    const { data: loadedMeals, isloading, error } =
        useHttp('http://localhost:3000/meals', requestConfig, []);


    if (isloading) {
        return <p className='center'>Fetching meals...</p>;
    }

    if (error) {
        return <Error title="Failde to Fetch Meals" message={error} />
    }

    // if(!data){
    //     return <p>No meals found!</p>;
    // } alternatif

    return (
        <ul id='meals'>
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}

export default Meals
