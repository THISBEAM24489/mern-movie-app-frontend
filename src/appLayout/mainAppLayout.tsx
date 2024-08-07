import Hero from "@/components/hero";
import MainNavBar from "@/components/mainNavBar";
import MovieHero from "@/components/movieHero";
import { Input } from "@/components/ui/input";


type props = {
    children: React.ReactNode
    showBanner?: boolean,
    showMovieBanner?: boolean,

}

const MainAppLayout = ({ children, showBanner = false, showMovieBanner = false }: props) => {
    return (
        <div className="flex flex-col min-h-screen min-w-screen kanit-light  bg-black">
            <MainNavBar></MainNavBar>
            {showBanner && <Hero></Hero>}
            {showBanner && <div className="flex flex-col w-full px-96 -mt-8 ">
                <div className="flex bg-white flex-row gap-2 w-full h-20 drop-shadow-md rounded-lg items-center justify-center px-7">
                    <Input placeholder="ค้นหาภาพยนตร์" className="bg-white border-2 border-gray-300 focus:border-gray-400  ring-0  focus-visible:ring-offset-0 focus-visible:ring-0" />
                    <div className="flex flex-col w-36 pt-2">
                        <button type="button" className="text-white   gap-2 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                            <div className="flex w-full h-full  flex-col">ค้นหา</div>
                        </button>
                    </div>
                </div>
            </div>}
            {showMovieBanner && <MovieHero></MovieHero>}
            <div className=" flex flex-col w-full h-full ">
                <div className=" flex flex-col  w-screen justify-items-center px-16 py-5  ">
                    {children}
                </div>
            </div>
        </div >
    );
}

export default MainAppLayout;