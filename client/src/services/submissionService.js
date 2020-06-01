import axios from 'axios';

const submission_api_base_url = 'http://localhost:8080/api/submissions';

export async function postSubmission(username, score, numQuestions) {
    const response = await axios.post(submission_api_base_url, {
        username, score, numQuestions
    });
    if (response.data && response.data.id) {
        return true;
    }
    // eslint-disable-next-line no-console
    console.error(response);
    return false;
}

export async function getSubmissions() {
    const response = await axios(submission_api_base_url);
    if (response.data) {
        return response.data;
    }
    return [];
}