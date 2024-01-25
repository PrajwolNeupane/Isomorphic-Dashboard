import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const PLAN = {
  Basic: 'Basic',
  Company: 'Company',
  Professional: 'Professional',
  Team: 'Team',
};

export const STATUS = {
  Online: 'Online',
  Offline: 'Offline',
};

export interface Customer {
  id: string;
  customer: {
    fullName: string;
    email: string;
    avatar: string;
  };
  plan: keyof typeof PLAN;
  mrr: number;
  createdAt: Date;
  paymentMethod: {
    name: string;
    cardNumber: string;
  };
  status: keyof typeof STATUS;
  chart: {
    activity: number;
  }[];
}

export const recentCustomers = [
  {
    id: '3349',
    customer: {
      fullName: 'Thomas Kautzer',
      email: 'johanna26@gmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Company',
    mrr: 707.8717868675012,
    createdAt: '2023-01-19T02:15:51.276Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '0556',
    },
    status: 'Offline',
    chart: [
      {
        activity: 92,
      },
      {
        activity: 53,
      },
      {
        activity: 81,
      },
      {
        activity: 50,
      },
      {
        activity: 60,
      },
      {
        activity: 73,
      },
      {
        activity: 81,
      },
      {
        activity: 71,
      },
      {
        activity: 92,
      },
      {
        activity: 64,
      },
      {
        activity: 60,
      },
      {
        activity: 83,
      },
      {
        activity: 98,
      },
      {
        activity: 70,
      },
      {
        activity: 71,
      },
    ],
  },
  {
    id: '8781',
    customer: {
      fullName: 'Billie Blick',
      email: 'francis_stiedemann57@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg',
    },
    plan: 'Professional',
    mrr: 279.5092791453935,
    createdAt: '2023-05-22T14:47:36.973Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '5071',
    },
    status: 'Offline',
    chart: [
      {
        activity: 87,
      },
      {
        activity: 54,
      },
      {
        activity: 68,
      },
      {
        activity: 53,
      },
      {
        activity: 84,
      },
      {
        activity: 79,
      },
      {
        activity: 84,
      },
      {
        activity: 87,
      },
      {
        activity: 55,
      },
      {
        activity: 86,
      },
      {
        activity: 91,
      },
      {
        activity: 63,
      },
      {
        activity: 61,
      },
      {
        activity: 62,
      },
      {
        activity: 85,
      },
    ],
  },
  {
    id: '5063',
    customer: {
      fullName: 'Mr. John Hoeger',
      email: 'evan_hudson@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Team',
    mrr: 607.2399900024757,
    createdAt: '2022-11-22T13:35:33.975Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '6010',
    },
    status: 'Offline',
    chart: [
      {
        activity: 88,
      },
      {
        activity: 63,
      },
      {
        activity: 65,
      },
      {
        activity: 80,
      },
      {
        activity: 84,
      },
      {
        activity: 80,
      },
      {
        activity: 80,
      },
      {
        activity: 59,
      },
      {
        activity: 98,
      },
      {
        activity: 73,
      },
      {
        activity: 57,
      },
      {
        activity: 95,
      },
      {
        activity: 76,
      },
      {
        activity: 56,
      },
      {
        activity: 51,
      },
    ],
  },
  {
    id: '4587',
    customer: {
      fullName: 'Lynda White',
      email: 'janice_jacobi@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1105.jpg',
    },
    plan: 'Company',
    mrr: 514.4363453749102,
    createdAt: '2022-12-24T01:32:57.822Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '8105',
    },
    status: 'Offline',
    chart: [
      {
        activity: 58,
      },
      {
        activity: 71,
      },
      {
        activity: 70,
      },
      {
        activity: 90,
      },
      {
        activity: 62,
      },
      {
        activity: 62,
      },
      {
        activity: 71,
      },
      {
        activity: 58,
      },
      {
        activity: 65,
      },
      {
        activity: 62,
      },
      {
        activity: 92,
      },
      {
        activity: 64,
      },
      {
        activity: 96,
      },
      {
        activity: 50,
      },
      {
        activity: 80,
      },
    ],
  },
  {
    id: '9759',
    customer: {
      fullName: 'Madeline Cruickshank Jr.',
      email: 'kelsi.cruickshank@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/782.jpg',
    },
    plan: 'Team',
    mrr: 187.65266591124237,
    createdAt: '2023-04-05T20:53:06.245Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '0498',
    },
    status: 'Offline',
    chart: [
      {
        activity: 99,
      },
      {
        activity: 58,
      },
      {
        activity: 83,
      },
      {
        activity: 57,
      },
      {
        activity: 94,
      },
      {
        activity: 63,
      },
      {
        activity: 80,
      },
      {
        activity: 51,
      },
      {
        activity: 52,
      },
      {
        activity: 62,
      },
      {
        activity: 52,
      },
      {
        activity: 67,
      },
      {
        activity: 85,
      },
      {
        activity: 91,
      },
      {
        activity: 99,
      },
    ],
  },
  {
    id: '4334',
    customer: {
      fullName: 'Pauline Rath',
      email: 'mustafa.hagenes@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Team',
    mrr: 114.60813575331122,
    createdAt: '2023-02-24T11:04:38.935Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '1170',
    },
    status: 'Offline',
    chart: [
      {
        activity: 75,
      },
      {
        activity: 71,
      },
      {
        activity: 83,
      },
      {
        activity: 71,
      },
      {
        activity: 80,
      },
      {
        activity: 98,
      },
      {
        activity: 100,
      },
      {
        activity: 80,
      },
      {
        activity: 76,
      },
      {
        activity: 71,
      },
      {
        activity: 98,
      },
      {
        activity: 57,
      },
      {
        activity: 88,
      },
      {
        activity: 79,
      },
      {
        activity: 97,
      },
    ],
  },
  {
    id: '3626',
    customer: {
      fullName: 'Constance Predovic',
      email: 'jamar_purdy22@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/469.jpg',
    },
    plan: 'Company',
    mrr: 213.32488414412364,
    createdAt: '2023-09-14T17:54:14.674Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '5218',
    },
    status: 'Offline',
    chart: [
      {
        activity: 62,
      },
      {
        activity: 89,
      },
      {
        activity: 72,
      },
      {
        activity: 65,
      },
      {
        activity: 100,
      },
      {
        activity: 69,
      },
      {
        activity: 68,
      },
      {
        activity: 94,
      },
      {
        activity: 73,
      },
      {
        activity: 62,
      },
      {
        activity: 62,
      },
      {
        activity: 76,
      },
      {
        activity: 78,
      },
      {
        activity: 65,
      },
      {
        activity: 89,
      },
    ],
  },
  {
    id: '7006',
    customer: {
      fullName: 'Ella Abbott',
      email: 'amaya.koepp90@gmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Team',
    mrr: 633.7956209226977,
    createdAt: '2023-05-05T01:00:32.451Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '4682',
    },
    status: 'Offline',
    chart: [
      {
        activity: 57,
      },
      {
        activity: 69,
      },
      {
        activity: 71,
      },
      {
        activity: 69,
      },
      {
        activity: 64,
      },
      {
        activity: 99,
      },
      {
        activity: 67,
      },
      {
        activity: 51,
      },
      {
        activity: 69,
      },
      {
        activity: 89,
      },
      {
        activity: 69,
      },
      {
        activity: 78,
      },
      {
        activity: 76,
      },
      {
        activity: 74,
      },
      {
        activity: 78,
      },
    ],
  },
  {
    id: '8468',
    customer: {
      fullName: "Jodi O'Reilly",
      email: 'name24@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg',
    },
    plan: 'Basic',
    mrr: 249.5680028880015,
    createdAt: '2022-12-07T16:12:27.760Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '3986',
    },
    status: 'Offline',
    chart: [
      {
        activity: 86,
      },
      {
        activity: 63,
      },
      {
        activity: 97,
      },
      {
        activity: 61,
      },
      {
        activity: 69,
      },
      {
        activity: 75,
      },
      {
        activity: 80,
      },
      {
        activity: 68,
      },
      {
        activity: 63,
      },
      {
        activity: 63,
      },
      {
        activity: 59,
      },
      {
        activity: 51,
      },
      {
        activity: 99,
      },
      {
        activity: 65,
      },
      {
        activity: 50,
      },
    ],
  },
  {
    id: '9088',
    customer: {
      fullName: 'Sheryl Konopelski',
      email: 'parker.harris@gmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Professional',
    mrr: 398.7717403424904,
    createdAt: '2023-08-03T03:44:27.400Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '6779',
    },
    status: 'Online',
    chart: [
      {
        activity: 61,
      },
      {
        activity: 96,
      },
      {
        activity: 57,
      },
      {
        activity: 55,
      },
      {
        activity: 87,
      },
      {
        activity: 54,
      },
      {
        activity: 80,
      },
      {
        activity: 82,
      },
      {
        activity: 95,
      },
      {
        activity: 50,
      },
      {
        activity: 75,
      },
      {
        activity: 69,
      },
      {
        activity: 69,
      },
      {
        activity: 94,
      },
      {
        activity: 81,
      },
    ],
  },
  {
    id: '2005',
    customer: {
      fullName: 'Tara Hoppe',
      email: 'alex_greenholt83@gmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Basic',
    mrr: 335.77883241069503,
    createdAt: '2023-01-27T20:21:52.670Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '5573',
    },
    status: 'Offline',
    chart: [
      {
        activity: 82,
      },
      {
        activity: 72,
      },
      {
        activity: 74,
      },
      {
        activity: 78,
      },
      {
        activity: 92,
      },
      {
        activity: 74,
      },
      {
        activity: 53,
      },
      {
        activity: 97,
      },
      {
        activity: 92,
      },
      {
        activity: 81,
      },
      {
        activity: 59,
      },
      {
        activity: 88,
      },
      {
        activity: 55,
      },
      {
        activity: 86,
      },
      {
        activity: 73,
      },
    ],
  },
  {
    id: '4983',
    customer: {
      fullName: 'Mr. Kelvin Koelpin',
      email: 'vickie.pfeffer54@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/539.jpg',
    },
    plan: 'Professional',
    mrr: 759.8048285467084,
    createdAt: '2023-08-15T22:29:17.025Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '9159',
    },
    status: 'Online',
    chart: [
      {
        activity: 70,
      },
      {
        activity: 73,
      },
      {
        activity: 60,
      },
      {
        activity: 73,
      },
      {
        activity: 67,
      },
      {
        activity: 73,
      },
      {
        activity: 63,
      },
      {
        activity: 96,
      },
      {
        activity: 96,
      },
      {
        activity: 65,
      },
      {
        activity: 54,
      },
      {
        activity: 50,
      },
      {
        activity: 64,
      },
      {
        activity: 63,
      },
      {
        activity: 68,
      },
    ],
  },
  {
    id: '2015',
    customer: {
      fullName: 'Corey Huels-Marvin',
      email: 'ricky16@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/449.jpg',
    },
    plan: 'Team',
    mrr: 436.5551588071976,
    createdAt: '2023-09-25T02:48:01.054Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '1659',
    },
    status: 'Offline',
    chart: [
      {
        activity: 60,
      },
      {
        activity: 85,
      },
      {
        activity: 81,
      },
      {
        activity: 67,
      },
      {
        activity: 80,
      },
      {
        activity: 55,
      },
      {
        activity: 82,
      },
      {
        activity: 89,
      },
      {
        activity: 77,
      },
      {
        activity: 54,
      },
      {
        activity: 84,
      },
      {
        activity: 93,
      },
      {
        activity: 92,
      },
      {
        activity: 86,
      },
      {
        activity: 67,
      },
    ],
  },
  {
    id: '6563',
    customer: {
      fullName: 'Leroy Schimmel',
      email: 'darien42@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/350.jpg',
    },
    plan: 'Team',
    mrr: 978.2360064478125,
    createdAt: '2023-06-24T03:49:58.531Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '5966',
    },
    status: 'Offline',
    chart: [
      {
        activity: 85,
      },
      {
        activity: 90,
      },
      {
        activity: 96,
      },
      {
        activity: 85,
      },
      {
        activity: 84,
      },
      {
        activity: 91,
      },
      {
        activity: 86,
      },
      {
        activity: 66,
      },
      {
        activity: 69,
      },
      {
        activity: 84,
      },
      {
        activity: 50,
      },
      {
        activity: 60,
      },
      {
        activity: 84,
      },
      {
        activity: 54,
      },
      {
        activity: 85,
      },
    ],
  },
  {
    id: '2248',
    customer: {
      fullName: 'Meghan Luettgen',
      email: 'titus.thiel19@hotmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Company',
    mrr: 418.41625645244494,
    createdAt: '2023-03-05T13:58:59.822Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '0296',
    },
    status: 'Online',
    chart: [
      {
        activity: 51,
      },
      {
        activity: 58,
      },
      {
        activity: 100,
      },
      {
        activity: 97,
      },
      {
        activity: 59,
      },
      {
        activity: 79,
      },
      {
        activity: 95,
      },
      {
        activity: 84,
      },
      {
        activity: 82,
      },
      {
        activity: 99,
      },
      {
        activity: 71,
      },
      {
        activity: 77,
      },
      {
        activity: 70,
      },
      {
        activity: 82,
      },
      {
        activity: 96,
      },
    ],
  },
  {
    id: '3745',
    customer: {
      fullName: 'Jana Volkman-Nader',
      email: 'alva.jenkins@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Company',
    mrr: 648.9306477382779,
    createdAt: '2023-10-02T23:24:27.465Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '1399',
    },
    status: 'Online',
    chart: [
      {
        activity: 63,
      },
      {
        activity: 67,
      },
      {
        activity: 100,
      },
      {
        activity: 68,
      },
      {
        activity: 77,
      },
      {
        activity: 63,
      },
      {
        activity: 57,
      },
      {
        activity: 82,
      },
      {
        activity: 83,
      },
      {
        activity: 65,
      },
      {
        activity: 97,
      },
      {
        activity: 88,
      },
      {
        activity: 90,
      },
      {
        activity: 50,
      },
      {
        activity: 94,
      },
    ],
  },
  {
    id: '9994',
    customer: {
      fullName: 'Gary Marvin',
      email: 'herminio_dach@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/658.jpg',
    },
    plan: 'Company',
    mrr: 479.40014656540006,
    createdAt: '2023-08-30T15:34:11.937Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '0967',
    },
    status: 'Offline',
    chart: [
      {
        activity: 51,
      },
      {
        activity: 60,
      },
      {
        activity: 87,
      },
      {
        activity: 74,
      },
      {
        activity: 66,
      },
      {
        activity: 57,
      },
      {
        activity: 97,
      },
      {
        activity: 84,
      },
      {
        activity: 94,
      },
      {
        activity: 57,
      },
      {
        activity: 89,
      },
      {
        activity: 57,
      },
      {
        activity: 96,
      },
      {
        activity: 89,
      },
      {
        activity: 59,
      },
    ],
  },
  {
    id: '7320',
    customer: {
      fullName: 'Carol DuBuque',
      email: 'flavie.gorczany@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/767.jpg',
    },
    plan: 'Team',
    mrr: 137.8435483125504,
    createdAt: '2023-11-11T06:19:15.473Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '3098',
    },
    status: 'Offline',
    chart: [
      {
        activity: 63,
      },
      {
        activity: 82,
      },
      {
        activity: 100,
      },
      {
        activity: 55,
      },
      {
        activity: 96,
      },
      {
        activity: 77,
      },
      {
        activity: 100,
      },
      {
        activity: 51,
      },
      {
        activity: 62,
      },
      {
        activity: 60,
      },
      {
        activity: 78,
      },
      {
        activity: 67,
      },
      {
        activity: 77,
      },
      {
        activity: 51,
      },
      {
        activity: 61,
      },
    ],
  },
  {
    id: '7141',
    customer: {
      fullName: 'Tim Barrows',
      email: 'clara_reynolds@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Basic',
    mrr: 248.82166477805004,
    createdAt: '2023-04-17T11:13:34.148Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '8535',
    },
    status: 'Online',
    chart: [
      {
        activity: 76,
      },
      {
        activity: 64,
      },
      {
        activity: 83,
      },
      {
        activity: 91,
      },
      {
        activity: 51,
      },
      {
        activity: 65,
      },
      {
        activity: 50,
      },
      {
        activity: 64,
      },
      {
        activity: 93,
      },
      {
        activity: 56,
      },
      {
        activity: 77,
      },
      {
        activity: 90,
      },
      {
        activity: 86,
      },
      {
        activity: 90,
      },
      {
        activity: 52,
      },
    ],
  },
  {
    id: '8868',
    customer: {
      fullName: 'Ms. Louise Mante',
      email: 'roy64@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1037.jpg',
    },
    plan: 'Basic',
    mrr: 164.06856868043542,
    createdAt: '2022-11-30T10:17:00.624Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '2360',
    },
    status: 'Online',
    chart: [
      {
        activity: 79,
      },
      {
        activity: 80,
      },
      {
        activity: 55,
      },
      {
        activity: 93,
      },
      {
        activity: 75,
      },
      {
        activity: 75,
      },
      {
        activity: 74,
      },
      {
        activity: 64,
      },
      {
        activity: 76,
      },
      {
        activity: 53,
      },
      {
        activity: 75,
      },
      {
        activity: 71,
      },
      {
        activity: 90,
      },
      {
        activity: 67,
      },
      {
        activity: 52,
      },
    ],
  },
  {
    id: '5185',
    customer: {
      fullName: 'Richard Yost',
      email: 'karianne_stanton49@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Team',
    mrr: 682.2207092149183,
    createdAt: '2023-10-24T07:13:42.672Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '0420',
    },
    status: 'Online',
    chart: [
      {
        activity: 90,
      },
      {
        activity: 73,
      },
      {
        activity: 86,
      },
      {
        activity: 71,
      },
      {
        activity: 85,
      },
      {
        activity: 77,
      },
      {
        activity: 71,
      },
      {
        activity: 63,
      },
      {
        activity: 51,
      },
      {
        activity: 76,
      },
      {
        activity: 69,
      },
      {
        activity: 80,
      },
      {
        activity: 95,
      },
      {
        activity: 90,
      },
      {
        activity: 63,
      },
    ],
  },
  {
    id: '7888',
    customer: {
      fullName: 'Stuart Raynor',
      email: 'fritz.dicki20@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1125.jpg',
    },
    plan: 'Company',
    mrr: 424.6358181484975,
    createdAt: '2023-04-25T23:48:23.980Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '5647',
    },
    status: 'Online',
    chart: [
      {
        activity: 55,
      },
      {
        activity: 100,
      },
      {
        activity: 63,
      },
      {
        activity: 67,
      },
      {
        activity: 52,
      },
      {
        activity: 75,
      },
      {
        activity: 83,
      },
      {
        activity: 100,
      },
      {
        activity: 70,
      },
      {
        activity: 85,
      },
      {
        activity: 82,
      },
      {
        activity: 99,
      },
      {
        activity: 55,
      },
      {
        activity: 95,
      },
      {
        activity: 61,
      },
    ],
  },
  {
    id: '0113',
    customer: {
      fullName: 'Mike Turner',
      email: 'zackery46@hotmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Professional',
    mrr: 437.02174042956904,
    createdAt: '2023-04-14T00:57:20.174Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '8316',
    },
    status: 'Offline',
    chart: [
      {
        activity: 66,
      },
      {
        activity: 55,
      },
      {
        activity: 97,
      },
      {
        activity: 78,
      },
      {
        activity: 69,
      },
      {
        activity: 63,
      },
      {
        activity: 78,
      },
      {
        activity: 65,
      },
      {
        activity: 88,
      },
      {
        activity: 100,
      },
      {
        activity: 57,
      },
      {
        activity: 84,
      },
      {
        activity: 83,
      },
      {
        activity: 81,
      },
      {
        activity: 85,
      },
    ],
  },
  {
    id: '3545',
    customer: {
      fullName: 'Elizabeth Schaefer',
      email: 'modesto_corkery@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1119.jpg',
    },
    plan: 'Team',
    mrr: 267.85136842145585,
    createdAt: '2023-06-24T16:16:35.909Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '8296',
    },
    status: 'Online',
    chart: [
      {
        activity: 67,
      },
      {
        activity: 74,
      },
      {
        activity: 100,
      },
      {
        activity: 94,
      },
      {
        activity: 98,
      },
      {
        activity: 69,
      },
      {
        activity: 76,
      },
      {
        activity: 90,
      },
      {
        activity: 97,
      },
      {
        activity: 51,
      },
      {
        activity: 66,
      },
      {
        activity: 83,
      },
      {
        activity: 62,
      },
      {
        activity: 55,
      },
      {
        activity: 79,
      },
    ],
  },
  {
    id: '0341',
    customer: {
      fullName: 'Maureen Mohr MD',
      email: 'fannie_rowe83@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/734.jpg',
    },
    plan: 'Basic',
    mrr: 654.9872612515464,
    createdAt: '2022-12-10T15:46:20.500Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '7863',
    },
    status: 'Online',
    chart: [
      {
        activity: 50,
      },
      {
        activity: 77,
      },
      {
        activity: 79,
      },
      {
        activity: 78,
      },
      {
        activity: 82,
      },
      {
        activity: 69,
      },
      {
        activity: 83,
      },
      {
        activity: 98,
      },
      {
        activity: 95,
      },
      {
        activity: 51,
      },
      {
        activity: 62,
      },
      {
        activity: 74,
      },
      {
        activity: 91,
      },
      {
        activity: 82,
      },
      {
        activity: 58,
      },
    ],
  },
  {
    id: '1364',
    customer: {
      fullName: 'Erick Friesen',
      email: 'edd.wiegand@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/788.jpg',
    },
    plan: 'Basic',
    mrr: 536.482336084824,
    createdAt: '2023-01-14T03:17:11.211Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '1015',
    },
    status: 'Online',
    chart: [
      {
        activity: 75,
      },
      {
        activity: 61,
      },
      {
        activity: 87,
      },
      {
        activity: 98,
      },
      {
        activity: 70,
      },
      {
        activity: 53,
      },
      {
        activity: 58,
      },
      {
        activity: 64,
      },
      {
        activity: 94,
      },
      {
        activity: 75,
      },
      {
        activity: 70,
      },
      {
        activity: 52,
      },
      {
        activity: 88,
      },
      {
        activity: 77,
      },
      {
        activity: 70,
      },
    ],
  },
  {
    id: '4241',
    customer: {
      fullName: 'Mrs. Deanna Nader',
      email: 'monte.block@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1141.jpg',
    },
    plan: 'Company',
    mrr: 670.4535738688428,
    createdAt: '2023-05-24T02:19:11.072Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '2905',
    },
    status: 'Offline',
    chart: [
      {
        activity: 65,
      },
      {
        activity: 98,
      },
      {
        activity: 64,
      },
      {
        activity: 65,
      },
      {
        activity: 50,
      },
      {
        activity: 62,
      },
      {
        activity: 84,
      },
      {
        activity: 83,
      },
      {
        activity: 64,
      },
      {
        activity: 85,
      },
      {
        activity: 65,
      },
      {
        activity: 55,
      },
      {
        activity: 79,
      },
      {
        activity: 61,
      },
      {
        activity: 57,
      },
    ],
  },
  {
    id: '0372',
    customer: {
      fullName: 'Mr. Bernard Quitzon',
      email: 'ali8@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Company',
    mrr: 836.0570701789111,
    createdAt: '2022-12-07T15:53:48.154Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '6432',
    },
    status: 'Offline',
    chart: [
      {
        activity: 68,
      },
      {
        activity: 84,
      },
      {
        activity: 63,
      },
      {
        activity: 74,
      },
      {
        activity: 99,
      },
      {
        activity: 69,
      },
      {
        activity: 92,
      },
      {
        activity: 77,
      },
      {
        activity: 72,
      },
      {
        activity: 95,
      },
      {
        activity: 51,
      },
      {
        activity: 78,
      },
      {
        activity: 76,
      },
      {
        activity: 55,
      },
      {
        activity: 90,
      },
    ],
  },
  {
    id: '0807',
    customer: {
      fullName: 'Lawrence Prohaska',
      email: 'elda_gislason7@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Professional',
    mrr: 358.02422472275794,
    createdAt: '2023-10-29T16:10:51.553Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '3699',
    },
    status: 'Offline',
    chart: [
      {
        activity: 68,
      },
      {
        activity: 61,
      },
      {
        activity: 94,
      },
      {
        activity: 81,
      },
      {
        activity: 70,
      },
      {
        activity: 88,
      },
      {
        activity: 81,
      },
      {
        activity: 56,
      },
      {
        activity: 50,
      },
      {
        activity: 78,
      },
      {
        activity: 73,
      },
      {
        activity: 93,
      },
      {
        activity: 100,
      },
      {
        activity: 95,
      },
      {
        activity: 89,
      },
    ],
  },
  {
    id: '7378',
    customer: {
      fullName: 'Rufus Schmitt',
      email: 'javonte23@gmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Team',
    mrr: 986.6403929784428,
    createdAt: '2023-08-20T00:24:35.296Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '3925',
    },
    status: 'Offline',
    chart: [
      {
        activity: 56,
      },
      {
        activity: 84,
      },
      {
        activity: 90,
      },
      {
        activity: 66,
      },
      {
        activity: 92,
      },
      {
        activity: 69,
      },
      {
        activity: 98,
      },
      {
        activity: 87,
      },
      {
        activity: 71,
      },
      {
        activity: 97,
      },
      {
        activity: 56,
      },
      {
        activity: 89,
      },
      {
        activity: 79,
      },
      {
        activity: 66,
      },
      {
        activity: 52,
      },
    ],
  },
  {
    id: '5095',
    customer: {
      fullName: 'Jana Hartmann PhD',
      email: 'alexa33@hotmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Professional',
    mrr: 621.4566267989576,
    createdAt: '2022-12-04T20:58:40.387Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '4852',
    },
    status: 'Online',
    chart: [
      {
        activity: 63,
      },
      {
        activity: 89,
      },
      {
        activity: 97,
      },
      {
        activity: 75,
      },
      {
        activity: 100,
      },
      {
        activity: 52,
      },
      {
        activity: 51,
      },
      {
        activity: 85,
      },
      {
        activity: 91,
      },
      {
        activity: 58,
      },
      {
        activity: 83,
      },
      {
        activity: 56,
      },
      {
        activity: 72,
      },
      {
        activity: 53,
      },
      {
        activity: 69,
      },
    ],
  },
  {
    id: '2444',
    customer: {
      fullName: 'Dr. Lucy Beahan',
      email: 'cody.lakin@gmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Professional',
    mrr: 971.0808718756307,
    createdAt: '2023-09-20T02:43:35.925Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '5138',
    },
    status: 'Online',
    chart: [
      {
        activity: 51,
      },
      {
        activity: 70,
      },
      {
        activity: 62,
      },
      {
        activity: 96,
      },
      {
        activity: 76,
      },
      {
        activity: 67,
      },
      {
        activity: 99,
      },
      {
        activity: 76,
      },
      {
        activity: 67,
      },
      {
        activity: 84,
      },
      {
        activity: 52,
      },
      {
        activity: 90,
      },
      {
        activity: 62,
      },
      {
        activity: 87,
      },
      {
        activity: 85,
      },
    ],
  },
  {
    id: '2074',
    customer: {
      fullName: 'Alfredo Dicki',
      email: 'clement_robel@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/15.jpg',
    },
    plan: 'Team',
    mrr: 758.8942811326124,
    createdAt: '2023-03-29T13:48:38.699Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '3515',
    },
    status: 'Offline',
    chart: [
      {
        activity: 76,
      },
      {
        activity: 82,
      },
      {
        activity: 77,
      },
      {
        activity: 99,
      },
      {
        activity: 79,
      },
      {
        activity: 58,
      },
      {
        activity: 86,
      },
      {
        activity: 78,
      },
      {
        activity: 74,
      },
      {
        activity: 79,
      },
      {
        activity: 94,
      },
      {
        activity: 56,
      },
      {
        activity: 68,
      },
      {
        activity: 70,
      },
      {
        activity: 63,
      },
    ],
  },
  {
    id: '6879',
    customer: {
      fullName: 'Teresa Leuschke',
      email: 'ricky32@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Team',
    mrr: 888.0016474032309,
    createdAt: '2023-07-07T00:13:07.533Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '8936',
    },
    status: 'Online',
    chart: [
      {
        activity: 70,
      },
      {
        activity: 73,
      },
      {
        activity: 54,
      },
      {
        activity: 80,
      },
      {
        activity: 57,
      },
      {
        activity: 86,
      },
      {
        activity: 57,
      },
      {
        activity: 68,
      },
      {
        activity: 55,
      },
      {
        activity: 80,
      },
      {
        activity: 56,
      },
      {
        activity: 63,
      },
      {
        activity: 63,
      },
      {
        activity: 79,
      },
      {
        activity: 80,
      },
    ],
  },
  {
    id: '7660',
    customer: {
      fullName: 'Jana Maggio',
      email: 'dominique45@hotmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Company',
    mrr: 214.88018189463764,
    createdAt: '2023-01-03T09:16:55.338Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '9834',
    },
    status: 'Online',
    chart: [
      {
        activity: 100,
      },
      {
        activity: 73,
      },
      {
        activity: 89,
      },
      {
        activity: 80,
      },
      {
        activity: 94,
      },
      {
        activity: 93,
      },
      {
        activity: 59,
      },
      {
        activity: 71,
      },
      {
        activity: 100,
      },
      {
        activity: 62,
      },
      {
        activity: 71,
      },
      {
        activity: 61,
      },
      {
        activity: 68,
      },
      {
        activity: 70,
      },
      {
        activity: 76,
      },
    ],
  },
  {
    id: '0782',
    customer: {
      fullName: 'Amber Yundt',
      email: 'annetta68@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Basic',
    mrr: 469.53005360160023,
    createdAt: '2023-06-17T09:44:09.048Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '7821',
    },
    status: 'Offline',
    chart: [
      {
        activity: 88,
      },
      {
        activity: 85,
      },
      {
        activity: 83,
      },
      {
        activity: 59,
      },
      {
        activity: 70,
      },
      {
        activity: 81,
      },
      {
        activity: 55,
      },
      {
        activity: 66,
      },
      {
        activity: 93,
      },
      {
        activity: 96,
      },
      {
        activity: 61,
      },
      {
        activity: 82,
      },
      {
        activity: 84,
      },
      {
        activity: 82,
      },
      {
        activity: 69,
      },
    ],
  },
  {
    id: '7844',
    customer: {
      fullName: 'Irene Armstrong',
      email: 'danielle_schmeler54@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/794.jpg',
    },
    plan: 'Professional',
    mrr: 820.6376735786907,
    createdAt: '2023-10-27T00:40:22.478Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '5774',
    },
    status: 'Online',
    chart: [
      {
        activity: 92,
      },
      {
        activity: 65,
      },
      {
        activity: 77,
      },
      {
        activity: 75,
      },
      {
        activity: 73,
      },
      {
        activity: 98,
      },
      {
        activity: 71,
      },
      {
        activity: 99,
      },
      {
        activity: 85,
      },
      {
        activity: 79,
      },
      {
        activity: 77,
      },
      {
        activity: 81,
      },
      {
        activity: 93,
      },
      {
        activity: 50,
      },
      {
        activity: 87,
      },
    ],
  },
  {
    id: '4228',
    customer: {
      fullName: 'Duane Rosenbaum',
      email: 'marguerite.windler@hotmail.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Basic',
    mrr: 105.38717680471018,
    createdAt: '2023-04-07T16:29:08.923Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '1736',
    },
    status: 'Offline',
    chart: [
      {
        activity: 94,
      },
      {
        activity: 81,
      },
      {
        activity: 61,
      },
      {
        activity: 56,
      },
      {
        activity: 61,
      },
      {
        activity: 76,
      },
      {
        activity: 80,
      },
      {
        activity: 76,
      },
      {
        activity: 93,
      },
      {
        activity: 57,
      },
      {
        activity: 64,
      },
      {
        activity: 90,
      },
      {
        activity: 54,
      },
      {
        activity: 87,
      },
      {
        activity: 95,
      },
    ],
  },
  {
    id: '0759',
    customer: {
      fullName: 'Chad Treutel',
      email: 'rickey68@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1145.jpg',
    },
    plan: 'Professional',
    mrr: 505.6547659225762,
    createdAt: '2023-11-10T00:34:36.241Z',
    paymentMethod: {
      name: 'MasterCard',
      cardNumber: '6101',
    },
    status: 'Online',
    chart: [
      {
        activity: 58,
      },
      {
        activity: 66,
      },
      {
        activity: 58,
      },
      {
        activity: 66,
      },
      {
        activity: 88,
      },
      {
        activity: 95,
      },
      {
        activity: 72,
      },
      {
        activity: 70,
      },
      {
        activity: 77,
      },
      {
        activity: 50,
      },
      {
        activity: 82,
      },
      {
        activity: 76,
      },
      {
        activity: 71,
      },
      {
        activity: 93,
      },
      {
        activity: 87,
      },
    ],
  },
  {
    id: '8723',
    customer: {
      fullName: 'Kari Ledner',
      email: 'manley13@yahoo.com',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    plan: 'Professional',
    mrr: 416.9625087988097,
    createdAt: '2023-11-06T16:54:46.945Z',
    paymentMethod: {
      name: 'Visa',
      cardNumber: '8782',
    },
    status: 'Offline',
    chart: [
      {
        activity: 52,
      },
      {
        activity: 75,
      },
      {
        activity: 55,
      },
      {
        activity: 86,
      },
      {
        activity: 66,
      },
      {
        activity: 73,
      },
      {
        activity: 84,
      },
      {
        activity: 73,
      },
      {
        activity: 74,
      },
      {
        activity: 95,
      },
      {
        activity: 78,
      },
      {
        activity: 55,
      },
      {
        activity: 77,
      },
      {
        activity: 92,
      },
      {
        activity: 53,
      },
    ],
  },
];
