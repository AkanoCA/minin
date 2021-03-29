import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import { fetchedPosts } from "../redux/actionCreater";
import Post from './Post'

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);

  if (!posts.lenght) {
    return <button 
    className="btn btn-primary"
    onClick={() => dispatch(fetchedPosts())}
    >Загрузить</button>;
  }
  return posts.map(post => {
    return <Post post={post} key={post.id} />;
  })
};
