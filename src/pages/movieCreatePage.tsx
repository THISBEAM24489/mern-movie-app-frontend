import { useCreateMovie } from "@/api/movieApi";
import MovieForm, { MovieFormData } from "@/forms/movieForm";
import { Movie } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCreatePage = () => {
    const createMovie = useCreateMovie();
    const navigate = useNavigate();

    const handleSubmit = async (movieData: MovieFormData) => {
        const movie: Movie = {
            _id: "", // New movie will not have an ID initially
            name: movieData.name,
            description: movieData.description,
            releaseDate: new Date(),
            genre: [], // Default to empty array
            image: movieData.image,
            tailer: movieData.tailer,
        };

        try {
            await createMovie.mutateAsync(movie);
            // Optionally, redirect or show a success message here
        } catch (error) {
            console.error(error);
        }
        navigate("/theatreManage");
        window.location.reload()
    };

    return (
        <div className="flex flex-col w-full">
            <MovieForm
                title="เพิ่มข้อมูลภาพยนตร์"

                currentMovie={{
                    _id: "",
                    name: "",
                    description: "",
                    releaseDate: new Date(),
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

export default MovieCreatePage;
