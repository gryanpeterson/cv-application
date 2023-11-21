function EducationForm({ addEducation, deleteEducation, education }) {
  return (
    <>
      <div className="order-4">
        <form
          className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
          onSubmit={addEducation}>
          <h1 className="text-xl font-bold">Add Education</h1>
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="school"
            id="school"
            placeholder="School Name"
          />
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="degree"
            id="degree"
            placeholder="Degree Name"
          />
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="start-date"
            id="start-date"
            placeholder="Start Date"
          />
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="end-date"
            id="end-date"
            placeholder="End Date"
          />
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          />
          <button className="p-1 mt-3 bg-gray-300 rounded-full" type="submit">
            Add Education
          </button>
        </form>
      </div>
    </>
  );
}

export default EducationForm;
