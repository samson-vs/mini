const userId = new URL(location.href).searchParams.get('userId')


fetch(` https://jsonplaceholder.typicode.com/users/${userId}/posts/`).then((res)=>
    res.json()).then((user)=>{
    const block = document.getElementsByClassName('user')[0];


    const div_users = document.createElement('div');
    div_users.innerText = `#${user.id} `;
    block.appendChild(div_users)

    const ul = document.createElement('ul')
    rec(user, ul)
    block.appendChild(ul)

    const button = document.createElement("button");
    button.innerText = 'post-details'
    div_users.appendChild(button);

    button.onclick = () => {
        location.href = `../post_details/index.html?postId=${userId}`;
    }
});
  function liBild(key ,json, parent) {
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