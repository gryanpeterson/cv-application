function PersonalDetailsSection({ fullName, email, phoneNumber, address }) {
  return (
    <section className="personalDetailsSection">
      <h1 className="text-xl font-bold">Personal Details Section</h1>
      <div className="fullName">
        <p>Name: {fullName}</p>
      </div>
      <div className="email">
        <p>Email: {email}</p>
      </div>
      <div className="phoneNumber">
        <p>Phone Number: {phoneNumber}</p>
      </div>
      <div className="address">
        <p>Address: {address}</p>
      </div>
    </section>
  );
}

export default PersonalDetailsSection;
