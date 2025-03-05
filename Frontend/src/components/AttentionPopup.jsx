import React, { useState, useEffect } from 'react';
import style from './popup.module.css';

export default function AttentionPopup({ onClose }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('popupShown', 'true');
    if (onClose) {
      onClose(); 
    }
  };

  return (
    showPopup && (
      <div className={style.popup}>
        <div className={style.popupСontent}>
          <h3>Attention!</h3>
          <p>
          This site collects some data about you to improve the service. By continuing, you agree to their processing.
          </p>
          <button className={style.popupButton}  onClick={handleClosePopup}>Agree</button>
        </div>
      </div>
    )
  );
}
