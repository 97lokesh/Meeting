// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AiFillDelete } from "react-icons/ai";
// import { removeFromImportant } from "@/redux/ListSlice";

// function Important() {
//   const { items } = useSelector((state) => state.list);
//   const dispatch = useDispatch()
//   // function handleDeleteImportant(){
//   //   dispatch(removeFromImportant(item.id))
//   // }
//   return (
//     <>
//       <div className="w-[400px] mt-24 mx-auto ">
//         <h1 className="text-xl font-black">
//           Here are your crucial meetings for the day—make sure you're prepared!
//         </h1>
//         {items.map((item) => (
//           <div className="w-[265px] my-5  border p-5 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 relative">
//             <div className="flex justify-between items-center">
//               <h1 className="text-lg font-bold text-gray-800">{item.title}</h1>
//               <button onClick={()=>dispatch(removeFromImportant(item.id))} className="text-red-500 hover:text-red-700"><AiFillDelete /></button>
//             </div>
//             <p className="text-neutral-500 text-sm mt-1">{item.word}</p>
//             <p className="text-xs mt-1 text-gray-600">{item.time}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Important;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { removeFromImportant } from "@/redux/listSlice";

function Important () {
  const { items } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full max-w-3xl mx-auto mt-24 px-6">
        {/* Page Heading */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Your Important Meetings for the Day
        </h1>

        {/* Display Important Meetings */}
        <div className="space-y-8">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300 relative"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  {/* Delete Button */}
                  <button
                    onClick={() => dispatch(removeFromImportant(item.id))}
                    className="text-red-500 hover:text-red-700 transition-colors duration-300"
                  >
                    <AiFillDelete size={20} />
                  </button>
                </div>

                <p className="text-gray-600 text-sm">{item.word}</p>
                <p className="text-xs text-gray-500 mt-2">{item.time}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No important meetings to show.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Important;



