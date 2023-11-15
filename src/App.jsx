import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import WorkExperienceForm from "./components/ExperienceForm";
import ExperienceSection from "./components/ExperienceSection";
import EducationForm from "./components/EducationForm";
import EducationSection from "./components/EducationSection";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const onChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const clearForm = (e) => {
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].value = "";
    }
  };

  const addExperience = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const startDate = e.target[2].value;
    const endDate = e.target[3].value;
    const description = e.target[4].value;
    const newExperience = {
      id,
      position,
      company,
      startDate,
      endDate,
      description,
    };
    setExperience([...experience, newExperience]);
    clearForm(e);
  };

  const deleteExperience = (id) => {
    setExperience((currentExperience) => {
      return currentExperience.filter((exp) => exp.id !== id);
    });
  };

  const addEducation = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const school = e.target[0].value;
    const degree = e.target[1].value;
    const startDate = e.target[2].value;
    const endDate = e.target[3].value;
    const location = e.target[4].value;
    const newEducation = { id, school, degree, startDate, endDate, location };
    setEducation([...education, newEducation]);
    clearForm(e);
  };

  const deleteEducation = (id) => {
    setEducation((currentEducation) => {
      return currentEducation.filter((edu) => edu.id !== id);
    });
  };

  return (
    <div className="flex flex-row h-screen bg-gray-200">
      <div className="grid w-1/2 grid-cols-2 gap-x-5 gap-y-5 grid-rows 3">
        <PersonalDetailsForm
          fullName={onChangeFullName}
          email={onChangeEmail}
          phoneNumber={onChangePhoneNumber}
          address={onChangeAddress}
        />
        <WorkExperienceForm
          experience={experience}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
        />
        <EducationForm
          education={education}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 align-center">
        <div className="w-3/4 shadow-2xl h-3/4 bg-slate-50">
          <PersonalDetailsSection
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />
          <ExperienceSection experience={experience} />
          <EducationSection education={education} />
        </div>
      </div>
    </div>
  );
}

export default App;
