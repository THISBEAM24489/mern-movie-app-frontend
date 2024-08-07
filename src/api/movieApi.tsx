import { Movie, } from "@/types";
import { useMutation, useQuery, useQueryClient } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const useGetMovie = () => {
    const getMovieRequest = async (): Promise<Movie[]> => {
        const response = await fetch(`${API_BASE_URL}/api/movie/get`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }
        return response.json();
    };

    const { data: movieData, isLoading, error } = useQuery("fetchMovies", getMovieRequest, {
        refetchOnMount: true,
    });

    return { movieData, isLoading, error };
};
export const useGetMovieByID = (movieID: string) => {
    const getMovieMyIDRequest = async (): Promise<Movie> => {
        const response = await fetch(`${API_BASE_URL}/api/movie/${movieID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }
        return response.json();
    }
    const {
        data: movieData,
        isLoading,
        error,
        refetch
    } = useQuery("fetchMoviesById", getMovieMyIDRequest, {
        enabled: !!movieID,
        refetchOnMount: true,
    });

    return { movieData, isLoading, error, refetch, };
}

export const useCreateMovie = () => {
    const queryClient = useQueryClient();

    const createMovieRequest = async (movie: Movie): Promise<Movie> => {

        const newMovie = { "name": movie.name, "description": movie.description, "releaseDate": movie.releaseDate, "genre": [], "image": movie.image, "tailer": movie.tailer }
        const response = await fetch(`${API_BASE_URL}/api/movie/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMovie),
        });
        if (!response.ok) {
            throw new Error("Failed to create movie");
        }
        return response.json();
    };

    return useMutation(createMovieRequest, {
        onSuccess: () => {
            queryClient.invalidateQueries('fetchMovies');
        },
    });
};

// Hook to update an existing movie
export const useUpdateMovie = () => {
    const queryClient = useQueryClient();

    const updateMovieRequest = async (movie: Movie): Promise<Movie> => {
        const response = await fetch(`${API_BASE_URL}/api/movie/${movie._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
        });
        if (!response.ok) {
            throw new Error("Failed to update movie");
        }
        return response.json();
    };

    return useMutation(updateMovieRequest, {
        onSuccess: () => {
            queryClient.invalidateQueries('fetchMovies');
        },
    });
};



