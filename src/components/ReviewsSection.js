import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect } from "react";

const Review = ({ stars, name, text }) => {
  return (
    <div className="p-4 max-w-[250px] md:max-w-[300px] h-full overflow-hidden">
      <div className="flex items-center mb-1">
        {/* Render stars based on rating */}
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              index < stars ? "text-yellow-500" : "text-gray-300"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927L9.17 6.203l-3.83.56 2.77 2.7-.65 3.796 3.4-1.79 3.4 1.79-.65-3.796 2.77-2.7-3.83-.56L12.951 2.927z"
            />
          </svg>
        ))}
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm multiline-truncate">{text}</p>
    </div>
  );
};

const ReviewsSection = () => {
  const reviews = [
    {
      stars: 5,
      name: "Tatiana S.",
      text: "Здравсвуйте! Очень нравится мне это место, прям хочется многое на себе попробовать, раньше за собой такого не замечала) Нравится очень мастер Инга. Такт и профессионализм",
    },
    {
      stars: 5,
      name: "Яна",
      text: "Чудесный подолог Элина Сергеевна помогла быстро и безболезненно решить проблему с ногтями) Огромная благодарность клинике в лице администратора и отличного мастера)Яна",
    },
    {
      stars: 5,
      name: "Татьяна Н.",
      text: "Очень уютно и красиво. Мастер по стрижки просто супер Т.Дрыгина",
    },
    { stars: 5, name: "Давид М.", text: "Отличные цены, комфортная атмосфера" },
    {
      stars: 5,
      name: "Maria B.",
      text: "Замечтельная Клиника красоты!Я в полном восторге! С самого начала -чудесная атмосфера,улыбка администатора,приятный интерьер.Привела сначала мою старенькую тётю на педикюр,она просто ожила!Великолепный мастер Элина,настоящий профессионал своего дела,доброжелательная,внимательная,очень позитивная!Сама теперь хожу на маникюр только к ней и моя тётя конечно,продожает ходить сюда. У мастра парикмахера Надежды сделала стрижку и покрасила волосы-снова восторг!Мастер своего дела,очень тонко чувствующий клиента с безупречным художественным вкусом,я уже не говорю про обаяние))Всем моим знакомым и друзьям могу тепрь смело рекомендовать эту Клинику красоты Sarbona!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const getReviewStyle = (index) => {
    let style = "transition-all ease-in-out duration-700 ";
    if (index === activeIndex) {
      style += "scale-100 opacity-100 z-30 "; // Active review
    } else if (index === (activeIndex - 1 + reviews.length) % reviews.length) {
      style +=
        "scale-90 opacity-0 md:opacity-50 blur -translate-x-full md:-translate-x-[20vw] z-20"; // Previous review
    } else if (index === (activeIndex + 1) % reviews.length) {
      style +=
        "hidden md:block scale-90 opacity-0 opacity-50 blur translate-x-[20vw] z-20"; // Next review
    } else {
      style += "scale-80 opacity-0 "; // Other reviews
    }
    return style;
  };

  return (
    <div id="reviews" className="bg-white scroll-mt-[10vh]">
      <h1 className="text-5xl md:text-5xl lg:text-6xl text-slate-700 text-left ml-[6%] mr-[4%] lg:mr-[52%] pt-[0.5em] pb-[2%] md:pb-0">
        Отзывы
      </h1>
      <div className="flex justify-center items-center overflow-hidden my-[10vh] max-w-[100%]">
        {reviews.map((review, index) => (
          <div key={index} className={`absolute ${getReviewStyle(index)}`}>
            <Review
              stars={review.stars}
              name={review.name}
              text={review.text}
            />
          </div>
        ))}
      </div>
      <div className="pt-[4%] mx-[6%]">
        <Separator />
      </div>
    </div>
  );
};

export default ReviewsSection;
