// import { faker } from '@faker-js/faker';

export enum Color {
    RED,
    GREEN,
    BLUE
}

export interface User {
    color: Color;
    name: string;
    speed: number;
    time: number;
}

// Создание 1000 пользователей

// const colors: Color[] = [Color.RED, Color.GREEN, Color.BLUE];

// function createRandomUser() {
//     const user: User = {
//         color: faker.helpers.arrayElement(Object.values(colors)),
//         name: faker.person.fullName(),
//         speed: faker.number.int({ min: 60, max: 360 }),
//         time: faker.number.int({ max: 600000 })
//     };
//     return user;
// }

// const users = () => {
//     const returnArr = []
//     for (let i = 0; i < 1000; i++) {
//         const user = createRandomUser();
//         returnArr.push(user);
//     }
//     returnArr.sort((a, b) => a.time - b.time);
//     return returnArr
// }

export const dataUsers: User[] = [
    {
        "color": 0,
        "name": "Becky Corwin Becky Corwin Becky Corwin",
        "speed": 69,
        "time": 1025
    },
    {
        "color": 1,
        "name": "Dr. Stanley Bergstrom",
        "speed": 69,
        "time": 1633
    },
    {
        "color": 2,
        "name": "Natasha Beer",
        "speed": 235,
        "time": 3345
    },
    {
        "color": 0,
        "name": "Miss Joanna Ziemann",
        "speed": 187,
        "time": 3631
    },
    {
        "color": 2,
        "name": "Ray Yundt",
        "speed": 317,
        "time": 4107
    },
    {
        "color": 1,
        "name": "Lonnie Kub",
        "speed": 205,
        "time": 4362
    },
    {
        "color": 2,
        "name": "Pamela Zulauf",
        "speed": 115,
        "time": 4430
    },
    {
        "color": 1,
        "name": "Charlie Crona",
        "speed": 199,
        "time": 5389
    },
    {
        "color": 0,
        "name": "Josh Morar DDS",
        "speed": 308,
        "time": 5513
    },
    {
        "color": 0,
        "name": "Dr. Ben Lubowitz",
        "speed": 325,
        "time": 6415
    },
    {
        "color": 0,
        "name": "Dwight Gutkowski",
        "speed": 154,
        "time": 6543
    },
    {
        "color": 2,
        "name": "Maryann Hirthe",
        "speed": 225,
        "time": 6608
    },
    {
        "color": 1,
        "name": "Katie Schmidt",
        "speed": 284,
        "time": 8495
    },
    {
        "color": 2,
        "name": "Kate Conn Sr.",
        "speed": 70,
        "time": 8839
    },
    {
        "color": 2,
        "name": "Miss Nadine Lindgren",
        "speed": 244,
        "time": 9782
    },
    {
        "color": 2,
        "name": "Mr. Roderick Ledner",
        "speed": 162,
        "time": 10925
    },
    {
        "color": 0,
        "name": "Amelia Romaguera",
        "speed": 350,
        "time": 11938
    },
    {
        "color": 2,
        "name": "Patrick O'Connell",
        "speed": 95,
        "time": 12106
    },
    {
        "color": 2,
        "name": "Mrs. Toni Sauer",
        "speed": 262,
        "time": 14002
    },
    {
        "color": 0,
        "name": "Erma Kshlerin",
        "speed": 80,
        "time": 15168
    },
    {
        "color": 1,
        "name": "Ben Feil",
        "speed": 64,
        "time": 15604
    },
    {
        "color": 2,
        "name": "Dawn Ledner",
        "speed": 201,
        "time": 15677
    },
    {
        "color": 1,
        "name": "Lindsay Schuppe",
        "speed": 120,
        "time": 16227
    },
    {
        "color": 2,
        "name": "Edwin Waelchi",
        "speed": 205,
        "time": 17478
    },
    {
        "color": 1,
        "name": "Clarence Abbott V",
        "speed": 89,
        "time": 17535
    },
    {
        "color": 2,
        "name": "Mr. Antonio Reichel",
        "speed": 265,
        "time": 18280
    },
    {
        "color": 1,
        "name": "Guillermo Labadie Jr.",
        "speed": 344,
        "time": 18451
    },
    {
        "color": 1,
        "name": "Neal Boyer",
        "speed": 294,
        "time": 19009
    },
    {
        "color": 1,
        "name": "Anne Schaefer",
        "speed": 246,
        "time": 19226
    },
    {
        "color": 1,
        "name": "Dr. Sonja Funk",
        "speed": 341,
        "time": 19756
    },
    {
        "color": 2,
        "name": "Olga Sipes",
        "speed": 274,
        "time": 20229
    },
    {
        "color": 1,
        "name": "Amelia Leannon",
        "speed": 350,
        "time": 20545
    },
    {
        "color": 2,
        "name": "Mercedes Mertz",
        "speed": 337,
        "time": 20590
    },
    {
        "color": 2,
        "name": "Hugh Pagac",
        "speed": 360,
        "time": 20807
    },
    {
        "color": 0,
        "name": "Mindy Hoeger II",
        "speed": 344,
        "time": 21018
    },
    {
        "color": 0,
        "name": "Angelica Hartmann-Pfannerstill",
        "speed": 330,
        "time": 21142
    },
    {
        "color": 2,
        "name": "Mrs. Ella Osinski",
        "speed": 173,
        "time": 21311
    },
    {
        "color": 2,
        "name": "Cary O'Reilly Sr.",
        "speed": 239,
        "time": 21962
    },
    {
        "color": 1,
        "name": "Hannah Von",
        "speed": 110,
        "time": 24973
    },
    {
        "color": 2,
        "name": "Mamie Miller",
        "speed": 334,
        "time": 26292
    },
    {
        "color": 2,
        "name": "Melody Pfannerstill",
        "speed": 112,
        "time": 26331
    },
    {
        "color": 0,
        "name": "Mrs. Josefina Kuhn",
        "speed": 172,
        "time": 26489
    },
    {
        "color": 1,
        "name": "Shelly Williamson",
        "speed": 247,
        "time": 26780
    },
    {
        "color": 0,
        "name": "Charlotte Buckridge DDS",
        "speed": 126,
        "time": 27079
    },
    {
        "color": 2,
        "name": "Dr. Minnie Hansen",
        "speed": 85,
        "time": 27269
    },
    {
        "color": 1,
        "name": "Gene King",
        "speed": 154,
        "time": 28027
    },
    {
        "color": 1,
        "name": "Timmy Fritsch",
        "speed": 287,
        "time": 28031
    },
    {
        "color": 1,
        "name": "Carrie White PhD",
        "speed": 333,
        "time": 28075
    },
    {
        "color": 0,
        "name": "Omar Runolfsdottir",
        "speed": 153,
        "time": 28550
    },
    {
        "color": 0,
        "name": "Blanca Walter",
        "speed": 356,
        "time": 28576
    },
    {
        "color": 0,
        "name": "Betsy Schowalter-Kemmer",
        "speed": 200,
        "time": 28578
    },
    {
        "color": 2,
        "name": "Marcos Wisozk",
        "speed": 354,
        "time": 29650
    },
    {
        "color": 0,
        "name": "Maureen Hane",
        "speed": 276,
        "time": 30624
    },
    {
        "color": 2,
        "name": "Lorena Reichel",
        "speed": 234,
        "time": 30711
    },
    {
        "color": 1,
        "name": "Rosemary Heidenreich",
        "speed": 194,
        "time": 31330
    },
    {
        "color": 0,
        "name": "June Bailey",
        "speed": 72,
        "time": 31330
    },
    {
        "color": 2,
        "name": "Debbie Cremin III",
        "speed": 231,
        "time": 32645
    },
    {
        "color": 0,
        "name": "Mr. Gregory Marvin",
        "speed": 176,
        "time": 33927
    },
    {
        "color": 2,
        "name": "Roxanne Deckow",
        "speed": 264,
        "time": 34085
    },
    {
        "color": 2,
        "name": "Sarah Auer",
        "speed": 240,
        "time": 34414
    },
    {
        "color": 1,
        "name": "Eleanor Wolf",
        "speed": 315,
        "time": 35096
    },
    {
        "color": 0,
        "name": "Lance Mayer",
        "speed": 356,
        "time": 35474
    },
    {
        "color": 2,
        "name": "Marlene Wisoky",
        "speed": 142,
        "time": 35738
    },
    {
        "color": 0,
        "name": "Miss Nina Kling",
        "speed": 99,
        "time": 35847
    },
    {
        "color": 1,
        "name": "Nicole Ernser IV",
        "speed": 99,
        "time": 35894
    },
    {
        "color": 0,
        "name": "Carl Berge",
        "speed": 260,
        "time": 36081
    },
    {
        "color": 2,
        "name": "Flora Bartell",
        "speed": 86,
        "time": 36397
    },
    {
        "color": 2,
        "name": "Dolores Kassulke",
        "speed": 321,
        "time": 36454
    },
    {
        "color": 1,
        "name": "Kellie Lemke-Mitchell",
        "speed": 132,
        "time": 37373
    },
    {
        "color": 2,
        "name": "Fredrick Heidenreich-Marks",
        "speed": 195,
        "time": 37863
    },
    {
        "color": 1,
        "name": "Delbert Daugherty Jr.",
        "speed": 200,
        "time": 37903
    },
    {
        "color": 1,
        "name": "Virginia Lockman",
        "speed": 141,
        "time": 38107
    },
    {
        "color": 1,
        "name": "Josh Kerluke",
        "speed": 333,
        "time": 38459
    },
    {
        "color": 1,
        "name": "Francisco Lang PhD",
        "speed": 314,
        "time": 39253
    },
    {
        "color": 2,
        "name": "Guadalupe Beier",
        "speed": 153,
        "time": 39750
    },
    {
        "color": 2,
        "name": "Alyssa Schowalter",
        "speed": 208,
        "time": 43061
    },
    {
        "color": 1,
        "name": "Deborah Stanton",
        "speed": 114,
        "time": 43110
    },
    {
        "color": 2,
        "name": "Nettie Moen",
        "speed": 261,
        "time": 43833
    },
    {
        "color": 0,
        "name": "Annette Price DVM",
        "speed": 213,
        "time": 44285
    },
    {
        "color": 1,
        "name": "Craig Spencer",
        "speed": 327,
        "time": 44517
    },
    {
        "color": 1,
        "name": "Ramiro DuBuque DDS",
        "speed": 66,
        "time": 44692
    },
    {
        "color": 2,
        "name": "Harold Auer",
        "speed": 138,
        "time": 45049
    },
    {
        "color": 2,
        "name": "Ricky Olson",
        "speed": 358,
        "time": 45394
    },
    {
        "color": 0,
        "name": "Shirley Berge",
        "speed": 205,
        "time": 46032
    },
    {
        "color": 0,
        "name": "Mrs. Terri Mitchell",
        "speed": 220,
        "time": 46058
    },
    {
        "color": 0,
        "name": "Ann Wilkinson",
        "speed": 242,
        "time": 46160
    },
    {
        "color": 2,
        "name": "Roxanne Donnelly",
        "speed": 149,
        "time": 46188
    },
    {
        "color": 0,
        "name": "Miriam Bins",
        "speed": 212,
        "time": 46601
    },
    {
        "color": 1,
        "name": "Rosie Muller",
        "speed": 319,
        "time": 46673
    },
    {
        "color": 0,
        "name": "Tyrone Reynolds",
        "speed": 224,
        "time": 47199
    },
    {
        "color": 2,
        "name": "Tracy O'Keefe DVM",
        "speed": 325,
        "time": 47779
    },
    {
        "color": 0,
        "name": "Krista McClure",
        "speed": 309,
        "time": 47809
    },
    {
        "color": 0,
        "name": "Irma Greenholt",
        "speed": 329,
        "time": 48811
    },
    {
        "color": 2,
        "name": "Jessie Waters",
        "speed": 208,
        "time": 49573
    },
    {
        "color": 0,
        "name": "Shelia Ritchie",
        "speed": 200,
        "time": 50775
    },
    {
        "color": 2,
        "name": "Linda Thompson",
        "speed": 296,
        "time": 51368
    },
    {
        "color": 1,
        "name": "Malcolm Barton",
        "speed": 62,
        "time": 51521
    },
    {
        "color": 1,
        "name": "Terri Block V",
        "speed": 276,
        "time": 51870
    },
    {
        "color": 2,
        "name": "Rosie Dach",
        "speed": 120,
        "time": 52596
    },
    {
        "color": 2,
        "name": "Travis Raynor",
        "speed": 145,
        "time": 52878
    },
    {
        "color": 0,
        "name": "Dr. Elvira Heller",
        "speed": 261,
        "time": 53254
    },
    {
        "color": 0,
        "name": "Whitney Stracke",
        "speed": 244,
        "time": 55110
    },
    {
        "color": 2,
        "name": "Tonya Hilpert",
        "speed": 269,
        "time": 55532
    },
    {
        "color": 1,
        "name": "Eva Schmitt",
        "speed": 160,
        "time": 55600
    },
    {
        "color": 1,
        "name": "Rudolph Bashirian",
        "speed": 270,
        "time": 57517
    },
    {
        "color": 0,
        "name": "Sean Schmitt",
        "speed": 255,
        "time": 58456
    },
    {
        "color": 0,
        "name": "Sonja Smith",
        "speed": 322,
        "time": 58671
    },
    {
        "color": 1,
        "name": "Sam Lemke",
        "speed": 294,
        "time": 60376
    },
    {
        "color": 1,
        "name": "Casey Upton",
        "speed": 118,
        "time": 60714
    },
    {
        "color": 2,
        "name": "Evan Konopelski",
        "speed": 176,
        "time": 60915
    },
    {
        "color": 2,
        "name": "Mr. Damon Kuhlman",
        "speed": 148,
        "time": 61057
    },
    {
        "color": 1,
        "name": "Dr. Horace Mueller",
        "speed": 308,
        "time": 61529
    },
    {
        "color": 2,
        "name": "Mr. Erik Cole",
        "speed": 173,
        "time": 63139
    },
    {
        "color": 2,
        "name": "Marian Wolf",
        "speed": 325,
        "time": 63471
    },
    {
        "color": 2,
        "name": "Crystal Hirthe PhD",
        "speed": 241,
        "time": 63556
    },
    {
        "color": 1,
        "name": "Pam Stiedemann",
        "speed": 277,
        "time": 64515
    },
    {
        "color": 0,
        "name": "Leslie Schultz",
        "speed": 207,
        "time": 64672
    },
    {
        "color": 2,
        "name": "Christopher Blick",
        "speed": 125,
        "time": 64871
    },
    {
        "color": 0,
        "name": "Joy Fahey",
        "speed": 225,
        "time": 65373
    },
    {
        "color": 2,
        "name": "Tyler Cole",
        "speed": 182,
        "time": 65507
    },
    {
        "color": 2,
        "name": "Jana Welch",
        "speed": 82,
        "time": 66136
    },
    {
        "color": 2,
        "name": "Eric Watsica",
        "speed": 220,
        "time": 66397
    },
    {
        "color": 1,
        "name": "Greg Olson",
        "speed": 316,
        "time": 67555
    },
    {
        "color": 2,
        "name": "Kyle Hilpert",
        "speed": 340,
        "time": 67806
    },
    {
        "color": 2,
        "name": "Kara Mayert",
        "speed": 340,
        "time": 68302
    },
    {
        "color": 2,
        "name": "Lynette Cronin",
        "speed": 185,
        "time": 69073
    },
    {
        "color": 2,
        "name": "Connie Hyatt II",
        "speed": 97,
        "time": 69522
    },
    {
        "color": 1,
        "name": "Delbert Bosco",
        "speed": 187,
        "time": 69901
    },
    {
        "color": 1,
        "name": "Noah Klein II",
        "speed": 259,
        "time": 69960
    },
    {
        "color": 1,
        "name": "Geoffrey Goodwin",
        "speed": 209,
        "time": 71573
    },
    {
        "color": 2,
        "name": "Elijah Kulas-Mertz",
        "speed": 248,
        "time": 72407
    },
    {
        "color": 1,
        "name": "Austin Blanda III",
        "speed": 276,
        "time": 74257
    },
    {
        "color": 2,
        "name": "Iris Thiel-Jaskolski",
        "speed": 192,
        "time": 74716
    },
    {
        "color": 0,
        "name": "Dr. Roland Lehner",
        "speed": 289,
        "time": 74988
    },
    {
        "color": 0,
        "name": "Jeffrey Pollich",
        "speed": 304,
        "time": 75047
    },
    {
        "color": 0,
        "name": "Brett Johnston",
        "speed": 125,
        "time": 76371
    },
    {
        "color": 1,
        "name": "Dominick Stokes",
        "speed": 353,
        "time": 76544
    },
    {
        "color": 1,
        "name": "Lester Hand PhD",
        "speed": 86,
        "time": 77274
    },
    {
        "color": 0,
        "name": "Gloria Smith",
        "speed": 344,
        "time": 77844
    },
    {
        "color": 0,
        "name": "Patrick Champlin",
        "speed": 89,
        "time": 78473
    },
    {
        "color": 2,
        "name": "Miriam Boyle",
        "speed": 99,
        "time": 81153
    },
    {
        "color": 2,
        "name": "Travis Ankunding",
        "speed": 180,
        "time": 82042
    },
    {
        "color": 1,
        "name": "Marshall Turner",
        "speed": 110,
        "time": 83330
    },
    {
        "color": 1,
        "name": "Lori Gottlieb II",
        "speed": 126,
        "time": 83371
    },
    {
        "color": 0,
        "name": "Ms. Lynette Runolfsson",
        "speed": 293,
        "time": 83415
    },
    {
        "color": 2,
        "name": "Sylvester Rogahn V",
        "speed": 329,
        "time": 83846
    },
    {
        "color": 1,
        "name": "Garry Konopelski",
        "speed": 127,
        "time": 83963
    },
    {
        "color": 0,
        "name": "Marco Spinka Sr.",
        "speed": 204,
        "time": 83966
    },
    {
        "color": 2,
        "name": "Cory Gerlach",
        "speed": 334,
        "time": 84449
    },
    {
        "color": 0,
        "name": "Marlon Beier",
        "speed": 354,
        "time": 84557
    },
    {
        "color": 0,
        "name": "Javier Bogisich",
        "speed": 147,
        "time": 85187
    },
    {
        "color": 0,
        "name": "Charlie Dickinson PhD",
        "speed": 313,
        "time": 85466
    },
    {
        "color": 1,
        "name": "Anthony Rutherford",
        "speed": 115,
        "time": 85513
    },
    {
        "color": 0,
        "name": "Monique Rempel",
        "speed": 60,
        "time": 86074
    },
    {
        "color": 0,
        "name": "Arlene Runolfsson",
        "speed": 113,
        "time": 86902
    },
    {
        "color": 0,
        "name": "Judith Cartwright",
        "speed": 247,
        "time": 88018
    },
    {
        "color": 2,
        "name": "Agnes Weissnat II",
        "speed": 161,
        "time": 88238
    },
    {
        "color": 1,
        "name": "Ms. Georgia Heidenreich",
        "speed": 135,
        "time": 88694
    },
    {
        "color": 1,
        "name": "Patti Romaguera",
        "speed": 304,
        "time": 88889
    },
    {
        "color": 2,
        "name": "Kristie Pacocha",
        "speed": 342,
        "time": 90866
    },
    {
        "color": 2,
        "name": "Vicki Funk",
        "speed": 174,
        "time": 91423
    },
    {
        "color": 2,
        "name": "Troy Murray IV",
        "speed": 282,
        "time": 92137
    },
    {
        "color": 1,
        "name": "Valerie Tillman Sr.",
        "speed": 157,
        "time": 92492
    },
    {
        "color": 1,
        "name": "Laurie Cummerata",
        "speed": 79,
        "time": 92624
    },
    {
        "color": 2,
        "name": "Julia Franey-Pollich",
        "speed": 192,
        "time": 93125
    },
    {
        "color": 0,
        "name": "Nina Franecki",
        "speed": 187,
        "time": 93226
    },
    {
        "color": 0,
        "name": "Terry Weber",
        "speed": 298,
        "time": 93426
    },
    {
        "color": 2,
        "name": "Glenda Skiles",
        "speed": 197,
        "time": 93590
    },
    {
        "color": 0,
        "name": "Luke Dicki",
        "speed": 349,
        "time": 94282
    },
    {
        "color": 2,
        "name": "Miss Gwendolyn Beier",
        "speed": 107,
        "time": 95955
    },
    {
        "color": 0,
        "name": "Lydia Crist",
        "speed": 145,
        "time": 96240
    },
    {
        "color": 2,
        "name": "Pat Gulgowski",
        "speed": 294,
        "time": 96476
    },
    {
        "color": 2,
        "name": "Rick Monahan",
        "speed": 220,
        "time": 96664
    },
    {
        "color": 2,
        "name": "Marlon Hamill III",
        "speed": 321,
        "time": 97342
    },
    {
        "color": 0,
        "name": "Doug Deckow",
        "speed": 64,
        "time": 97429
    },
    {
        "color": 1,
        "name": "Dr. Colin Hartmann",
        "speed": 174,
        "time": 97497
    },
    {
        "color": 2,
        "name": "Latoya Olson",
        "speed": 220,
        "time": 97911
    },
    {
        "color": 1,
        "name": "Laurence Romaguera",
        "speed": 344,
        "time": 98434
    },
    {
        "color": 0,
        "name": "Sarah Boyer",
        "speed": 174,
        "time": 99531
    },
    {
        "color": 2,
        "name": "Dr. Jorge West",
        "speed": 329,
        "time": 99689
    },
    {
        "color": 2,
        "name": "Ron Keeling",
        "speed": 311,
        "time": 99930
    },
    {
        "color": 2,
        "name": "Jan Veum",
        "speed": 188,
        "time": 102745
    },
    {
        "color": 2,
        "name": "Alvin Hahn",
        "speed": 303,
        "time": 103829
    },
    {
        "color": 1,
        "name": "Mrs. Jennie Schinner",
        "speed": 344,
        "time": 104477
    },
    {
        "color": 1,
        "name": "Sergio Halvorson",
        "speed": 233,
        "time": 105223
    },
    {
        "color": 0,
        "name": "Miss Shelley Donnelly",
        "speed": 160,
        "time": 105312
    },
    {
        "color": 0,
        "name": "Anne McClure",
        "speed": 207,
        "time": 105587
    },
    {
        "color": 2,
        "name": "Lois Bins",
        "speed": 324,
        "time": 106185
    },
    {
        "color": 2,
        "name": "Phil Dach-Rosenbaum",
        "speed": 220,
        "time": 106473
    },
    {
        "color": 1,
        "name": "Luz VonRueden",
        "speed": 196,
        "time": 106477
    },
    {
        "color": 0,
        "name": "Steve Gislason",
        "speed": 341,
        "time": 106827
    },
    {
        "color": 2,
        "name": "Jermaine Rolfson I",
        "speed": 252,
        "time": 107043
    },
    {
        "color": 1,
        "name": "Arturo Paucek",
        "speed": 191,
        "time": 107595
    },
    {
        "color": 0,
        "name": "Roland Kuphal",
        "speed": 178,
        "time": 108606
    },
    {
        "color": 1,
        "name": "Johanna Schmidt",
        "speed": 309,
        "time": 108855
    },
    {
        "color": 0,
        "name": "Christina Hettinger",
        "speed": 328,
        "time": 109689
    },
    {
        "color": 1,
        "name": "Dr. Jason Beatty",
        "speed": 334,
        "time": 110078
    },
    {
        "color": 0,
        "name": "Virginia Grady",
        "speed": 299,
        "time": 111542
    },
    {
        "color": 0,
        "name": "Sabrina VonRueden",
        "speed": 229,
        "time": 111893
    },
    {
        "color": 0,
        "name": "Lucy Batz I",
        "speed": 110,
        "time": 112050
    },
    {
        "color": 2,
        "name": "Cheryl Schimmel",
        "speed": 118,
        "time": 112302
    },
    {
        "color": 2,
        "name": "Marc Olson PhD",
        "speed": 286,
        "time": 112542
    },
    {
        "color": 2,
        "name": "Ms. Gayle Nikolaus",
        "speed": 157,
        "time": 112790
    },
    {
        "color": 2,
        "name": "Danny Williamson",
        "speed": 237,
        "time": 112792
    },
    {
        "color": 0,
        "name": "Melba Kautzer",
        "speed": 214,
        "time": 113034
    },
    {
        "color": 0,
        "name": "Guadalupe Zulauf IV",
        "speed": 213,
        "time": 113343
    },
    {
        "color": 2,
        "name": "Lynda Crooks-Medhurst",
        "speed": 106,
        "time": 114073
    },
    {
        "color": 0,
        "name": "Sue Heathcote-Maggio",
        "speed": 344,
        "time": 115798
    },
    {
        "color": 2,
        "name": "Angie Romaguera",
        "speed": 352,
        "time": 115916
    },
    {
        "color": 1,
        "name": "Joanne Koelpin",
        "speed": 325,
        "time": 116520
    },
    {
        "color": 2,
        "name": "Elisa Kohler",
        "speed": 171,
        "time": 116634
    },
    {
        "color": 0,
        "name": "Eddie Farrell V",
        "speed": 265,
        "time": 116861
    },
    {
        "color": 2,
        "name": "Molly Berge",
        "speed": 238,
        "time": 117003
    },
    {
        "color": 0,
        "name": "Sammy Grant",
        "speed": 157,
        "time": 117394
    },
    {
        "color": 0,
        "name": "Terri Boehm",
        "speed": 145,
        "time": 117419
    },
    {
        "color": 2,
        "name": "Scott Tremblay",
        "speed": 311,
        "time": 117668
    },
    {
        "color": 2,
        "name": "Steven Altenwerth",
        "speed": 344,
        "time": 117894
    },
    {
        "color": 1,
        "name": "Eula Tillman",
        "speed": 286,
        "time": 118490
    },
    {
        "color": 2,
        "name": "Verna Barrows",
        "speed": 235,
        "time": 118507
    },
    {
        "color": 0,
        "name": "Fannie O'Conner IV",
        "speed": 305,
        "time": 118534
    },
    {
        "color": 1,
        "name": "Joanne Weissnat",
        "speed": 345,
        "time": 118606
    },
    {
        "color": 0,
        "name": "Tiffany Brown",
        "speed": 336,
        "time": 119734
    },
    {
        "color": 2,
        "name": "Meredith Lebsack",
        "speed": 189,
        "time": 121881
    },
    {
        "color": 2,
        "name": "Terrance Toy",
        "speed": 198,
        "time": 122156
    },
    {
        "color": 2,
        "name": "Edna Wintheiser",
        "speed": 154,
        "time": 122263
    },
    {
        "color": 0,
        "name": "Roberta Boyle",
        "speed": 224,
        "time": 122919
    },
    {
        "color": 0,
        "name": "Marion Nikolaus",
        "speed": 188,
        "time": 124709
    },
    {
        "color": 0,
        "name": "Mr. Morris Mraz V",
        "speed": 356,
        "time": 125156
    },
    {
        "color": 2,
        "name": "Agnes Witting",
        "speed": 238,
        "time": 125232
    },
    {
        "color": 1,
        "name": "Virginia Buckridge",
        "speed": 345,
        "time": 125372
    },
    {
        "color": 2,
        "name": "Gerardo Zieme",
        "speed": 84,
        "time": 127079
    },
    {
        "color": 0,
        "name": "Ruth Gusikowski",
        "speed": 336,
        "time": 127583
    },
    {
        "color": 0,
        "name": "Lynne Sawayn Sr.",
        "speed": 179,
        "time": 128043
    },
    {
        "color": 1,
        "name": "Alexis Homenick",
        "speed": 279,
        "time": 129403
    },
    {
        "color": 0,
        "name": "Micheal Lubowitz",
        "speed": 190,
        "time": 130053
    },
    {
        "color": 2,
        "name": "Devin Armstrong",
        "speed": 192,
        "time": 130715
    },
    {
        "color": 0,
        "name": "Elsa Kshlerin",
        "speed": 315,
        "time": 131507
    },
    {
        "color": 2,
        "name": "Adrian Brakus",
        "speed": 154,
        "time": 132214
    },
    {
        "color": 0,
        "name": "Beverly Macejkovic",
        "speed": 215,
        "time": 133761
    },
    {
        "color": 0,
        "name": "Dr. Jared Hansen",
        "speed": 214,
        "time": 135110
    },
    {
        "color": 1,
        "name": "Mrs. Krista Treutel",
        "speed": 109,
        "time": 135645
    },
    {
        "color": 0,
        "name": "Cecelia Carroll",
        "speed": 135,
        "time": 136033
    },
    {
        "color": 1,
        "name": "Betty Thiel",
        "speed": 73,
        "time": 136470
    },
    {
        "color": 2,
        "name": "Tonya Kohler",
        "speed": 304,
        "time": 137373
    },
    {
        "color": 0,
        "name": "Bertha Daniel",
        "speed": 104,
        "time": 137705
    },
    {
        "color": 0,
        "name": "Sadie Schamberger",
        "speed": 203,
        "time": 138332
    },
    {
        "color": 2,
        "name": "Jerald Hartmann",
        "speed": 64,
        "time": 138402
    },
    {
        "color": 0,
        "name": "Vernon Collier",
        "speed": 322,
        "time": 138799
    },
    {
        "color": 0,
        "name": "Katrina Hintz V",
        "speed": 157,
        "time": 139173
    },
    {
        "color": 0,
        "name": "Kelvin Roberts",
        "speed": 155,
        "time": 139854
    },
    {
        "color": 1,
        "name": "Dr. Jackie Weimann",
        "speed": 123,
        "time": 140419
    },
    {
        "color": 1,
        "name": "Sidney Brakus",
        "speed": 86,
        "time": 140756
    },
    {
        "color": 0,
        "name": "Ismael Emmerich",
        "speed": 210,
        "time": 140832
    },
    {
        "color": 1,
        "name": "Joann Medhurst",
        "speed": 148,
        "time": 140860
    },
    {
        "color": 0,
        "name": "Orlando Nader",
        "speed": 169,
        "time": 141002
    },
    {
        "color": 0,
        "name": "Debbie Wilderman I",
        "speed": 344,
        "time": 141377
    },
    {
        "color": 1,
        "name": "Lonnie Keeling Jr.",
        "speed": 105,
        "time": 141975
    },
    {
        "color": 2,
        "name": "Barbara Effertz V",
        "speed": 343,
        "time": 142415
    },
    {
        "color": 1,
        "name": "Jim Schimmel",
        "speed": 325,
        "time": 143546
    },
    {
        "color": 1,
        "name": "Miguel Goldner",
        "speed": 313,
        "time": 144008
    },
    {
        "color": 0,
        "name": "Shawna Smitham",
        "speed": 335,
        "time": 144132
    },
    {
        "color": 2,
        "name": "Joanne Considine",
        "speed": 257,
        "time": 144857
    },
    {
        "color": 0,
        "name": "Roger Leannon IV",
        "speed": 256,
        "time": 146811
    },
    {
        "color": 1,
        "name": "Grady Mills",
        "speed": 285,
        "time": 146967
    },
    {
        "color": 0,
        "name": "Alberta Lebsack",
        "speed": 95,
        "time": 147255
    },
    {
        "color": 1,
        "name": "Cesar Fadel",
        "speed": 314,
        "time": 147374
    },
    {
        "color": 0,
        "name": "Edmund Metz",
        "speed": 263,
        "time": 148239
    },
    {
        "color": 0,
        "name": "Alexander Lebsack",
        "speed": 286,
        "time": 148291
    },
    {
        "color": 1,
        "name": "Geoffrey Will",
        "speed": 203,
        "time": 148970
    },
    {
        "color": 0,
        "name": "Josefina Schumm",
        "speed": 125,
        "time": 149087
    },
    {
        "color": 1,
        "name": "Devin Conn MD",
        "speed": 186,
        "time": 149887
    },
    {
        "color": 2,
        "name": "Isabel Mante",
        "speed": 219,
        "time": 150053
    },
    {
        "color": 1,
        "name": "Crystal Cormier",
        "speed": 330,
        "time": 150452
    },
    {
        "color": 1,
        "name": "Dr. Conrad Schamberger III",
        "speed": 124,
        "time": 151565
    },
    {
        "color": 2,
        "name": "Ashley Schuppe-Weber",
        "speed": 180,
        "time": 151965
    },
    {
        "color": 1,
        "name": "Deanna Hodkiewicz",
        "speed": 204,
        "time": 152891
    },
    {
        "color": 1,
        "name": "Grace Schaden",
        "speed": 335,
        "time": 153010
    },
    {
        "color": 1,
        "name": "Jeremy Moore",
        "speed": 233,
        "time": 153388
    },
    {
        "color": 2,
        "name": "Joey Lehner",
        "speed": 168,
        "time": 153434
    },
    {
        "color": 2,
        "name": "Dr. Ervin Hickle",
        "speed": 117,
        "time": 154663
    },
    {
        "color": 2,
        "name": "Rufus Mosciski",
        "speed": 201,
        "time": 154873
    },
    {
        "color": 1,
        "name": "Nicole Koelpin",
        "speed": 189,
        "time": 155073
    },
    {
        "color": 1,
        "name": "Deanna Kirlin",
        "speed": 211,
        "time": 155271
    },
    {
        "color": 2,
        "name": "Jeffery Brekke",
        "speed": 282,
        "time": 155985
    },
    {
        "color": 0,
        "name": "Ian Hilpert",
        "speed": 344,
        "time": 157156
    },
    {
        "color": 0,
        "name": "Julio Dare I",
        "speed": 193,
        "time": 157398
    },
    {
        "color": 1,
        "name": "Lydia Funk",
        "speed": 188,
        "time": 157571
    },
    {
        "color": 2,
        "name": "Alexander Ernser",
        "speed": 349,
        "time": 158549
    },
    {
        "color": 1,
        "name": "Mitchell Simonis",
        "speed": 143,
        "time": 158766
    },
    {
        "color": 0,
        "name": "Barbara Hills",
        "speed": 163,
        "time": 159607
    },
    {
        "color": 0,
        "name": "Lyle Wisoky",
        "speed": 110,
        "time": 160476
    },
    {
        "color": 0,
        "name": "Samuel Bruen",
        "speed": 222,
        "time": 161473
    },
    {
        "color": 0,
        "name": "Milton Krajcik IV",
        "speed": 245,
        "time": 162404
    },
    {
        "color": 0,
        "name": "Katrina Schoen",
        "speed": 218,
        "time": 162522
    },
    {
        "color": 1,
        "name": "Gretchen Simonis",
        "speed": 337,
        "time": 163061
    },
    {
        "color": 1,
        "name": "Shane Pacocha",
        "speed": 294,
        "time": 163355
    },
    {
        "color": 1,
        "name": "Dana Hettinger",
        "speed": 70,
        "time": 164119
    },
    {
        "color": 1,
        "name": "Floyd Osinski",
        "speed": 236,
        "time": 164842
    },
    {
        "color": 1,
        "name": "Troy Rowe",
        "speed": 198,
        "time": 164992
    },
    {
        "color": 1,
        "name": "Bryan Daugherty",
        "speed": 60,
        "time": 165462
    },
    {
        "color": 2,
        "name": "Stewart Hettinger",
        "speed": 271,
        "time": 165697
    },
    {
        "color": 0,
        "name": "Ron Haley",
        "speed": 90,
        "time": 166696
    },
    {
        "color": 2,
        "name": "Mr. Dean Kuvalis II",
        "speed": 131,
        "time": 166709
    },
    {
        "color": 1,
        "name": "Greg Gusikowski",
        "speed": 300,
        "time": 167573
    },
    {
        "color": 1,
        "name": "Pauline Howe",
        "speed": 287,
        "time": 167806
    },
    {
        "color": 2,
        "name": "Priscilla Kub",
        "speed": 290,
        "time": 168080
    },
    {
        "color": 2,
        "name": "Whitney O'Conner",
        "speed": 343,
        "time": 168733
    },
    {
        "color": 0,
        "name": "Frederick Schmitt",
        "speed": 322,
        "time": 169933
    },
    {
        "color": 0,
        "name": "Marcella Abshire",
        "speed": 218,
        "time": 170183
    },
    {
        "color": 0,
        "name": "Jenny Hegmann",
        "speed": 236,
        "time": 170606
    },
    {
        "color": 1,
        "name": "Dale Baumbach",
        "speed": 121,
        "time": 172473
    },
    {
        "color": 1,
        "name": "Bobby Hayes",
        "speed": 246,
        "time": 174592
    },
    {
        "color": 1,
        "name": "Jasmine Marquardt",
        "speed": 286,
        "time": 174688
    },
    {
        "color": 0,
        "name": "Mathew Larson",
        "speed": 286,
        "time": 174959
    },
    {
        "color": 2,
        "name": "Nancy Larson",
        "speed": 331,
        "time": 175427
    },
    {
        "color": 0,
        "name": "Mr. Victor Morar",
        "speed": 266,
        "time": 175606
    },
    {
        "color": 2,
        "name": "Lynn Kunde",
        "speed": 290,
        "time": 176361
    },
    {
        "color": 2,
        "name": "Jordan Cremin",
        "speed": 101,
        "time": 176796
    },
    {
        "color": 2,
        "name": "Franklin Borer DVM",
        "speed": 282,
        "time": 176802
    },
    {
        "color": 0,
        "name": "Miranda Mayert V",
        "speed": 318,
        "time": 177127
    },
    {
        "color": 0,
        "name": "Gina Morar",
        "speed": 310,
        "time": 179762
    },
    {
        "color": 1,
        "name": "Mr. Guadalupe Von",
        "speed": 288,
        "time": 180388
    },
    {
        "color": 1,
        "name": "Catherine McDermott",
        "speed": 136,
        "time": 181776
    },
    {
        "color": 2,
        "name": "Derek Wunsch",
        "speed": 92,
        "time": 182032
    },
    {
        "color": 0,
        "name": "Orville Douglas",
        "speed": 251,
        "time": 182831
    },
    {
        "color": 1,
        "name": "Caleb Moen-Nitzsche",
        "speed": 169,
        "time": 182874
    },
    {
        "color": 2,
        "name": "Tonya Hagenes Jr.",
        "speed": 193,
        "time": 183706
    },
    {
        "color": 1,
        "name": "Jaime Zulauf",
        "speed": 233,
        "time": 185635
    },
    {
        "color": 1,
        "name": "Drew Pfannerstill",
        "speed": 333,
        "time": 186205
    },
    {
        "color": 0,
        "name": "Patti Rice",
        "speed": 242,
        "time": 189230
    },
    {
        "color": 0,
        "name": "Ms. Michelle Stark",
        "speed": 66,
        "time": 190280
    },
    {
        "color": 1,
        "name": "Alan Bartoletti",
        "speed": 199,
        "time": 191671
    },
    {
        "color": 2,
        "name": "Courtney Moore",
        "speed": 126,
        "time": 191723
    },
    {
        "color": 1,
        "name": "Jody Monahan MD",
        "speed": 115,
        "time": 192891
    },
    {
        "color": 0,
        "name": "Rosemarie Balistreri",
        "speed": 313,
        "time": 194472
    },
    {
        "color": 2,
        "name": "Candace Streich",
        "speed": 110,
        "time": 194520
    },
    {
        "color": 0,
        "name": "Calvin Vandervort",
        "speed": 99,
        "time": 195285
    },
    {
        "color": 0,
        "name": "Elias Jaskolski I",
        "speed": 96,
        "time": 197168
    },
    {
        "color": 1,
        "name": "Marlon Jacobi",
        "speed": 310,
        "time": 197309
    },
    {
        "color": 0,
        "name": "Gail Larkin",
        "speed": 341,
        "time": 197428
    },
    {
        "color": 1,
        "name": "Gilbert Carroll I",
        "speed": 346,
        "time": 198159
    },
    {
        "color": 0,
        "name": "Rudy Lowe",
        "speed": 265,
        "time": 198616
    },
    {
        "color": 0,
        "name": "Carlos Fay",
        "speed": 168,
        "time": 199470
    },
    {
        "color": 0,
        "name": "Greg Walter",
        "speed": 141,
        "time": 199550
    },
    {
        "color": 2,
        "name": "Nina Towne",
        "speed": 306,
        "time": 201585
    },
    {
        "color": 2,
        "name": "Delia Anderson",
        "speed": 182,
        "time": 202275
    },
    {
        "color": 0,
        "name": "Lauren Lakin",
        "speed": 75,
        "time": 202602
    },
    {
        "color": 0,
        "name": "Alan Gislason PhD",
        "speed": 95,
        "time": 203027
    },
    {
        "color": 2,
        "name": "Mr. Kelly Kessler",
        "speed": 322,
        "time": 204095
    },
    {
        "color": 2,
        "name": "Stephanie Becker DDS",
        "speed": 231,
        "time": 205734
    },
    {
        "color": 2,
        "name": "Jo Hartmann",
        "speed": 150,
        "time": 206840
    },
    {
        "color": 0,
        "name": "Bessie Haag",
        "speed": 67,
        "time": 208610
    },
    {
        "color": 2,
        "name": "Dominic Jacobson-Walker",
        "speed": 183,
        "time": 209313
    },
    {
        "color": 0,
        "name": "Garry DuBuque",
        "speed": 346,
        "time": 209883
    },
    {
        "color": 0,
        "name": "Dexter Wunsch",
        "speed": 167,
        "time": 209918
    },
    {
        "color": 1,
        "name": "Gabriel Windler",
        "speed": 263,
        "time": 210729
    },
    {
        "color": 0,
        "name": "Virgil Wiza",
        "speed": 121,
        "time": 210766
    },
    {
        "color": 1,
        "name": "Cedric Block MD",
        "speed": 217,
        "time": 212394
    },
    {
        "color": 1,
        "name": "Ira Beatty",
        "speed": 317,
        "time": 213130
    },
    {
        "color": 2,
        "name": "Tony Harvey",
        "speed": 135,
        "time": 213264
    },
    {
        "color": 1,
        "name": "Samuel Conn",
        "speed": 214,
        "time": 213466
    },
    {
        "color": 1,
        "name": "Lawrence Stark",
        "speed": 271,
        "time": 214178
    },
    {
        "color": 0,
        "name": "Jamie Hahn",
        "speed": 333,
        "time": 214575
    },
    {
        "color": 2,
        "name": "Arlene Smitham",
        "speed": 272,
        "time": 215268
    },
    {
        "color": 0,
        "name": "Sheila Mante",
        "speed": 180,
        "time": 215910
    },
    {
        "color": 0,
        "name": "Beatrice Carroll",
        "speed": 274,
        "time": 216424
    },
    {
        "color": 1,
        "name": "Minnie Feil",
        "speed": 110,
        "time": 216659
    },
    {
        "color": 1,
        "name": "Van Lakin-Dicki",
        "speed": 161,
        "time": 217893
    },
    {
        "color": 1,
        "name": "Johnnie Kuhic",
        "speed": 250,
        "time": 219369
    },
    {
        "color": 2,
        "name": "Benjamin Zemlak",
        "speed": 139,
        "time": 220968
    },
    {
        "color": 1,
        "name": "Arturo Franecki",
        "speed": 185,
        "time": 221083
    },
    {
        "color": 2,
        "name": "Emmett Runolfsdottir-Nikolaus I",
        "speed": 354,
        "time": 221278
    },
    {
        "color": 1,
        "name": "Paulette Tromp III",
        "speed": 97,
        "time": 221917
    },
    {
        "color": 1,
        "name": "Shawn Trantow",
        "speed": 104,
        "time": 222187
    },
    {
        "color": 0,
        "name": "Ms. Olive Schowalter",
        "speed": 140,
        "time": 222260
    },
    {
        "color": 1,
        "name": "Mrs. Misty Runolfsson MD",
        "speed": 271,
        "time": 224067
    },
    {
        "color": 2,
        "name": "Ashley Gottlieb",
        "speed": 104,
        "time": 224800
    },
    {
        "color": 1,
        "name": "Wallace Mraz",
        "speed": 175,
        "time": 224958
    },
    {
        "color": 2,
        "name": "Silvia Jerde",
        "speed": 290,
        "time": 225361
    },
    {
        "color": 1,
        "name": "Sonia Grady",
        "speed": 303,
        "time": 226739
    },
    {
        "color": 1,
        "name": "Delores Brakus",
        "speed": 176,
        "time": 227867
    },
    {
        "color": 0,
        "name": "Bruce Corkery",
        "speed": 63,
        "time": 228254
    },
    {
        "color": 0,
        "name": "Erma Littel-Kunde",
        "speed": 71,
        "time": 229262
    },
    {
        "color": 0,
        "name": "Jason Wiegand",
        "speed": 286,
        "time": 229676
    },
    {
        "color": 0,
        "name": "Eduardo Torphy",
        "speed": 214,
        "time": 230024
    },
    {
        "color": 1,
        "name": "Christopher Heaney",
        "speed": 324,
        "time": 231048
    },
    {
        "color": 0,
        "name": "Marie Wisozk",
        "speed": 111,
        "time": 231840
    },
    {
        "color": 0,
        "name": "Dave Schultz",
        "speed": 243,
        "time": 232287
    },
    {
        "color": 0,
        "name": "Grace Abshire",
        "speed": 219,
        "time": 233042
    },
    {
        "color": 2,
        "name": "Myron Spencer",
        "speed": 273,
        "time": 233466
    },
    {
        "color": 2,
        "name": "Justin Schumm II",
        "speed": 180,
        "time": 234311
    },
    {
        "color": 1,
        "name": "Malcolm Stoltenberg",
        "speed": 151,
        "time": 234314
    },
    {
        "color": 1,
        "name": "Amelia Auer Sr.",
        "speed": 176,
        "time": 235158
    },
    {
        "color": 2,
        "name": "Mr. Lee Spencer",
        "speed": 163,
        "time": 236466
    },
    {
        "color": 2,
        "name": "Velma Roob",
        "speed": 290,
        "time": 236854
    },
    {
        "color": 2,
        "name": "Alice Greenfelder PhD",
        "speed": 143,
        "time": 237774
    },
    {
        "color": 1,
        "name": "Daryl Marks",
        "speed": 294,
        "time": 238093
    },
    {
        "color": 1,
        "name": "Virginia Kuvalis",
        "speed": 255,
        "time": 238485
    },
    {
        "color": 1,
        "name": "Krista Tremblay",
        "speed": 83,
        "time": 238625
    },
    {
        "color": 1,
        "name": "Shelley Schultz",
        "speed": 348,
        "time": 239099
    },
    {
        "color": 0,
        "name": "Alex Osinski",
        "speed": 153,
        "time": 239340
    },
    {
        "color": 2,
        "name": "Willard Kuhic",
        "speed": 289,
        "time": 239920
    },
    {
        "color": 1,
        "name": "Miss Kelly Nolan",
        "speed": 119,
        "time": 240097
    },
    {
        "color": 2,
        "name": "Linda Reichel",
        "speed": 355,
        "time": 240222
    },
    {
        "color": 0,
        "name": "Caleb Kreiger",
        "speed": 220,
        "time": 240501
    },
    {
        "color": 1,
        "name": "Manuel Hintz",
        "speed": 276,
        "time": 241455
    },
    {
        "color": 0,
        "name": "Miss Angelina Abernathy",
        "speed": 230,
        "time": 242456
    },
    {
        "color": 0,
        "name": "Nichole Krajcik",
        "speed": 349,
        "time": 242999
    },
    {
        "color": 2,
        "name": "Lucia Paucek",
        "speed": 299,
        "time": 243018
    },
    {
        "color": 1,
        "name": "Dana Herman",
        "speed": 134,
        "time": 243058
    },
    {
        "color": 0,
        "name": "Shelia Veum",
        "speed": 314,
        "time": 243086
    },
    {
        "color": 2,
        "name": "Hattie Kulas",
        "speed": 207,
        "time": 243282
    },
    {
        "color": 0,
        "name": "Roosevelt Upton-Wyman",
        "speed": 64,
        "time": 243763
    },
    {
        "color": 2,
        "name": "Ruth Lockman",
        "speed": 257,
        "time": 244813
    },
    {
        "color": 2,
        "name": "Miss Annette Ullrich",
        "speed": 98,
        "time": 247709
    },
    {
        "color": 0,
        "name": "Desiree Raynor",
        "speed": 241,
        "time": 247710
    },
    {
        "color": 1,
        "name": "Abel Herman-Bruen",
        "speed": 112,
        "time": 247778
    },
    {
        "color": 0,
        "name": "Cheryl Kozey",
        "speed": 139,
        "time": 248395
    },
    {
        "color": 2,
        "name": "Dr. Alonzo Hodkiewicz",
        "speed": 269,
        "time": 248868
    },
    {
        "color": 2,
        "name": "Peter Ferry",
        "speed": 178,
        "time": 250065
    },
    {
        "color": 1,
        "name": "Cecilia Cruickshank",
        "speed": 153,
        "time": 251316
    },
    {
        "color": 2,
        "name": "Patrick McLaughlin",
        "speed": 296,
        "time": 252136
    },
    {
        "color": 0,
        "name": "Gregg Collier",
        "speed": 281,
        "time": 252599
    },
    {
        "color": 2,
        "name": "Greg Blick",
        "speed": 63,
        "time": 253177
    },
    {
        "color": 2,
        "name": "Jacob Hagenes",
        "speed": 138,
        "time": 253372
    },
    {
        "color": 1,
        "name": "Elias Toy-Feeney",
        "speed": 312,
        "time": 253740
    },
    {
        "color": 0,
        "name": "Susie Sipes",
        "speed": 133,
        "time": 254076
    },
    {
        "color": 0,
        "name": "Marcia Adams",
        "speed": 128,
        "time": 255752
    },
    {
        "color": 0,
        "name": "Warren Kulas PhD",
        "speed": 186,
        "time": 256928
    },
    {
        "color": 2,
        "name": "Arlene Ebert",
        "speed": 85,
        "time": 256934
    },
    {
        "color": 2,
        "name": "Roy Heathcote DDS",
        "speed": 161,
        "time": 256964
    },
    {
        "color": 1,
        "name": "Ms. Veronica Smith",
        "speed": 230,
        "time": 257021
    },
    {
        "color": 0,
        "name": "Ms. Suzanne Schmitt",
        "speed": 318,
        "time": 262158
    },
    {
        "color": 0,
        "name": "Sharon Sipes",
        "speed": 62,
        "time": 262744
    },
    {
        "color": 0,
        "name": "Bonnie Fritsch",
        "speed": 305,
        "time": 262971
    },
    {
        "color": 2,
        "name": "Luther Kilback",
        "speed": 139,
        "time": 263006
    },
    {
        "color": 2,
        "name": "Mrs. Whitney Kling",
        "speed": 106,
        "time": 266107
    },
    {
        "color": 2,
        "name": "Ms. Marion Simonis",
        "speed": 75,
        "time": 266328
    },
    {
        "color": 2,
        "name": "Roxanne Hermann",
        "speed": 322,
        "time": 266343
    },
    {
        "color": 0,
        "name": "Emmett Corwin",
        "speed": 301,
        "time": 266724
    },
    {
        "color": 2,
        "name": "Latoya Pollich",
        "speed": 120,
        "time": 267540
    },
    {
        "color": 1,
        "name": "Jane Koepp",
        "speed": 276,
        "time": 267635
    },
    {
        "color": 0,
        "name": "Rafael Runolfsson",
        "speed": 252,
        "time": 268398
    },
    {
        "color": 1,
        "name": "Jasmine Feeney",
        "speed": 158,
        "time": 268599
    },
    {
        "color": 1,
        "name": "Marion Botsford",
        "speed": 277,
        "time": 269039
    },
    {
        "color": 2,
        "name": "Bert O'Keefe",
        "speed": 349,
        "time": 269102
    },
    {
        "color": 0,
        "name": "Courtney Reichert",
        "speed": 241,
        "time": 269335
    },
    {
        "color": 2,
        "name": "Peggy Ratke",
        "speed": 253,
        "time": 269373
    },
    {
        "color": 1,
        "name": "Wilbur Anderson",
        "speed": 181,
        "time": 269960
    },
    {
        "color": 0,
        "name": "Kathryn Johns",
        "speed": 177,
        "time": 271006
    },
    {
        "color": 0,
        "name": "Dr. Preston Strosin",
        "speed": 141,
        "time": 271305
    },
    {
        "color": 2,
        "name": "Ms. Kathleen Kutch",
        "speed": 327,
        "time": 271423
    },
    {
        "color": 1,
        "name": "Glen Feest",
        "speed": 72,
        "time": 272114
    },
    {
        "color": 0,
        "name": "Warren Kulas",
        "speed": 360,
        "time": 272399
    },
    {
        "color": 1,
        "name": "Kristopher Streich-Anderson",
        "speed": 173,
        "time": 273493
    },
    {
        "color": 0,
        "name": "Wilbur Murazik",
        "speed": 306,
        "time": 274925
    },
    {
        "color": 1,
        "name": "Rachael Strosin",
        "speed": 248,
        "time": 275793
    },
    {
        "color": 2,
        "name": "Benny Green",
        "speed": 359,
        "time": 275968
    },
    {
        "color": 2,
        "name": "Dr. Lena Wuckert",
        "speed": 155,
        "time": 275973
    },
    {
        "color": 1,
        "name": "Jack Sawayn",
        "speed": 288,
        "time": 276016
    },
    {
        "color": 1,
        "name": "Jenny Streich",
        "speed": 230,
        "time": 276820
    },
    {
        "color": 2,
        "name": "Randolph Thiel",
        "speed": 305,
        "time": 277757
    },
    {
        "color": 0,
        "name": "Frankie Dietrich",
        "speed": 155,
        "time": 277849
    },
    {
        "color": 1,
        "name": "Sheryl Hane",
        "speed": 227,
        "time": 278283
    },
    {
        "color": 0,
        "name": "Levi Paucek",
        "speed": 246,
        "time": 280200
    },
    {
        "color": 0,
        "name": "Angelo Daniel",
        "speed": 101,
        "time": 281082
    },
    {
        "color": 1,
        "name": "Adam Wilkinson",
        "speed": 343,
        "time": 281398
    },
    {
        "color": 2,
        "name": "Sheryl Kautzer",
        "speed": 201,
        "time": 281519
    },
    {
        "color": 1,
        "name": "Heidi Balistreri",
        "speed": 132,
        "time": 281544
    },
    {
        "color": 2,
        "name": "Mr. Mario Schoen",
        "speed": 360,
        "time": 282416
    },
    {
        "color": 1,
        "name": "Cassandra Collier",
        "speed": 300,
        "time": 282837
    },
    {
        "color": 2,
        "name": "Tabitha Kuhlman",
        "speed": 205,
        "time": 283797
    },
    {
        "color": 0,
        "name": "Milton Legros",
        "speed": 261,
        "time": 285915
    },
    {
        "color": 0,
        "name": "Victor O'Kon",
        "speed": 168,
        "time": 285920
    },
    {
        "color": 2,
        "name": "Bernice Tromp",
        "speed": 323,
        "time": 287007
    },
    {
        "color": 0,
        "name": "Jay Emmerich",
        "speed": 230,
        "time": 287334
    },
    {
        "color": 0,
        "name": "Howard Cremin",
        "speed": 103,
        "time": 287635
    },
    {
        "color": 1,
        "name": "Audrey Schowalter V",
        "speed": 198,
        "time": 288090
    },
    {
        "color": 1,
        "name": "Allan Renner",
        "speed": 276,
        "time": 288325
    },
    {
        "color": 0,
        "name": "Miss Sara Ferry DVM",
        "speed": 118,
        "time": 288504
    },
    {
        "color": 1,
        "name": "Virgil Kling",
        "speed": 331,
        "time": 289067
    },
    {
        "color": 0,
        "name": "Terrell Mayer",
        "speed": 324,
        "time": 289312
    },
    {
        "color": 2,
        "name": "Jaime Bergnaum",
        "speed": 311,
        "time": 290778
    },
    {
        "color": 0,
        "name": "Dr. Clark Purdy Jr.",
        "speed": 92,
        "time": 291331
    },
    {
        "color": 1,
        "name": "Gloria Treutel",
        "speed": 67,
        "time": 291474
    },
    {
        "color": 0,
        "name": "Dr. Lynette Kohler",
        "speed": 231,
        "time": 291590
    },
    {
        "color": 1,
        "name": "Alberto Nikolaus",
        "speed": 350,
        "time": 291731
    },
    {
        "color": 1,
        "name": "Doris Buckridge",
        "speed": 125,
        "time": 294144
    },
    {
        "color": 0,
        "name": "Ms. Gladys Stokes",
        "speed": 208,
        "time": 294568
    },
    {
        "color": 1,
        "name": "Tammy Robel",
        "speed": 65,
        "time": 294733
    },
    {
        "color": 2,
        "name": "Yvette Bailey",
        "speed": 314,
        "time": 296382
    },
    {
        "color": 1,
        "name": "Dr. Cory O'Hara-Spencer",
        "speed": 341,
        "time": 296833
    },
    {
        "color": 0,
        "name": "Evelyn Pfannerstill",
        "speed": 342,
        "time": 297612
    },
    {
        "color": 2,
        "name": "Sylvester Schuppe",
        "speed": 255,
        "time": 299500
    },
    {
        "color": 1,
        "name": "Darlene Macejkovic",
        "speed": 313,
        "time": 299643
    },
    {
        "color": 2,
        "name": "Andres Wilkinson",
        "speed": 259,
        "time": 299820
    },
    {
        "color": 2,
        "name": "Opal Berge",
        "speed": 101,
        "time": 299929
    },
    {
        "color": 0,
        "name": "Moses Romaguera",
        "speed": 130,
        "time": 301458
    },
    {
        "color": 2,
        "name": "Misty Sanford IV",
        "speed": 217,
        "time": 301648
    },
    {
        "color": 2,
        "name": "Peter Turner",
        "speed": 160,
        "time": 301714
    },
    {
        "color": 2,
        "name": "Gwen Ruecker",
        "speed": 271,
        "time": 302033
    },
    {
        "color": 2,
        "name": "Randy Leuschke-Steuber",
        "speed": 94,
        "time": 303600
    },
    {
        "color": 0,
        "name": "Orlando Gulgowski",
        "speed": 180,
        "time": 304277
    },
    {
        "color": 2,
        "name": "Cynthia Shanahan",
        "speed": 189,
        "time": 304638
    },
    {
        "color": 2,
        "name": "Jordan Schiller",
        "speed": 329,
        "time": 304864
    },
    {
        "color": 1,
        "name": "Emanuel Cummings",
        "speed": 238,
        "time": 304984
    },
    {
        "color": 1,
        "name": "Lynette Ullrich",
        "speed": 68,
        "time": 305556
    },
    {
        "color": 2,
        "name": "Lila Renner",
        "speed": 158,
        "time": 305593
    },
    {
        "color": 1,
        "name": "Gretchen Rowe DVM",
        "speed": 279,
        "time": 306472
    },
    {
        "color": 0,
        "name": "Patty Effertz",
        "speed": 338,
        "time": 306557
    },
    {
        "color": 2,
        "name": "Lillie Mayert",
        "speed": 319,
        "time": 307638
    },
    {
        "color": 2,
        "name": "Katie Shields",
        "speed": 182,
        "time": 308733
    },
    {
        "color": 0,
        "name": "Mr. Lionel Jast",
        "speed": 195,
        "time": 309305
    },
    {
        "color": 2,
        "name": "Francis Nicolas V",
        "speed": 238,
        "time": 309517
    },
    {
        "color": 2,
        "name": "Evelyn Huel",
        "speed": 319,
        "time": 309906
    },
    {
        "color": 0,
        "name": "Florence Jenkins",
        "speed": 124,
        "time": 310083
    },
    {
        "color": 0,
        "name": "Merle Bruen",
        "speed": 283,
        "time": 310639
    },
    {
        "color": 2,
        "name": "Dr. Gina Jerde",
        "speed": 226,
        "time": 310963
    },
    {
        "color": 2,
        "name": "Hope Wisozk",
        "speed": 173,
        "time": 311252
    },
    {
        "color": 0,
        "name": "Claudia Shanahan",
        "speed": 110,
        "time": 312174
    },
    {
        "color": 1,
        "name": "Mr. Wilson Donnelly",
        "speed": 196,
        "time": 312705
    },
    {
        "color": 0,
        "name": "Susie Robel",
        "speed": 341,
        "time": 313484
    },
    {
        "color": 2,
        "name": "Dr. Ronnie Russel",
        "speed": 113,
        "time": 314163
    },
    {
        "color": 1,
        "name": "Peter Shanahan",
        "speed": 344,
        "time": 314932
    },
    {
        "color": 1,
        "name": "Heidi Kshlerin",
        "speed": 76,
        "time": 315615
    },
    {
        "color": 2,
        "name": "Doyle Weimann",
        "speed": 160,
        "time": 316896
    },
    {
        "color": 0,
        "name": "Brandi Tremblay",
        "speed": 200,
        "time": 317661
    },
    {
        "color": 1,
        "name": "Bernice Olson-Fadel",
        "speed": 190,
        "time": 317893
    },
    {
        "color": 1,
        "name": "Edward Frami",
        "speed": 68,
        "time": 318417
    },
    {
        "color": 1,
        "name": "Darin Muller",
        "speed": 256,
        "time": 320005
    },
    {
        "color": 0,
        "name": "Heidi Durgan",
        "speed": 329,
        "time": 321635
    },
    {
        "color": 0,
        "name": "Karla Lehner IV",
        "speed": 117,
        "time": 322189
    },
    {
        "color": 1,
        "name": "Valerie Kris",
        "speed": 248,
        "time": 322292
    },
    {
        "color": 0,
        "name": "Garrett Miller",
        "speed": 191,
        "time": 322604
    },
    {
        "color": 2,
        "name": "Kara Kerluke",
        "speed": 115,
        "time": 322673
    },
    {
        "color": 2,
        "name": "Mrs. Silvia Schowalter",
        "speed": 308,
        "time": 322694
    },
    {
        "color": 0,
        "name": "Christina Ernser",
        "speed": 263,
        "time": 325038
    },
    {
        "color": 1,
        "name": "Mr. Luther Reichert",
        "speed": 250,
        "time": 325956
    },
    {
        "color": 2,
        "name": "Patrick Kuphal",
        "speed": 239,
        "time": 326757
    },
    {
        "color": 1,
        "name": "Gladys Dickinson-Bahringer",
        "speed": 182,
        "time": 326831
    },
    {
        "color": 0,
        "name": "Earnest Walsh",
        "speed": 142,
        "time": 327116
    },
    {
        "color": 1,
        "name": "Marcella Romaguera",
        "speed": 279,
        "time": 327469
    },
    {
        "color": 2,
        "name": "Miguel Walker",
        "speed": 209,
        "time": 327811
    },
    {
        "color": 2,
        "name": "Maggie Sporer",
        "speed": 358,
        "time": 328431
    },
    {
        "color": 1,
        "name": "Dr. Lynn Bruen",
        "speed": 165,
        "time": 328508
    },
    {
        "color": 2,
        "name": "Preston Schaefer",
        "speed": 291,
        "time": 328795
    },
    {
        "color": 2,
        "name": "Keith Beier",
        "speed": 338,
        "time": 329527
    },
    {
        "color": 1,
        "name": "Brendan Ryan I",
        "speed": 319,
        "time": 330374
    },
    {
        "color": 2,
        "name": "Meghan Rippin",
        "speed": 198,
        "time": 330701
    },
    {
        "color": 2,
        "name": "Margaret Lang",
        "speed": 112,
        "time": 330891
    },
    {
        "color": 1,
        "name": "Blanca Kautzer",
        "speed": 193,
        "time": 330993
    },
    {
        "color": 1,
        "name": "Ed Marks",
        "speed": 81,
        "time": 332984
    },
    {
        "color": 0,
        "name": "Ken Stoltenberg",
        "speed": 275,
        "time": 333123
    },
    {
        "color": 0,
        "name": "Tim Upton",
        "speed": 123,
        "time": 333132
    },
    {
        "color": 1,
        "name": "Erik Block",
        "speed": 219,
        "time": 334283
    },
    {
        "color": 1,
        "name": "Tom McGlynn",
        "speed": 148,
        "time": 334544
    },
    {
        "color": 2,
        "name": "Jessie Rodriguez",
        "speed": 293,
        "time": 334634
    },
    {
        "color": 2,
        "name": "Luther Muller",
        "speed": 187,
        "time": 334812
    },
    {
        "color": 2,
        "name": "Norma Fisher",
        "speed": 247,
        "time": 335284
    },
    {
        "color": 0,
        "name": "Carroll Waelchi",
        "speed": 146,
        "time": 336139
    },
    {
        "color": 2,
        "name": "Lance Hessel",
        "speed": 133,
        "time": 337017
    },
    {
        "color": 0,
        "name": "Lydia Wiegand",
        "speed": 184,
        "time": 337035
    },
    {
        "color": 0,
        "name": "Dixie Klocko I",
        "speed": 96,
        "time": 337052
    },
    {
        "color": 0,
        "name": "Paul Sporer",
        "speed": 198,
        "time": 337177
    },
    {
        "color": 1,
        "name": "Angela Schulist",
        "speed": 312,
        "time": 337461
    },
    {
        "color": 2,
        "name": "George Kub",
        "speed": 186,
        "time": 338371
    },
    {
        "color": 0,
        "name": "Meredith Roob",
        "speed": 77,
        "time": 338409
    },
    {
        "color": 1,
        "name": "Susan Schimmel",
        "speed": 251,
        "time": 338520
    },
    {
        "color": 2,
        "name": "Rachael Schuster",
        "speed": 316,
        "time": 339738
    },
    {
        "color": 2,
        "name": "Leland Pacocha",
        "speed": 223,
        "time": 340026
    },
    {
        "color": 0,
        "name": "Dr. Jared Harber",
        "speed": 250,
        "time": 340320
    },
    {
        "color": 1,
        "name": "Eugene Christiansen",
        "speed": 244,
        "time": 342279
    },
    {
        "color": 1,
        "name": "Don Schamberger",
        "speed": 172,
        "time": 343000
    },
    {
        "color": 2,
        "name": "Roberta Larson",
        "speed": 260,
        "time": 344035
    },
    {
        "color": 2,
        "name": "Ruth Ankunding",
        "speed": 165,
        "time": 345822
    },
    {
        "color": 2,
        "name": "Debbie Reichel",
        "speed": 200,
        "time": 345863
    },
    {
        "color": 2,
        "name": "Lynette Roberts",
        "speed": 148,
        "time": 347388
    },
    {
        "color": 2,
        "name": "Seth Leffler",
        "speed": 307,
        "time": 347591
    },
    {
        "color": 2,
        "name": "Caleb Schaefer",
        "speed": 110,
        "time": 347870
    },
    {
        "color": 1,
        "name": "Zachary Hirthe",
        "speed": 315,
        "time": 349011
    },
    {
        "color": 1,
        "name": "Olga Terry",
        "speed": 278,
        "time": 349228
    },
    {
        "color": 2,
        "name": "Mrs. Eva Borer",
        "speed": 318,
        "time": 349655
    },
    {
        "color": 1,
        "name": "Eileen Stanton",
        "speed": 126,
        "time": 349888
    },
    {
        "color": 0,
        "name": "Pat Osinski",
        "speed": 162,
        "time": 350044
    },
    {
        "color": 1,
        "name": "Naomi Hilpert",
        "speed": 132,
        "time": 350476
    },
    {
        "color": 1,
        "name": "Wendell McDermott",
        "speed": 329,
        "time": 351076
    },
    {
        "color": 1,
        "name": "Yvette O'Kon",
        "speed": 197,
        "time": 351762
    },
    {
        "color": 1,
        "name": "Billy Boyle",
        "speed": 340,
        "time": 352359
    },
    {
        "color": 2,
        "name": "Dr. Blake Hand",
        "speed": 328,
        "time": 352580
    },
    {
        "color": 2,
        "name": "Emma Legros",
        "speed": 306,
        "time": 352843
    },
    {
        "color": 0,
        "name": "Zachary Volkman",
        "speed": 232,
        "time": 353017
    },
    {
        "color": 0,
        "name": "Barry Boehm Sr.",
        "speed": 218,
        "time": 353351
    },
    {
        "color": 1,
        "name": "Shawn Stracke",
        "speed": 149,
        "time": 353647
    },
    {
        "color": 1,
        "name": "Joshua Jenkins",
        "speed": 204,
        "time": 355835
    },
    {
        "color": 2,
        "name": "Harold Oberbrunner",
        "speed": 94,
        "time": 356797
    },
    {
        "color": 1,
        "name": "Leigh Lakin",
        "speed": 253,
        "time": 357035
    },
    {
        "color": 0,
        "name": "Timothy Kirlin DVM",
        "speed": 84,
        "time": 358255
    },
    {
        "color": 0,
        "name": "Lee Kuhn",
        "speed": 190,
        "time": 358349
    },
    {
        "color": 0,
        "name": "Dr. Hector Kohler I",
        "speed": 119,
        "time": 358450
    },
    {
        "color": 2,
        "name": "Ollie Hagenes",
        "speed": 259,
        "time": 359255
    },
    {
        "color": 0,
        "name": "Esther Lakin",
        "speed": 222,
        "time": 361254
    },
    {
        "color": 0,
        "name": "Jeffrey Kilback-Emard",
        "speed": 136,
        "time": 361702
    },
    {
        "color": 2,
        "name": "Ella Veum",
        "speed": 255,
        "time": 361782
    },
    {
        "color": 0,
        "name": "Bernice Schumm Jr.",
        "speed": 292,
        "time": 362035
    },
    {
        "color": 0,
        "name": "Dr. Elijah Johns-Conn",
        "speed": 117,
        "time": 362462
    },
    {
        "color": 1,
        "name": "Melissa O'Connell",
        "speed": 139,
        "time": 363820
    },
    {
        "color": 2,
        "name": "Lowell Collier",
        "speed": 148,
        "time": 364198
    },
    {
        "color": 2,
        "name": "Douglas Fadel",
        "speed": 293,
        "time": 364987
    },
    {
        "color": 0,
        "name": "Mr. Rolando Kuhic",
        "speed": 168,
        "time": 366444
    },
    {
        "color": 1,
        "name": "Kimberly O'Keefe",
        "speed": 234,
        "time": 366472
    },
    {
        "color": 2,
        "name": "David Marvin",
        "speed": 270,
        "time": 367112
    },
    {
        "color": 1,
        "name": "Ted Rippin",
        "speed": 125,
        "time": 368122
    },
    {
        "color": 0,
        "name": "Alma Schiller",
        "speed": 115,
        "time": 369001
    },
    {
        "color": 2,
        "name": "Gene Kunze",
        "speed": 64,
        "time": 369163
    },
    {
        "color": 1,
        "name": "Vicki Ferry",
        "speed": 151,
        "time": 370318
    },
    {
        "color": 2,
        "name": "Rosie Schinner",
        "speed": 313,
        "time": 370562
    },
    {
        "color": 1,
        "name": "Timothy Durgan",
        "speed": 63,
        "time": 371148
    },
    {
        "color": 0,
        "name": "Chester Hodkiewicz",
        "speed": 71,
        "time": 371225
    },
    {
        "color": 0,
        "name": "Dexter Bauch",
        "speed": 65,
        "time": 371893
    },
    {
        "color": 2,
        "name": "Shari Buckridge",
        "speed": 221,
        "time": 372010
    },
    {
        "color": 1,
        "name": "Mack Mante",
        "speed": 251,
        "time": 372494
    },
    {
        "color": 1,
        "name": "Walter O'Hara DVM",
        "speed": 325,
        "time": 372676
    },
    {
        "color": 0,
        "name": "Orlando Marvin",
        "speed": 246,
        "time": 372922
    },
    {
        "color": 2,
        "name": "Olive Quigley",
        "speed": 123,
        "time": 372996
    },
    {
        "color": 1,
        "name": "Cheryl Abshire",
        "speed": 113,
        "time": 373050
    },
    {
        "color": 2,
        "name": "Wesley Moen MD",
        "speed": 127,
        "time": 373359
    },
    {
        "color": 1,
        "name": "Belinda Robel",
        "speed": 234,
        "time": 374662
    },
    {
        "color": 2,
        "name": "Hugh Runolfsdottir",
        "speed": 101,
        "time": 375252
    },
    {
        "color": 0,
        "name": "Jimmie Douglas",
        "speed": 360,
        "time": 377003
    },
    {
        "color": 1,
        "name": "Casey Maggio",
        "speed": 70,
        "time": 377057
    },
    {
        "color": 2,
        "name": "Latoya Dicki",
        "speed": 121,
        "time": 377632
    },
    {
        "color": 1,
        "name": "Laurence Jenkins",
        "speed": 209,
        "time": 377748
    },
    {
        "color": 1,
        "name": "Janis Ullrich DVM",
        "speed": 130,
        "time": 378178
    },
    {
        "color": 1,
        "name": "Janis Kuhlman",
        "speed": 312,
        "time": 379657
    },
    {
        "color": 0,
        "name": "Tracey Hane",
        "speed": 133,
        "time": 379898
    },
    {
        "color": 0,
        "name": "Lorene Bosco",
        "speed": 284,
        "time": 380231
    },
    {
        "color": 0,
        "name": "Conrad Hartmann",
        "speed": 215,
        "time": 380459
    },
    {
        "color": 2,
        "name": "Frederick Funk-McKenzie",
        "speed": 350,
        "time": 381682
    },
    {
        "color": 1,
        "name": "Pauline Schmitt",
        "speed": 210,
        "time": 382346
    },
    {
        "color": 1,
        "name": "Angela Orn DVM",
        "speed": 113,
        "time": 383496
    },
    {
        "color": 1,
        "name": "Mr. Kelvin Beier",
        "speed": 140,
        "time": 384053
    },
    {
        "color": 0,
        "name": "Earl Wintheiser",
        "speed": 128,
        "time": 384297
    },
    {
        "color": 0,
        "name": "Mrs. Jennifer Jaskolski IV",
        "speed": 187,
        "time": 385817
    },
    {
        "color": 1,
        "name": "Patrick Donnelly",
        "speed": 121,
        "time": 385921
    },
    {
        "color": 0,
        "name": "Laura Ward",
        "speed": 115,
        "time": 386182
    },
    {
        "color": 1,
        "name": "Leo Stiedemann",
        "speed": 109,
        "time": 386558
    },
    {
        "color": 0,
        "name": "Lucia Torphy",
        "speed": 137,
        "time": 386713
    },
    {
        "color": 2,
        "name": "Bradley Rosenbaum",
        "speed": 246,
        "time": 388433
    },
    {
        "color": 2,
        "name": "Guillermo Krajcik",
        "speed": 216,
        "time": 388489
    },
    {
        "color": 1,
        "name": "Annie Leffler DDS",
        "speed": 141,
        "time": 389570
    },
    {
        "color": 0,
        "name": "Kendra Nitzsche",
        "speed": 197,
        "time": 389973
    },
    {
        "color": 1,
        "name": "Dr. Frankie Gorczany MD",
        "speed": 148,
        "time": 390921
    },
    {
        "color": 1,
        "name": "Roberto Bode-Bednar I",
        "speed": 285,
        "time": 393284
    },
    {
        "color": 2,
        "name": "Dwight Kris",
        "speed": 349,
        "time": 394723
    },
    {
        "color": 0,
        "name": "Michael Lemke-Brekke",
        "speed": 323,
        "time": 395195
    },
    {
        "color": 0,
        "name": "Freddie Huel",
        "speed": 175,
        "time": 397279
    },
    {
        "color": 2,
        "name": "Ricardo McLaughlin",
        "speed": 63,
        "time": 397568
    },
    {
        "color": 2,
        "name": "Joshua Witting",
        "speed": 80,
        "time": 397695
    },
    {
        "color": 2,
        "name": "Colleen Boyle IV",
        "speed": 307,
        "time": 397823
    },
    {
        "color": 1,
        "name": "Juan Reichert",
        "speed": 217,
        "time": 398571
    },
    {
        "color": 2,
        "name": "Aaron Langosh",
        "speed": 222,
        "time": 399452
    },
    {
        "color": 2,
        "name": "Antoinette Botsford II",
        "speed": 132,
        "time": 400075
    },
    {
        "color": 0,
        "name": "Mark Wisoky",
        "speed": 335,
        "time": 401490
    },
    {
        "color": 1,
        "name": "Rudolph Skiles",
        "speed": 315,
        "time": 402211
    },
    {
        "color": 0,
        "name": "Joel Leannon",
        "speed": 288,
        "time": 403131
    },
    {
        "color": 1,
        "name": "Clara Muller",
        "speed": 304,
        "time": 403442
    },
    {
        "color": 2,
        "name": "Ana Mayert",
        "speed": 318,
        "time": 403541
    },
    {
        "color": 0,
        "name": "Ruth Vandervort",
        "speed": 166,
        "time": 403750
    },
    {
        "color": 2,
        "name": "Jeremiah Ferry",
        "speed": 108,
        "time": 404780
    },
    {
        "color": 0,
        "name": "Casey Stiedemann",
        "speed": 157,
        "time": 405017
    },
    {
        "color": 0,
        "name": "Carol Hauck",
        "speed": 87,
        "time": 405373
    },
    {
        "color": 1,
        "name": "Francisco Senger",
        "speed": 173,
        "time": 407070
    },
    {
        "color": 2,
        "name": "Lela Oberbrunner V",
        "speed": 197,
        "time": 407315
    },
    {
        "color": 2,
        "name": "Kenneth Runolfsson",
        "speed": 60,
        "time": 408060
    },
    {
        "color": 0,
        "name": "Donnie Schinner",
        "speed": 359,
        "time": 408249
    },
    {
        "color": 0,
        "name": "Renee Reichert",
        "speed": 269,
        "time": 408306
    },
    {
        "color": 1,
        "name": "Monique Rohan",
        "speed": 234,
        "time": 408542
    },
    {
        "color": 2,
        "name": "Abraham Okuneva",
        "speed": 277,
        "time": 408681
    },
    {
        "color": 0,
        "name": "Brandi Moen MD",
        "speed": 185,
        "time": 408699
    },
    {
        "color": 0,
        "name": "Katherine Johnson",
        "speed": 131,
        "time": 409847
    },
    {
        "color": 1,
        "name": "Constance Schowalter",
        "speed": 222,
        "time": 411089
    },
    {
        "color": 0,
        "name": "Terri Bartoletti",
        "speed": 64,
        "time": 411405
    },
    {
        "color": 2,
        "name": "Mr. Travis Koepp II",
        "speed": 299,
        "time": 411522
    },
    {
        "color": 1,
        "name": "Mr. Alan Macejkovic",
        "speed": 147,
        "time": 412429
    },
    {
        "color": 1,
        "name": "Dr. Sidney Wiza",
        "speed": 278,
        "time": 412905
    },
    {
        "color": 0,
        "name": "Jerome Denesik",
        "speed": 163,
        "time": 413366
    },
    {
        "color": 1,
        "name": "Alyssa Huel",
        "speed": 175,
        "time": 413459
    },
    {
        "color": 2,
        "name": "Tamara Stanton Sr.",
        "speed": 89,
        "time": 413949
    },
    {
        "color": 2,
        "name": "Olivia Frami",
        "speed": 276,
        "time": 414684
    },
    {
        "color": 2,
        "name": "Mr. Chad Lynch",
        "speed": 296,
        "time": 414912
    },
    {
        "color": 0,
        "name": "Geraldine Bogisich",
        "speed": 216,
        "time": 415259
    },
    {
        "color": 0,
        "name": "Raymond Ankunding",
        "speed": 339,
        "time": 417835
    },
    {
        "color": 2,
        "name": "Joe O'Conner I",
        "speed": 309,
        "time": 417861
    },
    {
        "color": 2,
        "name": "Dianna Altenwerth",
        "speed": 136,
        "time": 420073
    },
    {
        "color": 2,
        "name": "Morris Daniel",
        "speed": 261,
        "time": 420420
    },
    {
        "color": 0,
        "name": "Mercedes King",
        "speed": 205,
        "time": 420714
    },
    {
        "color": 1,
        "name": "Mr. Jerry Leuschke",
        "speed": 199,
        "time": 420918
    },
    {
        "color": 2,
        "name": "Angelina Lynch",
        "speed": 200,
        "time": 423798
    },
    {
        "color": 2,
        "name": "Mrs. Leona Kemmer-Kuhic",
        "speed": 257,
        "time": 425377
    },
    {
        "color": 1,
        "name": "Dr. Pete Robel",
        "speed": 258,
        "time": 425838
    },
    {
        "color": 0,
        "name": "Brandi Nikolaus",
        "speed": 291,
        "time": 425937
    },
    {
        "color": 2,
        "name": "Valerie MacGyver Jr.",
        "speed": 312,
        "time": 426312
    },
    {
        "color": 0,
        "name": "Neil Dach",
        "speed": 345,
        "time": 426889
    },
    {
        "color": 2,
        "name": "Gerard Abshire",
        "speed": 139,
        "time": 427238
    },
    {
        "color": 2,
        "name": "Tommie Schaden",
        "speed": 124,
        "time": 427345
    },
    {
        "color": 0,
        "name": "Agnes Mayert",
        "speed": 297,
        "time": 427383
    },
    {
        "color": 1,
        "name": "Mr. Hubert Kreiger",
        "speed": 295,
        "time": 428318
    },
    {
        "color": 2,
        "name": "Vera Harber PhD",
        "speed": 277,
        "time": 428346
    },
    {
        "color": 1,
        "name": "Sally Grimes",
        "speed": 224,
        "time": 428371
    },
    {
        "color": 1,
        "name": "Flora Kuvalis",
        "speed": 74,
        "time": 428705
    },
    {
        "color": 0,
        "name": "Lindsey Labadie",
        "speed": 125,
        "time": 429193
    },
    {
        "color": 1,
        "name": "May Heidenreich",
        "speed": 339,
        "time": 429855
    },
    {
        "color": 2,
        "name": "Miss Mabel Price",
        "speed": 297,
        "time": 430133
    },
    {
        "color": 1,
        "name": "Susie Ward",
        "speed": 175,
        "time": 431950
    },
    {
        "color": 2,
        "name": "Richard Lueilwitz MD",
        "speed": 85,
        "time": 432742
    },
    {
        "color": 2,
        "name": "Gabriel Lueilwitz",
        "speed": 282,
        "time": 433158
    },
    {
        "color": 2,
        "name": "Homer Wilkinson II",
        "speed": 195,
        "time": 433679
    },
    {
        "color": 2,
        "name": "Arthur Dickinson",
        "speed": 131,
        "time": 433712
    },
    {
        "color": 1,
        "name": "Brandy Feest",
        "speed": 122,
        "time": 434596
    },
    {
        "color": 1,
        "name": "Blanche Mraz",
        "speed": 106,
        "time": 434601
    },
    {
        "color": 2,
        "name": "Angelo Terry",
        "speed": 64,
        "time": 434757
    },
    {
        "color": 2,
        "name": "Dr. Brian Green",
        "speed": 183,
        "time": 435225
    },
    {
        "color": 1,
        "name": "Cecelia Hodkiewicz",
        "speed": 352,
        "time": 436637
    },
    {
        "color": 0,
        "name": "Brent Huels",
        "speed": 91,
        "time": 436797
    },
    {
        "color": 0,
        "name": "Vicki Torphy",
        "speed": 241,
        "time": 436972
    },
    {
        "color": 2,
        "name": "Lynette Goyette",
        "speed": 85,
        "time": 437032
    },
    {
        "color": 2,
        "name": "Pat Lindgren",
        "speed": 86,
        "time": 439600
    },
    {
        "color": 0,
        "name": "Gilberto Stamm",
        "speed": 332,
        "time": 439867
    },
    {
        "color": 1,
        "name": "Patti Harvey",
        "speed": 169,
        "time": 440777
    },
    {
        "color": 2,
        "name": "Dr. May Ryan",
        "speed": 334,
        "time": 441681
    },
    {
        "color": 2,
        "name": "Julian Wilkinson",
        "speed": 269,
        "time": 442045
    },
    {
        "color": 1,
        "name": "Eileen Kuphal",
        "speed": 340,
        "time": 442086
    },
    {
        "color": 1,
        "name": "Alberto Lehner DDS",
        "speed": 282,
        "time": 444281
    },
    {
        "color": 2,
        "name": "Daisy White",
        "speed": 354,
        "time": 444524
    },
    {
        "color": 0,
        "name": "Denise Fahey",
        "speed": 101,
        "time": 444698
    },
    {
        "color": 0,
        "name": "Willie Schaefer",
        "speed": 194,
        "time": 444858
    },
    {
        "color": 0,
        "name": "Johnnie Rempel",
        "speed": 238,
        "time": 445143
    },
    {
        "color": 0,
        "name": "Jerry Raynor",
        "speed": 222,
        "time": 445588
    },
    {
        "color": 2,
        "name": "Jackie MacGyver",
        "speed": 320,
        "time": 446796
    },
    {
        "color": 1,
        "name": "Estelle Grady",
        "speed": 226,
        "time": 448164
    },
    {
        "color": 0,
        "name": "Cedric Schoen",
        "speed": 304,
        "time": 448556
    },
    {
        "color": 1,
        "name": "Betty Hane-Hoeger",
        "speed": 62,
        "time": 448647
    },
    {
        "color": 2,
        "name": "Dwayne Zieme",
        "speed": 181,
        "time": 448951
    },
    {
        "color": 0,
        "name": "Marcia Ferry DDS",
        "speed": 200,
        "time": 449542
    },
    {
        "color": 2,
        "name": "Dr. Alonzo Robel",
        "speed": 295,
        "time": 449963
    },
    {
        "color": 0,
        "name": "Shelia Lang",
        "speed": 63,
        "time": 450122
    },
    {
        "color": 0,
        "name": "Fannie Torp",
        "speed": 261,
        "time": 451554
    },
    {
        "color": 2,
        "name": "Miss Darla Heller",
        "speed": 66,
        "time": 452142
    },
    {
        "color": 2,
        "name": "Martha Dibbert-Jacobs",
        "speed": 261,
        "time": 452704
    },
    {
        "color": 1,
        "name": "Alice Tillman",
        "speed": 171,
        "time": 453090
    },
    {
        "color": 1,
        "name": "Jennifer Keeling",
        "speed": 136,
        "time": 454240
    },
    {
        "color": 2,
        "name": "Wayne Smith",
        "speed": 107,
        "time": 455105
    },
    {
        "color": 0,
        "name": "Andrew Dooley",
        "speed": 240,
        "time": 455880
    },
    {
        "color": 2,
        "name": "Dr. Cheryl Williamson",
        "speed": 79,
        "time": 456046
    },
    {
        "color": 1,
        "name": "Rodney Christiansen",
        "speed": 167,
        "time": 456146
    },
    {
        "color": 1,
        "name": "Isaac Ondricka",
        "speed": 337,
        "time": 457216
    },
    {
        "color": 0,
        "name": "Cornelius Ortiz",
        "speed": 214,
        "time": 457708
    },
    {
        "color": 1,
        "name": "Adrienne Gibson-Koelpin",
        "speed": 90,
        "time": 458054
    },
    {
        "color": 2,
        "name": "Elizabeth Gorczany",
        "speed": 163,
        "time": 460757
    },
    {
        "color": 2,
        "name": "Dr. Walter Johnston V",
        "speed": 76,
        "time": 461080
    },
    {
        "color": 0,
        "name": "Latoya Hammes",
        "speed": 205,
        "time": 461961
    },
    {
        "color": 2,
        "name": "Jana Treutel",
        "speed": 161,
        "time": 462099
    },
    {
        "color": 2,
        "name": "Maria McKenzie",
        "speed": 191,
        "time": 462162
    },
    {
        "color": 0,
        "name": "Stanley Hoeger",
        "speed": 141,
        "time": 462219
    },
    {
        "color": 1,
        "name": "Cody Johnson",
        "speed": 346,
        "time": 462858
    },
    {
        "color": 2,
        "name": "Dr. Jose Greenholt MD",
        "speed": 317,
        "time": 464977
    },
    {
        "color": 1,
        "name": "Marion Conroy",
        "speed": 315,
        "time": 465334
    },
    {
        "color": 2,
        "name": "Laura Crooks",
        "speed": 236,
        "time": 467562
    },
    {
        "color": 1,
        "name": "Meredith Dicki",
        "speed": 87,
        "time": 468523
    },
    {
        "color": 2,
        "name": "Kate Hagenes",
        "speed": 178,
        "time": 468765
    },
    {
        "color": 2,
        "name": "Bruce Zieme",
        "speed": 184,
        "time": 469284
    },
    {
        "color": 0,
        "name": "Jeremiah Leuschke",
        "speed": 139,
        "time": 469628
    },
    {
        "color": 1,
        "name": "Margaret Dickinson",
        "speed": 307,
        "time": 470382
    },
    {
        "color": 0,
        "name": "Kent Ortiz",
        "speed": 211,
        "time": 470620
    },
    {
        "color": 0,
        "name": "Elsa Swift",
        "speed": 192,
        "time": 470629
    },
    {
        "color": 0,
        "name": "Angelica McKenzie III",
        "speed": 160,
        "time": 471136
    },
    {
        "color": 1,
        "name": "Laurie Terry",
        "speed": 314,
        "time": 471266
    },
    {
        "color": 2,
        "name": "Henrietta Denesik",
        "speed": 138,
        "time": 471421
    },
    {
        "color": 0,
        "name": "Fred Hayes II",
        "speed": 253,
        "time": 471860
    },
    {
        "color": 2,
        "name": "Brian Metz",
        "speed": 141,
        "time": 471939
    },
    {
        "color": 0,
        "name": "Sabrina Schuster I",
        "speed": 213,
        "time": 472168
    },
    {
        "color": 0,
        "name": "Myrtle Dietrich",
        "speed": 115,
        "time": 472388
    },
    {
        "color": 2,
        "name": "Samantha Friesen",
        "speed": 149,
        "time": 472439
    },
    {
        "color": 0,
        "name": "Virginia Skiles",
        "speed": 331,
        "time": 472443
    },
    {
        "color": 0,
        "name": "Douglas Reichert",
        "speed": 155,
        "time": 472578
    },
    {
        "color": 1,
        "name": "Jodi Effertz",
        "speed": 78,
        "time": 472742
    },
    {
        "color": 0,
        "name": "Lee Heaney",
        "speed": 157,
        "time": 473054
    },
    {
        "color": 1,
        "name": "Dexter Hane",
        "speed": 329,
        "time": 473123
    },
    {
        "color": 0,
        "name": "Abel Mueller",
        "speed": 242,
        "time": 473153
    },
    {
        "color": 2,
        "name": "Perry Abshire",
        "speed": 256,
        "time": 473574
    },
    {
        "color": 1,
        "name": "Mrs. Evelyn Kovacek I",
        "speed": 152,
        "time": 473829
    },
    {
        "color": 0,
        "name": "Mercedes Trantow",
        "speed": 89,
        "time": 474886
    },
    {
        "color": 0,
        "name": "Judith Treutel-Johnston",
        "speed": 186,
        "time": 475391
    },
    {
        "color": 2,
        "name": "Carla Mosciski",
        "speed": 183,
        "time": 476960
    },
    {
        "color": 2,
        "name": "Dexter Russel",
        "speed": 158,
        "time": 476963
    },
    {
        "color": 1,
        "name": "Gerald Schaden IV",
        "speed": 208,
        "time": 477362
    },
    {
        "color": 2,
        "name": "Betsy Gerhold",
        "speed": 327,
        "time": 477609
    },
    {
        "color": 2,
        "name": "Brian Nienow",
        "speed": 200,
        "time": 478327
    },
    {
        "color": 2,
        "name": "Zachary Kulas",
        "speed": 347,
        "time": 478971
    },
    {
        "color": 2,
        "name": "Luz O'Kon",
        "speed": 257,
        "time": 478973
    },
    {
        "color": 1,
        "name": "Mary Hirthe",
        "speed": 80,
        "time": 479862
    },
    {
        "color": 0,
        "name": "Jeremy Ortiz",
        "speed": 233,
        "time": 480183
    },
    {
        "color": 0,
        "name": "Fred Feeney",
        "speed": 72,
        "time": 480568
    },
    {
        "color": 2,
        "name": "Faith Jaskolski",
        "speed": 233,
        "time": 482604
    },
    {
        "color": 2,
        "name": "Shelley Schoen-Sauer",
        "speed": 340,
        "time": 482703
    },
    {
        "color": 0,
        "name": "Alex Kohler-Olson",
        "speed": 68,
        "time": 486302
    },
    {
        "color": 0,
        "name": "Holly Hills",
        "speed": 215,
        "time": 486503
    },
    {
        "color": 1,
        "name": "Arturo Gusikowski",
        "speed": 233,
        "time": 486538
    },
    {
        "color": 2,
        "name": "Kelli Bogisich III",
        "speed": 163,
        "time": 486725
    },
    {
        "color": 1,
        "name": "Daryl Torp",
        "speed": 256,
        "time": 487538
    },
    {
        "color": 2,
        "name": "Mercedes Parker DDS",
        "speed": 247,
        "time": 488155
    },
    {
        "color": 0,
        "name": "Phillip Herman",
        "speed": 76,
        "time": 488342
    },
    {
        "color": 2,
        "name": "Shelley Koss",
        "speed": 204,
        "time": 488555
    },
    {
        "color": 0,
        "name": "Shari Heaney",
        "speed": 145,
        "time": 489600
    },
    {
        "color": 2,
        "name": "Mrs. Cora Barrows",
        "speed": 356,
        "time": 491101
    },
    {
        "color": 0,
        "name": "Percy Braun",
        "speed": 158,
        "time": 491267
    },
    {
        "color": 1,
        "name": "Dr. Frankie Buckridge",
        "speed": 343,
        "time": 491331
    },
    {
        "color": 0,
        "name": "Kendra Kling I",
        "speed": 154,
        "time": 491770
    },
    {
        "color": 0,
        "name": "Margie Hilll",
        "speed": 101,
        "time": 492052
    },
    {
        "color": 2,
        "name": "Danielle Auer",
        "speed": 335,
        "time": 492224
    },
    {
        "color": 2,
        "name": "Jon Lockman",
        "speed": 78,
        "time": 492501
    },
    {
        "color": 0,
        "name": "Ricky Doyle",
        "speed": 270,
        "time": 492546
    },
    {
        "color": 0,
        "name": "Eric Jaskolski",
        "speed": 265,
        "time": 492774
    },
    {
        "color": 1,
        "name": "Cathy Kuvalis",
        "speed": 274,
        "time": 492907
    },
    {
        "color": 0,
        "name": "Estelle Boyer",
        "speed": 188,
        "time": 493445
    },
    {
        "color": 1,
        "name": "Randall Connelly III",
        "speed": 165,
        "time": 493527
    },
    {
        "color": 2,
        "name": "Alan Cummings",
        "speed": 122,
        "time": 496061
    },
    {
        "color": 1,
        "name": "Dr. Nicolas Grant",
        "speed": 238,
        "time": 496507
    },
    {
        "color": 1,
        "name": "Terry Oberbrunner",
        "speed": 178,
        "time": 496880
    },
    {
        "color": 2,
        "name": "Kristen Boyer",
        "speed": 192,
        "time": 499625
    },
    {
        "color": 2,
        "name": "Victoria Thiel-Bauch",
        "speed": 260,
        "time": 500085
    },
    {
        "color": 0,
        "name": "Sean Gleichner Sr.",
        "speed": 143,
        "time": 501382
    },
    {
        "color": 1,
        "name": "Dora Ankunding",
        "speed": 171,
        "time": 501837
    },
    {
        "color": 2,
        "name": "Jamie Hane",
        "speed": 95,
        "time": 502544
    },
    {
        "color": 1,
        "name": "Katrina Dietrich",
        "speed": 87,
        "time": 502559
    },
    {
        "color": 2,
        "name": "Armando Rath",
        "speed": 297,
        "time": 502744
    },
    {
        "color": 1,
        "name": "Al Walsh PhD",
        "speed": 68,
        "time": 503231
    },
    {
        "color": 0,
        "name": "Oscar Baumbach",
        "speed": 251,
        "time": 504032
    },
    {
        "color": 2,
        "name": "Sergio Smitham",
        "speed": 70,
        "time": 504167
    },
    {
        "color": 1,
        "name": "Dr. Michael O'Hara",
        "speed": 307,
        "time": 504460
    },
    {
        "color": 2,
        "name": "Donald Corwin",
        "speed": 234,
        "time": 505893
    },
    {
        "color": 2,
        "name": "Vicki Hartmann",
        "speed": 148,
        "time": 505947
    },
    {
        "color": 0,
        "name": "Dr. Colleen Hackett",
        "speed": 212,
        "time": 508180
    },
    {
        "color": 2,
        "name": "Shannon Carter Jr.",
        "speed": 110,
        "time": 508204
    },
    {
        "color": 1,
        "name": "Myron Erdman",
        "speed": 98,
        "time": 509362
    },
    {
        "color": 2,
        "name": "Stephanie Robel PhD",
        "speed": 269,
        "time": 509493
    },
    {
        "color": 1,
        "name": "Lillian Ledner",
        "speed": 273,
        "time": 509566
    },
    {
        "color": 1,
        "name": "Marta Bogisich",
        "speed": 357,
        "time": 509942
    },
    {
        "color": 0,
        "name": "Sean Sauer",
        "speed": 88,
        "time": 510843
    },
    {
        "color": 2,
        "name": "Marjorie Schmitt Sr.",
        "speed": 184,
        "time": 511609
    },
    {
        "color": 0,
        "name": "Eva Stanton",
        "speed": 87,
        "time": 511688
    },
    {
        "color": 1,
        "name": "Camille McGlynn-Hills",
        "speed": 163,
        "time": 512079
    },
    {
        "color": 1,
        "name": "Roy Hammes",
        "speed": 285,
        "time": 512449
    },
    {
        "color": 1,
        "name": "Marie Krajcik V",
        "speed": 207,
        "time": 512812
    },
    {
        "color": 1,
        "name": "Marta Legros",
        "speed": 112,
        "time": 512900
    },
    {
        "color": 1,
        "name": "Nicole Rau",
        "speed": 221,
        "time": 513101
    },
    {
        "color": 2,
        "name": "Tommy Bahringer",
        "speed": 201,
        "time": 513657
    },
    {
        "color": 2,
        "name": "Blake Rath",
        "speed": 278,
        "time": 514134
    },
    {
        "color": 1,
        "name": "Adrian Schultz",
        "speed": 351,
        "time": 514431
    },
    {
        "color": 2,
        "name": "Blanca Turcotte",
        "speed": 103,
        "time": 514723
    },
    {
        "color": 1,
        "name": "Alfredo Stracke",
        "speed": 197,
        "time": 516127
    },
    {
        "color": 0,
        "name": "Julio Zulauf",
        "speed": 278,
        "time": 517025
    },
    {
        "color": 2,
        "name": "Terrence Parker",
        "speed": 61,
        "time": 517316
    },
    {
        "color": 2,
        "name": "Shirley Botsford",
        "speed": 203,
        "time": 517454
    },
    {
        "color": 2,
        "name": "Clint Jacobi DDS",
        "speed": 217,
        "time": 518123
    },
    {
        "color": 0,
        "name": "Dr. Alvin Farrell",
        "speed": 91,
        "time": 519245
    },
    {
        "color": 0,
        "name": "Christine Daniel",
        "speed": 162,
        "time": 519297
    },
    {
        "color": 0,
        "name": "Christine Brakus MD",
        "speed": 70,
        "time": 519478
    },
    {
        "color": 2,
        "name": "Emmett Crooks",
        "speed": 214,
        "time": 519910
    },
    {
        "color": 0,
        "name": "Jimmy Schowalter",
        "speed": 219,
        "time": 519971
    },
    {
        "color": 1,
        "name": "Emilio Reichert",
        "speed": 105,
        "time": 520636
    },
    {
        "color": 0,
        "name": "Randolph Simonis Jr.",
        "speed": 166,
        "time": 521470
    },
    {
        "color": 2,
        "name": "Marcella Kessler",
        "speed": 230,
        "time": 521807
    },
    {
        "color": 0,
        "name": "Edith Jenkins",
        "speed": 227,
        "time": 523640
    },
    {
        "color": 2,
        "name": "Sylvester Dietrich",
        "speed": 224,
        "time": 523862
    },
    {
        "color": 2,
        "name": "Ms. Mona Schuppe-Stehr",
        "speed": 126,
        "time": 524199
    },
    {
        "color": 2,
        "name": "Dustin Kunze",
        "speed": 277,
        "time": 526844
    },
    {
        "color": 2,
        "name": "Lucy Kulas",
        "speed": 149,
        "time": 527260
    },
    {
        "color": 1,
        "name": "Leigh Quitzon",
        "speed": 297,
        "time": 527681
    },
    {
        "color": 1,
        "name": "Mary Collier",
        "speed": 150,
        "time": 528061
    },
    {
        "color": 2,
        "name": "Dr. Martha Gislason",
        "speed": 266,
        "time": 530254
    },
    {
        "color": 0,
        "name": "Mercedes Leffler",
        "speed": 227,
        "time": 530514
    },
    {
        "color": 1,
        "name": "Lucas Gusikowski",
        "speed": 147,
        "time": 531144
    },
    {
        "color": 0,
        "name": "Jay Koelpin",
        "speed": 104,
        "time": 531509
    },
    {
        "color": 0,
        "name": "Don Gibson",
        "speed": 66,
        "time": 532091
    },
    {
        "color": 1,
        "name": "Randolph Kozey",
        "speed": 293,
        "time": 532572
    },
    {
        "color": 2,
        "name": "Jan Cartwright",
        "speed": 344,
        "time": 533263
    },
    {
        "color": 2,
        "name": "Dr. Johnny Sanford",
        "speed": 325,
        "time": 534276
    },
    {
        "color": 0,
        "name": "Miss Melba Schamberger",
        "speed": 97,
        "time": 535119
    },
    {
        "color": 2,
        "name": "Jim Veum",
        "speed": 118,
        "time": 535787
    },
    {
        "color": 0,
        "name": "Jenna Schumm",
        "speed": 71,
        "time": 537891
    },
    {
        "color": 2,
        "name": "Winston Glover",
        "speed": 261,
        "time": 539299
    },
    {
        "color": 1,
        "name": "Ora Kerluke",
        "speed": 311,
        "time": 539582
    },
    {
        "color": 1,
        "name": "Jana Zemlak",
        "speed": 335,
        "time": 540225
    },
    {
        "color": 2,
        "name": "Cary Rippin",
        "speed": 340,
        "time": 540419
    },
    {
        "color": 2,
        "name": "Stacy Mann",
        "speed": 247,
        "time": 540420
    },
    {
        "color": 0,
        "name": "Leah Runolfsson",
        "speed": 318,
        "time": 541922
    },
    {
        "color": 2,
        "name": "Lora Abernathy",
        "speed": 208,
        "time": 542238
    },
    {
        "color": 1,
        "name": "Myron Hagenes",
        "speed": 314,
        "time": 542631
    },
    {
        "color": 2,
        "name": "Caroline Glover",
        "speed": 336,
        "time": 542650
    },
    {
        "color": 1,
        "name": "Al Jakubowski",
        "speed": 136,
        "time": 543454
    },
    {
        "color": 2,
        "name": "Raymond Bradtke",
        "speed": 154,
        "time": 544556
    },
    {
        "color": 0,
        "name": "Christy Prosacco",
        "speed": 196,
        "time": 545054
    },
    {
        "color": 1,
        "name": "Dewey Paucek",
        "speed": 360,
        "time": 545858
    },
    {
        "color": 2,
        "name": "Marco Kuhlman",
        "speed": 72,
        "time": 546959
    },
    {
        "color": 0,
        "name": "Ross O'Connell",
        "speed": 325,
        "time": 547059
    },
    {
        "color": 1,
        "name": "Cristina Orn",
        "speed": 337,
        "time": 547109
    },
    {
        "color": 1,
        "name": "Lowell Daniel",
        "speed": 80,
        "time": 547383
    },
    {
        "color": 1,
        "name": "Bill Ondricka",
        "speed": 271,
        "time": 548691
    },
    {
        "color": 0,
        "name": "Leo Marvin Jr.",
        "speed": 132,
        "time": 549542
    },
    {
        "color": 2,
        "name": "Elbert Lowe",
        "speed": 117,
        "time": 549616
    },
    {
        "color": 2,
        "name": "Miss Julie Spencer",
        "speed": 95,
        "time": 550015
    },
    {
        "color": 1,
        "name": "Carlos Wisozk",
        "speed": 218,
        "time": 550104
    },
    {
        "color": 1,
        "name": "Pedro Lockman",
        "speed": 204,
        "time": 551146
    },
    {
        "color": 0,
        "name": "Dustin Treutel",
        "speed": 169,
        "time": 552072
    },
    {
        "color": 0,
        "name": "Leah Powlowski",
        "speed": 74,
        "time": 552695
    },
    {
        "color": 1,
        "name": "Brad Batz",
        "speed": 157,
        "time": 553126
    },
    {
        "color": 1,
        "name": "Emma Bogan",
        "speed": 186,
        "time": 553525
    },
    {
        "color": 1,
        "name": "Alexis Hansen",
        "speed": 226,
        "time": 553649
    },
    {
        "color": 0,
        "name": "Dr. Sherri Roob MD",
        "speed": 350,
        "time": 554512
    },
    {
        "color": 1,
        "name": "Amelia Lehner",
        "speed": 192,
        "time": 554882
    },
    {
        "color": 0,
        "name": "Dr. Kim Flatley",
        "speed": 253,
        "time": 555595
    },
    {
        "color": 0,
        "name": "Jeffery Crist",
        "speed": 305,
        "time": 555985
    },
    {
        "color": 2,
        "name": "Shelley Dooley",
        "speed": 240,
        "time": 556325
    },
    {
        "color": 0,
        "name": "Jennie Oberbrunner III",
        "speed": 240,
        "time": 556426
    },
    {
        "color": 1,
        "name": "Guadalupe Gleichner",
        "speed": 100,
        "time": 556659
    },
    {
        "color": 0,
        "name": "Rose Effertz I",
        "speed": 298,
        "time": 557503
    },
    {
        "color": 2,
        "name": "Mable O'Kon",
        "speed": 189,
        "time": 558632
    },
    {
        "color": 0,
        "name": "Kayla Frami",
        "speed": 346,
        "time": 558762
    },
    {
        "color": 0,
        "name": "Marian Donnelly",
        "speed": 288,
        "time": 559319
    },
    {
        "color": 1,
        "name": "Elijah Quitzon",
        "speed": 111,
        "time": 560292
    },
    {
        "color": 2,
        "name": "Perry Ward-Abbott",
        "speed": 212,
        "time": 560542
    },
    {
        "color": 0,
        "name": "Melba Walker",
        "speed": 188,
        "time": 560907
    },
    {
        "color": 2,
        "name": "Dan Graham",
        "speed": 352,
        "time": 561508
    },
    {
        "color": 0,
        "name": "Kelly Daniel",
        "speed": 311,
        "time": 561724
    },
    {
        "color": 2,
        "name": "Marilyn Conroy",
        "speed": 131,
        "time": 562951
    },
    {
        "color": 0,
        "name": "Lance Yundt",
        "speed": 136,
        "time": 563146
    },
    {
        "color": 1,
        "name": "Leigh Abbott",
        "speed": 88,
        "time": 564137
    },
    {
        "color": 1,
        "name": "Irving Wolff II",
        "speed": 73,
        "time": 564143
    },
    {
        "color": 2,
        "name": "Leticia Ritchie",
        "speed": 281,
        "time": 564586
    },
    {
        "color": 2,
        "name": "Suzanne Muller",
        "speed": 127,
        "time": 564751
    },
    {
        "color": 0,
        "name": "Randy Lynch",
        "speed": 242,
        "time": 566344
    },
    {
        "color": 2,
        "name": "Matthew Kozey",
        "speed": 80,
        "time": 568078
    },
    {
        "color": 1,
        "name": "Lorena Yundt",
        "speed": 283,
        "time": 568352
    },
    {
        "color": 2,
        "name": "Miss Sue Williamson-Murphy",
        "speed": 273,
        "time": 568648
    },
    {
        "color": 2,
        "name": "Hannah Waelchi",
        "speed": 235,
        "time": 568765
    },
    {
        "color": 0,
        "name": "Jana Gulgowski",
        "speed": 149,
        "time": 570497
    },
    {
        "color": 2,
        "name": "Kenneth Herzog",
        "speed": 266,
        "time": 571634
    },
    {
        "color": 1,
        "name": "Sabrina Kassulke",
        "speed": 325,
        "time": 572035
    },
    {
        "color": 0,
        "name": "Maggie Mitchell",
        "speed": 129,
        "time": 572615
    },
    {
        "color": 2,
        "name": "Nina Brakus",
        "speed": 281,
        "time": 573884
    },
    {
        "color": 2,
        "name": "Jackie Steuber",
        "speed": 234,
        "time": 574012
    },
    {
        "color": 2,
        "name": "Dr. Alex Jast",
        "speed": 94,
        "time": 574458
    },
    {
        "color": 2,
        "name": "Ana Wunsch V",
        "speed": 264,
        "time": 574812
    },
    {
        "color": 0,
        "name": "Milton Cummings",
        "speed": 62,
        "time": 575945
    },
    {
        "color": 2,
        "name": "Ernest Kulas",
        "speed": 201,
        "time": 576550
    },
    {
        "color": 2,
        "name": "Andy Wuckert",
        "speed": 323,
        "time": 577240
    },
    {
        "color": 2,
        "name": "Ashley Hilpert",
        "speed": 111,
        "time": 577696
    },
    {
        "color": 1,
        "name": "Sadie Purdy",
        "speed": 226,
        "time": 577764
    },
    {
        "color": 1,
        "name": "Guadalupe Fisher",
        "speed": 355,
        "time": 578338
    },
    {
        "color": 2,
        "name": "Jeannette Yost",
        "speed": 261,
        "time": 578560
    },
    {
        "color": 2,
        "name": "Holly Schaden-Hilll",
        "speed": 294,
        "time": 579258
    },
    {
        "color": 2,
        "name": "Ismael Nikolaus I",
        "speed": 264,
        "time": 579570
    },
    {
        "color": 0,
        "name": "Tracey Gleason I",
        "speed": 99,
        "time": 579812
    },
    {
        "color": 0,
        "name": "Mr. Roy Jenkins",
        "speed": 106,
        "time": 580038
    },
    {
        "color": 2,
        "name": "Wilma Kunde",
        "speed": 204,
        "time": 580854
    },
    {
        "color": 1,
        "name": "Brendan Zulauf",
        "speed": 173,
        "time": 581159
    },
    {
        "color": 0,
        "name": "Orville Renner",
        "speed": 103,
        "time": 581586
    },
    {
        "color": 0,
        "name": "Ramiro Schaefer",
        "speed": 297,
        "time": 582398
    },
    {
        "color": 0,
        "name": "Percy Abbott",
        "speed": 212,
        "time": 582858
    },
    {
        "color": 2,
        "name": "Andy Emmerich",
        "speed": 201,
        "time": 583238
    },
    {
        "color": 1,
        "name": "Debra Macejkovic",
        "speed": 278,
        "time": 583849
    },
    {
        "color": 1,
        "name": "Genevieve Cormier DDS",
        "speed": 196,
        "time": 585164
    },
    {
        "color": 1,
        "name": "Elbert Lang",
        "speed": 254,
        "time": 585909
    },
    {
        "color": 1,
        "name": "Arthur Kris",
        "speed": 230,
        "time": 586180
    },
    {
        "color": 2,
        "name": "Bernadette Wintheiser",
        "speed": 341,
        "time": 586357
    },
    {
        "color": 2,
        "name": "Francisco Hyatt",
        "speed": 295,
        "time": 587542
    },
    {
        "color": 1,
        "name": "Adrienne Sawayn",
        "speed": 126,
        "time": 587602
    },
    {
        "color": 1,
        "name": "Nelson Carter",
        "speed": 193,
        "time": 588196
    },
    {
        "color": 1,
        "name": "Lula Schmeler",
        "speed": 284,
        "time": 589811
    },
    {
        "color": 0,
        "name": "Wanda Reinger",
        "speed": 188,
        "time": 590118
    },
    {
        "color": 1,
        "name": "Josh Simonis",
        "speed": 137,
        "time": 590433
    },
    {
        "color": 0,
        "name": "Tommy Fadel",
        "speed": 71,
        "time": 590438
    },
    {
        "color": 1,
        "name": "Patrick Goodwin",
        "speed": 194,
        "time": 590647
    },
    {
        "color": 2,
        "name": "Dr. Leona Jast",
        "speed": 201,
        "time": 590862
    },
    {
        "color": 2,
        "name": "Woodrow McLaughlin",
        "speed": 105,
        "time": 592060
    },
    {
        "color": 0,
        "name": "Flora Dare",
        "speed": 217,
        "time": 592558
    },
    {
        "color": 1,
        "name": "Heather Cronin",
        "speed": 290,
        "time": 593478
    },
    {
        "color": 1,
        "name": "Dr. Terence Buckridge",
        "speed": 160,
        "time": 593657
    },
    {
        "color": 1,
        "name": "Kristie Ankunding",
        "speed": 186,
        "time": 593771
    },
    {
        "color": 1,
        "name": "Ismael Botsford",
        "speed": 211,
        "time": 593910
    },
    {
        "color": 2,
        "name": "George Stark",
        "speed": 171,
        "time": 594065
    },
    {
        "color": 2,
        "name": "Shirley Emmerich",
        "speed": 162,
        "time": 594513
    },
    {
        "color": 1,
        "name": "Max Haley PhD",
        "speed": 287,
        "time": 595078
    },
    {
        "color": 0,
        "name": "Malcolm Kulas",
        "speed": 340,
        "time": 596183
    },
    {
        "color": 2,
        "name": "Janis Friesen",
        "speed": 76,
        "time": 597432
    },
    {
        "color": 0,
        "name": "Ian Windler I",
        "speed": 111,
        "time": 597781
    },
    {
        "color": 0,
        "name": "Tracy Schuster DVM",
        "speed": 207,
        "time": 598590
    },
    {
        "color": 1,
        "name": "Janie Franey",
        "speed": 323,
        "time": 598843
    },
    {
        "color": 1,
        "name": "Jesse Johns",
        "speed": 108,
        "time": 599165
    }
]