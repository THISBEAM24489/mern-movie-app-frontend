import { formatDate, formatDateToTime } from "@/middlewere/uti";
import { Movie, ShowTime } from "@/types";
import { Captions, Volume2 } from "lucide-react";
import { Button } from "./ui/button";

type props = {
    selectedSeat: number[]
    movie: Movie
    handleCreateTicket: () => void
    showTime: ShowTime
}
const SeatSelectSumaryWidget = ({ selectedSeat, movie, showTime, handleCreateTicket }: props) => {

    return (<div className="bg-blakc border border-white flex flex-1 justify-center items-center gap-2">
        <div className="flex flex-col min-h-full w-full gap-3  justify-center  text-white items-center p-10">
            <div className="flex  gap-3 w-full h-[230px]">
                <div className="flex w-1/3">
                    <img className="flex w-full h-full object-cover" src={movie.image} alt="" />
                </div>

                <div className="flex flex-col w-2/3 flex-1  text-white">
                    <span className="text-2xl font-medium">{movie.name}</span>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2">
                            <Volume2 size={20} />
                            <span className="text-sm" >ENG</span>
                        </div>
                        <span className="text-sm "> |</span>
                        <div className="flex flex-row gap-2">
                            <Captions size={20} />
                            <span className="text-sm" >TH</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-3">
                <span className=" text-xl">รอบฉาย</span>
                <div className="flex flex-col w-full">
                    <span className=" text-xl">{showTime.subTheatre.name}</span>
                    <span className="text-yellow-500">{formatDate(showTime.time.toString())}</span>
                </div>
                <div className="flex flex-row w-full justify-between items-center">
                    <span>{showTime.subTheatre.name}</span>
                    <div className="flex p-1 px-2 text-black rounded-sm bg-white">{
                        <span>{formatDateToTime(showTime.time.toString())}</span>
                    }</div>
                </div>
            </div>
            <div className="flex flex-col h-full w-full gap-2">
                <div className="flex flex-row h-full w-full">
                    <div className="flex flex-col flex-1 ">
                        <span className="text-xl font-medium">ที่นั่ง:</span>
                        <div className="flex flex-row gap-3 max-w-full">
                            {selectedSeat.map((seat, index) => (
                                <span className="text-2xl font-medium" key={index}>{seat}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-1 ">
                        <span className="text-xl font-medium">ราคา</span>
                    </div>
                </div>
                <Button onClick={() => {
                    handleCreateTicket();
                }} className="w-full bg-yellow-500"><span className="text-white tracking-wider text-xl font-bold">ชําระเงิน</span></Button>
            </div>
        </div>
    </div>);
}

export default SeatSelectSumaryWidget;
