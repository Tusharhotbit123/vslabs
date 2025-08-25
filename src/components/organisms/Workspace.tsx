import Dubbing from "../molecules/Dubbing";
import TextToSpeech from "../molecules/TextToSpeech";
import VoiceClone from "./VoiceClone";

const Workspace = ({ selected }: { selected: string }) => {
  return (
    <div className="h-4/5 w-full bg-white px-2 flex items-center justify-center">
      {selected === "Dubbing & LipSynch" ? (
        <Dubbing />
      ) : selected === "Text To Speech" ? (
        <TextToSpeech />
      ) : (
        <VoiceClone />
      )}
    </div>
  );
};

export default Workspace;
