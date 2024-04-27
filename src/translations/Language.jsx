// LanguageSwitcher.js
import React from 'react';

function LanguageSwitcher({onchangelang }) {
  return (
    <div>
      <button onClick={() => onchangelang('en')}>English</button>
      <button onClick={() => onchangelang('fr')}>French</button>
    </div>
  );
}

export default LanguageSwitcher;
