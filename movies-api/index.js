import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import './db';
import usersRouter from './api/users';
import peopleRouter from './api/people';
import genresRouter from './api/genres';
import tvShowsRouter from './api/tvShows';
import session from 'express-session';
import passport from './authenticate';
import {loadUsers, loadMovies, loadPeople, loadTvShows} from './seedData';
import loglevel from 'loglevel';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadPeople();
  loadTvShows();
}

if (process.env.NODE_ENV === 'test') {
  loglevel.setLevel('warn')
} else {
  loglevel.setLevel('info')
}

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
app.use(passport.initialize())
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/tvShows', passport.authenticate('jwt', {session: false}), tvShowsRouter);
app.use('/api/people', passport.authenticate('jwt', {session: false}), peopleRouter);
app.use(errHandler);

let server = app.listen(port, () => {
  loglevel.info(`Server running at ${port}`);
});

module.exports = server
