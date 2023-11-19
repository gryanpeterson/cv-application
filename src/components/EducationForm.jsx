function EducationForm({ addEducation, deleteEducation, education }) {
  const hasEducation = () => {
    if (education.length < 1) {
      return <p>You have no education listed.</p>;
    }
  };
  return (
    <>
      <div className="order-4">
        <form
          className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
          onSubmit={addEducation}>
          <h1 className="text-xl font-bold">Education Form</h1>
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

      <div className="flex flex-col items-center order-5 p-5 rounded-lg bg-slate-50 h-max">
        <h1 className="text-xl font-bold">Education</h1>
        {hasEducation()}

        {education.map((educationObject) => {
          return (
            <div
              className="grid grid-cols-3 place-items-center"
              key={educationObject.id}>
              <div className="">
                {educationObject.school} - {educationObject.degree}
              </div>
              <button className="p-1 mt-3 bg-gray-300 rounded-full">
                Edit
              </button>
              <button
                className="p-1 mt-3 bg-gray-300 rounded-full"
                onClick={() => deleteEducation(educationObject.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EducationForm;
