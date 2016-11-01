# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users`
- `DELETE /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Comments
  <!-- should comments be nested under photos or posts? -->
- `POST /api/photos/comments`
- `DELETE /api/photos/comments/:id`

### Likes

- `POST /api/photos/likes`
- `DELETE /api/photos/likes/:id`

### Follows

- `POST /api/users/follows`
- `DELETE /api/users/follows/:id`
