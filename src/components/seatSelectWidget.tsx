import { ShowTime, TicketBooking } from "@/types";
import SeatSelecter from "./seatSelecter";

type props = {
    showTime: ShowTime;
    onSeatSelect: (index: number) => void;
    selectedSeat: number[];
    bookingData: TicketBooking[];
};

const SeatSelectWidget = ({ showTime, onSeatSelect, selectedSeat, bookingData }: props) => {

    const checkIfSeatBooked = (index: number) => {
        return bookingData.some((seat) => seat.seats.index === index);
    };

    const seatArr = showTime.seat.split('');

    return (
        <div className="grid grid-cols-12 gap-4 justify-center w-full items-center">
            {seatArr.map((seat, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center"
                    onClick={() => {
                        if (!checkIfSeatBooked(index)) {
                            onSeatSelect(index);
                        }
                    }}
                >
                    <SeatSelecter
                        index={index}
                        name={""}
                        selectedSeat={selectedSeat}
                        isBooked={checkIfSeatBooked(index)}
                    />
                </div>
            ))}
        </div>
    );
};

export default SeatSelectWidget;
