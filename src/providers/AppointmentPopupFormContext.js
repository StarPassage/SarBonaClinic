// AppointmentFormContext.js
import React, { createContext, useState, useContext } from "react";

const AppointmentPopupFormContext = createContext();

export const useAppointmentForm = () => useContext(AppointmentPopupFormContext);

export const AppointmentFormProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <AppointmentPopupFormContext.Provider
      value={{ isPopupOpen, openPopup, closePopup }}
    >
      {children}
    </AppointmentPopupFormContext.Provider>
  );
};
