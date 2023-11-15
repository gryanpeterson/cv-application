function PersonalDetailsForm({ fullName, email, phoneNumber, address }) {
  return (
    <div className="flex justify-center col-span-2">
      <form className="flex flex-col items-center justify-center w-1/2 mt-5 mb-10 rounded-lg bg-slate-50">
        <h1 className="text-xl font-bold">Personal Details Form</h1>
        <input
          className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full w-80"
          type="text"
          id="fullName"
          placeholder="Full Name"
          onChange={fullName}
        />
        <input
          className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full w-80"
          type="email"
          id="email"
          placeholder="E-Mail"
          onChange={email}
        />
        <input
          className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full w-80"
          type="text"
          id="phoneNumber"
          placeholder="Phone Number"
          onChange={phoneNumber}
        />
        <input
          className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full w-80"
          type="text"
          id="address"
          placeholder="Address"
          onChange={address}
        />
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
