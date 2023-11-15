function WorkExperienceForm({ addExperience, experience, deleteExperience }) {
  const hasExperience = () => {
    if (experience.length < 1) {
      return <p>You have no work experience listed.</p>;
    }
  };
  return (
    <>
      <div>
        <form
          className="flex flex-col items-center mb-10 ml-10 rounded-lg bg-slate-50"
          onSubmit={addExperience}>
          <h1 className="text-xl font-bold">Work Experience Form</h1>
          <input
            className="w-40 mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="position"
            id="position"
            placeholder="Position"
          />
          <input
            className="w-40 mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="company"
            id="company"
            placeholder="Company"
          />
          <input
            className="w-40 mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="startDate"
            id="startDate"
            placeholder="Start Date"
          />
          <input
            className="w-40 mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="endDate"
            id="endDate"
            placeholder="End Date"
          />
          <textarea
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-lg w-80"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Description"></textarea>
          <button
            className="w-40 p-1 mt-3 bg-gray-300 rounded-full"
            type="submit">
            Add Experience
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center mr-10 rounded-lg bg-slate-50">
        <h1 className="text-xl font-bold">Work Experience</h1>
        {hasExperience()}

        {experience.map((experienceObject) => {
          return (
            <div
              className="grid grid-cols-2 place-items-center gap-x-4"
              key={experienceObject.id}>
              <div className="col-span-2">
                {experienceObject.company} - {experienceObject.position}
              </div>
              <button
                className="w-20 p-1 mt-3 bg-gray-300 rounded-full"
                onClick={(e) => {
                  e.currentTarget.parentNode.nextSibling[0].value =
                    experienceObject.position;
                  e.currentTarget.parentNode.nextSibling[1].value =
                    experienceObject.company;
                  e.currentTarget.parentNode.nextSibling[2].value =
                    experienceObject.startDate;
                  e.currentTarget.parentNode.nextSibling[3].value =
                    experienceObject.endDate;
                  e.currentTarget.parentNode.nextSibling[4].value =
                    experienceObject.description;
                  deleteExperience(experienceObject.id);
                }}>
                Edit
              </button>
              <button
                className="w-20 p-1 mt-3 bg-gray-300 rounded-full"
                onClick={() => deleteExperience(experienceObject.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkExperienceForm;
