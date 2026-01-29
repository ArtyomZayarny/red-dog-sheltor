import type { Core } from '@strapi/strapi';

const mockDogs: Array<{
  name: string;
  slug: string;
  age: string;
  gender: 'male' | 'female';
  status: 'available' | 'under_guardianship' | 'in_family';
  priceMonthly: number;
  tags: string[];
  description: string;
  curatorPhone: string;
}> = [
  {
    name: "Чарлі",
    slug: "charly",
    age: "2 роки",
    gender: "male",
    status: "available",
    priceMonthly: 500,
    tags: ["Активний", "Дружелюбний", "Любить дітей"],
    description: "Чарлі - це справжній згусток енергії та позитиву! Він обожнює довгі прогулянки в парку, ігри з м'ячем та вечірні обійми. Його історія почалася не дуже щасливо, але зараз він готовий дарувати свою любов новій родині. Він чудово ладнає з іншими собаками та дуже швидко вчиться новим командам.",
    curatorPhone: "+380 99 123 45 67",
  },
  {
    name: "Луна",
    slug: "luna",
    age: "1.5 роки",
    gender: "female",
    status: "available",
    priceMonthly: 450,
    tags: ["Спокійна", "Лагідна"],
    description: "Луна - ніжна та трепетна дівчинка. Вона трохи сором'язлива при першому знайомстві, але як тільки вона довіриться вам, ви отримаєте найвідданішого друга. Вона любить тихі вечори та смаколики.",
    curatorPhone: "+380 99 123 45 67",
  },
  {
    name: "Роккі",
    slug: "rocky",
    age: "4 роки",
    gender: "male",
    status: "under_guardianship",
    priceMonthly: 600,
    tags: ["Охоронець", "Розумний"],
    description: "Роккі має серйозний вигляд, але добре серце. Він вже знайшов свого опікуна, який піклується про нього дистанційно. Роккі обожнює тренування та дисципліну.",
    curatorPhone: "+380 99 123 45 67",
  },
  {
    name: "Белла",
    slug: "bella",
    age: "3 роки",
    gender: "female",
    status: "in_family",
    priceMonthly: 0,
    tags: ["Щаслива", "Домашня"],
    description: "Белла знайшла свій дім! Ми залишили її анкету тут, щоб ви бачили щасливі історії нашого притулку.",
    curatorPhone: "+380 99 123 45 67",
  },
  {
    name: "Макс",
    slug: "max",
    age: "5 місяців",
    gender: "male",
    status: "available",
    priceMonthly: 300,
    tags: ["Цуценя", "Грайливий"],
    description: "Макс ще зовсім малюк, якому потрібна турбота та виховання. Він допитливий, смішний і іноді трохи незграбний.",
    curatorPhone: "+380 99 123 45 67",
  },
  {
    name: "Дейзі",
    slug: "daisy",
    age: "2 роки",
    gender: "female",
    status: "available",
    priceMonthly: 400,
    tags: ["Активна", "Любить бігати"],
    description: "Дейзі - це вітер у полі! Якщо ви любите ранкові пробіжки, вона стане вашим ідеальним компаньйоном.",
    curatorPhone: "+380 99 123 45 67",
  },
  {
    name: "Джек",
    slug: "jack",
    age: "6 років",
    gender: "male",
    status: "available",
    priceMonthly: 550,
    tags: ["Мудрий", "Спокійний"],
    description: "Джек - досвідчений пес, який знає життя. Він не буде ганятися за котами, а краще полежить біля ваших ніг, зігріваючи їх своїм теплом.",
    curatorPhone: "+380 99 123 45 67",
  },
  {
    name: "Моллі",
    slug: "molly",
    age: "1 рік",
    gender: "female",
    status: "under_guardianship",
    priceMonthly: 400,
    tags: ["Весела", "Дзвінка"],
    description: "Моллі має опікуна! Вона дуже комунікабельна і любить гавкати на пташок.",
    curatorPhone: "+380 99 123 45 67",
  },
  {
    name: "Купер",
    slug: "cooper",
    age: "3 роки",
    gender: "male",
    status: "available",
    priceMonthly: 500,
    tags: ["Друг", "Компаньйон"],
    description: "Купер чекає на тебе. Він вірить, що десь є людина, якій він стане найкращим другом.",
    curatorPhone: "+380 99 123 45 67",
  }
];

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Check if dogs already exist
    const existingDogs = await strapi.documents('api::dog.dog').findMany({
      limit: 1
    });

    if (existingDogs.length > 0) {
      console.log('Dogs already seeded, skipping...');
      return;
    }

    console.log('Seeding dogs...');
    for (const dog of mockDogs) {
      await strapi.documents('api::dog.dog').create({
        data: dog,
        status: 'published'
      });
      console.log(`Created: ${dog.name}`);
    }
    console.log('Seed completed!');
  },
};
