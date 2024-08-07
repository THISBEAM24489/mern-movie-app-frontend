import { useGetMovie } from "@/api/movieApi";
import MovieGridDisplay from "@/components/movieGridDisplay";

const MovieListPage = () => {
    const { movieData, isLoading } = useGetMovie();
    console.log(movieData?.length);

    if (isLoading) {
        return (<span>Loading...</span>);
    }
    if (!movieData) {
        return (<span>No movies available</span>);
    }
    return (
        <div className="flex flex-col w-full">
            <MovieGridDisplay movieList={movieData}></MovieGridDisplay>
        </div>
    );
};

export default MovieListPage;