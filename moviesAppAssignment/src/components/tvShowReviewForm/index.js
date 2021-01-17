import React, {useContext } from "react";
import "./tvShowReviewForm.css";
import useForm from "react-hook-form";
import {TvShowsContext} from '../../contexts/tvShowsContext'
import { withRouter } from "react-router-dom";

const TvShowReviewForm = ({ tvShow, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(TvShowsContext);

  const onSubmit = data => {
    context.addTvShowReview(tvShow, data)
    history.push("/tvShows/favorites");
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add your review</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          defaultValue={tvShow.review ? tvShow.review.author : ""}
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          defaultValue={tvShow.review ? tvShow.review.content : ""}
          name="content"
          ref={register({
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default withRouter(TvShowReviewForm);