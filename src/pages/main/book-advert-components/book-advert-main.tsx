import Sidebar from "./book-advert-sidebar";
import BookAdverts from "./book-adverts";

const BookAdvertMain = () => {
  return (
    <>
        <div className="flex font-lato">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 bg-gray-200 pt-2 pr-8 pl-4">
                <BookAdverts />
            </div>
        </div>
    </>
  )
}

export default BookAdvertMain;