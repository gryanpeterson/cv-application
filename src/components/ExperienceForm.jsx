function ExperienceForm({ addExperience, experience, deleteExperience }) {
  return (
    <>
      <>
        {experience.map((experienceObject) => {
          return (
            <div
              className="experience-list-container"
              key={experienceObject.id}>
              <div className="experience-title">
                {experienceObject.company} - {experienceObject.position}
              </div>
              <button className="p-1 bg-gray-300 rounded-md">Edit</button>
              <button
                className="p-1 bg-gray-300 rounded-md"
                onClick={() => deleteExperience(experienceObject.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </>

      <form className="flex flex-col mb-10" onSubmit={addExperience}>
        <h1 className="text-xl font-bold">Experience Form</h1>
        <input
          className="w-40 border-2 border-black border-solid rounded-md"
          type="text"
          name="position"
          id="position"
          placeholder="Position"
        />
        <input
          className="w-40 border-2 border-black border-solid rounded-md"
          type="text"
          name="company"
          id="company"
          placeholder="Company"
        />
        <input
          className="w-40 border-2 border-black border-solid rounded-md"
          type="text"
          name="startDate"
          id="startDate"
          placeholder="Start Date"
        />
        <input
          className="w-40 border-2 border-black border-solid rounded-md"
          type="text"
          name="endDate"
          id="endDate"
          placeholder="End Date"
        />
        <textarea
          className="w-40 border-2 border-black border-solid rounded-md"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Description"></textarea>
        <button className="w-40 p-1 bg-gray-300 rounded-md" type="submit">
          Add Experience
        </button>
      </form>
    </>
  );
}

export default ExperienceForm;
