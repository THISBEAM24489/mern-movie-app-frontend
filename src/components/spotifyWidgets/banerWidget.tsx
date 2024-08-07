import { Movie } from "@/types";
import { Link } from "react-router-dom";
import MovieBanerCard from "./movieBanerCard";
import { useEffect } from "react";

type Props = {
    title: string,
    subTitle: string,
    isShowAll?: boolean
    movies: Movie[],
    myMovieList: Movie[],
    setMymovieList: (movie: Movie[]) => void
    isVertical?: boolean
    setSelectedMovie: (movie: Movie) => void
}
const BanerWidget = ({ title, subTitle, movies, setSelectedMovie, myMovieList, setMymovieList, isVertical = false, isShowAll = true }: Props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        scrollToTop();
    });
    useEffect
    return <div className="flex flex-col w-full justify-start items-center gap-3 pb-3">
        <div className="flex flex-row w-full text-gray-400"><span>{title}</span></div>
        <div className="flex flex-row justify-between items-center w-full">
            <Link className="text-2xl font-medium" to={""}>{subTitle}</Link>
            {isShowAll && <Link to={"/movie"}>เเสดงทั้งหมด</Link>}
        </div>
        <div className={`grid ${isVertical ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "}w-full gap-1`}>
            {movies.map((movie, index) => (
                <MovieBanerCard setSelectMovie={setSelectedMovie} setMymovieList={setMymovieList} myMovieList={myMovieList} key={index} movie={movie}></MovieBanerCard>
            ))}
        </div>
    </div>
}

export default BanerWidget;