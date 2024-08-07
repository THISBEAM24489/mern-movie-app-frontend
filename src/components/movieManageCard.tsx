import { Movie } from "@/types";
import { useNavigate } from "react-router-dom";

type props = {
    movie: Movie
}
const MovieManageCard = ({ movie }: props) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            navigate(`/movie/edit/${movie._id}`);
        }} className="flex flex-row  h-28  bg-gra-100 gap-4 p-4 bg-zinc-800  rounded-md">
            <img className="w-auto h-full object-cover" src={movie.image}></img>

            <div className="flex flex-col gap-3">
                <span className="font-medium">{movie.name}</span>
                <span className="text-sm">{movie.description}</span>
            </div>
        </div>
    );
}

export default MovieManageCard;