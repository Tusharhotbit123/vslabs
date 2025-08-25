import lolita from '../../assets/images/lolita.png';
import { RightArrow } from '../../assets/RightArrow';
import { Button } from '../atoms/Button';
import { Image } from '../atoms/Image';

const VoiceBox = () => {
  return (
    <div className="h-1/4 w-1/4 bg-slate-100 flex items-center justify-around rounded-xl">
      <Image src={lolita} alt="image" className="h-1/2 w-1/4" />
      <div className="flex flex-col items-center">
        <h3 className="text-black font-semibold text-2xl">Lolita</h3>
        <p className="text-sm text-gray-400">original</p>
      </div>
      <div>
        <Button className="bg-black rounded-xl relative top-6 left-2">
          <RightArrow className="h-6 w-6 bg-white text-black rounded-full" />
        </Button>
      </div>
    </div>
  );
};

export default VoiceBox;
