// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const numbers = document.querySelector(".numbers")

for(let i = 100; i >= 50; i-=10){
   
    const paragraphs = document.createElement("p")
    paragraphs.innerText = i
    numbers.append(paragraphs)

    // console.log(i)
}


// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const container = document.querySelector(".strings-container")
for (let i = 0; i< daysOfTheWeek.length; i++){
    // const paragraph = document.createElement("p")
    // paragraph.innerText = daysOfTheWeek[i]
    // container.append(paragraph)
    container.insertAdjacentHTML("beforeend", `<p>${daysOfTheWeek[i]}</p>`)
}

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
    {
        firstName: "Agnes",
        lastName: "Bock",
        age: 5
    },
    {
        firstName: "Agata",
        lastName: "Bock",
        age: 9
    },
    {
        firstName: "Olga",
        lastName: "Vosk",
        age: 35
    },
    {
        firstName: "Iaroslav",
        lastName: "Bock",
        age: 39
    },
    {
        firstName: "Vladimir",
        lastName: "Safronov",
        age: 72
    }
]
console.log(users)

const item  = document.querySelector(".numbers")

for(let i =0; i< users.length; i++){
    if(users[i].age >18){
        // console.log(users[i].lastName)
     item.insertAdjacentHTML("beforeend", `<div class="users-container"> <h3>${users[i].firstName}</h3>` `<p>${users[i].lastName}</p>` `<p>${users[i].age}</p> </div>`)   
    }
}

// Эрик, здравствуйте! помогите пожалуйста понять проблему. Третье задание не получается. Карточки не создаюся.


