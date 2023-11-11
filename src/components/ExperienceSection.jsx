function ExperienceSection({position, company, startDate, endDate, description}) {
    return (
        <section className="experience-section">
            <h1>Experience</h1>
            <div className="experience-container">
                <div className="position">{position}</div>
                <div className="company">{company}</div>
                <div className="start-date">{startDate}</div>
                <div className="end-date">{endDate}</div>
                <div className="description">{description}</div>
            </div>
        </section>
    )
}

export default ExperienceSection