import { formatDateToTime } from "@/middlewere/uti";
import { SubTheatre } from "@/types";
import { Captions, Star, Volume2 } from "lucide-react";

type Props = {
    subTheatre?: SubTheatre
}
const SubTheatreWidget = ({ subTheatre }: Props) => {
    return (<div className="flex flex-col justify-center  items-center w-full">
        <div className="flex flex-row w-full justify-start items-center bg-zinc-700 gap-4 p-1"><Star size={15} /><span className="text-sm font-medium">{subTheatre?.name}</span></div>
        <div className="flex flex-row w-full justify-start items-center  px-2 pt-2 gap-2">
            <Volume2 size={18} />
            <span>ENG</span>
            <span> |</span>
            <Captions size={18} />
            <span>TH</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 text-black p-2">
            {subTheatre?.showTime.map((theatre, index) => (
                <div key={index} className="flex p-1 bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300  justify-center items-center rounded-md">
                    <span className=" font-medium text-base">   {formatDateToTime(theatre.time.toString())}</span>
                </div>
            ))}
        </div>
    </div>);
}

export default SubTheatreWidget;