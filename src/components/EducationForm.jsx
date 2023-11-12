function EducationForm({addEducation}) {
    return (
        <form onSubmit={addEducation}>
            <input type="text" name="school" id="school" placeholder="School Name" />
            <input type="text" name="degree" id="degree" placeholder="Degree Name" />
            <input type="text" name="start-date" id="start-date" placeholder="Start Date" />
            <input type="text" name="end-date" id="end-date" placeholder="End Date" />
            <input type="text" name="location" id="location" placeholder="Location" />
            <button type="submit">Add Education</button>

        </form>
    )

}

export default EducationForm