import Dubbing from '../molecules/Dubbing';
import VoiceClone from './VoiceClone';

const Workspace = ({ selected }: { selected: string }) => {
  return (
    <div className="h-4/5 w-full bg-white px-2 flex items-center justify-center">
      {selected === 'Dubbing & LipSynch' ? <Dubbing /> : <VoiceClone />}
    </div>
  );
};

export default Workspace;
