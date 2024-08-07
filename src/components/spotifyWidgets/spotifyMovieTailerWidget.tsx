import { Movie } from "@/types";
import ReactPlayer from "react-player";

type Props = {
    movie: Movie;
};

const SpotifyMovie = ({ movie }: Props) => {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="w-full h-full">
                <ReactPlayer
                    url={movie.tailer}
                    className="react-player"
                    width="100%"
                    height="100%"
                    playing={true}
                    style={{ border: 'none' }}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0 }
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default SpotifyMovie;
