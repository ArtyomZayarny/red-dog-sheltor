import { Dog } from "@shared/schema";

// Mock data used client-side as requested
export const MOCK_DOGS: Dog[] = [
  {
    id: 1,
    slug: "charly",
    name: "Чарлі",
    age: "2 роки",
    gender: "Хлопчик",
    adoptionStatus: "available",
    priceMonthly: 500,
    tags: ["Активний", "Дружелюбний", "Любить дітей"],
    description: "Чарлі - це справжній згусток енергії та позитиву! Він обожнює довгі прогулянки в парку, ігри з м'ячем та вечірні обійми. Його історія почалася не дуже щасливо, але зараз він готовий дарувати свою любов новій родині. Він чудово ладнає з іншими собаками та дуже швидко вчиться новим командам.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&h=800&fit=crop"
  },
  {
    id: 2,
    slug: "luna",
    name: "Луна",
    age: "1.5 роки",
    gender: "Дівчинка",
    adoptionStatus: "available",
    priceMonthly: 450,
    tags: ["Спокійна", "Лагідна"],
    description: "Луна - ніжна та трепетна дівчинка. Вона трохи сором'язлива при першому знайомстві, але як тільки вона довіриться вам, ви отримаєте найвідданішого друга. Вона любить тихі вечори та смаколики.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=800&fit=crop"
  },
  {
    id: 3,
    slug: "rocky",
    name: "Роккі",
    age: "4 роки",
    gender: "Хлопчик",
    adoptionStatus: "under_guardianship",
    priceMonthly: 600,
    tags: ["Охоронець", "Розумний"],
    description: "Роккі має серйозний вигляд, але добре серце. Він вже знайшов свого опікуна, який піклується про нього дистанційно. Роккі обожнює тренування та дисципліну.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=800&fit=crop"
  },
  {
    id: 4,
    slug: "bella",
    name: "Белла",
    age: "3 роки",
    gender: "Дівчинка",
    adoptionStatus: "in_family",
    priceMonthly: 0,
    tags: ["Щаслива", "Домашня"],
    description: "Белла знайшла свій дім! Ми залишили її анкету тут, щоб ви бачили щасливі історії нашого притулку.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop"
  },
  {
    id: 5,
    slug: "max",
    name: "Макс",
    age: "5 місяців",
    gender: "Хлопчик",
    adoptionStatus: "available",
    priceMonthly: 300,
    tags: ["Цуценя", "Грайливий"],
    description: "Макс ще зовсім малюк, якому потрібна турбота та виховання. Він допитливий, смішний і іноді трохи незграбний.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?w=800&h=800&fit=crop"
  },
  {
    id: 6,
    slug: "daisy",
    name: "Дейзі",
    age: "2 роки",
    gender: "Дівчинка",
    adoptionStatus: "available",
    priceMonthly: 400,
    tags: ["Активна", "Любить бігати"],
    description: "Дейзі - це вітер у полі! Якщо ви любите ранкові пробіжки, вона стане вашим ідеальним компаньйоном.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&h=800&fit=crop"
  },
  {
    id: 7,
    slug: "jack",
    name: "Джек",
    age: "6 років",
    gender: "Хлопчик",
    adoptionStatus: "available",
    priceMonthly: 550,
    tags: ["Мудрий", "Спокійний"],
    description: "Джек - досвідчений пес, який знає життя. Він не буде ганятися за котами, а краще полежить біля ваших ніг, зігріваючи їх своїм теплом.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&h=800&fit=crop"
  },
  {
    id: 8,
    slug: "molly",
    name: "Моллі",
    age: "1 рік",
    gender: "Дівчинка",
    adoptionStatus: "under_guardianship",
    priceMonthly: 400,
    tags: ["Весела", "Дзвінка"],
    description: "Моллі має опікуна! Вона дуже комунікабельна і любить гавкати на пташок.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255db?w=800&h=800&fit=crop"
  },
  {
    id: 9,
    slug: "cooper",
    name: "Купер",
    age: "3 роки",
    gender: "Хлопчик",
    adoptionStatus: "available",
    priceMonthly: 500,
    tags: ["Друг", "Компаньйон"],
    description: "Купер чекає на тебе. Він вірить, що десь є людина, якій він стане найкращим другом.",
    curatorPhone: "+380 99 123 45 67",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&h=800&fit=crop"
  }
];
