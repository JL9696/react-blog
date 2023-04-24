import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";

const PostFormAdd = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = post => {
    navigate("/");
    dispatch(addPost(post));
  }; 

  return (
    <div>
      <PostForm actionText="Add post" action={handleAdd}/>
    </div>

  );
};

export default PostFormAdd;