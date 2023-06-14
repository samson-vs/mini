
const userId = new URL(location.href).searchParams.get('userId')
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res)=> res.json()).then((users)=>{
    const block = document.getElementsByClassName('user')[0];


        const div_users = document.createElement('div');
        div_users.innerText = `#${users.id}`;
        block.appendChild(div_users)

    const ul = document.createElement('ul')
    rec(users, ul)
    block.appendChild(ul)

    const button = document.createElement("button");
    button.innerText = 'post-details'
    div_users.appendChild(button);

    button.onclick = () => {
        location.href = `../details_html/index.html?userId=${users.id}`;
    }
});

function liBild(key ,value, parent) {
    const li = document.createElement("li")
    li.innerText = `${key} : ${value}`
    parent.appendChild(li)
}

function ulBild(key ,object , parent) {
    const li = document.createElement("li")
    const ul = document.createElement("ul")
    li.innerText = `${key}: `

    parent.appendChild(li)
    li.appendChild(ul)

    rec(object, ul);
}
function rec(object , parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulBild(key ,object[key] , parent)
            : liBild(key ,object[key], parent)
    }

}