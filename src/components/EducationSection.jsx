function EducationSection({ education }) {
  return (
    <section className="mx-3">
      <h1 className="text-xl font-bold underline">Education</h1>
      {education.map((educationObject) => {
        return (
          <div className="grid grid-cols-2" key={educationObject.id}>
            <div className="order-1 font-bold">{educationObject.school}</div>
            <div className="order-3 italic">{educationObject.degree}</div>
            <div className="order-4 justify-self-end">
              {educationObject.startDate} - {educationObject.endDate}
            </div>
            <div className="order-2 justify-self-end">
              {educationObject.location}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default EducationSection;
