import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => async (dispatch) => {
    let postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    postData = await postData.json();

    dispatch({
        type: FETCH_POSTS,
        payload: postData.slice(0,10)
    })

}

export const createPost = (post) => async (dispatch) => {
    let posting  = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'content-type' : 'application/json'},
      body: JSON.stringify(post)
    })
    posting = await posting.json();
    console.log(posting);
    dispatch({
        type: NEW_POST,
        payload: posting
    })
}