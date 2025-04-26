import { createStore } from 'redux';

// Начальное состояние
const initialState = {
  posts: [],
};

// Экшены
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

// Редуктор
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? { ...post, ...action.payload } : post
        ),
      };
    default:
      return state;
  }
};

// Экшены для постов
export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

// Создаем хранилище
export const store = createStore(reducer);
