import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAppointmentForm } from "../providers/AppointmentPopupFormContext";

const AppointmentPopupForm = () => {
  const { isPopupOpen, closePopup } = useAppointmentForm();
  const schema = z.object({
    name: z.string().min(1, "Необходимо ввести имя"),
    phoneNumber: z
      .string()
      .min(12, "Номер телефона слишком короткий")
      .max(15, "Номер телефона слишком длинный")
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
  const [searchQuery, setSearchQuery] = useState("");
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
  const formRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const sortedCountryCodes = [...countryCodes].sort(
    (a, b) => b.dial_code.length - a.dial_code.length
  );

  useEffect(() => {
    // Fetch country codes from your JSON file
    fetch("/countrycodesru.json")
      .then((response) => response.json())
      .then((data) => setCountryCodes(data))
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

  useEffect(() => {
    const extractCountryCode = (phoneNumber) => {
      if (phoneNumber.startsWith("+76")) {
        return {
          name: "Kazakhstan",
          dial_code: "+76",
          code: "KZ",
        };
      }
      return sortedCountryCodes.find((country) =>
        phoneNumber.startsWith(country.dial_code)
      );
    };

    const matchedCountry = extractCountryCode(watchedPhoneNumber);
    if (matchedCountry) setSelectedCountry(matchedCountry);
  }, [watchedPhoneNumber, countryCodes, isDropdownOpen]);

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const isDropdownButtonClicked = dropdownButtonRef.current.contains(
        event.target
      );
      const isOutsideDropdown =
        dropdownRef.current && !dropdownRef.current.contains(event.target);
      const isOutsideForm =
        formRef.current && !formRef.current.contains(event.target);

      if (isOutsideDropdown && !isDropdownButtonClicked) {
        setIsDropdownOpen(false);
        if (isOutsideForm) {
          closePopup();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closePopup, setIsDropdownOpen]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    const selectedCountryElement =
      dropdownRef.current.querySelector(".selected");
    if (selectedCountryElement) {
      selectedCountryElement.scrollIntoView({
        block: "start",
        inline: "nearest",
      });
    }
  };

  const filteredCountries = countryCodes.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`fixed end-0 top-0 bg-gray-600 bg-opacity-50 p-4 overflow-y-auto h-full w-full z-[99] flex justify-center items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={formRef}
        className="bg-gradient-to-b from-extra-light-golden to-xs-light-golden  p-8 rounded-lg shadow-lg relative"
      >
        <button
          onClick={closePopup}
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
                ref={dropdownButtonRef}
                onClick={handleDropdownToggle}
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
              ref={dropdownRef}
              className={`absolute w-[80%] mt-1 border border-gray-300 rounded bg-white z-10 max-h-60 overflow-y-auto transition ease-out duration-200 ${
                isDropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-50 pointer-events-none"
              }`}
            >
              <div className="flex items-center border-b border-gray-300">
                <img
                  src="/magnifier.svg"
                  alt="Search Icon"
                  className="h-4 w-4 ml-4 mr-2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-2 w-full  focus:outline-none"
                />
              </div>
              <div className="overflow-auto max-h-48">
                {filteredCountries.map((country, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
                      selectedCountry.code === country.code ? "selected" : ""
                    }`}
                    onClick={() => selectCountry(country)}
                  >
                    <img
                      src={`https://flagsapi.com/${country.code}/flat/32.png`}
                      alt={country.name}
                      className="mr-2"
                    />
                    <span className="mr-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {country.name}
                    </span>
                    <span className="mr-2">
                      {country.name === "Казахстан"
                        ? "(+76/+77)"
                        : `(${country.dial_code})`}
                    </span>
                    {selectedCountry.code === country.code && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-auto text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M17.707 3.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submission buttons */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-rose-500 text-white w-1/2 font-bold py-4 px-4 rounded transition-colors duration-300 hover:bg-rose-600 transition-transform duration-300 transform hover:scale-110"
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
