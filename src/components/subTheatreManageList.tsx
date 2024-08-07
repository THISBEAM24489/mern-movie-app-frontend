import { Movie, SubTheatre } from "@/types";
import EditTeatreCard from "./editTeatreCard";


type Props = {
    teatreList: SubTheatre[],
    onSave: (updatedTheatre: SubTheatre, index: number) => void
    onCreateNewTheatre: (subTheatre: SubTheatre) => void
    onSaveApi: (index: number) => void

    movies: Movie[];
}

const SubTheatreManageList = ({ teatreList, movies, onSave, onSaveApi, onCreateNewTheatre }: Props) => {

    return (
        <div className="flex flex-col w-full justify-center items-center gap-2">
            {teatreList.map((theatre, index) => (
                <EditTeatreCard onCreateNewTheatre={onCreateNewTheatre} theatre={theatre} index={index} onSave={onSave} movies={movies} onSaveApi={onSaveApi}></EditTeatreCard>
            ))}
        </div>
    );
};

export default SubTheatreManageList;
