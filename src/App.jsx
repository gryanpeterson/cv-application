import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
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
    const id = uuidv4();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const startDate = e.target[2].value;
    const endDate = e.target[3].value;
    const description = e.target[4].value;

    const newExperience = {id, position, company, startDate, endDate, description};
    setExperience([...experience, newExperience])

    
  }

  const addEducation = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const school = e.target[0].value;
    const degree = e.target[1].value;
    const startDate = e.target[2].value;
    const endDate = e.target[3].value;
    const location = e.target[4].value;

    const newEducation = {id, school, degree, startDate, endDate, location};
    setEducation([...education, newEducation]);
  }



  return (
    <div className='flex flex-row'>
      <div className='w-1/2'>
        <PersonalDetailsForm 
        fullName={onChangeFullName}
        email={onChangeEmail}
        phoneNumber={onChangePhoneNumber}
        address={onChangeAddress}
        />
        <ExperienceForm 
        experience={experience}
        addExperience={addExperience}
        />
        <EducationForm addEducation={addEducation}
        />
      </div>

      <div className='w-1/2'>
        <PersonalDetailsSection 
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        />
        <ExperienceSection experience={experience} />
        
        <EducationSection education={education}/>
      </div>
    </div>
  )

}

export default App
