// Введення в JS події

/*
Відловлювати виникнення події ми будемо за допомогою
спеціальних обробників.

Будь-якій події можна призначити обробник, тобто функцію,
яка спрацює, щойно відбудеться потрібна нам подія.
Саме завдяки цим обробникам JavaScript може
реагувати на дії користувача.

Є кілька способів призначити події обробник.
Зараз про них і поговоримо
*/


// -----------------------------

// Використання атрибута HTML
// onclick="console.log('Hello!!')" написати в HTML файлі як атрибут тега
// -----------------------------

// Використання DOM-об'єкта
// const button = document.querySelector('.button');
// button.onclick = function () {
//     console.log('Клик!');
// }

// інший варіант
// function showConsole() {
//     console.log('Клик!');
// }
//
// button.onclick = showConsole;

// Важно! Без круглых скобок!

/*
Фундаментальний недолік описаних вище способів
призначення обробника - неможливість повісити кілька
обробників на одну подію.
Кожне нове призначення обробника перезапише попереднє:
*/

//===================================================

// Обробник подій addEventListener/removeEventListener

/*
Існує основний спосіб призначення
обробників за допомогою спеціальних
методів addEventListener і removeEventListener,
які позбавлені цього недоліку

element.addEventListener(event, handler[, options]);
*/
//
// const button = document.querySelector('.button');
// button.addEventListener('click', function (e) {
//     console.log('Hi');
// });
// button.addEventListener('click', function (e) {
//     console.log('Bu')
// })

//
// const button = document.querySelector('.button');
//
// function showConsole() {
// 	console.log('Клик!');
// 	// button.removeEventListener("click", showConsole); // щоб спрацювало тільки один раз
// }
//
// button.addEventListener("click", showConsole);
// button.removeEventListener("click", showConsole);


// ------

// Опції

const options = {
	"capture": false, // фаза, на якій має спрацювати обробник
	"once": true, // якщо true, тоді обробник буде
	//автоматично видалений після виконання.
	"passive": false, // якщо true, то вказує, що обробник
	//ніколи не викличе preventDefault()
}

//
// const button = document.querySelector('.button');
// function showConsole() {
// 	console.log('Клик!');
// }
//
// button.addEventListener("click", showConsole, options);

/*
Метод addEventListener може здатися складнішим, ніж, скажімо, onclick.
Але, через те що він має перевагу
"прослуховування" декількох подій,
а також з огляду на той факт, що існують події, які можна відловити
тільки за допомогою цього методу.
В результаті розробники частіше використовують саме його.
*/

//====================================================

// Об'єкт події
/*
Щоб добре обробити подію, можуть знадобитися деталі того,
Не просто "клік" або "натискання клавіші",
а також - які координати покажчика миші, яку клавішу
натиснуто і так далі.
Коли відбувається подія, браузер створює об'єкт події,
записує в нього деталі та передає його як
аргумент функції - обробнику.
*/
//
// const button = document.querySelector('.button');

function showConsole(event) {
	// Тип події
	// console.log(event.type);
	// Об'єкт, на якому спрацював обробник
	// console.log(event.target);
	// Об'єкт, до якого призначено обробник
	// console.log(event.currentTarget);
	// Положення курсора по осі X
	// console.log(event.clientX);
	// Положення курсора по осі Y
	// console.log(event.clientY);

	// Усі деталі події
	// console.log(event);
}

// button.addEventListener("click", showConsole);
// button.addEventListener("mouseenter", showConsole);

//===================================================


// Спливання і занурення

// const block = document.querySelector('.red');
// const blockInner = document.querySelector('.blue');
// const blockInnerInner = document.querySelector('.yellow');

/*
Спливання
Коли на елементі відбувається подія, обробники
спочатку спрацьовують на ньому, потім на його батькові,
потім вище і так далі, вгору по ланцюжку предків.
*/
/*
Занурення
Для того, щоб щось спливло, воно має спочатку зануритися :)
*/


// block.addEventListener("click", function (event) {
// 	console.log('Клік на Блок!');
// 	// console.log(event.target);
// });
// blockInner.addEventListener("click", function (event) {
// 	console.log('Клік на Блок другого рівня!');
// }, { "capture": false });
// blockInnerInner.addEventListener("click", function (event) {
// 	console.log('Клік на Блок третього рівня!');
// 	// Зупинка спливання
// 	// event.stopPropagation();
// });

/*
У сучасній розробці стадія занурення використовується дуже рідко,
зазвичай події обробляються під час спливання.
*/


//===================================================

// Делегування подій

/*
Спливання та перехоплення подій дає змогу реалізувати
один із найважливіших прийомів розробки - делегування.
*/

// const button = document.querySelectorAll('.button');
//
// function showConsole() {
// 	console.log('Ура!');
// }
// button.forEach(buttonItem => {
// 	buttonItem.addEventListener("click", showConsole);
// });


// -----------------
//делегування на батька, щоб не було багато прослуховувань
// const content = document.querySelector('.modal-content__footer');
//
// function showConsole() {
// 	console.log('Ура!');
// }
// content.addEventListener("click", function (event) {
// 	if (event.target.closest('.button')) {
// 		showConsole();
// 	}
// });



// Дії браузера за замовчуванням

