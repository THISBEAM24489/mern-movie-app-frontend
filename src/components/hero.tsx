import { useGetMovieByID } from "@/api/movieApi";
import { formatDate } from "@/middlewere/uti";
import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";



const Hero = () => {
    const { movieData, isLoading } = useGetMovieByID("66a6815be2ced68467d34dbc");
    if (isLoading) {
        return (<span>loading</span>);
    }
    if (!movieData) {
        return (<span>unable to load data</span>);
    }
    return (
        <div className={`relative flex flex-col w-full justify-center h-96`}>
            <div className="absolute inset-0">
                <img
                    className="object-cover w-full h-full"
                    src="https://images6.alphacoders.com/134/thumb-1920-1340252.jpeg"
                    alt="Hero"
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-20">

            </div>
            <div className=" absolute flex flex-col inset-0 text-white justify-end gap-2 px-28 py-11 ">
                <Link className="text-4xl font-bold" to={""}>{movieData.name}</Link>
                <div className="flex flex-row gap-3 font-medium">
                    <span >{movieData.name}</span>
                    <span>|</span>
                    <span>ในโรงภาพยนตร์ {formatDate(movieData.releaseDate.toString())}</span>
                </div>
                <span>{movieData.description}</span>
                <div className="flex flex-col w-52">
                    <button type="button" className="text-white  gap-2 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                        จองตั๋วภาพยนตร์
                        < Ticket size={30}></Ticket>
                    </button>
                </div>
                <div className="flex flex-row gap-3 font-medium">
                    <span>รายละเอียดภาพยนตร์</span>
                    <span>|</span>
                    <span>ชมตัวอย่างภาพยนตร์</span>
                </div>
            </div>
        </div >
    );
}
export default Hero;
