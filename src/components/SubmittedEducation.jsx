function SubmittedEducation({ deleteEducation, education, fillEduForm }) {
  if (education.length != 0) {
    return (
      <div className="flex flex-col items-center order-5 p-5 rounded-lg bg-slate-50 h-max">
        <h1 className="text-xl font-bold">Education</h1>

        {education.map((educationObject) => {
          return (
            <div
              className="grid grid-cols-3 place-items-center"
              key={educationObject.id}>
              <div className="">
                {educationObject.school} - {educationObject.degree}
              </div>
              <button
                className="p-1 mt-3 bg-gray-300 rounded-full"
                onClick={() => {
                  fillEduForm(educationObject.id);
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
    );
  }
}

export default SubmittedEducation;
