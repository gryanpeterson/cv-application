function ExperienceSection({ experience }) {
  return (
    <section className="experience-section">
      <h1 className="text-xl font-bold">Experience Section</h1>
      {experience.map((experienceObject) => {
        return (
          <div className="experience-container" key={experienceObject.id}>
            <div className="position">{experienceObject.position}</div>
            <div className="company">{experienceObject.company}</div>
            <div className="experience-dates">
              {experienceObject.startDate} - {experienceObject.endDate}
            </div>
            <div className="description">{experienceObject.description}</div>
          </div>
        );
      })}
    </section>
  );
}

export default ExperienceSection;
