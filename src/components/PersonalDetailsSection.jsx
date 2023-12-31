function PersonalDetailsSection({ fullName, email, phoneNumber, address }) {
  return (
    <section className="grid grid-cols-3 text-white h-36 place-items-center bg-cyan-800">
      <div className="col-span-3 text-4xl">{fullName}</div>
      <div className="">{email}</div>
      <div className="">{phoneNumber}</div>
      <div className="">{address}</div>
    </section>
  );
}

export default PersonalDetailsSection;
