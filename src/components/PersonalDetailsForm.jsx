function PersonalDetailsForm({ fullName, email, phoneNumber, address }) {
  return (
    <div className="flex justify-center order-1 col-span-2 mx-10">
      <form className="flex flex-col items-center p-5 mt-5 mb-5 rounded-lg bg-slate-50 h-max">
        <h1 className="font-bold text-md">Personal Details Form</h1>
        <input
          className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
          type="text"
          id="fullName"
          placeholder="Full Name"
          onChange={fullName}
        />
        <input
          className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
          type="email"
          id="email"
          placeholder="E-Mail"
          onChange={email}
        />
        <input
          className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
          type="text"
          id="phoneNumber"
          placeholder="Phone Number"
          onChange={phoneNumber}
        />
        <input
          className="mb-1 text-center bg-gray-200 border-2 border-black border-none rounded-full"
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