/*
Багато подій автоматично тягнуть за собою дію браузера.
Наприклад:
- Клік за посиланням ініціює перехід на новий URL.
- Натискання на кнопку "відправити" у формі - відсилання її на сервер.
- Затискання кнопки миші над текстом і її рух
	у такому стані - ініціює його виділення тощо.

Якщо ми обробляємо подію в JavaScript,
то найчастіше така дія браузера нам не потрібна.
На щастя, її можна скасувати.
*/

// const link = document.querySelector('.link');
// link.addEventListener("click", function (event) {
// 	console.log('Наші дії');
// 	// скасувати дію браузера (перехід за посиланням)
// 	event.preventDefault();
// });


// link.onclick = function () {
// 	console.log('Наші дії');
// 	// скасувати дію браузера (перехід за посиланням)
// 	return false;
// }


/*
Необов'язкова опція passive: true для addEventListener
сигналізує браузеру, що обробник не збирається виконувати
preventDefault(). Чому це може бути корисно ?
Є деякі події, як touchmove на мобільних
пристроях (коли користувач переміщує палець по екрану),
яка за замовчуванням починає прокрутку, але ми можемо скасувати
цю дію, використовуючи preventDefault() в обробнику.
Тому, коли браузер виявить таку подію,
він повинен для початку запустити всі обробники і після,
якщо preventDefault не викликається ніде, він може почати прокрутку.
Це може спричинити непотрібні затримки в користувацькому інтерфейсі.
Опція passive: true повідомляє браузеру, що обробник
не збирається скасовувати прокрутку. Тоді браузер починає її негайно,
забезпечуючи максимально плавний інтерфейс, паралельно обробляючи подію.
Для деяких браузерів (Firefox, Chrome) опція passive за замовчуванням
увімкнена в true для таких подій, як touchstart і touchmove.
*/


// const link = document.querySelector('.link');
//
// link.addEventListener("click", function (event) {
// 	console.log('Наші дії');
// 	// скасувати дію браузера (перехід за посиланням)
// 	event.preventDefault();
// }, { "passive": true });


//===================================================
// Основи подій миші

// Типи подій миші
/*
Ми можемо розділити події миші на дві категорії:
"прості" і "комплексні".
*/

// Прості події
//Найчастіше використовувані прості події:
/*
mousedown / mouseup - Кнопка миші натиснута / відпущена над елементом.
mouseover / mouseout - Курсор миші з'являється над елементом і йде з нього.
mousemove - Кожен рух миші над елементом генерує цю подію.
contextmenu - Викликається при спробі відкриття контекстного меню,
					як правило, натисканням правої кнопки миші.
					Але, зауважимо, це не зовсім подія миші,
					вона може викликатися і спеціальною клавішею клавіатури.
*/
//Комплексні події
/*
click - Викликається при mousedown, а потім mouseup над одним
і тим самим елементом, якщо використовувалася основна кнопка миші.
dblclick - Викликається подвійним кліком на елементі.
Комплексні події складаються з простих, тому
в теорії ми могли б без них обійтися.
Але добре, що вони існують, бо працювати з ними дуже зручно.
*/


const button = document.querySelector('.btn');

button.addEventListener("mousedown", function (event) {
	console.log(`Натиснуто кнопку ${event.which}`);
});

button.addEventListener("click", function (event) {
	console.log('Натиснута основна кнопка миші');
});

button.addEventListener("contextmenu", function (event) {
	console.log('Викликано контекстне меню (не основна кнопка миші)');
});

/*
event.which = 1 - Натиснута основна кнопка миші (зазвичай ліва)
event.which = 2 - Натиснута середня кнопка миші (колесо)
event.which = 3 - Натиснута не основна кнопка миші (зазвичай права)
*/

//------------------

// Наведення миші: mouseover/out, mouseenter/leave

//Події mouseover/mouseout, relatedTarget

/*
Подія mouseover відбувається в момент, коли курсор опиняється
над елементом, а подія mouseout - у момент,
коли курсор йде з елемента.
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	blockForMouse.innerHTML = `Курсор над елементом`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	blockForMouse.innerHTML = `Курсар іде з елемента`;
});
*/

/*
Ці події є особливими, тому що в них є властивість
relatedTarget. Вона "доповнює" target. Коли миша переходить
з одного елемента на інший, то один з них буде target,
а інший relatedTarget.

Для події mouseover:
event.target - це елемент, на який курсор перейшов.
event.relatedTarget - це елемент,
з якого курсор пішов(relatedTarget → target).

Для події mouseout навпаки:
event.target - це елемент, з якого курсор пішов.
event.relatedTarget - це елемент,
на який курсор перейшов(target → relatedTarget).
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
*/

/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	console.log(`Курсор над елементом`);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(`Курсар іде з елемента`);
});
*/


// События mouseenter и mouseleave
/*
Пара важных отличий:
1) Переходы внутри элемента, на его потомки и с них, не считаются.
2) События mouseenter / mouseleave не всплывают.
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseenter", function (event) {
	console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseleave", function (event) {
	console.log(`Курсор уходит с элемента`);
});
*/

//Делегирование событий наведения мыши
/*
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = `background-color: #77608d;`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = ``;
});
*/