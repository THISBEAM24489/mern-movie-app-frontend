import { Movie } from "@/types";
import { Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
    movie: Movie;
    setMymovieList: (movie: Movie[]) => void;
    myMovieList: Movie[];
    setSelectMovie: (movie: Movie) => void;
};

const MovieBanerCard = ({ movie, setMymovieList, myMovieList, setSelectMovie }: Props) => {
    const navigate = useNavigate();

    const isInList = (movieId: string) => {
        return myMovieList.some(m => m._id === movieId);
    };

    const handleAddItem = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (isInList(movie._id)) {
            setMymovieList(myMovieList.filter(item => item._id !== movie._id));
        } else {
            setMymovieList([...myMovieList, movie]);
        }
    };

    return (
        <div
            onClick={() => {
                setSelectMovie(movie);
                navigate(`/movie/${movie._id}`);
            }}
            className="flex flex-col w-full gap-1 hover:bg-zinc-700 hover:scale-105 rounded-md p-2 transition-all"
        >
            <div className="relative w-full aspect-w-1 aspect-h-1 rounded-md group">
                <img src={movie.image} className="w-full rounded-md h-full object-cover" alt={movie.name}></img>
                <div
                    onClick={handleAddItem}
                    className={`${isInList(movie._id) ? "bg-red-500" : "bg-green-500"
                        } absolute right-3 bottom-3 flex items-center justify-center text-white w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 drop-shadow-2xl hover:cursor-pointer`}
                >
                    {isInList(movie._id) ? <Trash2 /> : <Plus />}
                </div>
            </div>
            <p className="line-clamp-1">{movie.name}</p>
            <p className="line-clamp-2 text-sm text-gray-400">{movie.description}</p>
        </div>
    );
};

export default MovieBanerCard;
