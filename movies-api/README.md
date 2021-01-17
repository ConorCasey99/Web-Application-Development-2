# Assignment 2 - Agile Software Practice.

Name: Conor Casey

## Target Web API.

...... Document the Web API that is the target for this assignment's CI/CD pipeline. Include the API's endpoints and any other features relevant to the creation of a suitable pipeline, e.g.

+ Get /api/movies - returns an array of movie objects.
+ Get /api/movies/:id - returns detailed information on a specific movie.
+ Post /api/movies - adds a movie to movie objects.
+ Get /api/people - returns an array of people objects.
+ Get /api/people/:id - returns information on a people show objects.
+ Post /api/people/ - adds a person to people.
+ Get /api/tvShows - returns an array of tvShow objects.
+ Get /api/tvShows/:id - returns information on a specific tvShow.
+ Post /api/tvShows - adds a tvShow to the tvShow objects.
+ get /api/users - returns an array of user objects.
+ Get /api/userName/favorites - returns a users favorites array
+ Post /api/users - adds a user to user objects


## Error/Exception Testing.

+ Get /api/movies/:id - console.error('The resource you requested could not be found.')
+ Post /api/movies/- Checks if a movie posted lacks an id and will return 'Please pass a movie id', Checks if a movies posted lacks a name and will pass 'Please pass a movie name'.
+ Get /api/people/:id - checks if the person was found if not it will pass 'The resource you requested could not be found.'
+ Post /api/people - Checks if the person added has an id if not it will pass 'Please pass a person id', checks if the person added has a name if not it will pass 'Please pass a person name'.
+ Get /api/tvShows/:id - if it cannot find the tvShow it will pass 'The resource you requested could not be found.'
+ Post /api/tvShows/ - if the tvShow has no name passed it will throw back 'Please pass a tvShow name', if the tvShow passed lacks a id it will pass 'Please pass a tvShow id'.



<h2>Movies Endpoint Tests</h2>

+ GET /movies when not authorised - should return no movies and a status 401
+ GET /movies when authorised - should return 20 movies and a status 200
+ GET /movies/:id when the id is valid - should return the matching movie
+ GET /movies/:id when the id is invalid - tets that 20 upciming movies are returned with a status 200

<h2>TV Endpoint Tests</h2>

+ GET /TvShows when not authorised - should return no movies and a status 401
+ GET /TvShows when authorised - should return 20 TvShows and a status 200
+ GET /TvShows/:id when the id is valid - should return the matching TvShows
+ GET /tvShows/:id when not authorised - should return a status 404
+ GET /tvShows/:id when the id is invalid - should return the NOT found message

<h2>PEOPLE Endpoint Tests</h2>

+ GET /people/ when not authorised - should return no people and a status 401
+ GET /people/ when authorised - should return 20 people and a status 200
+ GET /people/:id when the id is valid - should return the matching people
+ GET /people/:id when the id is invalid - should return the NOT found message

<h2>USERS Endpoint Tests</h2>

+ GET /users - should return the 2 users and a status 200
+ POST /users/ - should return a 201 status and the confirmation message


## Continuous Delivery/Deployment.

..... Specify the URLs for the staging and production deployments of your web API, e.g.

+ https://movies-api-staging3.herokuapp.com - Staging deployment
+ https://movie-app-production.herokuapp.com - Production


+ Staging app overview 

![stagingApp](https://res.cloudinary.com/duf67w2zg/image/upload/v1610893770/screens/staging_stjp1b.png)

+ Production app overview 

![productionApp](https://res.cloudinary.com/duf67w2zg/image/upload/v1610893689/screens/production_iey6fh.png)



[stagingapp]: https://res.cloudinary.com/duf67w2zg/image/upload/v1610893770/screens/staging_stjp1b.png

[productionApp]: https://res.cloudinary.com/duf67w2zg/image/upload/v1610893689/screens/production_iey6fh.png