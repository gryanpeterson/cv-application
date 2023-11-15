function PersonalDetailsSection({ fullName, email, phoneNumber, address }) {
  return (
    <section className="grid w-full grid-cols-3 text-white bg-cyan-800 place-items-center h-1/6">
      <div className="col-span-3 text-4xl">{fullName}</div>
      <div className="email">{email}</div>
      <div className="phoneNumber">{phoneNumber}</div>
      <div className="address">{address}</div>
    </section>
  );
}

export default PersonalDetailsSection;
