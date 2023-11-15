function ExperienceSection({ experience }) {
  return (
    <section className="mx-3">
      <h1 className="text-xl font-bold underline">Work Experience</h1>
      {experience.map((experienceObject) => {
        return (
          <div className="grid grid-cols-2" key={experienceObject.id}>
            <div className="order-3 italic">{experienceObject.position}</div>
            <div className="order-1 font-bold">{experienceObject.company}</div>
            <div className="order-4 justify-self-end">
              {experienceObject.startDate} - {experienceObject.endDate}
            </div>
            <div className="order-5 col-span-2">
              {experienceObject.description}
            </div>
            <div className="order-2 justify-self-end">
              {experienceObject.location}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ExperienceSection;
