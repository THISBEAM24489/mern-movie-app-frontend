import SubtheatreCard from "@/components/subTheatreCard";
import { ShowTime, SubTheatre } from "@/types";
import { useMutation, useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetSubTheatreByMovieID = (movieID: string) => {
    const getSubTheatreByMovieIDRequest = async (): Promise<SubTheatre[]> => {
        const response = await fetch(`${API_BASE_URL}/api/theater/${movieID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch sub-theatres");
        }
        return response.json();
    };

    const { data: theatreData, isLoading, error } = useQuery(
        ["fetchSubTheatreByMovieId", movieID],
        getSubTheatreByMovieIDRequest,
        {
            enabled: !!movieID,
            refetchOnMount: true,
        }
    );

    return { theatreData, isLoading, error };
};

export const useGetSubTheatre = () => {
    const getSubTheatreByMovieIDRequest = async (): Promise<SubTheatre[]> => {
        const response = await fetch(`${API_BASE_URL}/api/theater`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch sub-theatres");
        }
        return response.json();
    };

    const { data: theatreData, isLoading, error } = useQuery(
        ["fetchSubTheatre"],
        getSubTheatreByMovieIDRequest,
        {

            refetchOnMount: true,
        }
    );

    return { theatreData, isLoading, error };
};


export const useShowTimeByShowTimeId = (showTimeId: string) => {
    const getShowTimeByShowTimeIdRequest = async (): Promise<ShowTime> => {
        const response = await fetch(`${API_BASE_URL}/api/theater/showTime/${showTimeId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch sub-theatres");
        }
        return response.json();
    };

    const { data: showTimeData, isLoading, error } = useQuery(
        ["fetchSubTheatreByMovieId", showTimeId],
        getShowTimeByShowTimeIdRequest,
        {
            enabled: !!showTimeId,
            refetchOnMount: true,
        }
    );

    return { showTimeData, isLoading, error };
};


export const useUpdateSubTheatre = () => {
    const UpdateSubTheatreRequest = async ({ subTheatreId, subTheatre }: { subTheatreId: string; subTheatre: SubTheatre }) => {
        const response = await fetch(`${API_BASE_URL}/api/theater/subTheatre/${subTheatreId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(subTheatre),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to update sub-theatre");
        }

        return response.json();
    };

    const {
        mutateAsync: updateSubTheatre,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useMutation(UpdateSubTheatreRequest);

    return {
        updateSubTheatre,
        isLoading,
        isError,
        isSuccess,
        error,
    };
};




export const useCreateSubTheatre = () => {
    const CreateSubTheatreRequest = async (subTheatre: SubTheatre) => {
        const json = {
            name: subTheatre.name,
            movie: subTheatre.movie ? subTheatre.movie._id : null,
            showTime: subTheatre.showTime.map(st => st._id)
        };

        const response = await fetch(`${API_BASE_URL}/api/theater/subTheatre`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to create sub-theatre");
        }

        return response.json();
    };

    const {
        mutateAsync: createSubTheatre,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useMutation(CreateSubTheatreRequest);

    return {
        createSubTheatre,
        isLoading,
        isError,
        isSuccess,
        error,
    };
};

