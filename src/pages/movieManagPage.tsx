import { useGetMovie } from "@/api/movieApi";
import MovieManageCard from "@/components/movieManageCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MovieManagePage = () => {
    const { movieData, isLoading: geMovieLoading } = useGetMovie()
    const navigate = useNavigate();
    if (geMovieLoading) {
        return (<span>
            loading...
        </span>);
    }
    if (!movieData) {
        return (<span>
            unable to get movie data
        </span>);
    }
    return (
        <div className="flex flex-col w-full min-h-full justify-center items-center rounded-lg bg-zinc-900 p-8">
            <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col w-full">
                    <span className="text-3xl font-bold">จัดการข้อมูลภาพยนตร์</span>
                    <span>รีวิวจัดการข้อมูลภาพยนตร์ได้ที่นี่</span>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <span className="text-2xl font-medium">ข้อมูลภาพยนตร์</span>
                    <div className="flex flex-row w-full gap-2 justify-center items-center">
                        <Button onClick={() => {
                            navigate("/movie/create");
                        }} className="felx flex-1 bg-yellow-500">สร้างรายการภาพยนตร์ใหม่</Button>
                    </div>
                    {
                        movieData.map((movie, index) => (
                            <MovieManageCard key={index} movie={movie}></MovieManageCard>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieManagePage;
