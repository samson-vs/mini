const userId = new URL(location.href).searchParams.get('userId')
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) => response.json())
    .then((json) => console.log(json));

// {    const block = document.getElementsByClassName('user')[0];
    //     const ul = document.createElement('ul')
    //     rec(user, ul)
    //     block.appendChild(ul)

    // })
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
//
// function rec(object , parent) {
//     for (const key in object) {
//         typeof object[key] === 'object'
//             ? ulBild(key ,object[key] , parent)
//             : liBild(key ,object[key], parent)
//     }
//
// }