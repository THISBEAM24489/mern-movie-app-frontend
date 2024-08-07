import { useCreateMovie, useGetMovieByID, useUpdateMovie } from "@/api/movieApi";
import MovieForm, { MovieFormData } from "@/forms/movieForm";
import { Movie } from "@/types";
import { useNavigate, useParams } from "react-router-dom";

const MovieEditPage = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const { movieData, isLoading } = useGetMovieByID(movieId as string);
    const createMovie = useCreateMovie();
    const updateMovie = useUpdateMovie();
    const navigate = useNavigate();

    const handleSubmit = async (movieData: MovieFormData) => {
        const movie: Movie = {
            _id: movieData._id || "", // Default to empty string for new movies
            name: movieData.name,
            description: movieData.description,
            releaseDate: new Date(),
            genre: [], // Default to empty array
            image: movieData.image,
            tailer: movieData.tailer,
        };

        try {
            if (movie._id) {
                await updateMovie.mutateAsync(movie);
            } else {
                await createMovie.mutateAsync(movie);
            }
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoading) {
        return <span>loading...</span>;
    }

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <MovieForm
                currentMovie={movieData ?? {
                    _id: "",
                    name: "",
                    description: "",
                    releaseDate: new Date(), // Set as Date object
                    genre: [],
                    image: "",
                    tailer: "",
                }}
                onSave={handleSubmit}
                isLoading={false}
            />
        </div>
    );
};

export default MovieEditPage;
