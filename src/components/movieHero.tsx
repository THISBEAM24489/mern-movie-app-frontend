import { useGetMovieByID } from "@/api/movieApi";
import { useParams } from "react-router-dom";

const MovieHero = () => {
    const { id } = useParams<{ id: string }>();
    const { movieData, isLoading: getMovieLoading } = useGetMovieByID(id as string);
    if (getMovieLoading) {
        return <span>Loading...</span>
    }
    if (!movieData) {
        return <span>Unble to load movie</span>
    }
    return (
        <div className="relative flex flex-col h-96 w-full overflow-hidden  ">
            <img className="absolute inset-0 w-full h-full object-cover filter blur-sm " src={movieData.image} alt="" />
            <div className="absolute inset-0 flex flex-col w-full h-full bg-black opacity-70 "></div>
        </div>
    );
}

export default MovieHero;