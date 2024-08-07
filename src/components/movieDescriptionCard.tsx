import { formatDate } from "@/middlewere/uti";
import { Movie } from "@/types";

type props = {
    movie: Movie;
}
const MovieDesCard = ({ movie }: props) => {
    return (
        <div className="flex flex-row min-h-72  gap-2">
            <div className="felx w-64 h-auto">
                <img className="object-cover" src={movie.image as string} alt="" />
            </div>
            <div className="flex flex-col">
                <span className=" font-bold text-2xl">{movie.name}</span>
                <span>{movie.description}</span>
                <span>{formatDate(movie.releaseDate.toString())}</span>
            </div>
        </div>
    );
}

export default MovieDesCard;