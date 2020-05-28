import axios from 'axios';

const api_base_url = 'https://opentdb.com/';

export async function getCategories() {
    const response = await axios(`${api_base_url}api_category.php`);
    if (response.data && response.data.trivia_categories && response.data.trivia_categories.length) {
        return response.data.trivia_categories;
    }
    return [];
}

export async function getQuestions(category, num) {
    const categorySnippet = (category === '0') ? '' : '&category=' + category;
    const requestRoute = 'api.php?amount=' + num + '&type=multiple' + categorySnippet;
    const response = await axios(`${api_base_url}${requestRoute}`);
    if (response.data && response.data.results) {
        return response.data.results;
    }
    return [];
}
