import { Movie } from "@/types";
import MovieCard from "./movieCard";

type Props = {
    movieList: Movie[];
};

const MovieGridDisplay = ({ movieList }: Props) => {
    return (
        <div className=" grid grid-cols-6 w-full gap-5" >
            {
                movieList.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))
            }
        </div >
    );
};

export default MovieGridDisplay;