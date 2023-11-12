function ExperienceSection({experience}) {
    return (
        <section className="experience-section">
            {experience.map(object => {
                return (
                    <div className="experience-container">
                        <div className="position">{object.position}</div>
                        <div className="company">{object.company}</div>
                        <div className="start-date">{object.startDate}</div>
                        <div className="end-date">{object.endDate}</div>
                        <div className="description">{object.description}</div>
                    </div>
                )
            })}
        </section>
    )
}

export default ExperienceSection