// import { useState } from "react";
// import { Button } from "../atoms/Button";
// import { DownArrow } from "../../assets/DownArrow";

// const Dropdown = ({ options }: { options: string[] }) => {
//   return (
//     <div className="absolute right-0 mt-2 w-3/4 bg-white border rounded-lg shadow-lg z-10">
//       {options.map((opt, i) => (
//         <div
//           key={i}
//           className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//           onClick={() => alert(opt)}
//         >
//           {opt}
//         </div>
//       ))}
//     </div>
//   );
// };

// const Topbar = () => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   return (
//     <div className="flex justify-around items-center relative">
//       <div className="relative w-1/2 mx-2">
//         <Button className="bg-black text-white font-semibold rounded-lg h-14 w-full flex items-center justify-between text-xl">
//           Text To Speech
//           <DownArrow
//             className="bg-white h-8 w-8 text-black text-sm rounded-lg cursor-pointer"
//             onClick={(e: { stopPropagation: () => void }) => {
//               e.stopPropagation();
//               setOpenDropdown(openDropdown === "tts" ? null : "tts");
//             }}
//           />
//         </Button>
//         {openDropdown === "tts" && (
//           <Dropdown options={["English", "Hindi", "French"]} />
//         )}
//       </div>

//       <div className="relative w-1/2 mx-2">
//         <Button className="bg-black text-white font-semibold rounded-lg h-14 w-full flex items-center justify-between text-xl">
//           Tell A Story
//           <DownArrow
//             className="bg-white h-8 w-8 text-black text-sm rounded-lg cursor-pointer"
//             onClick={(e: { stopPropagation: () => void }) => {
//               e.stopPropagation();
//               setOpenDropdown(openDropdown === "story" ? null : "story");
//             }}
//           />
//         </Button>
//         {openDropdown === "story" && (
//           <Dropdown options={["Adventure", "Comedy", "Sci-Fi"]} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import { useState } from "react";
import { Button } from "../atoms/Button";
import { DownArrow } from "../../assets/DownArrow";

const Dropdown = ({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (value: string) => void;
}) => {
  return (
    <div className="absolute right-0 mt-2 w-3/4 bg-white border rounded-lg shadow-lg z-10">
      {options.map((opt, i) => (
        <div
          key={i}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelect(opt)}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};

type TopbarProps = {
  buttons: string[];
  onSelect: (value: string) => void;
};

const Topbar = ({ buttons, onSelect }: TopbarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const renderButton = (label: string, key: string, options: string[]) => (
    <div
      key={key}
      className={`relative ${buttons.length === 1 ? "w-full" : "w-1/2"} mx-2`}
    >
      <Button className="bg-black text-white font-semibold rounded-lg h-14 w-full flex items-center justify-between text-xl">
        {label}
        <DownArrow
          className="bg-white h-8 w-8 text-black text-sm rounded-lg cursor-pointer"
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === key ? null : key);
          }}
        />
      </Button>
      {openDropdown === key && (
        <Dropdown
          options={options}
          onSelect={(value) => {
            onSelect(value);
            setOpenDropdown(null);
          }}
        />
      )}
    </div>
  );

  const finalButtons = buttons.includes("Text To Speech")
    ? ["Text To Speech", "Tell A Story"]
    : buttons;

  return (
    <div className="flex justify-around items-center relative w-full">
      {finalButtons.map((btn) =>
        btn === "Text To Speech"
          ? renderButton("Text To Speech", "tts", [
              "Text to Speech",
              "Dubbing & LipSynch",
              "Voice Cloning",
            ])
          : btn === "Tell A Story"
          ? renderButton("Tell A Story", "story", [
              "Tell A Story",
              "Introduce a Podcast",
              "Create a Video Voiceover",
            ])
          : renderButton(btn, "custom", ["Option 1", "Option 2", "Option 3"])
      )}
    </div>
  );
};

export default Topbar;
