function SubmittedExperience({ experience, deleteExperience, fillExpForm }) {
  if (experience.length != 0) {
    return (
      <div className="flex flex-col items-center order-3 p-5 mb-5 rounded-lg bg-slate-50 h-max">
        <h1 className="text-xl font-bold">Work Experience</h1>

        {experience.map((experienceObject) => {
          return (
            <div
              className="grid grid-cols-3 mb-5 place-items-center gap-x-4"
              key={experienceObject.id}>
              <div className="">
                {experienceObject.company} - {experienceObject.position}
              </div>
              <button
                className="p-1 px-2 mt-3 bg-gray-300 rounded-full"
                onClick={() => {
                  fillExpForm(experienceObject.id);
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
    );
  }
}

export default SubmittedExperience;
