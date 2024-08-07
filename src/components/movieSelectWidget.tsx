import { formatDate } from "@/middlewere/uti";
import { Movie } from "@/types";
import { DialogTrigger } from "./ui/dialog";

type props = {
    movies: Movie[]
    onSave: (movie: Movie) => void,

}
const MovieSelectWidget = ({ movies, onSave, }: props) => {
    return (
        <div className="flex flex-col bg-white w-full h-full justifyu-center items-center kanit-light " >
            <div className="flex flex-col  w-full gap-3 justify-center   items-center">
                {movies.map((movie, index) => (

                    <DialogTrigger asChild>
                        <div key={index} onClick={
                            () => {
                                onSave(movie);
                            }
                        } className="flex flex-row w-full gap-3 drop-shadow-xl hover:cursor-pointer bg-gray-100 p-2 rounded-md transition-all hover:scale-105">
                            <div className="flex flex-col w-[200px] h-[200px] bg-red-500">
                                <img src={movie.image} className="w-full h-full object-cover"></img>
                            </div>
                            <div className="flex flex-col gap w-full h-full">
                                <span className=" font-bold text-lg">  {movie.name}</span>
                                <span className="text-base font-medium text-yellow-500">{formatDate(movie.releaseDate.toString())}</span>
                                <span className="text-base ">{movie.description}</span>
                            </div>
                        </div></DialogTrigger>
                ))}
            </div>
        </div>
    );
}

export default MovieSelectWidget;