import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../redux/categoriesRedux";
import { useSelector } from "react-redux";

const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(new Date());
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [category, setCategory] = useState(props.category || '');
  const categories = useSelector(getAllCategories);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate) {
       action({ title, author, publishedDate, shortDescription, content, category });
    }
  };

  return (
    <div style={{ width: '70%' }} className="m-auto" >
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-4">
          <Form.Label>Title</Form.Label>
          <Form.Control {...register("title", { required: true, minLength: 4 })} value={title} onChange={e => setTitle(e.target.value)} />
          {errors.title && <small className="d-block text-danger mt-1">This field is required and should be at least 4 characters long</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Author</Form.Label>
          <Form.Control {...register("author", { required: true, minLength: 4 })} value={author} onChange={e => setAuthor(e.target.value)} />
          {errors.author && <small className="d-block text-danger mt-1">This field is required and should be at least 4 characters long</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Published date</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
          {dateError && <small className="d-block form-text text-danger mt-2">Published date can't be empty</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label="Default select example" onChange={e => setCategory(e.target.value)} >
            <option>Select category...</option>
            <option value={categories[0]}>{categories[0]}</option>
            <option value={categories[1]}>{categories[1]}</option>
            <option value={categories[2]}>{categories[2]}</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Short description</Form.Label>
          <Form.Control {...register("shortDescription", { required: true, minLength: 20 })} as="textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
          {errors.shortDescription && <small className="d-block text-danger mt-1">This field is required and should be at least 20 characters long</small>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Content of the post</Form.Label>
          <ReactQuill as="textarea" value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-danger mt-1">Content can't be empty</small>}
        </Form.Group>
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    </div>

  );
};

export default PostForm;