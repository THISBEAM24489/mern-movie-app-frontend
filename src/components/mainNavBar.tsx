import { useAuth0 } from "@auth0/auth0-react";
import MyProfileMenu from "./myProfileMenu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const MainNavBar = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <div className=" bg-white text-black w-screen flex-col drop-shadow-md items-center px-64 py-2">
            <div className="flex flex-1 h-full justify-between items-center">
                <div className="flex flex-row h-full gap-10  items-end ">
                    <div className=" ">
                        <Link to={"/"}>
                            <span className="text-4xl tracking-tighter text-red-700   font-bold">
                                FNSM
                            </span>
                        </Link></div>
                    <div className="flex h-full flex-row gap-6 font-medium pb-1">
                        <Link className=" hover:font-bold transition-all" to={"/"}>หน้าเเรก</Link>
                        <Link className=" hover:font-bold transition-all" to={"/movie"}>ภาพยนตร์</Link>
                    </div>
                </div>
                {isAuthenticated ? <MyProfileMenu></MyProfileMenu> : <Button
                    onClick={() => { loginWithRedirect() }}
                    className="flex font-bold red-500"
                >
                    Log In
                </Button>}
            </div>

        </div >
    );
}
export default MainNavBar;

