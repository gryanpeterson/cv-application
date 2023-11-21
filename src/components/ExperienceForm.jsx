import { useRef } from "react";

function WorkExperienceForm({ saveExperience, isEditing }) {
  const formRef = useRef(null);
  const expIdRef = useRef(null);

  if (isEditing === false) {
    return (
      <>
        <div className="order-2">
          <form
            ref={formRef}
            className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
            onSubmit={(e) => saveExperience(e)}>
            <h1 className="text-xl font-bold">Add Experience</h1>
            <input
              ref={expIdRef}
              className="hidden"
              type="text"
              placeholder="Exp ID"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Position"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Company"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Start Date"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="End Date"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Location"
            />
            <textarea
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-lg"
              cols="20"
              rows="5"
              placeholder="Description"></textarea>
            <button className="p-1 mt-3 bg-gray-300 rounded-full" type="submit">
              Add Experience
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="order-2">
          <form
            ref={formRef}
            className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
            onSubmit={(e) => addExperience(e)}>
            <h1 className="text-xl font-bold">Edit Experience</h1>
            <input
              ref={expIdRef}
              className="hidden"
              type="text"
              placeholder="Exp ID"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Position"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Company"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Start Date"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="End Date"
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Location"
            />
            <textarea
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-lg"
              cols="20"
              rows="5"
              placeholder="Description"></textarea>
            <button className="p-1 mt-3 bg-gray-300 rounded-full" type="submit">
              Save Experience
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default WorkExperienceForm;
