function ExperienceSection({experience}) {
    return (
        <section className="experience-section">
            <h1>Experience</h1>
            {experience.map(experienceObject => {
                return (
                    <div className="experience-container" key={experienceObject.id}>
                        <div className="position">{experienceObject.position}</div>
                        <div className="company">{experienceObject.company}</div>
                        <div className="start-date">{experienceObject.startDate}</div>
                        <div className="end-date">{experienceObject.endDate}</div>
                        <div className="description">{experienceObject.description}</div>
                    </div>
                )
            })}
        </section>
    )
}

export default ExperienceSection