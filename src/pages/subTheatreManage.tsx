import { useState, useEffect } from "react";
import { useCreateSubTheatre, useGetSubTheatre, useUpdateSubTheatre } from "@/api/theatreApi";
import SubTheatreManageList from "@/components/subTheatreManageList";
import { Button } from "@/components/ui/button";
import { SubTheatre } from "@/types";
import { useGetMovie } from "@/api/movieApi";

const SubTeatreManagePage = () => {
    const { theatreData, isLoading: getTeatreLoading } = useGetSubTheatre();
    const { movieData, isLoading: getMovieLoading } = useGetMovie();
    const { updateSubTheatre, isLoading: updateSubTheatreLoading } = useUpdateSubTheatre();
    const { createSubTheatre, isLoading: createSubTheatreLoading } = useCreateSubTheatre();

    const [theatres, setTheatres] = useState<SubTheatre[]>([]);

    useEffect(() => {
        if (theatreData) {
            setTheatres(theatreData);
        }
    }, [theatreData]);

    const handleSave = (updatedTheatre: SubTheatre, index: number) => {
        const updatedTheatres = [...theatres];
        updatedTheatres[index] = updatedTheatre;
        setTheatres(updatedTheatres);

    };

    // const handleCreateNewTheatre = () => {
    //     const newTheatre: SubTheatre = {
    //         name: 'New SubTheatre',
    //         movie: {
    //             name: "",
    //             _id: "",
    //             description: "",
    //             releaseDate: new Date,
    //             genre: [],
    //             image: "",
    //             tailer: ""
    //         },
    //         showTime: []
    //     };

    //     setTheatres([newTheatre, ...theatres]);
    // };

    const handleSaveToApi = async (index: number) => {
        if (index >= 0 && index < theatres.length) {
            const theatreToSave = theatres[index];
            console.log(theatreToSave);
            try {
                await updateSubTheatre({ subTheatreId: theatreToSave._id, subTheatre: theatreToSave });
                console.log('Theatre saved successfully');
            } catch (error) {
                console.error('Failed to save theatre:', error);
            }
        } else {
            console.warn('Index out of bounds');
        }
        window.location.reload()
    };

    if (getTeatreLoading || getMovieLoading || updateSubTheatreLoading || createSubTheatreLoading) {
        return <span>Loading</span>;
    }

    if (!theatres.length || !movieData) {
        return <span>unable to load theatre data</span>;
    }

    return (
        <div className="flex flex-col w-full min-h-full justify-center items-center rounded-lg bg-zinc-900 p-8">
            <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col w-full">
                    <span className="text-3xl font-bold">จัดการข้อมูลโรงภาพยนตร์</span>
                    <span>รีวิวจัดการข้อมูลโรงภาพยนตร์ได้ที่นี่</span>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <span className="text-2xl font-medium">ข้อมูลโรงภาพยนตร์เเละรอบฉาย</span>
                    <div className="flex flex-row w-full gap-2 justify-center items-center">
                        <Button onClick={() => {
                            // handleCreateNewTheatre();
                        }} className="felx flex-1  bg-gray-400 text-gray-300">สร้างรายการโรงภาพยนตร์ใหม่</Button>
                    </div>
                    <SubTheatreManageList onCreateNewTheatre={createSubTheatre} onSaveApi={
                        handleSaveToApi} teatreList={theatres} onSave={handleSave} movies={movieData ?? []} />
                </div>
            </div>
        </div>
    );
};

export default SubTeatreManagePage;
