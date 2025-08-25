import Dubbing from "../molecules/Dubbing";
import VoiceBox from "../molecules/VoiceBox";

const Workspace = ({ selected }: { selected: string }) => {
  return (
    <div className="h-4/5 w-full bg-white px-2 flex items-center justify-center">
      {selected === "Dubbing & LipSynch" ? <Dubbing /> : <VoiceBox />}
    </div>
  );
};

export default Workspace;
