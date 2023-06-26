import BrandAdvert from "./brand-advert";
import Sidebar from "./brand-advert-sidebar";

const BrandAdvertMain = () => {
  return (
    <>
        <div className="flex font-lato">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 bg-gray-200 pt-2 pr-8 pl-4">
                <BrandAdvert />
            </div>
        </div>
    </>
  )
}

export default BrandAdvertMain;