import express from 'express';
import {getPerson ,getPopularPeople} from '../tmdb-api'
import People from './peopleModel'
import peopleModel from './peopleModel'

const router = express.Router();

router.get('/', (req, res, next) => {
  peopleModel.find().then(people => res.status(200).send(people)).catch(next);
});

router.get('/:id', (req, res, next) => {
    try{
    const id = parseInt(req.params.id);
    peopleModel.findByPersonDBId(id).then(person => res.status(200).send(person)).catch(next);
    } catch (err) {
      console.error('The resource you requested could not be found.')
    }
  });

// Add New Person
router.post('/', async (req, res, next) => {
  if (req.query.action === 'create'&!req.body.id) {
    res.status(500).json({
      code: 500,
      success: false,
      msg: 'Please pass a person id',
    });
  }
  if (req.query.action === 'create'&!req.body.name) {
    res.status(500).json({
      code: 500,
      success: false,
      msg: 'Please pass a person name',
    });
  }
  if (req.query.action === 'create') {
    await People.create(req.body).catch(next);
    res.status(201).json({
      code: 201,
      success: true,
      msg: 'Successfully added Person.',
    });
  } else {
          res.status(401).json({
            code: 401,
            msg: 'failed to add Person'
          });
        }
      });


export default router;