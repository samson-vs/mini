fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json()).then((users)=> {
    console.log(users)
    const block = document.getElementsByClassName('user')[0];
    for (const user of users) {
        const div_users = document.createElement('div');
        div_users.innerText = `#${user.id} ${user.name} `;
        block.appendChild(div_users)

        const button = document.createElement("button")
        button.innerText= 'info';
        div_users.appendChild(button);

        button.onclick = () => {
            location.href = `../info_html/index.html?userId=${user.id}`;
        }

    }
});