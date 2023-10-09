import React, { useState } from 'react';

function Agecal() {
  const [selectedDate, setSelectedDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(selectedDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Approximate year length
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="text-center py-3">
      <input
        type="date"
        className="form-control"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={calculateAge}>
        Calculate Age
      </button>
      {age !== '' && (
        <h3 className="mt-3">You are {age} years old</h3>
      )}
    </div>
  );
}

export default Agecal;
