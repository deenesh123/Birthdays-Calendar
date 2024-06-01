// BirthdayItem.tsx
import React, { useState } from 'react';

interface BirthdayItemProps {
  birthday: Birthday;
}

function BirthdayItem({ birthday }: BirthdayItemProps) {
  const [isFavorite, setIsFavorite] = useState(false); // Use useState for favorites

  return (
    <div>
      {/* Birthday details */}
      <button onClick={() => setIsFavorite(!isFavorite)}>Favorite</button>
    </div>
  );
}
