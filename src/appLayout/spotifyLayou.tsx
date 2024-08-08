import { useGetSubTheatreByMovieID } from "@/api/theatreApi";
import SpotifyMusicWidget from "@/components/spotifyWidgets/spotifyMusicWidget";
import TeaterListWidget from "@/components/spotifyWidgets/teaterListWidget";
import { formatDate } from "@/middlewere/uti";
import { Movie } from "@/types";
import { ArrowRight, Bell, ChevronLeft, ChevronRight, Download, House, Menu, PanelsTopLeft, Plus, Search, Trash2, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

type Props = {
    chieldren: React.ReactNode
    movies: Movie[]
    myMovieList: Movie[],
    setMymovieList: (movie: Movie[]) => void
    selectedMovie: Movie
    setSelectedMovie: (movie: Movie) => void
    isloadig: boolean
}

const SpotifyLayout = ({ chieldren, selectedMovie, setSelectedMovie, myMovieList, setMymovieList, isloadig }: Props) => {
    const { theatreData } = useGetSubTheatreByMovieID(selectedMovie._id);
    const navigate = useNavigate();
    const handleAddItem = (movieId: string) => {

        setMymovieList(myMovieList.filter(item => item._id !== movieId));

    };
    return (
        <div className="flex flex-col w-screen h-screen kanit-light text-white">
            <div className="flex flex-col w-full h-full overflow-auto">
                <div className="flex flex-col w-full h-full justify-center items-center ">
                    <div className="flex flex-row w-full h-[90%] bg-black overflow-auto custom-scrollbar">
                        <div className="flex flex-col h-full w-[0%] lg:w-[20%] bg-black py-2 px-1 gap-2 overflow-auto custom-scrollbar" >
                            <div className="flex flex-col bg-red500 w-full h-[20%] bg-zinc-900 rounded-lg  font-medium px-5 py-3 gap-4 transition-all overflow-auto custom-scrollbar">
                                <div className="flex flex-row gap-3 flex-1 justify-start items-center "><House /><Link to={"/"}><span className="text-gray-400 hover:text-white ">หน้าหลัก</span></Link></div>
                                <div className="flex flex-row gap-3 flex-1 justify-start items-center"><Search /><Link to={""}><span className="text-gray-400 hover:text-white">ค้นหา</span></Link></div>

                            </div>
                            <div className="flex flex-col bg-red500 w-full h-[80%] bg-zinc-900 rounded-lg p-5  gap-4 overflow-auto custom-scrollbar">
                                <div className="flex flex-row justify-between  items-center  font-medium">
                                    <PanelsTopLeft />
                                    <div className="flex flex-row justify-between items-center text-gray-400 hover:text-white"><Link to={""}><span>คอลเลคชั่นของคุณ</span></Link><Plus /></div>
                                    <ArrowRight />

                                </div>
                                <div className="flex flex-row justify-start  items-center  font-medium">
                                    <div className="flex flex-row px-2 py-1 bg-zinc-700 rounded-xl"><span>รายการโปรด</span></div>
                                </div>
                                <div className="flex flex-row justify-between  items-center  font-medium">
                                    <Search />
                                    <div className="flex flex-row justify-between items-center text-gray-400 hover:text-white"><Link to={""}><span>เพิ่มล่าสุด</span></Link><Menu /></div>
                                </div>
                                <div className=" flex flex-col gap-2 overflow-auto custom-scrollbar px-1">
                                    {myMovieList.map((movie, index) => (
                                        <div
                                            onClick={() => {
                                                setSelectedMovie(movie);
                                                navigate(`/movie/${movie._id}`)
                                            }}
                                            key={index}
                                            className={`group relative flex flex-row w-full justify-start gap-4 hover:bg-zinc-800  ${selectedMovie._id === movie._id ? "bg-zinc-800" : ""}  hover:cursor-pointer items-center rounded-md p-3`}
                                        >
                                            <div className="flex flex-row w-full gap-2">
                                                <div className="flex-shrink-0 w-12 h-12 bg-white">
                                                    <img className="w-full h-full object-cover" src={movie.image} alt="" />
                                                </div>
                                                <div className="flex flex-col w-full truncate">
                                                    <p className="text-ellipsis overflow-hidden">{movie.name}</p>
                                                    <p className="text-ellipsis overflow-hidden text-yellow-500 text-sm">
                                                        {formatDate(movie.releaseDate.toString())}
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent the click event from bubbling up to the parent
                                                    handleAddItem(movie._id);
                                                }}
                                                className="absolute w-7 h-7 bottom-2 right-2 justify-center items-center group-hover:opacity-100 opacity-0 flex bg-red-500 rounded-full"
                                            >
                                                <Trash2 size={15} />
                                            </div>
                                        </div>

                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col h-full w-[55%] bg-black py-2 px-1" >
                            <div className="flex flex-col w-full h-full bg-zinc-900 rounded-lg">
                                <div className=" relative flex flex-col w-full h-[20%] bg-zinc-800  justify-between  gap-2 items-center overflow-auto custom-scrollbar">
                                    <div className="flex justify-center items-center w-full h-full bg-black">
                                        <img className="w-full h-full object-cover opacity-10 blur-sm" src={selectedMovie.image} alt="" />
                                    </div>
                                    <div className=" absolute inset-0 flex flex-col w-full h-full  p-4 justify-between  items-center">
                                        <div className="flex flex-row w-full justify-between items-center">
                                            <div className="flex flex-row justify-center items-center gap-2">
                                                <div className="w-8 h-8 flex justify-center items-center rounded-full bg-zinc-900">
                                                    <ChevronLeft onClick={() => {
                                                        navigate("/");
                                                    }} className="text-white" />
                                                </div>
                                                <div className="w-8 h-8 flex justify-center items-center rounded-full bg-zinc-900">
                                                    <ChevronRight onClick={() => {

                                                    }} className="text-white" />
                                                </div>
                                                <span className="text-6xl tracking-tighter font-bold ">FNSM</span>
                                            </div>
                                            <div className="flex-row items-center gap-2 hidden lg:flex">
                                                <div className="flex flex-row px-2 py-1 bg-zinc-700 rounded-xl"><span>สํารวจ Premium</span></div>
                                                <div className="flex flex-row px-2 py-1 bg-zinc-700 rounded-xl gap-2"><Download /><span>ติดตั้งเเอป</span></div>
                                                <div className="w-8 h-8 flex justify-center items-center rounded-full bg-zinc-900 p-2">
                                                    <Bell />
                                                </div>
                                                <div className="w-8 h-8 flex justify-center items-center rounded-full bg-zinc-900 p-2">
                                                    <User />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row w-full justify-between items-center gap-2">
                                            <div className="flex flex-row gap-2">
                                                <Link to={"/"}> <div className="flex flex-row px-2 py-1 bg-zinc-700 rounded-xl hover:cursor-pointer"><span>ทั้งหมด</span></div></Link>
                                                <Link to={"/movie"}> <div className="flex flex-row px-2 py-1 bg-zinc-700 rounded-xl hover:cursor-pointer"><span>ภาพยนตร์</span></div></Link>
                                            </div>
                                            <div onClick={() => {
                                                navigate("/theatreManage");
                                            }} className="flex flex-row px-2 py-1 hover:bg-green-400 hover:cursor-pointer bg-green-500 rounded-xl"><span>จัดการรอบฉาย</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full h-[80%] items-center overflow-auto custom-scrollbar p-4 gap-8">
                                    {isloadig ? <div className="flex flex-col w-full h-full text-4xl font-medium ">
                                        <span>Loadig...</span>
                                        <span>รอ api ซักครู่ครับอาจจช้านิดนึง...</span>
                                    </div> : chieldren}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col h-full lg:w-[25%] md:w-[45%] bg-black py-2 px-1 overflow-auto custom-scrollbar" >

                            <TeaterListWidget movie={selectedMovie} subTheatre={theatreData}></TeaterListWidget>


                        </div>
                    </div>
                    <div className=" relative flex flex-col w-full h-[10%] bg-black">
                        <div className=" relative flex flex-col w-full h-full bg-black">
                            <img className="w-full h-full object-cover blur-sm opacity-10" src={selectedMovie.image}></img>
                        </div>
                        <div className=" absolute inset-0">
                            <SpotifyMusicWidget movie={selectedMovie}></SpotifyMusicWidget>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SpotifyLayout;