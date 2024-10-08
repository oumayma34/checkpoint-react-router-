import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetail from './components/MovieDetail'; 
import { FaPlus } from 'react-icons/fa';
import './App.css';
import backHead from './backHead.mp4'; 
import final from './final.mp3'; 

const App = () => {
  const truncateDescription = (description, maxLength = 120) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const [movies, setMovies] = useState([
    {
      title: 'Saving Private Ryan',
      description: truncateDescription('During World War II, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brother has been killed in action.'),
      posterURL: 'https://i.ebayimg.com/images/g/zMcAAOSw6IVgwxTv/s-l1200.jpg',
      rating: 5.6,
      trailerURL : 'https://www.youtube.com/embed/S1Qj_AVu2pA?si=CKznIu59N2YTPOUT'
    },
    {
      title: 'Full Metal Jacket',
      description: truncateDescription('A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.'),
      posterURL: 'https://m.media-amazon.com/images/I/51pW8T7f2OL._AC_.jpg',
      rating: 4.3,
      trailerURL :'https://www.youtube.com/embed/n2i917l5RFc?si=9OG9t1b0Ib2hiGhA'
    },
    {
      title: 'Apocalypse Now',
      description: truncateDescription('During the Vietnam War, Captain Willard is assigned to assassinate a rogue Colonel who is presumed to have gone insane.'),
      posterURL: 'https://m.media-amazon.com/images/I/61sHIyODZmL._AC_UF1000,1000_QL80_.jpg',
      rating: 3.4,
      trailerURL :'https://www.youtube.com/embed/9l-ViOOFH-s?si=R2OPeqw2aV5sI40t'
    },
    {
      title: '1917',
      description: truncateDescription('As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.'),
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU694WN2ZI64nMKP309bopoXa9IZF9XDASmA&s',
      rating: 4,
      trailerURL :'https://www.youtube.com/embed/YqNYrYUiMfg?si=I6mAnIKqbS8dndBY'
    },
    {
      title: 'Dunkirk',
      description: truncateDescription('Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.'),
      posterURL: 'https://m.media-amazon.com/images/I/91a9Ez60pmL.jpg',
      rating: 4,
      trailerURL :'https://www.youtube.com/embed/F-eMt3SrfFU?si=lY3_scBtlmh4Gep6'
    },
    {
      title: 'Hacksaw Ridge',
      description: truncateDescription('World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and ends up saving 75 men without firing a single shot.'),
      posterURL: 'https://m.media-amazon.com/images/I/71Tpd21hEbL._AC_UF894,1000_QL80_.jpg',
      rating: 5,
      trailerURL :'https://www.youtube.com/embed/s2-1hz1juBI?si=V1XxrASQBMzcBeY2'
    },
    {
      title: 'The Thin Red Line',
      description: truncateDescription('The lives of several men are highlighted as they fight in the Battle of Guadalcanal during World War II.'),
      posterURL: 'https://m.media-amazon.com/images/I/51VB0J451VL._AC_UF894,1000_QL80_.jpg',
      rating: 1.1,
      trailerURL :'https://www.youtube.com/embed/mKl5_OxKBn8?si=K4YhGwjJ1H1L3pga'
    },
    {
      title: 'The Bridge on the River Kwai',
      description: truncateDescription('British POWs are forced to build a bridge across the river Kwai for their Japanese captors, not knowing that the Allied forces are planning to destroy it.'),
      posterURL: 'https://cdn.shopify.com/s/files/1/0969/9128/products/Bridge_On_The_River_Kwai_-_Alec_Guiness_-_Hollywood_War_Classics_Movie_Poster_8c5f4407-917f-4cf7-87fe-53d82eb27d9b.jpg?v=1582781568',
      rating: 2.2,
      trailerURL :'https://www.youtube.com/embed/RlC7XBayj0s?si=AOk3YUoI2t15Za3x'
    },
    {
      title: 'Come and See',
      description: truncateDescription('A young boy witnesses the horrors of war when the Nazis invade Belarus during World War II.'),
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXpIntFbkUkMXrQCkorlRdHleWBUz0AxRGw&s',
      rating: 3.3,
      trailerURL :'https://www.youtube.com/embed/UHaSQU-4wss?si=VNap1gtAdMizxzEQ'
    },
    {
      title: 'Letters from Iwo Jima',
      description: truncateDescription('The story of the Battle of Iwo Jima from the Japanese point of view.'),
      posterURL: 'https://m.media-amazon.com/images/I/61z3KS9Iv2L._AC_UF894,1000_QL80_.jpg',
      rating: 3.9,
      trailerURL :'https://www.youtube.com/embed/UHaSQU-4wss?si=VNap1gtAdMizxzEQ'
    },
    {
      title: 'The Pianist',
      description: truncateDescription('A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.'),
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfAz-1n6SVTqKSWiS_pCHa20lvsI3IdbVCA&s',
      rating: 2.5,
      trailerURL :'https://www.youtube.com/embed/51lo2dpaZ_g?si=olb_PwewT9M13pdP'
    },
    {
      title: 'Enemy at the Gates',
      description: truncateDescription('A Russian sniper and a German sniper face off in the ruins of Stalingrad during World War II.'),
      posterURL: 'https://www.originalfilmart.co.uk/cdn/shop/products/enemy_at_the_gates_2001_original_film_art_5000x.jpg?v=1604513582',
      rating: 2.6,
      trailerURL :'https://www.youtube.com/embed/4O-sMh_DO6I?si=ndPUEUAtYT4ZW_gJ'
    },
    {
      title: 'Tora! Tora! Tora!',
      description: truncateDescription('A dramatization of the Japanese attack on Pearl Harbor and the events leading up to it.'),
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKmlM9brPXw4HHFQnfAIpJI5m2ZolGBS5Jg&s',
      rating: 4.6,
      trailerURL :'https://www.youtube.com/embed/kFUfY9bQMgI?si=ARhmlIwxp5NPSLo3'
    },
    {
      title: 'The Great Escape',
      description: truncateDescription('Allied prisoners of war plan for several hundred of their number to escape from a German camp during World War II.'),
      posterURL: 'https://m.media-amazon.com/images/I/71btBPC+T2L._AC_UF894,1000_QL80_.jpg',
      rating: 1.2,
      trailerURL :'https://www.youtube.com/embed/M2bEzJFVdQ4?si=CYLMeEHdmGMZJPUM'
    }  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
          (ratingFilter === '' || movie.rating >= ratingFilter)
        );
      })
    );
  }, [titleFilter, ratingFilter, movies]);

  const [isModalOpen, setModalOpen] = useState(false);
  const formRef = useRef(null);

  const handleAddMovie = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const newMovie = {
      title: form.title.value,
      description: form.description.value,
      posterURL: form.posterURL.value,
      rating: parseFloat(form.rating.value),
      trailerURL : form.trailerURL.value,
    };
    setMovies([...movies, newMovie]);
    form.reset();
    setModalOpen(false);
  };

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = `Movie App - ${movies.length} movies`;
  }, [movies]);

  return (
    <Router>
      <div className="App">
        <audio className="background-music" autoPlay loop>
          <source src={final} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <header className="App-header">
          <video className="header-video" autoPlay muted loop>
            <source src={backHead} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="header-content">
            <h1>GoMyCode Movies</h1>
            <p className="current-time">{currentTime}</p>
          </div>
          <button className="add-movie-button" onClick={() => setModalOpen(true)}>
            <FaPlus /> Add Film
          </button>
        </header>
        <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
        </Routes>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Add a New Movie</h2>
              <form ref={formRef} onSubmit={handleAddMovie}>
                <input type="text" name="title" placeholder="Title" required />
                <textarea name="description" placeholder="Description" required></textarea>
                <input type="text" name="posterURL" placeholder="Poster URL" required />
                <input type="number" name="rating" placeholder="Rating" min="0" max="10" step="0.1" required />
                <input type="text" name="trailerURL" placeholder="trailerURL" required />
                <button type="submit">Add Movie</button>
                <button type="button" onClick={() => setModalOpen(false)}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;