import { SubTheatre } from "@/types";
import { Button } from "./ui/button";
import { formatDateToTime } from "@/middlewere/uti";
import { useNavigate } from "react-router-dom";
import { Captions, Volume2 } from "lucide-react";

type props = {
    theatre: SubTheatre

}

const SubtheatreCard = ({ theatre, }: props) => {
    const navigate = useNavigate();

    const handleClick = (showTimeId: String) => {
        navigate(`/showTime/${showTimeId}`);
    };
    return (
        <div className={`flex flex-col gap-2 text-white"`}>
            <div className="flex flex-row gap-5">
                <span className="text-gl font-medium "> {theatre.name as string}</span>
                <span className="text-gl font-medium "> |</span>
                <div className="flex flex-row gap-2">
                    <Volume2 />
                    <span>ENG</span>
                </div>
                <span className="text-gl font-medium "> |</span>
                <div className="flex flex-row gap-2">
                    <Captions />
                    <span>TH</span>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                {theatre.showTime.map((showtime, index) => (
                    <Button className="bg-yellow-500 hover:bg-yellow-400 text-black" onClick={() => {
                        handleClick(showtime._id)
                    }} key={index}><span className=" font-bold">{formatDateToTime(showtime.time.toString())}</span></Button>
                )
                )}
            </div>
        </div>
    );
}

export default SubtheatreCard;