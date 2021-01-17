import express from 'express';
import {
  getMovies, getMovie, getMovieReviews
} from '../tmdb-api';
import movieModel from './movieModel'
import Movies from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  try{
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
  } catch (err) {
    console.error('The resource you requested could not be found.')
  }
});

// Add New Movie
router.post('/', async (req, res, next) => {
  if (req.query.action === 'create'&!req.body.id) {
    res.status(500).json({
      code: 500,
      success: false,
      msg: 'Please pass a movie id',
    });
  }
  if (req.query.action === 'create'&!req.body.title) {
    res.status(500).json({
      code: 500,
      success: false,
      msg: 'Please pass a movie name',
    });
  }
  if (req.query.action === 'create') {
    await Movies.create(req.body).catch(next);
    res.status(201).json({
      code: 201,
      success: true,
      msg: 'Successfully added Movie.',
    });
  } else {
          res.status(401).json({
            code: 401,
            msg: 'failed to add Movie'
          });
        }
      });

router.get('/:id/reviews', (req, res, next) => {
    const id = parseInt(req.params.id);
    getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
  });


export default router;