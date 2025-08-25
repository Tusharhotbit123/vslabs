import { RightArrow } from "../../assets/RightArrow";
import { Button } from "../atoms/Button";
import { Image } from "../atoms/Image";

type VoiceBoxProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  className?: string;
};

const VoiceBox = ({
  title,
  subtitle = "original",
  imageSrc,
  className = "",
}: VoiceBoxProps) => {
  return (
    <div
      className={`flex items-center gap-4 p-4  rounded-2xl shadow-sm w-full m-2 ${className}`}
    >
      <Image src={imageSrc} alt={title} className="w-16 h-16 rounded-full" />

      <div className="flex flex-col flex-1">
        <h3 className="text-black font-semibold text-lg leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <Button className="bg-black rounded-full p-2 hover:bg-gray-800">
        <RightArrow className="h-5 w-5 text-white" />
      </Button>
    </div>
  );
};

export default VoiceBox;
