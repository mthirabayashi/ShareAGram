
$.ajax ({
  method: 'GET',
  url: 'api/users',
  success
});

const success = (data) => {console.log(data)}

$.ajax ({
  method: 'post',
  data: {user: {username: 'mike1', password: 'password'}},
  url: 'api/users',
  success
});

$.ajax ({
  method: 'post',
  data: {user: {username: 'mike', password: 'password'}},
  url: 'api/session',
  success
});

$.ajax ({
  method: 'delete',
  url: 'api/session',
  success
});


store.dispatch({
  type: "LOGIN",
  user: {user:{username: 'mike', password: 'password'}}
}, (data)=>(console.log(data)))
