import { SubTheatre } from "@/types";
import SubtheatreCard from "./subTheatreCard";


type Props = {
    theatreList: SubTheatre[];

};

const SubTheatreList = ({ theatreList, }: Props) => {
    if (!theatreList) {
        return <span>unable to load subtheatre</span>
    }
    return (

        <div className={`flex flex-col w-full justify-items-center gap-2 text-white`}>
            <span className="text-2xl font-medium">รอบฉายเเละโรงภาพยนตร์</span>
            {theatreList.map((theatre, index) => (
                <SubtheatreCard key={index} theatre={theatre} />
            ))}
        </div>
    );
};

export default SubTheatreList;
