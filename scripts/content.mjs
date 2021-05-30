import { addContent } from './add.mjs'
const APIURL_CAT = 'https://gorest.co.in/public-api/products?categories[]=';
const APIURL_SEARCH = 'https://gorest.co.in/public-api/products?name='
const container = document.getElementsByClassName('posts')[0];
const pag = document.getElementsByClassName('paginate')[0];
let isOnSearch = false;
let currPage = 1;
let word;
let cat;

export function showContent(catId, page) {
    cat = catId;
    if(page) currPage = page;
    fetch(`${APIURL_CAT}${catId}&page=${page ? page : currPage}`)
    .then(data => data.json())
    .then(data =>  {
        addContent(container, data, false);
        isOnSearch = false;
    })
}
export function searchContent(keyword, page) {
    word = keyword;
    if(page) currPage = page;
    fetch(`${APIURL_SEARCH}${keyword}&page=${page ? page : currPage}`)
    .then(data => data.json())
    .then(data =>  {
        addContent(container, data, false);
        isOnSearch = true;
    })
}
export function pagination(pages) {
    pag.innerHTML = '';
    for(let i = 1; i <= pages; i++) {
        const text = document.createTextNode(i);
        const span = document.createElement('span');
        span.append(text);
        pag.append(span);
        span.addEventListener('click', () => {
            //if user clicks the page we are already in, dont send request
            if(currPage != i) {
                if(!isOnSearch) {
                    showContent(cat, i);
                } else {
                    searchContent(word,i);
                }
            }
        })
    }
}