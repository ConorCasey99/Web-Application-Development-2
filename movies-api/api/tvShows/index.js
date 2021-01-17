import express from 'express';
import TvShow from './tvShowModel';

import tvShowModel from './tvShowModel';

const router = express.Router();
  
router.get('/', (req, res, next) => {
  tvShowModel.find().then(tvShows => res.status(200).send(tvShows)).catch(next);
});

router.get('/:id', (req, res, next) => {
  try{
  const id = parseInt(req.params.id);
  tvShowModel.findByTvShowDBId(id).then(tvShow => res.status(200).send(tvShow)).catch(next);
  } catch (err) {
    console.error('The resource you requested could not be found.')
  }
});

  // Add New Tv Show
router.post('/', async (req, res, next) => {
  if (req.query.action === 'create'&!req.body.id) {
    res.status(500).json({
      code: 500,
      success: false,
      msg: 'Please pass a tvShow id',
    });
  }
  if (req.query.action === 'create'&!req.body.name) {
    res.status(500).json({
      code: 500,
      success: false,
      msg: 'Please pass a tvShow name',
    });
  }
  if (req.query.action === 'create') {
    await TvShow.create(req.body).catch(next);
    res.status(201).json({
      code: 201,
      success: true,
      msg: 'Successfully added TvShow.',
    });
  } else {
          res.status(401).json({
            code: 401,
            msg: 'failed to add tvshow'
          });
        }
      });

/*
router.get('/:id/reviews', (req, res, next) => {
    const id = parseInt(req.params.id);
    getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
  });
*/

export default router;