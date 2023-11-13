function EducationForm({ addEducation }) {
  return (
    <form className="flex flex-col" onSubmit={addEducation}>
      <h1 className="text-xl font-bold">Education Form</h1>
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="text"
        name="school"
        id="school"
        placeholder="School Name"
      />
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="text"
        name="degree"
        id="degree"
        placeholder="Degree Name"
      />
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="text"
        name="start-date"
        id="start-date"
        placeholder="Start Date"
      />
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="text"
        name="end-date"
        id="end-date"
        placeholder="End Date"
      />
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="text"
        name="location"
        id="location"
        placeholder="Location"
      />
      <button className="w-40 p-1 bg-gray-300 rounded-md" type="submit">
        Add Education
      </button>
    </form>
  );
}

export default EducationForm;
