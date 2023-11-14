function EducationForm({ addEducation, deleteEducation, education }) {
  return (
    <>
      {education.map((educationObject) => {
        return (
          <div className="education-list-container" key={educationObject.id}>
            <div className="education-title">
              {educationObject.school} - {educationObject.degree}
            </div>
            <button
              className="p-1 bg-gray-300 rounded-md"
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
              className="p-1 bg-gray-300 rounded-md"
              onClick={() => deleteEducation(educationObject.id)}>
              Delete
            </button>
          </div>
        );
      })}

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
    </>
  );
}

export default EducationForm;
