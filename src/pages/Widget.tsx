import { useState } from "react";
import Topbar from "../components/molecules/Topbar";
import Workspace from "../components/organisms/Workspace";

const Widget = () => {
  const [selected, setSelected] = useState("Text To Speech");
  return (
    <div className="bg-slate-100 h-1/2 w-1/2 rounded-lg p-8 flex flex-col itemns-center justify-around">
      <Topbar buttons={["Text To Speech"]} onSelect={setSelected} />
      <Workspace selected={selected} />
    </div>
  );
};

export default Widget;
