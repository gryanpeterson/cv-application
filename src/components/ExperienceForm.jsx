function WorkExperienceForm({
  addExperience,
  editExperience,
  editID,
  isEditing,
  expFormData,
  onChangePositionExp,
  onChangeCompanyExp,
  onChangeStartDateExp,
  onChangeEndDateExp,
  onChangeLocationExp,
  onChangeDescriptionExp,
}) {
  if (isEditing === false) {
    return (
      <>
        <div className="order-2">
          <form
            className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
            onSubmit={(e) => addExperience(e)}>
            <h1 className="text-xl font-bold">Add Experience</h1>
            <input className="hidden" type="text" placeholder="Exp ID" />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Position"
              value={expFormData.position}
              onChange={onChangePositionExp}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Company"
              value={expFormData.company}
              onChange={onChangeCompanyExp}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Start Date"
              value={expFormData.startDate}
              onChange={onChangeStartDateExp}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="End Date"
              value={expFormData.endDate}
              onChange={onChangeEndDateExp}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Location"
              value={expFormData.location}
              onChange={onChangeLocationExp}
            />
            <textarea
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-lg"
              cols="20"
              rows="5"
              placeholder="Description"
              value={expFormData.description}
              onChange={onChangeDescriptionExp}></textarea>
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
            className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
            onSubmit={(e) => editExperience(e, editID)}>
            <h1 className="text-xl font-bold">Edit Experience</h1>
            <input className="hidden" type="text" placeholder="Exp ID" />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Position"
              value={expFormData.position}
              onChange={onChangePositionExp}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Company"
              value={expFormData.company}
              onChange={onChangeCompanyExp}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Start Date"
              value={expFormData.startDate}
              onChange={onChangeStartDateExp}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="End Date"
              value={expFormData.endDate}
              onChange={onChangeEndDateExp}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              placeholder="Location"
              value={expFormData.location}
              onChange={onChangeLocationExp}
            />
            <textarea
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-lg"
              cols="20"
              rows="5"
              placeholder="Description"
              value={expFormData.description}
              onChange={onChangeDescriptionExp}></textarea>
            <button className="p-1 mt-3 bg-gray-300 rounded-full" type="submit">
              Edit Experience
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default WorkExperienceForm;
