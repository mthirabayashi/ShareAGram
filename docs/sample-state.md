{
  session {
    currentUser: {
      id: 1,
      username: "username1",
      full_name: "user name",
      liked_posts: [],
      following: [],
      followers: 4
    }
  },
  userProfile: {
    id: 2,
    username: "username2",
    full_name: "full name2",
    profile_pic: "pic"
  },
  errors: {
    signUp: [],
    logIn: [],
    createPost: []
  },
  posts: {
    1: {
      id: 1,
      description: "example",
      img_url: "example.com",
      author: {
        author_id: 1,
        author_pic: '',
        author_username: ''
      }
      likes: 3,
      comments: {
        '1': {id: 1, author_id: 1, username: 'user1', body: 'great pic'},
        '2': {id: 2, author_id: 2, username: 'user2', body: 'greadfaat pic'},
        '3': {id: 3, author_id: 3, username: 'user3', body: 'cool photo'}
      }
    }
  },
  searchResult: ["user1", "user2"]
}
