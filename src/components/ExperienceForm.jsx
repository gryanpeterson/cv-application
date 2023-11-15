function WorkExperienceForm({ addExperience, experience, deleteExperience }) {
  const hasExperience = () => {
    if (experience.length < 1) {
      return <p>You have no work experience listed.</p>;
    }
  };
  return (
    <>
      <div className="order-2">
        <form
          className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
          onSubmit={addExperience}>
          <h1 className="text-xl font-bold">Work Experience Form</h1>
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="position"
            id="position"
            placeholder="Position"
          />
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="company"
            id="company"
            placeholder="Company"
          />
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="startDate"
            id="startDate"
            placeholder="Start Date"
          />
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="endDate"
            id="endDate"
            placeholder="End Date"
          />
          <input
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          />
          <textarea
            className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-lg"
            name=""
            id=""
            cols="20"
            rows="5"
            placeholder="Description"></textarea>
          <button className="p-1 mt-3 bg-gray-300 rounded-full" type="submit">
            Add Experience
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center order-3 p-5 mb-5 rounded-lg bg-slate-50 h-max">
        <h1 className="text-xl font-bold">Work Experience</h1>
        {hasExperience()}

        {experience.map((experienceObject) => {
          return (
            <div
              className="grid grid-cols-2 mb-5 place-items-center gap-x-4"
              key={experienceObject.id}>
              <div className="col-span-2">
                {experienceObject.company} - {experienceObject.position}
              </div>
              <button
                className="p-1 px-2 mt-3 bg-gray-300 rounded-full"
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
                className="p-1 px-2 mt-3 bg-gray-300 rounded-full"
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
