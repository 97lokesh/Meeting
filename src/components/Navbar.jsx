import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const {items} = useSelector((state)=>state.list)
  const itemsCount = items.length
  return (
    <>
      <div className="border-b px-44 py-3">
        <div className="flex justify-between">
          <Link to='/' className="text-2xl font-black">Locade</Link>
          <div className="flex gap-4 items-center">
            <Link to='/important'>Important - {itemsCount}</Link>
            <Link to='/meeting'>Meeting </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
