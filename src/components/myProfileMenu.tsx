
import { CircleUserRound } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";


const MyProfileMenu = () => {

    const { logout, user } = useAuth0();
    const navigate = useNavigate();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 text-blue-500   hover:text-blue-500 gap-2">
                {user ? <div className="flex items-center">
                    <img
                        src={user.picture}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="ml-2">{user.given_name}</span>
                </div> : <CircleUserRound className="text-blue-500" />}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => {
                    navigate("/user-profile");
                }}>
                    <div className="font-bold hover:text-blue-500">
                        user profile
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                    navigate("/theatreManage");
                }}>
                    <div className="font-bold hover:text-blue-500">
                        Theatre Manage
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                    navigate("/movie");
                }}>
                    <div className="font-bold hover:text-blue-500">
                        movie
                    </div>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() => { logout() }}
                        className="flex flex-1 font-bold bg-blue-500"
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default MyProfileMenu;