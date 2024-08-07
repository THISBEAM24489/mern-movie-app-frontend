import { formatDate } from "@/middlewere/uti";
import { Movie } from "@/types";
import { useNavigate } from "react-router-dom";

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie._id}`);
    };

    return (
        <div onClick={() => { handleClick() }} className="flex flex-col justify-items-center  rounded-md h-[600px] w-auto drop-shadow-md">
            <div
                className="flex flex-col w-auto h-3/4 rounded-md hover:scale-105 transition-all hover:cursor-pointer"
                style={{ backgroundImage: `url(${movie.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="flex flex-col items-center justify-center text-center w-full h-full text-white opacity-0 hover:opacity-50 transition-all  bg-black">
                    <div className="text-xl font-bold">ดูรอบฉาย</div>
                </div>
            </div>
            <div className="flex pt-2 flex-col text-white gap-3 w-auto min-h-1/4 rounded-md justify-items-center">
                <div className="flex flex-col">
                    <span className="text-base text-yellow-500">{formatDate(movie.releaseDate.toString())}</span>
                    <span className="text-2xl font-medium">{movie.name}</span>
                </div>
                <span className="text-sm">{movie.description}</span>
            </div>
        </div>
    );
}

export default MovieCard;
