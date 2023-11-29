function EducationForm({
  addEducation,
  editEducation,
  editID,
  isEditing,
  eduFormData,
  onChangeSchoolEdu,
  onChangeDegreeEdu,
  onChangeStartDateEdu,
  onChangeEndDateEdu,
  onChangeLocationEdu,
}) {
  if (isEditing === false)
    return (
      <>
        <div className="order-4">
          <form
            className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
            onSubmit={addEducation}>
            <h1 className="text-xl font-bold">Add Education</h1>
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="school"
              id="school"
              placeholder="School Name"
              value={eduFormData.school}
              onChange={onChangeSchoolEdu}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="degree"
              id="degree"
              placeholder="Degree Name"
              value={eduFormData.degree}
              onChange={onChangeDegreeEdu}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="start-date"
              id="start-date"
              placeholder="Start Date"
              value={eduFormData.startDate}
              onChange={onChangeStartDateEdu}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="end-date"
              id="end-date"
              placeholder="End Date"
              value={eduFormData.endDate}
              onChange={onChangeEndDateEdu}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              value={eduFormData.location}
              onChange={onChangeLocationEdu}
            />
            <button className="p-1 mt-3 bg-gray-300 rounded-full" type="submit">
              Add Education
            </button>
          </form>
        </div>
      </>
    );
  else {
    return (
      <>
        <div className="order-4">
          <form
            className="flex flex-col items-center p-5 mb-5 rounded-lg bg-slate-50"
            onSubmit={(e) => editEducation(e, editID)}>
            <h1 className="text-xl font-bold">Edit Education</h1>
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="school"
              id="school"
              placeholder="School Name"
              value={eduFormData.school}
              onChange={onChangeSchoolEdu}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="degree"
              id="degree"
              placeholder="Degree Name"
              value={eduFormData.degree}
              onChange={onChangeDegreeEdu}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="start-date"
              id="start-date"
              placeholder="Start Date"
              value={eduFormData.startDate}
              onChange={onChangeStartDateEdu}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="end-date"
              id="end-date"
              placeholder="End Date"
              value={eduFormData.endDate}
              onChange={onChangeEndDateEdu}
            />
            <input
              className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              value={eduFormData.location}
              onChange={onChangeLocationEdu}
            />
            <button className="p-1 mt-3 bg-gray-300 rounded-full" type="submit">
              Edit Education
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default EducationForm;
