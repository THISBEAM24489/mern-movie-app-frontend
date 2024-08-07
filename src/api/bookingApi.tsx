
import { TicketRequest } from "@/requestType";
import { TicketBooking } from "@/types";
import { useMutation, useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetBookingSeatByShowTimeId = (showTimeId: string) => {
    const geteGetBookingSeatByShowTimeIdRequest = async (): Promise<TicketBooking[]> => {
        const response = await fetch(`${API_BASE_URL}/api/booking/showTime/${showTimeId}`, {
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

    const { data: bookingdData, isLoading, error } = useQuery(
        ["fetchBookingSeatByShowtimeId", showTimeId],
        geteGetBookingSeatByShowTimeIdRequest,
        {
            enabled: !!showTimeId,
            refetchOnMount: true,
        }
    );

    return { bookingdData, isLoading, error };
};

export const useCreateTicket = () => {
    const createTicketRequest = async (ticket: TicketRequest) => {
        console.log(JSON.stringify(ticket));
        const response = await fetch(`${API_BASE_URL}/api/booking/ticket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ticket),
        });

        if (!response.ok) {
            throw new Error("Failed to create ticket");
        }
    };

    const {
        mutateAsync: createTicket,
        isLoading,
        isError,
        isSuccess,
    } = useMutation(createTicketRequest);

    return {
        createTicket,
        isLoading,
        isError,
        isSuccess,
    };
};

