function EducationForm({addEducation}) {
    return (
        
        <form className="flex flex-col" onSubmit={addEducation}>
            <h1 className="text-xl font-bold">Education Form</h1>
            <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="school" id="school" placeholder="School Name" />
            <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="degree" id="degree" placeholder="Degree Name" />
            <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="start-date" id="start-date" placeholder="Start Date" />
            <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="end-date" id="end-date" placeholder="End Date" />
            <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="location" id="location" placeholder="Location" />
            <button className="p-1 bg-gray-300 rounded-md w-40" type="submit">Add Education</button>

        </form>
    )

}

export default EducationForm