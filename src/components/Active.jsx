import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
function Active() {
  return (
    <>
      <div className="bg-gray-700 p-6">
        <Navigation></Navigation>
        <div className="flex justify-between w-1/4">
          <div className="bg-gray-800 px-6 pt-6 rounded-lg flex flex-col justify-between">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
export default Active;
