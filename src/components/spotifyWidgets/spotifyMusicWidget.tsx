import { formatDate } from "@/middlewere/uti";
import { Movie } from "@/types";
import { Play, Repeat2, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";


type Props = {
    movie?: Movie
}
const SpotifyMusicWidget = ({ movie }: Props) => {
    return (<div className="flex flex-row h-full w-full justify-between items-center py-2 px-3">
        <div className="flex flex-row w-[30%] justify-center h-full items-center gap-2">
            <img className="h-full w-auto object-cover" src={movie?.image} alt="" />
            <div className="flex flex-col items-start justify-center ">
                <span className="font-medium">{movie?.name}</span>
                <span className="text-sm text-yellow-500">{formatDate((movie?.releaseDate ?? new Date()).toString())}</span>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full w-full items-center gap-4">
            <div className="flex flex-row gap-7">
                <Shuffle />
                <SkipBack />
                <Play />
                <SkipForward />
                <Repeat2 />
            </div>
            <div className="flex flex-row w-[50%] h-1">
                <div className="flex flex-col w-[60%] bg-green-500 h-1">
                </div>
                <div className="flex flex-col w-[40%] bg-white h-1">
                </div>
            </div>
        </div>
        <div className="flex flex-row h-full w-[30%] justify-center items-center gap-3">
            <Volume2 />
            <div className="flex flex-row w-[50%] h-1">
                <div className="flex flex-col w-[70%] bg-green-500 h-1">
                </div>
                <div className="flex flex-col w-[30%] bg-white h-1">
                </div>
            </div>
        </div>
    </div>);
}

export default SpotifyMusicWidget;