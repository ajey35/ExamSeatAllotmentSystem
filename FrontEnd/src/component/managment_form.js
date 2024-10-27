export default function Managment_form() {
  return (
    <>
      <div className="w-full flex justify-center mt-6 px-4">
  <div className="sm:max-w-lg max-w-full bg-white overflow-hidden rounded-2xl text-black shadow-lg">
    <form className="flex flex-col p-6 gap-6">
      <span className="text-lg text-gray-600 font-bold">
        Enter the Details to Allot Seats
      </span>
      
      <div className="bg-white rounded-lg p-4 shadow-md space-y-4">
        <select className="text-gray-500 font-semibold rounded-md p-3 w-full border border-gray-200 focus:ring-2 focus:ring-blue-500">
          <option value="subject1">Subject Code</option>
          <option value="BECS301">BECS301</option>
          <option value="BECS302">BECS302</option>
          <option value="BECS303">BECS303</option>
          <option value="BECS304">BECS304</option>
          <option value="BECS305">BECS305</option>
        </select>

        <input
          type="date"
          className="w-full h-12 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          className="w-full h-12 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Number of Examination Rooms Available"
        />

        <input
          type="text"
          className="w-full h-12 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Number of Students Per Room"
        />

        <select className="text-gray-500 font-semibold rounded-md p-3 w-full border border-gray-200 focus:ring-2 focus:ring-blue-500">
          <option value="Time Slot">Time Slot</option>
          <option value="1">Morning</option>
          <option value="2">Evening</option>
        </select>
      </div>

      <button className="bg-blue-600 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-700 transition-colors">
        Allot the Seats
      </button>
    </form>
  </div>
</div>

    </>
  );
}
