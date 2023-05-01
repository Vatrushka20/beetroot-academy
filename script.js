// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// child.addEventListener('click', (event) => {
//     console.log('child')
// });
// parent.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('parent')
// });
// grandparent.addEventListener('click', (event) => {
//     console.log('grandparent')
// });
//
// child.addEventListener('click', (event) => {
//     console.log('child capture')
// },  { "capture": true });
// child.addEventListener('click', (event) => {
//     console.log('parent capture')
// },  { "capture": true });
// child.addEventListener('click', (event) => {
//     console.log('grandparent capture')
// },  { "capture": true });


// REMOVE

// child.addEventListener('click', (event) => {
//     console.log('child')
// }, {once: true}); //спрацює раз
//
//
// function some(event) {
//     event.stopPropagation()
//     console.log('child');
//     child.removeEventListener('click', some)
// }
//
// child.addEventListener('click', some);


//--------

// const divs = document.body.querySelectorAll('div');
//
// // divs.forEach(elem => {
// //     child.addEventListener('click', (event) => {
// //         event.stopPropagation();
// //         console.log('click')
// //     })
// // });
// window.addEventListener('', (event) => {
//     event.stopPropagation();
//     console.log(event)
// })
//
// //
// // const newDiv = document.createElement('div');
// // newDiv.classList.add('child');
// // document.body.append(newDiv)
//
// // власний івент
//
// const customEvent = new Event('myEvent');
// document.addEventListener('myEvent', (event) => {
//     event.stopPropagation();
//     console.log(event)
// })
// const onClick = () => {
//     document.dispatchEvent(customEvent)
// }

// ---------------------HOMEWORK-----------------

// завдання 1
const area = document.querySelector('.area');
const view = document.querySelector('.view');

document.body.onkeydown = keyChange;

function keyChange(event) {
    if (event.metaKey && (event.code === 'KeyS' || event.code === 'KeyE')) {
        event.preventDefault();
        if (event.code === 'KeyS') {
            if (area.style.display) {
                area.style.display = '';
                view.style.display = 'block';
                view.textContent = area.value;
            }
        } else {
            if (!area.style.display) {
                area.style.display = 'block';
                view.style.display = 'none';
                area.value = view.textContent;
            }
        }
    }

    if (event.code === 'Escape' && area.style.display) {
        area.style.display = '';
        view.style.display = 'block';
    }
}


// завдання 2
/*
Sort an HTML file

@param{HTMLTableElement} table The table to sort
@param {number} column The index of the column
@param {boolean} asc Determines if the sorting will be in ascending/ if false то спадання з більшого
якщо true то зростання з меншого
 */
function sortTableByColumn(table, column, asc = true) {
    const direction = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll('tr'));

    // sort each rows
    const sortRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        return aColText > bColText ? (1 * direction) : (-1 * direction);
    });

// Видалити всі існуючі Tr з таблиці

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

//     повторно додайте нові відсортовані рядки

    tBody.append(...sortRows);

//     запам'ятати, як зараз відсортовано стовпець

    table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle('th-sort-asc', asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle('th-sort-desc', !asc);
}

document.querySelectorAll('.table-sortable th').forEach(headerCell => {
    headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAsc = headerCell.classList.contains('th-sort-asc');

        sortTableByColumn(tableElement, headerIndex, !currentIsAsc);
    });
})


// завдання 3
/*
Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку,
якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
 */

/* Function resize отримує елементId та ButtonId, елементId відповідає елементу,
який стане змінюваним при перетягуванні елемента з елементом ButtonId.
Рекомендується розміщувати кнопку в правому нижньому куті змінюваного div.
 */
const resize = (elementId, buttonId) => {
    const element = document.getElementById(elementId);
    const button = document.getElementById(buttonId);
    let initialWidth = 0;
    let initialHeight = 0;
    mouseX = 0;
    mouseY = 0;

    /* mousedown event для керування масштабуванням за допомогою scale()
     та додавання mouseup event для зупинки масштабування за допомогою stop()
    */
    button.addEventListener('mousedown', function (event) {
        getMousePosition(event);
        getElementDimensions();
        window.addEventListener('mousemove', scale);
        window.addEventListener('mouseup', removeScale)
    });

    //Отримуємо позицію миші по x та y на сторінці
    const getMousePosition = (event) => {
        mouseX = event.pageX;
        mouseY = event.pageY;
    };

    //Отримати висоту та ширину елементу, зробивши властивість числом
    const getElementDimensions = () => {
        initialWidth = element.clientWidth;
        initialHeight = element.clientHeight;
    };

    /* Встановлює ширину та висоту залежно від того,
    як рухається миша для масштабування елемента */
    const scale = (event) => {
        const width = initialWidth + (event.pageX - mouseX);
        const height = initialHeight + (event.pageY - mouseY);
        if (width > 0) {
            element.style.width = width + 'px';
        }
        if (height > 0) {
            element.style.height = height + 'px';
        }
    };

    //Видаляє функцію scale() для зупинки масштабування елементу
    const removeScale = () => {
        window.removeEventListener('mousemove', scale)
    }
};

// викликаємо функцію
resize('scalable-div', 'circle');

