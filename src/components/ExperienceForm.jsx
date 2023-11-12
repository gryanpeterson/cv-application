function ExperienceForm({addExperience, experience}) {

    const handleClick = (e) => {
        const target = e.target.textContent;
        console.log(`You Clicked On ${target}`)
    }
    return (

        <>
            <div className="experience-list">
                {experience.map(experienceObject => {
                    return (
                        <li key={experienceObject.id} onClick={handleClick}>{experienceObject.company}</li>
                    )
                })}
            </div>



            <form onSubmit={addExperience}>
                <h1>Experience</h1>
                <input type="text" name="position" id="position" placeholder="Position" />
                <input type="text" name="company" id="company" placeholder="Company" />
                <input type="text" name="startDate" id="startDate" placeholder="Start Date" />
                <input type="text" name="endDate" id="endDate" placeholder="End Date" />
                <textarea name="" id="" cols="30" rows="5" placeholder="Description"></textarea>
                <button type="submit">Add Experience</button>
                
            </form>

        </>
    )


}

export default ExperienceForm