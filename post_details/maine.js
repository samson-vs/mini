// const userId = new URL(location.href).searchParams.get('userId')




//-------------------------------------------------------------------------------
const postId = new URL(location.href).searchParams.get('postId')


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((json) => {

const block = document.getElementsByClassName('user')[0];

const div_users = document.createElement('div');

block.appendChild(div_users)

const ul = document.createElement('ul')
rec(json, ul)
block.appendChild(ul)

        const divCom = document.createElement("div")
        divCom.innerText = 'Comments'
        divCom.classList.add('divCom')
        block.appendChild(divCom)

});
function liBild(
    key ,
    json,
    parent) {
    const li = document.createElement("li")
    li.innerText = `${key} : ${json}`
    parent.appendChild(li)
}

function ulBild(key ,json , parent) {
    const li = document.createElement("li")
    const ul = document.createElement("ul")
    li.innerText = `${key}: `

    parent.appendChild(li)
    li.appendChild(ul)

    rec(json, ul);
}
function rec(json , parent) {
    for (const key in json) {
        typeof json[key] === 'object'
            ? ulBild(key ,json[key] , parent)
            : liBild(key ,json[key], parent)
    }

}
// ------



fetch(` https://jsonplaceholder.typicode.com/users/${postId}/posts/`).then((response) => response.json())
    .then((json) => {

        const block = document.getElementsByClassName('user')[0];
        const divPos = document.getElementsByClassName('posts')[0];

        const post = document.createElement('div')
        post.innerText='post info'
        divPos.appendChild(post)

        const div_users = document.createElement('div');

        block.appendChild(div_users)

        const ul = document.createElement('ul')
        rec(json, ul)
        block.appendChild(ul)

    });
function liBild(
    key ,
    json,
    parent) {
    const li = document.createElement("li")
    li.innerText = `${key} : ${json}`
    parent.appendChild(li)
}

function ulBild(key ,json , parent) {
    const li = document.createElement("li")
    const ul = document.createElement("ul")
    li.innerText = `${key}: `

    parent.appendChild(li)
    li.appendChild(ul)

    rec(json, ul);
}
function rec(json , parent) {
    for (const key in json) {
        typeof json[key] === 'object'
            ? ulBild(key ,json[key] , parent)
            : liBild(key ,json[key], parent)
    }

}

