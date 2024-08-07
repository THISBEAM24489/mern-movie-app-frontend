import { Route, Routes } from "react-router-dom";
import MainAppLayout from "./appLayout/mainAppLayout";
import TheatreManagePage from "./pages/theatreManagePage";
import MovieEditPage from "./pages/movieEditPage";
import MovieCreatePage from "./pages/movieCreatePage";
import SpotifyLayout from "./appLayout/spotifyLayou";
import MainSpotifyPage from "./pages/spotifyPage/mainSpotifyPage";
import { useGetMovie } from "./api/movieApi";
import { useEffect, useState } from "react";
import { Movie } from "./types";
import BanerWidget from "./components/spotifyWidgets/banerWidget";
import SpotifyMovie from "./components/spotifyWidgets/spotifyMovieTailerWidget";

const MyAppRouter = () => {
    const { movieData } = useGetMovie()
    const [movies, setMovies] = useState<Movie[]>(movieData ?? []);
    const [selectedMovie, setSelectedMovie] = useState<Movie>();

    const [myMovieList, setMyMovieList] = useState<Movie[]>();
    useEffect(() => {
        if (movieData) {
            setMovies(movieData);
            setSelectedMovie(movieData[0]);
            setMyMovieList(movieData.slice(0, 3));
        }
    }, [movieData]);


    return (
        <Routes>
            <Route path="/movie/:id" element={<SpotifyLayout myMovieList={myMovieList ?? []} setMymovieList={setMyMovieList} setSelectedMovie={setSelectedMovie} chieldren={<SpotifyMovie movie={selectedMovie ?? {
                _id: "",
                name: "ไม่มีชื่อเรื่อง",
                description: "",
                releaseDate: new Date(),
                genre: [],
                image: "",
                tailer: ""
            }}></SpotifyMovie>} movies={movies ?? []} selectedMovie={selectedMovie ?? {
                _id: "",
                name: "ไม่มีชื่อเรื่อง",
                description: "",
                releaseDate: new Date(),
                genre: [],
                image: "",
                tailer: ""
            }}></SpotifyLayout>}></Route>
            <Route path="/" element={<SpotifyLayout myMovieList={myMovieList ?? []} setMymovieList={setMyMovieList} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie ?? {
                _id: "",
                name: "ไม่มีชื่อเรื่อง",
                description: "",
                releaseDate: new Date(),
                genre: [],
                image: "",
                tailer: ""
            }} chieldren={<MainSpotifyPage setMydMovieList={setMyMovieList} myMovieList={myMovieList ?? []} setSelectedMovie={setSelectedMovie} movies={movies ?? []}></MainSpotifyPage>} movies={movies ?? []}></SpotifyLayout>}></Route>
            <Route path="/movie" element={<SpotifyLayout myMovieList={myMovieList ?? []} setMymovieList={setMyMovieList} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie ?? {
                _id: "",
                name: "ไม่มีชื่อเรื่อง",
                description: "",
                releaseDate: new Date(),
                genre: [],
                image: "",
                tailer: ""
            }} chieldren={<BanerWidget myMovieList={myMovieList ?? []} setMymovieList={setMyMovieList} setSelectedMovie={setSelectedMovie} title={"อ้างอิงจากการดูล่าสุดของคุณ"} subTitle={"เเนะนําสําหรับวันนี้"} movies={movies ?? []}></BanerWidget>} movies={movies ?? []}></SpotifyLayout>}></Route >
            <Route path="/theatreManage" element={<SpotifyLayout myMovieList={myMovieList ?? []} setMymovieList={setMyMovieList} setSelectedMovie={setSelectedMovie} chieldren={<TheatreManagePage></TheatreManagePage>} movies={movies ?? []} selectedMovie={selectedMovie ?? {
                _id: "",
                name: "ไม่มีชื่อเรื่อง",
                description: "",
                releaseDate: new Date(),
                genre: [],
                image: "",
                tailer: ""
            }}></SpotifyLayout>}></Route>

            <Route path="/movie/edit/:movieId" element={<SpotifyLayout myMovieList={myMovieList ?? []} setMymovieList={setMyMovieList} setSelectedMovie={setSelectedMovie} chieldren={<MovieEditPage></MovieEditPage>} movies={movies ?? []} selectedMovie={selectedMovie ?? {
                _id: "",
                name: "ไม่มีชื่อเรื่อง",
                description: "",
                releaseDate: new Date(),
                genre: [],
                image: "",
                tailer: ""
            }}></SpotifyLayout>}></Route>

            <Route path="/movie/create" element={<SpotifyLayout myMovieList={myMovieList ?? []} setMymovieList={setMyMovieList} setSelectedMovie={setSelectedMovie} chieldren={< MovieCreatePage></MovieCreatePage>} movies={movies ?? []} selectedMovie={selectedMovie ?? {
                _id: "",
                name: "ไม่มีชื่อเรื่อง",
                description: "",
                releaseDate: new Date(),
                genre: [],
                image: "",
                tailer: ""
            }}></SpotifyLayout>}></Route>


            {/* <Route path="/movie/:id" element={<MainAppLayout showMovieBanner={true} children={<MovieShowTimePage></MovieShowTimePage>}></MainAppLayout>}></Route> */}

            <Route path="/movie/edit/:movieId" element={<MainAppLayout children={< MovieEditPage></MovieEditPage>}></MainAppLayout>}></Route>
            <Route path="/movie/create" element={<MainAppLayout children={< MovieCreatePage></MovieCreatePage>}></MainAppLayout>}></Route>


        </Routes >
    );
}

export default MyAppRouter