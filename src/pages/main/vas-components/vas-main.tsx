import VasSelfService from "./vas";
import Sidebar from "./vas-sidebar";

const VasMain = () => {
  return (
    <>
        <div className="flex font-lato">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 bg-gray-200 pt-2 pr-8 pl-4">
                <VasSelfService />
            </div>
        </div>
    </>
  )
}

export default VasMain;