function ExperienceForm({addExperience, experience}) {

    return (

        <>
            <>
                {experience.map(experienceObject => {
                    return (
                        <div className="experience-list-container" key={experienceObject.id}>
                            <div className="experience-title">{experienceObject.company} - {experienceObject.position}</div>
                            <button className="p-1 bg-gray-300 rounded-md">Edit</button>
                            <button className="p-1 bg-gray-300 rounded-md" onClick={() => console.log('You Clicked The Delete Button')}>Delete</button>
                        </div>
                    )
                })}
            </>    
            

            <form className="flex flex-col mb-10" onSubmit={addExperience}>
                <h1 className="text-xl font-bold">Experience Form</h1>
                <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="position" id="position" placeholder="Position" />
                <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="company" id="company" placeholder="Company" />
                <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="startDate" id="startDate" placeholder="Start Date" />
                <input className="border-2 border-solid border-black rounded-md w-40" type="text" name="endDate" id="endDate" placeholder="End Date" />
                <textarea className="border-2 border-solid border-black rounded-md w-40" name="" id="" cols="30" rows="5" placeholder="Description"></textarea>
                <button className="p-1 bg-gray-300 rounded-md w-40" type="submit">Add Experience</button>
                
            </form>

        </>
    )


}

export default ExperienceForm