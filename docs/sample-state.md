{
  currentUser: {
    id: 1,
    username: "username1",
    full_name: "user name"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPost: {errors: []}
  },
  Post: {
    1: {
      description: "example",
      img_url: "example.com",
      author_id: 1,
      likes: 3,
      comments: {
        '1': {user1: 'great pic'},
        '2': {user2: 'cool'}
      }
    }
  },
  search: "example"
}
