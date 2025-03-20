// import MeetingCard from "../components/MeetingCard";

// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// const apiUrl =
//   "https://docs-95fb8-default-rtdb.asia-southeast1.firebasedatabase.app/";

// function Meeting() {
//   let [meetings, setMeetings] = useState([]);
//   let meetingInput = useRef(null);
//   let dateInput = useRef(null);
//   let descInput = useRef(null);
//   function handleSubmit() {
//     let meeting = meetingInput.current.value;
//     let date = dateInput.current.value;
//     let desc = descInput.current.value;
//     axios
//       .post(`${apiUrl}meetings.json`, {
//         title: meeting,
//         word: desc,
//         time: date,
//       })
//       .then(() => {
//         console.log(meeting, desc, date);
//         fetchMeetings();
//       });
//   }
//   function fetchMeetings() {
//     axios.get(`${apiUrl}meetings.json`).then((meetings) => {
//       let tempMeetings = [];
//       for (let key in meetings.data) {
//         let meeting = {
//           id: key,
//           ...meetings.data[key],
//         };
//         tempMeetings.push(meeting);
//       }
//       setMeetings(tempMeetings);
//     });
//   }
//   useEffect(() => {
//     fetchMeetings();
//   }, []);

//   function handleDelete(id) {
//     axios.delete(`${apiUrl}meetings/${id}.json`).then(() => {
//       fetchMeetings();
//     });
//   }
  
//   return (
//     <>
//       <div className="flex  justify-center items-center gap-4 mt-32 ">
//         <h1 className="text-xl font-black">Add your Meetings Here!</h1>
//         <Sheet>
//           <SheetTrigger asChild>
//             <button className="cursor-pointer bg-black text-white px-3 py-2 rounded-lg">
//               Add Meeting
//             </button>
//           </SheetTrigger>
//           <SheetContent>
//             <SheetHeader>
//               <SheetTitle>Add Meetings</SheetTitle>
//               <SheetDescription>Add your upcoming meetings here to stay organized and on track!</SheetDescription>
//             </SheetHeader>

//             <div className="p-4">
//               <div className="grid gap-2 py-2">
//                 <div className="grid grid-cols-4 items-center gap-2">
//                   <Label htmlFor="name" className="text-right">
//                     Meeting
//                   </Label>
//                   <input
//                     ref={meetingInput}
//                     placeholder="add meetings"
//                     className="col-span-3 border px-3 py-2 rounded-lg"
//                   />
//                 </div>
//               </div>

//               <div className="grid gap-4 py-2">
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="Description" className="text-right">
//                     Description
//                   </Label>
//                   <input
//                     ref={descInput}
//                     placeholder="Mark your meetings"
//                     className="col-span-3 border px-3 py-2 rounded-lg"
//                   />
//                 </div>
//               </div>

//               <div className="grid gap-4 py-2">
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="username" className="text-right">
//                     Date
//                   </Label>
//                   <input
//                     ref={dateInput}
//                     placeholder="Date"
//                     type="date"
//                     className="col-span-3 border px-3 py-2 rounded-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <button className="text-white w-[56px] ml-4 bg-black px-3 py-2 rounded-lg" onClick={handleSubmit}>Add</button>
//           </SheetContent>
//         </Sheet>
//       </div>
//       <div className="w-[800px] mx-auto mt-12">
//         {meetings.map((meeting) => (
//           <MeetingCard
//             title={meeting.title}
//             word={meeting.word}
//             time={meeting.time}
//             key={meeting.id}
//             id={meeting.id}
//             handleDelete={handleDelete}
            
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Meeting;

import MeetingCard from "../components/MeetingCard";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const apiUrl =
  "https://docs-95fb8-default-rtdb.asia-southeast1.firebasedatabase.app/";

function Meeting() {
  let [meetings, setMeetings] = useState([]);
  let meetingInput = useRef(null);
  let dateInput = useRef(null);
  let descInput = useRef(null);

  function handleSubmit() {
    let meeting = meetingInput.current.value;
    let date = dateInput.current.value;
    let desc = descInput.current.value;
    axios
      .post(`${apiUrl}meetings.json`, {
        title: meeting,
        word: desc,
        time: date,
      })
      .then(() => {
        console.log(meeting, desc, date);
        fetchMeetings();
      });
  }

  function fetchMeetings() {
    axios.get(`${apiUrl}meetings.json`).then((meetings) => {
      let tempMeetings = [];
      for (let key in meetings.data) {
        let meeting = {
          id: key,
          ...meetings.data[key],
        };
        tempMeetings.push(meeting);
      }
      setMeetings(tempMeetings);
    });
  }

  useEffect(() => {
    fetchMeetings();
  }, []);

  function handleDelete(id) {
    axios.delete(`${apiUrl}meetings/${id}.json`).then(() => {
      fetchMeetings();
    });
  }

  return (
    <>
      {/* Header */}
      <div className="w-full max-w-3xl mx-auto mt-12 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Add Your Meetings Here!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay organized and keep track of all your important meetings.
        </p>
      </div>

      {/* Add Meeting Button */}
      <div className="flex justify-center mb-12">
        <Sheet>
          <SheetTrigger asChild>
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
              Add Meeting
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Your Meeting</SheetTitle>
              <SheetDescription>
                Add upcoming meetings here to stay organized and on track.
              </SheetDescription>
            </SheetHeader>

            <div className="p-6">
              {/* Meeting Title Input */}
              <div className="mb-4">
                <Label htmlFor="name">Meeting Title</Label>
                <input
                  ref={meetingInput}
                  placeholder="Add meeting title"
                  className="w-full border px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Meeting Description Input */}
              <div className="mb-4">
                <Label htmlFor="Description">Description</Label>
                <input
                  ref={descInput}
                  placeholder="Add a short description"
                  className="w-full border px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Date Input */}
              <div className="mb-6">
                <Label htmlFor="date">Date</Label>
                <input
                  ref={dateInput}
                  type="date"
                  className="w-full border px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Add Meeting
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Meetings Display */}
      <div className="w-full max-w-3xl mx-auto mt-12">
        {meetings.map((meeting) => (
          <MeetingCard
            title={meeting.title}
            word={meeting.word}
            time={meeting.time}
            key={meeting.id}
            id={meeting.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default Meeting;
