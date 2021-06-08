const academloUsers = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]


let button = document.querySelector("#button");
    console.log(buttons);
button.addEventListener("click", function (){
        alert("funciona");
        console.log("Was Achieved");
});

let academloUsers = [];
    for(let i = 0; i < users.includes("@academlo.com") === true) {
        academloUsers.push(users[i]);
    }

let id = documet.querySelector("#id");
let id = documet.querySelector("#name");
let id = documet.querySelector("#age");
let id = documet.querySelector("#social");
let id = documet.querySelector("#gender");

for (let i = 0; i < academloUsers.length; i++) {
    let studentsName = document.createElement("div");
    studentsName.innerText = academloUsers[i].name;
    id.appendChild(studentsName);
}





    // constructor(selector, headerButtons){
    //     this.element = document.querySelector(selector);

    //     this.header = [];
    //     this.item = [];



    // }


