function ExperienceForm({addExperience}) {
    return (
        <form onSubmit={addExperience}>
            <h1>Experience</h1>
            <input type="text" name="position" id="position" placeholder="Position" />
            <input type="text" name="company" id="company" placeholder="Company" />
            <input type="text" name="startDate" id="startDate" placeholder="Start Date" />
            <input type="text" name="endDate" id="endDate" placeholder="End Date" />
            <textarea name="" id="" cols="30" rows="5" placeholder="Description"></textarea>
            <button type="submit">Add Experience</button>
            
        </form>
    )


}

export default ExperienceForm