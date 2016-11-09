import {applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';
import PostsMiddleware from './posts_middleware';
import UsersMiddleware from './users_middleware';
import CommentsMiddleware from './comments_middleware';
import FollowsMiddleware from './follows_middleware';
import SearchesMiddleware from './searches_middleware';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostsMiddleware,
  UsersMiddleware,
  CommentsMiddleware,
  FollowsMiddleware,
  SearchesMiddleware,
  logger
);
export default RootMiddleware;
