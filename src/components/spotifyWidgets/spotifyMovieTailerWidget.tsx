import { Movie } from "@/types";
import ReactPlayer from "react-player";
import BanerWidget from "./banerWidget";

type Props = {
    movie: Movie;
    setSelectedMovie: (movie: Movie) => void
    setMydMovieList: (movie: Movie[]) => void
    myMovieList: Movie[]
    movies: Movie[]
};

const SpotifyMovie = ({ movie, movies, setMydMovieList, setSelectedMovie, myMovieList }: Props) => {
    return (
        <div className="flex flex-row w-full h-full  bg-black  rounded-md gap-5">
            <div className="w-[75%]  h-full rounded-md">
                <ReactPlayer
                    url={movie.tailer}
                    className="react-player"
                    width="100%"

                    playing={true}
                    style={{ border: 'none' }}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0 }
                        }
                    }}
                />

                <div className="flex flex-col f-full overflow-auto custom-scrollbar p-4">     <span className="text-2xl  font-bold px-4">{movie.name}</span>
                </div>
            </div>
            <div className="flex w-[25%] h-full overflow-auto custom-scrollbar p-4">
                < BanerWidget setMymovieList={setMydMovieList} isShowAll={false} isVertical={true} myMovieList={myMovieList} setSelectedMovie={setSelectedMovie} subTitle={"รายการเเนะนํา"} title={""} movies={movies.slice(0, 4)}></BanerWidget>
            </div>
        </div>
    );
};

export default SpotifyMovie;
