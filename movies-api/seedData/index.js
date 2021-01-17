import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import peopleModel from '../api/people/peopleModel';
import tvShowModel from '../api/tvShows/tvShowModel'
import {movies} from './movies.js';
import {people} from './people.js';
import {tvShows} from './tvShows.js';


const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load movie data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// deletes all people documents in collection and inserts test data
export async function loadPeople() {
  console.log('load people data');
  console.log(people.length);
  try {
    await peopleModel.deleteMany();
    await peopleModel.collection.insertMany(people);;
    console.info(`${people.length} People were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load people Data: ${err}`);
  }
}

// deletes all people documents in collection and inserts test data
export async function loadTvShows() {
  console.log('load TvShow data');
  console.log(tvShows.length);
  try {
    await tvShowModel.deleteMany();
    await tvShowModel.collection.insertMany(tvShows);;
    console.info(`${tvShows.length} TvShows were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load TvShows Data: ${err}`);
  }
}