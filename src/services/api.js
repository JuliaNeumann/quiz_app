import Category from '../models/Category';

const API_BASE_URL = 'https://opentdb.com/';

export async function fetchCategories() {
    return await fetch(API_BASE_URL + 'api_category.php')
                    .then(res => res.json())
                    .then((data) => {
                        return data.trivia_categories.map(category => new Category(category.id, category.name));
                    })
                    .catch(console.error)
}