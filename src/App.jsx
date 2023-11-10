import { useState } from 'react'
import PersonalDetailsForm from './components/PersonalDetailsForm'
import PersonalDetailsSection from './components/PersonalDetailsSection'

function App() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

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



  return (
    <>
      <PersonalDetailsForm 
      fullName={onChangeFullName}
      email={onChangeEmail}
      phoneNumber={onChangePhoneNumber}
      address={onChangeAddress}
      />
      <PersonalDetailsSection 
      fullName={fullName}
      email={email}
      phoneNumber={phoneNumber}
      address={address}
      
      />
    </>
  )

}

export default App
