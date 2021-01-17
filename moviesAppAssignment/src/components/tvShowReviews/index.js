import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTvShowReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";
// eslint-disable-next-line
export default ({ tvShow }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTvShowReviews(tvShow.id).then(reviews => {
    setReviews(reviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.author}</td>
                <td>{excerpt(r.content)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/tvShowReviews/${r.id}`,
                      state: {
                        review: r,
                        tvShow: tvShow
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};