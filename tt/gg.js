// fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json()).then((users)=>{
//     const block = document.getElementsByClassName('user')[0];
//     for (const user of users) {
//         const div_users = document.createElement('div');
//         div_users.innerText = `#${user.id} ${user.name} `;
//         block.appendChild(div_users)
//
//         const button = document.createElement("button")
//         button.innerText= 'info';
//         div_users.appendChild(button);
//
//         button.onclick = () => {
//             location.href = `../info_html/info.html?userId=${user.id}`;
//         }
//
//     }
// });
// =================================================================================================

// const userId = new URL (location.href).searchParams.get(`userId`)
//
// fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res)=> res.json()).then((user)=> {
//     const block = document.getElementsByClassName('user')[0];
//
//     const ul = document.createElement("ul");
//     rec(user, ul)
//     block.appendChild(ul);
//
//
//     const button = document.createElement("button")
//     button.innerText= 'info';
//     ul.appendChild(button);
//
//     button.onclick = () => {
//         location.href = `info.html`;
//     }
//
// });
//
//
// function liBild(key ,value, parent) {
//     const li = document.createElement("li")
//     li.innerText = `${key} : ${value}`
//     parent.appendChild(li)
// }
//
// function ulBild(key ,object , parent) {
//     const li = document.createElement("li")
//     const ul = document.createElement("ul")
//     li.innerText = `${key}: `
//
//     parent.appendChild(li)
//     li.appendChild(ul)
//
//     rec(object, ul);
// }
// function rec(object , parent) {
//     for (const key in object) {
//         typeof object[key] === 'object'
//             ? ulBild(key ,object[key] , parent)
//             : liBild(key ,object[key], parent)
//     }
//
// }