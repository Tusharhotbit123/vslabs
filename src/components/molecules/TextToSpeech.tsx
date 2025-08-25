import { RightArrow } from "../../assets/RightArrow";
import { Button } from "../atoms/Button";

const TextToSpeech = () => {
  return (
    <div className="flex flex-col h-full justify-between items-start p-3">
      <p className="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nostrum
        tempora saepe consequuntur maxime unde, aut labore esse! Nulla illo
        ullam odit voluptates voluptas nisi optio porro cupiditate possimus,
        quae adipisci cum repellat, sit ipsa recusandae harum! Vel id asperiores
        fuga obcaecati at laboriosam deleniti commodi, laudantium eius quis
        quia.
      </p>
      <div className="w-full flex justify-end">
        <Button>
          Play <RightArrow />
        </Button>
      </div>
    </div>
  );
};

export default TextToSpeech;
