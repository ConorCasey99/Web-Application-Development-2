# Assignment 2 - Web API.

Name: Conor Casey

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Post Movies - Allows users to post to the moives collection
 + get people - Allows users to get a collection of actors from the database
 + get person by id - Allows users to return a specific actor by id
 + post person - Allows users to post a new actor
 + get tvShows - Allows users to get all tvshows 
 + get tvshows by id - Allows users to get a specific tv show by id
 + post tvshows - Allows users to to tvshows

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/ConorCasey99/Web-Application-Development-2.git
```

followed by installation

```bat
npm install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY= {TMDB KEY}
mongoDB= {DB Link}
seedDb=true
secret= JWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | Post New Movies | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/people | Get a list of people | Post New people | N/A | N/A
| /api/people/{peopleid} | Get a person | N/A | N/A | N/A
| /api/tvShows/ | Get a list of tvShows | Post New tvShows | N/A | N/A
| /api/tvShows/{tvShowsid} | Get a tvShow by id | N/A | N/A | N/A
| /api/users/ | Get a list of users | Create new user | Update a User | N/A
| /api/users/:id | Get a specific user | N/A| N/A | N/A

## Security and Authentication
Uses protected routes with jwt tokens.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const createMovie = (title, id, release_date, popularity) => {
    return fetch('/api/movies?action=create', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ title: title, id: id, release_date: release_date, popularity: popularity })
    }).then(res => res.json())
};

  export const getTvShows = () => {
    return fetch(
       '/api/tvShows',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getPeople = () => {
    return fetch(
       '/api/people',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };


~~~
