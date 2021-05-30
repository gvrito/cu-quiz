import { pagination } from './content.mjs'

export function addContent(toContainer, data, isCategory) {
    if(isCategory) {
        data.forEach(val => {
            const navi = document.createElement('div');
            const text = document.createTextNode(val.name);
            navi.appendChild(text);
            navi.classList.add('navi');
            navi.classList.add('center');
            navi.id = `cat${val.id}`;
            toContainer.appendChild(navi);
        })
    } else {
        toContainer.innerHTML = '';
        data.data.forEach(val => {
            const wrapper = document.createElement('div');
            const imgDiv = document.createElement('div');
            const img = document.createElement('img');
            const descDiv = document.createElement('div')
            const head = document.createElement('h2');
            const name = document.createTextNode(val.name);
            const cats = document.createElement('div');
            const about = document.createElement('div');
            const aboutP = document.createElement('p');
            const aboutText = document.createTextNode(val.description);
            let categories = 0;
            val.categories.forEach(val => {
                if(categories >= 3) {
                }
                else {
                    const par = document.createElement('p');
                    const text = document.createTextNode(val.name);
                    par.append(text);
                    cats.appendChild(par);
                }
                categories++;
            })
            wrapper.classList.add('post');
            imgDiv.classList.add('img');
            imgDiv.classList.add('flex');
            descDiv.classList.add('description');
            cats.classList.add('categories');
            about.classList.add('about');

            img.src = val.image;
            imgDiv.appendChild(img);
            head.append(name);
            aboutP.append(aboutText);
            about.appendChild(aboutP);
            descDiv.appendChild(head);
            descDiv.appendChild(cats);
            descDiv.appendChild(about);

            wrapper.appendChild(imgDiv);
            wrapper.appendChild(descDiv);
            toContainer.appendChild(wrapper);
        })
        pagination(data.meta.pagination.pages);
    }
}