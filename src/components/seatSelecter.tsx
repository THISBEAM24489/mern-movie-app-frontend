import { Armchair, CircleCheck, CircleUserRound } from "lucide-react";

type Props = {
    index: number;
    name: string;
    selectedSeat: number[];
    isBooked: boolean;
};

const SeatSelecter = ({ index, name, selectedSeat, isBooked }: Props) => {
    if (selectedSeat.includes(index)) {
        return (
            <CircleCheck
                className=" text-red-600"
                size={40}
                style={{
                    strokeWidth: 2,
                }}
            />
        );
    }

    return !isBooked ? (
        <Armchair className=" text-yellow-500"
            size={40}
            style={{

                strokeWidth: 2,
            }}
        />
    ) : (
        <CircleUserRound size={40} className="text-gray-200" />
    );
};

export default SeatSelecter;
