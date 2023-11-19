import { useRef } from "react";

function WorkExperienceForm({ addExperience, experience, deleteExperience }) {
  const formRef = useRef(null);

  const fillExperienceForm = (id) => {
    for (let exp of experience) {
      if (exp.id === id) {
        formRef.current[0].value = exp.position;
        formRef.current[1].value = exp.company;
        formRef.current[2].value = exp.startDate;
        formRef.current[3].value = exp.endDate;
        formRef.current[4].value = exp.location;
        formRef.current[5].value = exp.description;
      }
    }
  };

  const hasExperience = () => {
    if (experience.length < 1) {
      return <p>You have no work experience listed.</p>;
    }
  };
  return (
    <>
      <div className="order-2">
        <form
          ref={formRef}
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
              className="grid grid-cols-3 mb-5 place-items-center gap-x-4"
              key={experienceObject.id}>
              <div className="">
                {experienceObject.company} - {experienceObject.position}
              </div>
              <button
                className="p-1 px-2 mt-3 bg-gray-300 rounded-full"
                onClick={() => fillExperienceForm(experienceObject.id)}>
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
