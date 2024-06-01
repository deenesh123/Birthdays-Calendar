// BirthdayList.tsx
import React from 'react';
import BirthdayItem from './BirthdayItem';

interface BirthdayListProps {
  birthdays: Birthday[];
  selectedDate: Date;
}

function BirthdayList({ birthdays, selectedDate }: BirthdayListProps) {
  // ... (filtering logic)

  const filteredBirthdays = birthdays.filter(birthday => {
    return birthday.date.getDate() === selectedDate.getDate() 
            && birthday.date.getMonth() === selectedDate.getMonth()
            && birthday.date.getFullYear() === selectedDate.getFullYear();
  });

  return (
    <div>
      {filteredBirthdays.map((birthday) => (
        <BirthdayItem key={birthday.name} birthday={birthday} />
      ))}
    </div>
  );
}
