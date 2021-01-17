import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



const SiteHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <NavDropdown title={<span className="text-white my-auto" as={Link} to="/">Movies</span> }>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/">Discover</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/movies/upcoming">Upcoming</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/movies/favorites">Favorites</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/movies/watchlist">Watchlist</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title={<span className="text-white my-auto" as={Link} to="/">TvShows</span> }>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/tvShows/popular">Popular TvShows</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/tvShows/topRated">Top Rated TvShows</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/tvShows/airing">Currently Airing</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/tvShows/favorites">Favorite Shows</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/tvShows/currentlyWatching">Currently Watching</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/tvShows/plannedToWatch">Planned To Watch</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title={<span className="text-white my-auto" as={Link} to="/people/popular">People</span> }>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/people/popular">Popular People</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/people/favorites">Favorite People</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title={<span className="text-white my-auto" as={Link} to="/login/">Login An Sign Up</span> }>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/login/">Login</NavDropdown.Item>
          <NavDropdown.Item  className="text-black my-auto" as={Link} to="/signUp/">Sign Up</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/" ><img src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fzh%2Fthumb%2F9%2F9b%2FThe_Movie_Database_v5_logo.svg%2F1200px-The_Movie_Database_v5_logo.svg.png&f=1&nofb=1`} alt="Logo" /></Nav.Link>

          

         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  };







/*const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchlist">
              Watchlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/people/popular">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/people/favorites">
              Fav People
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/tvShows/popular">
              Popular Tv Shows
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/tvShows/topRated">
              Top Rated Tv
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/tvShows/airing">
              Airing Tv Shows
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/tvShows/favorites">
              Favorite Tv Shows
            </Link>
          </li>
          

        </ul>
      </nav>
    </nav>
  );
};*/

export default SiteHeader;