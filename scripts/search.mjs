import {  searchContent } from './content.mjs'
const searchBtn = document.getElementById('search-button');
const field = document.getElementById('search');

export function activateSearch() {
    searchBtn.addEventListener('click', () => {
        if(field.value != '') {
            searchContent(field.value)
        }
    })
}