import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFilteredCategories, getAllCategories } from "../../redux/categoriesRedux";
import Posts from "../features/Posts";

const SingleCategory = () => {

  const { id } = useParams();
  const categoriesData = useSelector(state => getFilteredCategories(state, id));

	const categories = useSelector(getAllCategories);

	return (
		<div>
			<h1>Category: {categoriesData.id}</h1>
			<Posts />
		</div>
	);
};

export default SingleCategory;