import Dubbing from "../molecules/Dubbing";
import TextToSpeech from "../molecules/TextToSpeech";
import VoiceClone from "./VoiceClone";

const componentMap: Record<string, React.ReactNode> = {
  "Dubbing & LipSynch": <Dubbing />,
  "Text To Speech": <TextToSpeech />,
  "Voice Cloning": <VoiceClone />,
};

const Workspace = ({ selected }: { selected: string }) => {
  return (
    <div className="h-4/5 w-full bg-white px-2 flex items-center justify-center">
      {componentMap[selected] ?? <VoiceClone />}
    </div>
  );
};

export default Workspace;
