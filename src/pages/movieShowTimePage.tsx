import { useGetMovieByID } from "@/api/movieApi";
import { useGetSubTheatreByMovieID } from "@/api/theatreApi";
import BookingStateWidget from "@/components/bookingState";
import SubTheatreList from "@/components/subTheatreListDisplay";
import { formatDate } from "@/middlewere/uti";
import { useParams } from "react-router-dom";

const MovieShowTimePage = () => {
    const { id } = useParams<{ id: string }>();
    const { movieData, isLoading: getMovieLoading } = useGetMovieByID(id ? id : "");
    const { theatreData, isLoading: getSubTheatreLoading } = useGetSubTheatreByMovieID(id ? id : "");

    if (getSubTheatreLoading || getMovieLoading) {
        return (
            <span>Loading...</span>
        );
    }
    if (!movieData || !theatreData) {
        return <span>Unable to get Movie data</span>;
    }

    console.log("Movie Data:", movieData);
    console.log("Theatre Data:", theatreData);

    return (

        <div className=" relative z-10 flex flex-col w-full justify-center items-center -mt-80">
            <div className="flex flex-row gap-4 text-white top-0 left-0 w-full h-[450px] ">
                <div className="flex flex-col h-full w-2/4">
                    <div className="flex w-full h-full gap-4">
                        <div className="flex h-full w-1/3">
                            <img className="w-full h-full object-cover" src={movieData.image} alt="" />
                        </div>
                        <div className="flex flex-col h-full gap-2 justify-center items-start w-2/3">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold">{movieData.name}</span>
                                <span className="text-base font-medium text-yellow-500">{formatDate(movieData.releaseDate.toString())}</span>
                            </div>
                            <span className="font-medium text-base">{movieData.description}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 h-full w-2/4 rounded-sm drop-shadow-2xl overflow-hidden">
                    <span className="text-2xl font-bold">{movieData.name} - Official Trailer</span>
                    <iframe
                        className="w-full h-full rounded-sm"
                        src={`https://www.youtube.com/embed/${movieData.tailer}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="flex flex-col w-full justify-start items-start gap-4 pt-10 p-36 ">
                <div className="flex w-[700px]  justify-start items-start">
                    <BookingStateWidget state={0}></BookingStateWidget>
                </div>
                <SubTheatreList theatreList={theatreData ?? []}></SubTheatreList>
            </div>
        </div>

    );
}

export default MovieShowTimePage;
