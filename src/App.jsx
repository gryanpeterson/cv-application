import { useState } from 'react'
import PersonalDetailsForm from './components/PersonalDetailsForm'
import PersonalDetailsSection from './components/PersonalDetailsSection'
import ExperienceForm from './components/ExperienceForm';
import ExperienceSection from './components/ExperienceSection';
import EducationForm from './components/EducationForm';
import EducationSection from './components/EducationSection';


function App() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);


  const onChangeFullName = (e) => {
    setFullName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  }

  const addExperience = (e) => {
    e.preventDefault();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const startDate = e.target[2].value;
    const endDate = e.target[3].value;
    const description = e.target[4].value;

    const newExperience = {position, company, startDate, endDate, description};
    setExperience([...experience, newExperience])
  }

  const addEducation = (e) => {
    e.preventDefault();
    const school = e.target[0].value;
    const degree = e.target[1].value;
    const startDate = e.target[2].value;
    const endDate = e.target[3].value;
    const location = e.target[4].value;

    const newEducation = {school, degree, startDate, endDate, location};
    setEducation([...education, newEducation]);
  }



  return (
    <>
      <PersonalDetailsForm 
      fullName={onChangeFullName}
      email={onChangeEmail}
      phoneNumber={onChangePhoneNumber}
      address={onChangeAddress}
      />
      <ExperienceForm 
      addExperience={addExperience}
      />
      <EducationForm addEducation={addEducation}
      />

      <PersonalDetailsSection 
      fullName={fullName}
      email={email}
      phoneNumber={phoneNumber}
      address={address}
      />
      <ExperienceSection experience={experience} />
      
      <EducationSection education={education}/>
    </>
  )

}

export default App
