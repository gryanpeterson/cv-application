function PersonalDetailsSection({ fullName, email, phoneNumber, address }) {
  return (
    <section className="grid grid-cols-3 text-white place-items-center bg-cyan-800 h-1/6">
      <div className="col-span-3 text-4xl">{fullName}</div>
      <div className="">{email}</div>
      <div className="">{phoneNumber}</div>
      <div className="">{address}</div>
    </section>
  );
}

export default PersonalDetailsSection;
