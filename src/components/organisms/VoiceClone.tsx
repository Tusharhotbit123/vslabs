import { voiceBoxData, voiceBoxClone } from '../../utils/constants';
import VoiceBox from '../molecules/VoiceBox';

const VoiceClone = () => {
  return (
    <div className="flex items-center justify-center    mx-4">
      <div className=" w-full  m-4">
        {voiceBoxData.map((data, index) => {
          return <VoiceBox key={index} imageSrc={data.img} title={data.name} className='bg-slate-200' />;
        })}
      </div>
      <div className='w-full  h-full m-4'>
        {voiceBoxClone.map((data, index) => {
          return <VoiceBox key={index} imageSrc={data.img} title={data.name} className='bg-green-200' subtitle='clone' />;
        })}
      </div>
    </div>
  );
};

export default VoiceClone;
