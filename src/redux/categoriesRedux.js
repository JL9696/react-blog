//selectors
export const getAllCategories = ({ categories }) => categories;
export const getFilteredCategories = ({ posts }, id) => posts.filter((post) => post.category === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;