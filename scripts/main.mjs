import { getCategories } from './categories.mjs';
import { addContent } from './add.mjs';
import { showContent } from './content.mjs';
import { activateSearch } from './search.mjs';
const catContainer = document.getElementById('sidenav')

getCategories()
.then(data => {
    addContent(catContainer, data.data, true);
    const navis = document.getElementsByClassName('navi');
    const arr = [...navis];
    let prevVal;
    arr.forEach(val => {
        val.addEventListener('click', () => {
            const id = val.id.substring(3);
            showContent(id);
            if(prevVal) prevVal.classList.remove('active');
            val.classList.add('active');
            prevVal = val;
        })
    });
    //first category will be default+
    showContent(1);
    arr[0].classList.add('active');
    prevVal = arr[0];
})
activateSearch();