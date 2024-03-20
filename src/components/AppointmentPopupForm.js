import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AppointmentPopupForm = ({ onClose, isPopupOpen }) => {
  const schema = z.object({
    name: z.string().min(1, "Необходимо ввести имя"),
    phoneNumber: z
      .string()
      .min(12, "Номер телефона слишком короткий")
      .refine(
        (phoneNumber) => {
          // Check if the phone number starts with any of the country codes
          return countryCodes.some((code) =>
            phoneNumber.startsWith(code.dial_code)
          );
        },
        {
          message: "Неизвестный код страны",
        }
      ),
  });
  const [isVisible, setIsVisible] = useState(isPopupOpen);

  useEffect(() => {
    setIsVisible(isPopupOpen);
  }, [isPopupOpen]);
  const [countryCodes, setCountryCodes] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    dial_code: "+7",
    code: "RU",
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      phoneNumber: "+7",
    },
  });

  const watchedPhoneNumber = watch("phoneNumber");

  useEffect(() => {
    // Fetch country codes from your JSON file
    fetch("/countrycodesru.json")
      .then((response) => response.json())
      .then((data) => setCountryCodes(data))
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

  useEffect(() => {
    const extractCountryCode = (phoneNumber) => {
      return countryCodes.find((country) =>
        phoneNumber.startsWith(country.dial_code)
      );
    };

    const matchedCountry = extractCountryCode(watchedPhoneNumber);
    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    }
  }, [watchedPhoneNumber, countryCodes]);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setValue("phoneNumber", country.dial_code);
  };

  const getPlaceholderFormat = (dialCode) => {
    switch (dialCode.length - 1) {
      case 1:
        return `${dialCode} (999) 999-99-99`;
      case 2:
        return `${dialCode} (99) 999-99-99`;
      case 3:
        return `${dialCode} (99) 999-999`;
      case 4:
        return `+${dialCode[1]} (${dialCode.substring(2, 5)}) 999-9999`;
      default:
        return "+7 (999) 999-99-99";
    }
  };

  return (
    <div
      className={`fixed end-0 top-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-0 right-0 m-4 transition-colors duration-300 hover:text-gray-500 transition-transform duration-300 transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center my-6">
          <h1 className="text-xl text-slate-700 mb-2">
            Вы можете записаться, позвонив нам по телефону:
          </h1>
          <Link
            href="tel:+78452395556"
            className="text-2xl text-slate-700 hover:text-dark-golden transition duration-300"
          >
            +7 (845) 239-55-56
          </Link>
          <h1 className="text-base text-slate-700 mt-2 mb-4">
            или заполните форму ниже и мы Вам перезвоним:
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Ваше имя"
              {...register("name")}
              className="rounded p-5 w-full bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-black/[.5] transition-all duration-300"
            />
            <p className="text-red-600">{errors.name?.message}</p>
          </div>

          <div className="relative">
            <div className="flex items-center bg-gray-100 rounded p-4 w-full focus-within:bg-gray-200 focus-within:outline-none focus-within:ring-black/[.5] transition-all duration-300">
              <button
                key={selectedCountry.code}
                type="button"
                className="flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={`https://flagsapi.com/${selectedCountry.code}/flat/32.png`}
                  alt={selectedCountry.name}
                />
                <svg
                  className={`mx-2 h-4 w-4 transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <input
                type="tel"
                {...register("phoneNumber")}
                className="flex-1 pl-2 bg-transparent focus:outline-none"
                onFocus={(e) => {
                  if (e.target.value === "") {
                    e.target.value = selectedCountry.dial_code;
                  }
                  e.target.placeholder = "";
                }}
                onBlur={(e) => {
                  if (e.target.value === selectedCountry.dial_code) {
                    e.target.value = "";
                  }
                  e.target.placeholder = getPlaceholderFormat(
                    selectedCountry.dial_code
                  );
                }}
              />
            </div>
            <p className="text-red-600">{errors.phoneNumber?.message}</p>
            <div
              className={`absolute w-full mt-1 border border-gray-300 rounded-xl bg-white z-10 max-h-60 overflow-y-auto transition ease-out duration-100 ${
                isDropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-60 pointer-events-none"
              }`}
            >
              {countryCodes.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectCountry(country)}
                >
                  <img
                    src={`https://flagsapi.com/${country.code}/flat/32.png`}
                    alt={country.name}
                    className="mr-2"
                  />
                  <span className="mr-2">{country.name}</span>
                  <span>{country.dial_code}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission buttons */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Записаться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPopupForm;
