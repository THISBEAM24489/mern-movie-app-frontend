export type TicketRequest = {
    user: string;
    showTime: string;
    movie: string;
    seats: {
        name: string;
        index: number;
    };
    bookingDate: Date;
    totalAmount: number;
    paymentStatus: "Pending" | "Completed" | "Failed";
};