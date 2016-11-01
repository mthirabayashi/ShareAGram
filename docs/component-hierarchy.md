## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**PostsIndexContainer**
 - PostsIndex
 - Nav Bar
 - Create Post

**UserProfileContainer**
 - UserProfile
 - UserPosts

**PostContainer**
 - Post

**NavBarContainer**
 - NavBar
 - Search bar
 - Profile

**ProfileInfoContainer**
 - ProfileInfo
 - Posts
 - followers
 - followings

**CreatePost**
 - CreatePost

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/posts" | "PostsIndexContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/posts/create" | "CreateContainer" |
