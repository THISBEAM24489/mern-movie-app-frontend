
export type Movie = {
    _id: string;
    name: string,
    description: string,
    releaseDate: Date,
    genre: MovieGenre[],
    image: string,
    tailer: string,
}

export type MovieGenre = {
    name: string
}

export type Theatre = {
    _id: string
    name: string,
    subTheatres: [SubTheatre]
}

export type SubTheatre = {
    _id: string
    name: string
    showTime: [ShowTime],
    movie: Movie
}

export type ShowTime = {
    _id: string
    time: Date
    seat: string
    subTheatre: SubTheatre
}

export type TicketBooking = {
    _id: string;
    user: User;
    showTime: ShowTime;
    movie: Movie;
    seats: Seat;
    bookingDate: Date;
    totalAmount: number;
    paymentStatus: 'Pending' | 'Completed' | 'Failed';
}

export type Seat = {
    name: string;
    index: number;
}

export type User = {
    _id: string;
    name: string;
    email: string;
}



