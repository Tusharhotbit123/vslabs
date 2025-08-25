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

  const [labels, setLabels] = useState<Record<string, string>>({
    tts: "Text To Speech",
    story: "Tell A Story",
    custom: buttons[0] || "Option",
  });

  const renderButton = (key: string, options: string[], fullWidth = false) => (
    <div
      key={key}
      className={`relative ${fullWidth ? "w-full" : "w-1/2"} mx-2`}
    >
      <Button className="bg-black text-white font-semibold rounded-lg h-14 w-full flex items-center justify-between text-xl">
        {labels[key]}
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
            setLabels((prev) => ({ ...prev, [key]: value }));
            onSelect(value);
            setOpenDropdown(null);
          }}
        />
      )}
    </div>
  );

  const hasTTSProp = buttons.includes("Text To Speech");
  const isTTSSelected = labels.tts === "Text To Speech";

  let keys: string[] = [];
  let fullWidthKey: string | null = null;

  if (hasTTSProp) {
    if (isTTSSelected) {
      keys = ["tts", "story"];
    } else {
      keys = ["tts"];
      fullWidthKey = "tts";
    }
  } else {
    keys = ["custom"];
    fullWidthKey = "custom";
  }

  return (
    <div className="flex justify-around items-center relative w-full">
      {keys.map((key) =>
        key === "tts"
          ? renderButton(
              "tts",
              ["Text To Speech", "Dubbing & LipSynch", "Voice Cloning"],
              fullWidthKey === "tts"
            )
          : key === "story"
          ? renderButton("story", [
              "Tell A Story",
              "Introduce a Podcast",
              "Create a Video Voiceover",
            ])
          : renderButton("custom", ["Option 1", "Option 2", "Option 3"], true)
      )}
    </div>
  );
};

export default Topbar;
