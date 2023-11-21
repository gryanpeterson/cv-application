import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import WorkExperienceForm from "./components/ExperienceForm";
import ExperienceSection from "./components/ExperienceSection";
import EducationForm from "./components/EducationForm";
import EducationSection from "./components/EducationSection";
import SubmittedExperience from "./components/SubmittedExperience";
import SubmittedEducation from "./components/SubmittedEducation";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditToggle = () => {
    if (isEditing === false) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  const saveExperience = (e) => {
    if (isEditing === false) {
      e.preventDefault();
      const id = uuidv4();
      const position = e.target[1].value;
      const company = e.target[2].value;
      const startDate = e.target[3].value;
      const endDate = e.target[4].value;
      const location = e.target[5].value;
      const description = e.target[6].value;
      const newExperience = {
        id,
        position,
        company,
        startDate,
        endDate,
        location,
        description,
      };
      setExperience([...experience, newExperience]);
      clearForm(e);
    }
  };

  const deleteExperience = (id) => {
    setExperience((currentExperience) =>
      currentExperience.filter((exp) => exp.id !== id)
    );
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
    <div className="flex flex-row min-h-screen bg-gray-200 max-w-screen">
      <div className="flex flex-col items-center px-5 bg-cyan-800">
        <PersonalDetailsForm
          fullName={onChangeFullName}
          email={onChangeEmail}
          phoneNumber={onChangePhoneNumber}
          address={onChangeAddress}
        />
        <WorkExperienceForm
          saveExperience={saveExperience}
          isEditing={isEditing}
        />
        <SubmittedExperience
          experience={experience}
          deleteExperience={deleteExperience}
          handleEditToggle={handleEditToggle}
        />
        <EducationForm
          education={education}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
        <SubmittedEducation
          education={education}
          deleteEducation={deleteEducation}
        />
      </div>

      <div className="flex flex-col items-center w-full mt-10 align-center">
        <div className="w-3/4 shadow-2xl h-1/2 bg-slate-50">
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
