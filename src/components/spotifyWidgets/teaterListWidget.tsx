import { formatDate } from "@/middlewere/uti";
import { Movie, ShowTime, SubTheatre } from "@/types";
import { MapPinned } from "lucide-react";
import SubTheatreWidget from "./subTheatreWidget";

type Props = {
    movie?: Movie,
    subTheatre?: SubTheatre[]
}

const TheatreWidget = ({ subTheatre, movie }: Props) => {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex flex-col w-full h-60 relative">
                {movie?.image && (
                    <div className="w-full h-full bg-black relative">
                        <img
                            src={movie.image}
                            alt={movie.name}
                            className="w-full h-full object-cover blur-sm opacity-20"
                        />
                    </div>
                )}
                <div className="flex flex-row w-full absolute  gap-3 inset-0 p-3 ">
                    <img className="w-auto h-full" src={movie?.image} alt="" />
                    <div className="flex flex-col justify-between items-center" >
                        <div className="flex flex-col">
                            <span className=" font-medium">{movie?.name}</span>
                            <span className=" text-yellow-500 text-sm ">{formatDate((movie?.releaseDate ?? new Date()).toString())}</span>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex  border border-white rounded-sm justify-center items-center"><span className=" text-sm">รายละเอียดเพิมเติม</span></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col w-full h-full overflow-auto custom-scrollbar">
                <div className="flex flex-row justify-between items-center w-full p-4 gap-4 bg-zinc-800">
                    <div className="flex flex-row gap-3">
                        <MapPinned />
                        <span className="font-medium">โรงภาพยนตร์ใกล้เคียง</span>
                    </div>
                </div>
                {subTheatre?.map((subTheatre, index) => (
                    <SubTheatreWidget key={index} subTheatre={subTheatre}></SubTheatreWidget>
                ))}
            </div>
        </div>
    );
}

export default TheatreWidget;
