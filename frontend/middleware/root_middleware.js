import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import PostsMiddleware from './posts_middleware';
import UsersMiddleware from './users_middleware';
import CommentsMiddleware from './comments_middleware';
import FollowsMiddleware from './follows_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostsMiddleware,
  UsersMiddleware,
  CommentsMiddleware,
  FollowsMiddleware
);
export default RootMiddleware;
