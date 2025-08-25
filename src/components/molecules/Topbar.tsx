import { Button } from '../atoms/Button';
import { DownArrow } from '../../assets/DownArrow';

const Topbar = () => {
  return (
    <div className="flex justify-around items-center">
      <Button className="bg-black text-white font-semibold rounded-lg h-14 w-1/2 flex items-center justify-around text-xl mx-2">
        Text To Speech
        <DownArrow className="bg-white h-8 w-8 text-black text-sm rounded-lg" />
      </Button>
      <Button className="bg-black text-white font-semibold rounded-lg h-14 w-1/2 flex items-center justify-around text-xl mx-2">
        Tell A Story
        <DownArrow className="bg-white h-8 w-8 text-black text-sm rounded-lg" />
      </Button>
    </div>
  );
};

export default Topbar;
