## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**PostsIndexContainer**
 - Posts
 - Nav Bar
 - Create Post

**UserProfileContainer**
 - Profile Info
 - User posts

**PostContainer**
 - Post

**NavBarContainer**
 - Search bar
 - Profile

**ProfileInfoContainer**
 - Posts
 - followers
 - followings

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/posts" | "PostsIndexContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/posts/create" | "PostContainer" |
