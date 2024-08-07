import { Captions, Volume2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import StringForm, { stringForm } from "@/forms/stringForm";
import { formatDateToTime } from "@/middlewere/uti";
import { Button } from "./ui/button";
import { Movie, SubTheatre } from "@/types";
import { useState } from "react";
import MovieSelectWidget from "./movieSelectWidget";


type Props = {
    theatre: SubTheatre,
    index: number,
    onSave: (updatedTheatre: SubTheatre, index: number) => void,
    onCreateNewTheatre: (subTheatre: SubTheatre) => void
    onSaveApi: (index: number) => void
    movies: Movie[]
}

const EditTeatreCard = ({ theatre, index, movies, onSave, onSaveApi, onCreateNewTheatre }: Props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleEditMovie = (movie: Movie) => {
        onSave({ ...theatre, movie: movie }, index);
        setIsEdit(true);
    }



    return (
        <div key={index} className="flex flex-col w-full gap-3 bg-zinc-800 rounded-lg p-3">
            <div className="flex flex-row gap-1 text-lg justify-start items-center">
                <span className="font-medium">โรงภาพยนตร์ : </span>
                <div className="flex flex-row gap-3">
                    <span>{theatre.name}</span>
                    <span> |</span>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <Volume2 size={20} />
                        <span>ENG</span>
                    </div>
                    <span> |</span>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <Captions size={20} />
                        <span>TH</span>
                    </div>
                </div>
                <Dialog>
                    <DialogTrigger className="bg-yellow-500 hover:bg-yellow-400 p-2 rounded-md ">
                        <span className="text-sm font-bold text-zinc-800">เเก้ใข</span>
                    </DialogTrigger>
                    <DialogContent className="w-full">
                        <StringForm
                            currentMovie={{ name: theatre.name }}
                            onSave={(data: stringForm) => {
                                onSave({ ...theatre, name: data.name }, index);
                                setIsEdit(true);
                            }}
                            isLoading={false}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="flex flex-row gap-2 text-lg justify-start items-center">
                <span className="font-medium">ภาพยนตร์ : </span>
                <div className="flex flex-row gap-3">
                    <span>{theatre.movie.name}</span>
                </div>
                <Dialog >
                    <DialogTrigger className="bg-yellow-500 hover:bg-yellow-400 p-2 rounded-md ">
                        <span className="text-sm font-bold text-zinc-800">เเก้ใข</span>
                    </DialogTrigger>
                    <DialogContent className="h-full overflow-auto py-12">
                        <MovieSelectWidget movies={movies} onSave={handleEditMovie} />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="flex flex-row w-full  justify-start items-start gap-2">
                <div className="flex gap-2 justify-center items-center">
                    <span className="font-medium text-center ">รอบฉาย : </span>
                    <Dialog>
                        <DialogTrigger className="bg-yellow-500 hover:bg-yellow-400 p-2 rounded-md ">
                            <span className="text-sm font-bold  text-zinc-800">เพิ่มรอบฉาย</span>
                        </DialogTrigger>
                        <DialogContent className="w-full  overflow-auto">
                            {/* <ShowTimeForm currentMovie={{
                                seat: 120,
                                date: new Date()
                            }} onSave={(data: showTimeForm) => {
                                console.log("add showtime");
                                handleEditShowTime(data);
                            }} isLoading={false}></ShowTimeForm> */}
                            อยู่ระหว่างการพัฒนา
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="grid grid-cols-6 gap-1 text-lg">
                    {theatre.showTime.map((showTime, index) => (
                        <Button className="bg-gray-400 text-gray-200" key={index}>{formatDateToTime(showTime.time.toString())}</Button>
                    ))}
                </div>
            </div>
            {isEdit && <Button onClick={() => {
                if (!theatre._id) {
                    onCreateNewTheatre(theatre);
                } else {
                    onSaveApi(index);
                }

            }} className="bg-green-500">บันทึกการเปลี่ยนแปลง</Button>}
        </div>
    );
}

export default EditTeatreCard;
