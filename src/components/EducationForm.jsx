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
              className="grid grid-cols-2 place-items-center gap-x-4"
              key={educationObject.id}>
              <div className="col-span-2">
                {educationObject.school} - {educationObject.degree}
              </div>
              <button
                className="p-1 mt-3 bg-gray-300 rounded-full"
                onClick={(e) => {
                  e.currentTarget.parentNode.nextSibling[0].value =
                    educationObject.school;
                  e.currentTarget.parentNode.nextSibling[1].value =
                    educationObject.degree;
                  e.currentTarget.parentNode.nextSibling[2].value =
                    educationObject.startDate;
                  e.currentTarget.parentNode.nextSibling[3].value =
                    educationObject.endDate;
                  e.currentTarget.parentNode.nextSibling[4].value =
                    educationObject.location;
                  deleteEducation(educationObject.id);
                }}>
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
