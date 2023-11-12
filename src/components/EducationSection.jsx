function EducationSection({education}) {
    return (
        <section className="education-section">
            <h1>Education</h1>
            {education.map(educationObject => {
                return (
                    <div className="education-container" key={educationObject.id}>
                        <div className="school">{educationObject.school}</div>
                        <div className="degree">{educationObject.degree}</div>
                        <div className="education-dates">{educationObject.startDate} - {educationObject.endDate}</div>
                        <div className="location">{educationObject.location}</div>
                    </div>
                )
            })}
        </section>
    )


}

export default EducationSection