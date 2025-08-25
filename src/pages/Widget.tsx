import Topbar from '../components/molecules/Topbar';
import Workspace from '../components/organisms/Workspace';

const Widget = () => {
  return (
    <div className="bg-slate-100 h-1/2 w-1/2 rounded-lg p-8 flex flex-col itemns-center justify-around">
      <Topbar />

      <Workspace />
    </div>
  );
};

export default Widget;
