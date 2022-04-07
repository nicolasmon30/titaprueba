import data from '../../public/projects.json'
window.addEventListener('load', () => {
    let proyects = data;
    let container = document.querySelector('.tabs__panel')
    if (container) {
        proyects.forEach(proy => {
            let data = printCards(proy)
            container.appendChild(data)
        })
        loadMore()
    }
    filters();
    menuMobile();
    changeStructure();
});

const filters = () => {
    let filters = Array.from(document.querySelectorAll('.tabs__filters__item'))
    let proyectsFilter;
    let proyects = data;
    let container = document.querySelector('.tabs__panel')

    if (filters) {
        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                let categorySelected = filter.dataset.category;
                document.querySelector('.tabs__filters__item.tabs__filters__item--active').classList.remove('tabs__filters__item--active')
                filter.classList.add('tabs__filters__item--active')
                if (categorySelected === 'all') {
                    proyectsFilter = data;
                    container.innerHTML = ''
                    proyectsFilter.forEach(proy => {
                        let data = printCards(proy)
                        container.appendChild(data)
                        /* loadMore() */
                    })
                    loadMore()
                } else {
                    container.innerHTML = ''
                    proyectsFilter = proyects.filter((category) => {
                        console.log("asdasd", category.category, categorySelected)
                        if (category.category === categorySelected) {
                            let data = printCards(category)
                            container.appendChild(data)
                            /* loadMore() */
                            loadMore()
                        }
                    })
                }
            })
        })
    }
}

const template = document.querySelector("template");

const printCards = (data) => {
    console.log(data)
    const resourceTemplate = document.importNode(template.content, true);
    const card = resourceTemplate.querySelector("#resource");
    const title = card.querySelector('.cards__information h3')
    const category = card.querySelector('.cards__information p')
    const img = card.querySelector('.cards__thumbnail img')
    img.src = data.imgUrl
    title.innerText = data.title
    category.innerText = data.category

    return card;
}

const loadMore = () => {
    let container = document.querySelector('.tabs__panel')
    let items = Array.from(container.querySelectorAll('.cards'))
    let loadMore = document.querySelector('#loadMore')
    let maxItems = 5;
    let loadItems = 4;
    let hiddenClass = "cards__hidden"
    items.forEach(function (item, index) {
        if (index > maxItems - 1) {
            item.classList.add(hiddenClass);
        }
    });
    loadMore.addEventListener("click", function (e) {
        e.preventDefault();
        [].forEach.call(document.querySelectorAll(`.${hiddenClass}`), (item, index) =>  {
            if (index < loadItems) {
                item.classList.remove(hiddenClass);
            }

            if(document.querySelectorAll(`.${hiddenClass}`).length === 0){
                loadMore.style.display = "none";
            }
        });
        if(document.querySelectorAll(`.${hiddenClass}`).length === 0){
            loadMore.style.display = "none";
        }else{
            loadMore.style.display = "inline-block";
        }
    });
}

const menuMobile = () => {
    let open = document.querySelector('.header__hamburguer__open')
    let close = document.querySelector('.header__hamburguer__close')
    let menu = document.querySelector('.header__menu')
    let hamburguer = document.querySelector('.header__hamburguer')
    open.addEventListener('click', () => {
        hamburguer.classList.add('header__hamburguer--active')
        menu.classList.add('header__menu--active')
    })
    close.addEventListener('click', () => {
        hamburguer.classList.remove('header__hamburguer--active')
        menu.classList.remove('header__menu--active')
    })

}

const changeStructure = () => {
    let column = document.querySelector('.tabs__estructure--column')
    let block = document.querySelector('.tabs__estructure--block')
    let panel = document.querySelector('.tabs__panel')
    column.addEventListener('click', e => {
        document.querySelector('.tabs__panel.tabs__panel--columns').classList.remove('tabs__panel--columns')
        panel.classList.add('tabs__panel--block')
    })
    block.addEventListener('click', e => {
        document.querySelector('.tabs__panel.tabs__panel--block').classList.remove('tabs__panel--block')
        panel.classList.add('tabs__panel--columns')
    })
}