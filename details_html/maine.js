const userId = new URL(location.href).searchParams.get('userId')
fetch(`https://jsonplaceholder.typicode.com/users/USER_ID/posts/${userId}`).then((res)=> res.json()).then((users)=>{
    const block = document.getElementsByClassName('user')[0]


}