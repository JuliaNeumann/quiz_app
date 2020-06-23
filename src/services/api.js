import Category from '../models/Category';
import Question from '../models/Question';

const API_BASE_URL = 'https://opentdb.com/';

export async function fetchCategories() {
    return await fetch(API_BASE_URL + 'api_category.php')
                    .then(res => res.json())
                    .then((data) => {
                        return data.trivia_categories.map(category => new Category(category.id, category.name));
                    })
                    .catch(console.error)
}

export async function fetchQuestions(category, num) {
    const categorySnippet = (category === '0') ? '' : '&category=' + category;
    const requestRoute = 'api.php?amount=' + num + '&type=multiple&encode=url3986' + categorySnippet;
    return await fetch(API_BASE_URL + requestRoute)
                    .then(res => res.json())
                    .then(data => {
                        return data.results.map(question => new Question(
                            decodeURIComponent(question.question),
                            decodeURIComponent(question.correct_answer),
                            question.incorrect_answers.map(answer => decodeURIComponent(answer))
                        ));
                    })
                    .catch(console.error);
}