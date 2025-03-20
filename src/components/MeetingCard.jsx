import React from "react";
import { CiTrash, CiStar } from "react-icons/ci";
import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addToImportant } from "@/redux/listSlice";
import { FaBookmark } from "react-icons/fa";
function MeetingCard({ title, time, word, handleDelete, id,key}) {
  let dispatch = useDispatch()
  let [deleteStatus, setDeleteStatus] = useState(false);
  let [isbookmark, setIsBookMark] = useState(false)
  function handleButton() {
    setDeleteStatus(true);
    handleDelete(id);
  }
  function handleImportant(){
    dispatch(addToImportant({title,time,word,key,id}))
  }
  function handleBookMark(){
      setIsBookMark(!isbookmark)
  }
  return (
    <>
      <div className="w-[265px] my-5 ml-56 border p-5 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 relative">
        <div className="flex gap-2">
          <h1 className="text-lg font-bold text-gray-800">{title}</h1>
          <button onClick={handleImportant} className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            <CiStar  className="text-lg" />
          </button>
        </div>
        <p className="text-neutral-500 text-sm mt-1">{word}</p>

        <div className="flex justify-between items-center mt-3">
          <p className="text-xs text-gray-400">{time}</p>
          <button
            onClick={handleButton}
            className="text-red-500 hover:text-red-700 transition-colors duration-300 flex items-center"
          >
            {deleteStatus ? <Loader /> : <CiTrash className="text-lg" />}
          </button>
        </div>

        <div className="absolute right-3 top-2">
          <button onClick={handleBookMark} className="text-yellow-500 hover:text-yellow-700 transition-colors duration-300">
            {isbookmark?<FaBookmark />:<CiBookmark className="text-lg" />}
          </button>
        </div>
      </div>
    </>
  );
}

export default MeetingCard;
