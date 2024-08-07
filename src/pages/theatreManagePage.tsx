import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import MovieManagePage from "./movieManagPage";
import SubTeatreManagePage from "./subTheatreManage";


const TheatreManagePage = () => {
    const [selectedTab, setSelectedTab] = useState("ภาพยนตร์");



    const handleTabChange = (value: string) => {
        setSelectedTab(value);
    };


    return (
        <div className="flex w-full ">
            <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-md bg-zinc-700 p-1">
                    <TabsTrigger
                        className={`p-1 rounded-md  ${selectedTab === "ภาพยนตร์" ? " bg-white text-black font-bold" : " bg-zinc-800"}`}
                        value="ภาพยนตร์"
                    >
                        ภาพยนตร์
                    </TabsTrigger>
                    <TabsTrigger
                        className={`p-1 rounded-md  ${selectedTab === "โรงภาพยนตร์" ? " bg-white text-black font-bold" : "bg-zinc-800"}`}
                        value="โรงภาพยนตร์"
                    >
                        โรงภาพยนตร์
                    </TabsTrigger>
                </TabsList>
                <TabsContent className="flex pt-2 pb-2  w-full" value="ภาพยนตร์">
                    <MovieManagePage></MovieManagePage>

                </TabsContent>
                <TabsContent className="flex pt-2 pb-2 w-full" value="โรงภาพยนตร์">
                    <SubTeatreManagePage></SubTeatreManagePage>
                </TabsContent>

            </Tabs>
        </div>
    );
};

export default TheatreManagePage;
