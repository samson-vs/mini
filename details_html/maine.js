
const userId = new URL(location.href).searchParams.get('userId')


fetch(` https://jsonplaceholder.typicode.com/users/${userId}/posts/`).then((res)=>
    res.json()).then((user)=>{
    const block = document.getElementsByClassName('user')[0];
    for (const arr of user){
        const div_users = document.createElement('div');
        div_users.innerText = `title: ${arr.title} `;
        block.appendChild(div_users)
        div_users.classList.add('us')
        const button = document.createElement("button");
        button.innerText = 'post-details'
        block.appendChild(button);
        button.onclick = () => {
            location.href = `../post_details/index.html?postId=${userId}`;


        }

    }
});
