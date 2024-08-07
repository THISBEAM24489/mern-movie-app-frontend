import BanerWidget from "@/components/spotifyWidgets/banerWidget";
import { Movie } from "@/types";
import { useNavigate } from "react-router-dom";

type Props = {
    movies: Movie[]
    myMovieList: Movie[]
    setSelectedMovie: (movie: Movie) => void
    setMydMovieList: (movie: Movie[]) => void
}
const MainSpotifyPage = ({ movies, setSelectedMovie, myMovieList, setMydMovieList }: Props) => {
    const navogate = useNavigate();
    return (
        <div className="flex flex-col w-full h-full gap-8">
            <div className="grid grid-cols-2 gap-2 w-full">
                {movies.slice(0, 6).map((movie, index) => (
                    <div onClick={() => {
                        setSelectedMovie(movie);
                        navogate(`/movie/${movie._id}`);
                    }} key={index} className="flex flex-row  justify-between items-center bg-zinc-800 gap-1 p-2 rounded-md truncate hover:cursor-pointer hover:bg-zinc-600">
                        <div className="flex-col flex h-8 w-8"><img className="w-full h-full object-cover" src={movie.image} alt="" /></div>
                        <p className="text-ellipsis w-full  overflow-hidden">{movie.name}</p></div>
                ))}
            </div>
            < BanerWidget setMymovieList={setMydMovieList} myMovieList={myMovieList} setSelectedMovie={setSelectedMovie} subTitle={"มิกซ์ยอดนิยมสําหรับคุณ"} title={"อ้างอิงจากการดูล่าสุดของคุณ"} movies={movies.slice(0, 4)}></BanerWidget>
        </div>
    );
}

export default MainSpotifyPage;