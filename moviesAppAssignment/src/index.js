import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom" 
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SiteHeader from './components/siteHeader'

const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const PersonPage = lazy(() => import("./pages/personDetailsPage"));
const TvShowPage = lazy(() => import("./pages/tvShowDetailsPage"));
const AiringTvShowsPage = lazy(() => import("./pages/airingTvShowsPage"));
const TopRatedTvShowsPage = lazy(() => import("./pages/topRatedTvShowsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const TvShowReviewPage = lazy(() => import("./pages/tvShowReviewPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/UpcomingMoviesPage"));
const MoviesContextProvider = lazy(() => import("./contexts/moviesContext"));
const PeopleContextProvider = lazy(() => import("./contexts/peopleContext"));
const GenresContextProvider = lazy(() => import("./contexts/genresContext"));
const TvShowsContextProvider = lazy(() => import("./contexts/tvShowsContext"));
const AuthContextProvider = lazy(() => import("./contexts/authContext"));
const ApiMoviesContextProvider = lazy(() => import("./contexts/apiMovieContext"));
const ApiTvShowsContextProvider = lazy(() => import("./contexts/apiTvShowContext"));
const ApiPeopleContextProvider = lazy(() => import("./contexts/apiPeopleContext"));
const TopRatedContextProvider = lazy(() => import("./contexts/airingTvContext"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const peopleListPage = lazy(() => import("./pages/peopleListPage"));
const watchlistPage = lazy(() => import("./pages/watchlistPage"));
const favoritePeoplePage = lazy(() => import("./pages/favoritePeoplePage"));
const PopularShowsPage = lazy(() => import("./pages/tvShowListPage"));
const AddTvShowReviewPage = lazy(() => import("./pages/addTvShowReviewPage"));
const FavoriteTvShowsPage = lazy(() => import("./pages/favoriteTvShowsPage"));
const CurrentlyWatchingPage = lazy(() => import("./pages/currentlyWatchingPage"));
const PlanToWatchTvShowsPage = lazy(() => import("./pages/planToWatchTvShowsPage"))
const LoginPage = lazy(() => import("./pages/loginPage"))
const SignUp = lazy(() => import("./pages/signUpPage"))


const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />     
            <div className="container-fluid">
            <Suspense fallback={<h1>Loading page....</h1>}>
              <AuthContextProvider>
                <ApiMoviesContextProvider>
                  <ApiTvShowsContextProvider>
                    <ApiPeopleContextProvider>
              <MoviesContextProvider> 
                <PeopleContextProvider>
                <TvShowsContextProvider>
                <TopRatedContextProvider>
                <GenresContextProvider>
                  <Switch>
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route exact path="/tvShowReviews/tvShowReviewForm" component={AddTvShowReviewPage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route exact path="/movies/watchlist" component={watchlistPage} />
                    <Route exact path="/people/favorites" component={favoritePeoplePage} />
                    <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                    <Route exact path="/tvShows/popular" component={PopularShowsPage} />
                    <Route exact path="/tvShows/topRated" component={TopRatedTvShowsPage} />
                    <Route exact path="/tvShows/airing" component={AiringTvShowsPage} />
                    <Route exact path="/tvShows/favorites" component={FavoriteTvShowsPage} />
                    <Route exact path="/tvShows/currentlyWatching" component={CurrentlyWatchingPage} />
                    <Route exact path="/tvShows/plannedToWatch" component={PlanToWatchTvShowsPage} />
                    <Route exact path="/tvShowReviews/:id" component={TvShowReviewPage} />
                    <Route exact path="/people/popular" component={peopleListPage} />
                    <Route exact path="/login/" component={LoginPage} />
                    <Route exact path="/signUp/" component={SignUp} />
                    <Route path="/people/:id" component={PersonPage}/>
                    <Route path="/tvShow/:id" component={TvShowPage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </GenresContextProvider>
                </TopRatedContextProvider>
                </TvShowsContextProvider>
                </PeopleContextProvider>
              </MoviesContextProvider>  
              </ApiPeopleContextProvider>
              </ApiTvShowsContextProvider>
              </ApiMoviesContextProvider>
              </AuthContextProvider> 
              </Suspense>  
           </div>
        </div>
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));