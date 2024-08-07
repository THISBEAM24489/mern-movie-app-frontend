import { useCreateTicket, useGetBookingSeatByShowTimeId } from "@/api/bookingApi";
import { useShowTimeByShowTimeId } from "@/api/theatreApi";
import SeatSelectSumaryWidget from "@/components/seatSelectSumaryWidget";
import SeatSelectWidget from "@/components/seatSelectWidget";
import { TicketRequest } from "@/requestType";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import BookingStateWidget from "@/components/bookingState";
import { formatDate } from "@/middlewere/uti";

const SelectSeatPage = () => {
    const { showTimeId } = useParams<{ showTimeId: string }>();
    const { bookingdData, isLoading: getBookingLoading } = useGetBookingSeatByShowTimeId(showTimeId ?? "");
    const { showTimeData, isLoading: getShowTimeLoading } = useShowTimeByShowTimeId(showTimeId ? showTimeId : "");
    const { createTicket, isLoading: createTicketLoading } = useCreateTicket();

    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    if (getShowTimeLoading || getBookingLoading || createTicketLoading) {
        return <span>loading...</span>;
    }

    if (!showTimeData || !bookingdData) {
        return <span>Unable to get show time data</span>;
    }

    const handleSeatSelect = (index: number) => {
        setSelectedSeats(prevSelectedSeats => {
            const currentSelectedSeats = prevSelectedSeats || [];
            return currentSelectedSeats.includes(index)
                ? currentSelectedSeats.filter(seatIndex => seatIndex !== index)
                : [...currentSelectedSeats, index];
        });
    };

    const handleCreateTicket = async () => {
        const newTicket: TicketRequest = {
            user: "66a883638eb318c1502c7fb5",
            showTime: showTimeData._id,
            movie: showTimeData.subTheatre.movie._id,
            seats: {
                name: "test",
                index: selectedSeats[0]
            },
            bookingDate: new Date(),
            totalAmount: 0,
            paymentStatus: "Pending"
        };

        try {
            await createTicket(newTicket);
            console.log("Ticket created successfully");

            // Invalidate the queries to refetch the data
            queryClient.invalidateQueries(["fetchBookingSeatByShowtimeId", showTimeId]);
            queryClient.invalidateQueries(["fetchShowTimeByShowTimeId", showTimeId]);

            // Navigate to the same page to trigger a refetch
            navigate(-1);

        } catch (error) {
            console.error("Error creating ticket", error);
        }
    };

    return (
        <div className=" relative z-10 flex flex-col w-full justify-center items-center -mt-80">
            <div className="flex flex-row gap-4 text-white top-0 left-0 w-full h-[450px] ">
                <div className="flex flex-col h-full w-2/4">
                    <div className="flex w-full h-full gap-4">
                        <div className="flex h-full w-1/3">
                            <img className="w-full h-full object-cover" src={showTimeData.subTheatre.movie.image} alt="" />
                        </div>
                        <div className="flex flex-col h-full gap-2 justify-center items-start w-2/3">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold">{showTimeData.subTheatre.movie.name}</span>
                                <span className="text-base font-medium text-yellow-500">{formatDate(showTimeData.subTheatre.movie.releaseDate.toString())}</span>
                            </div>
                            <span className="font-medium text-base">{showTimeData.subTheatre.movie.description}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 h-full w-2/4 rounded-sm drop-shadow-2xl overflow-hidden">
                    <span className="text-2xl font-bold">{showTimeData.subTheatre.movie.name} - Official Trailer</span>
                    <iframe
                        className="w-full h-full rounded-sm"
                        src={`https://www.youtube.com/embed/${showTimeData.subTheatre.movie.tailer}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="flex flex-col w-full gap-4 pt-10 p-36 ">
                <div className="flex w-[700px]  justify-start items-start">
                    <BookingStateWidget state={1}></BookingStateWidget>
                </div>
                <div className="flex flex-col justify-items-center min-h-full pt-5  ">
                    <div className="flex flex-row gap-5 ">
                        <div className="flex flex-col w-4/6  justify-center items-center ">
                            <div className="flex w-full p-5 pb-16 ">
                                <div className="flex w-full h-12 border border-white text-xl font-medium justify-center items-center text-white">
                                    หน้าจอภาพยนตร์
                                </div>
                            </div>
                            <div className="flex w-full  justify-center items-center">
                                <SeatSelectWidget
                                    showTime={showTimeData}
                                    onSeatSelect={handleSeatSelect}
                                    selectedSeat={selectedSeats}
                                    bookingData={bookingdData}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-2/6 ">
                            <div className="flex w-full h-full  ">
                                <SeatSelectSumaryWidget showTime={showTimeData} movie={showTimeData.subTheatre.movie} selectedSeat={selectedSeats} handleCreateTicket={handleCreateTicket} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SelectSeatPage;
