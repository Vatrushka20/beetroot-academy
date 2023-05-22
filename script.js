/*
Базовий рівень:

Реалізуй клас User. Під час створення екземпляру на базі цього класу,
обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може
бути або admin або user). У разі невірно переданих даних такого
об’єкта — попереджати за допомогою alert-у відповідне поле,
яке введено некоректно. У класі User повинні бути такі компоненти:

- getName
- getRole
- login
- logout
- сhangeName
- changePassword

У класі Admin повинні бути такі компоненти:

- addUser
- removeUser
- changeUserRole
- getAllUsers
- removeAllUsers
 */
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        if (role !== 'admin' && role !== 'user') {
            alert('Ви ввели некоректні данні.')
        }
        this.loggedIn = false;
        this.password = 1111;
    }

    getName() {
        return `The name is ${this.name}`
    }

    getRole() {
        return `The role of ${this.name} is ${this.role}`
    }

    logIn() {
        return this.loggedIn = true;
    }

    logOut() {
        return this.loggedIn = false;
    }

    changeName(newName) {
        this.name = newName;
        console.log(`Нове імʼя користувача - ${newName}`)
    }

    changePassword(newPassword) {
        this.password = newPassword;
        console.log(`Новий пароль - ${newPassword}`)
    }
}

class Admin extends User {
    constructor(name) {
        super(name, 'admin');
        this.users = [];
    }

    addUser(user) {
        if (!(user instanceof User)) {
            alert('This user invalid')
        }

        this.users.push(user)
    }

    removeUser(user) {
        const removeUser = this.users.indexOf(user);
        if (removeUser !== -1) {
            this.users.splice(removeUser, 1)
        }
    }

    changeUserRole(user, newRole) {
        if (!(user instanceof User)) {
            alert('This user invalid')
        }

        user.role = newRole;
        console.log(`Нова роль користувача - ${newRole}`)
    }

    getAllUsers() {
        return this.users;
    }

    removeAllUsers() {
        this.users = [];
    }
}

const user = new User('Petro', 'admin')
console.log(user.getName())
console.log(user.getRole())

const admin = new Admin('Oleksandr');
console.log(admin.getName())
console.log(admin.getRole())

// створюємо нових користувачів
const user1 = new User('Nastya', 'user');
const user2 = new User('Lu', 'user');
const user3 = new User('Ivan', 'user');
// const user4 = 'Ivan';


// додаємо користувачів
admin.addUser(user1);
admin.addUser(user2);
admin.addUser(user3);
// admin.addUser(user4);
console.log(admin.getAllUsers())

// видаляємо користувача
admin.removeUser(user3);
console.log(admin.getAllUsers())

// змінюємо роль
admin.changeUserRole(user1, 'chef')

// змінюємо імʼя
user1.changeName('Dana');

// змінюємо пароль
user3.changePassword(222256656565);

// видаляємо всіх користувачів
admin.removeAllUsers()
console.log(admin.getAllUsers())


// 2 завдання

/*В HTML-сторінці додати користувачу можливість створювати
свій дашборд годинників. Це годинники для різних куточків світу.
Необхідно додати input-поле та button, у разі кліка на якому
буде створюватися новий годинник. Реалізація WorldClock відбувається
через class. Кожен екземпляр такого класу — новий годинник.
У класі повинні бути такі компоненти:

- getCurrentDate
- getCurrentDateTime
- deleteClock
1 кнопка — показує користувачу час у текстовому варіанті
2 кнопка — показує користувачу поточну дату й час у текстовому варіанті
3 кнопка — видаляє годинник зі «стіни» годинників
 */

class WorldClock {
    constructor(name) {
        this.name = name;
    }

    getCurrentDate() {
        const currentDate = new Date();
        return currentDate.toLocaleTimeString('uk-UA');
    }

    getCurrentDateTime() {
        const currentDateTime = new Date();
        let options = {weekday:'long', day: 'numeric', year: 'numeric', month: 'long', hour:'2-digit', minute:'2-digit', second: '2-digit' };
        return currentDateTime.toLocaleString('uk-UA', options)
    }
}

const customClock = document.getElementById('customClock');
const button = document.getElementById('createClock');

button.addEventListener('click', (e) => {
    const clockName = document.getElementById('clockName').value;
    const clock = new WorldClock(clockName);

    const showTime = document.createElement('div');
    showTime.className = 'showTime';

    const clockEl = document.createElement('div');
    clockEl.className = 'clock';

    const divTime = document.createElement('div');
    divTime.className = 'divTime';
    showTime.appendChild(divTime)


    const nameLabel = document.createElement('label');
    nameLabel.className = 'clockLabel'
    nameLabel.textContent = `${clockName}`;
    customClock.appendChild(nameLabel);

    const getCurrentDate = document.createElement('button');
    getCurrentDate.className = 'customBtn green';
    getCurrentDate.textContent = 'Show Time';
    clockEl.appendChild(getCurrentDate);

    const getCurrentDateTime = document.createElement('button');
    getCurrentDateTime.className = 'customBtn blue';
    getCurrentDateTime.textContent = 'Show Date and Time';
    clockEl.appendChild(getCurrentDateTime);

    const deleteClock = document.createElement('button');
    deleteClock.className = 'customBtn red'
    deleteClock.textContent = 'Delete Clock';
    clockEl.appendChild(deleteClock);

    customClock.appendChild(showTime);
    customClock.appendChild(clockEl);

    getCurrentDate.addEventListener('click', () => {
        divTime.textContent = `${clock.getCurrentDate()}`
    })

    getCurrentDateTime.addEventListener('click', () => {
        divTime.textContent = `${clock.getCurrentDateTime()}`
    })

    deleteClock.addEventListener('click', () => {
        // customClock.removeChild(clockEl); juxt button for time
        customClock.remove(customClock) // all clock
    })
})




