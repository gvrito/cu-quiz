const APIURL = 'https://gorest.co.in/public-api/categories';
export function getCategories() {
    return fetch(APIURL).then(data => data.json());
}