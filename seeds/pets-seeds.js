const { Pets } = require('../models'); // Imports the models.

const petData = [
  // Dogs
  {
    pet_name: 'Bella',
    breed: 'German Shepherd',
    gender: 'Female',
    age: 5,
    color: 'Brown and Black',
    size: 'Large',
    weight: 70,
    isSpayedNeutered: true,
    species_id: 1,
  },
  {
    pet_name: 'Charlie',
    breed: 'English Bulldog',
    gender: 'Male',
    age: 9,
    color: 'Brown and White',
    size: 'Medium',
    weight: 50,
    isSpayedNeutered: false,
    species_id: 1,
  },
  {
    pet_name: 'Max',
    breed: 'Lab Mix',
    gender: 'Male',
    age: 2,
    color: 'Brown',
    size: 'Small',
    weight: 5,
    isSpayedNeutered: true,
    species_id: 1,
  },
  {
    pet_name: 'Luna',
    breed: 'Chihuahua Terrier Mix',
    gender: 'Female',
    age: 9,
    color: 'White',
    size: 'Medium',
    weight: 47,
    isSpayedNeutered: false,
    species_id: 1,
  },
  {
    pet_name: 'Bailey',
    breed: 'Beagle',
    gender: 'Female',
    age: 3,
    color: 'White, Brown and Black',
    size: 'Medium',
    weight: 20,
    isSpayedNeutered: true,
    species_id: 1,
  },
  {
    pet_name: 'Rocky',
    breed: 'Pitbull',
    gender: 'Female',
    age: 3,
    color: 'Brown and Black',
    size: 'Large',
    weight: 60,
    isSpayedNeutered: true,
    species_id: 1,
  },

  // Cats
  {
    pet_name: 'Milo',
    breed: 'Tabby',
    gender: 'Male',
    age: 6,
    color: 'Orange, White, and Black',
    size: "Small",
    weight: 10,
    isSpayedNeutered: true,
    species_id: 2,
  },
  {
    pet_name: 'Lucky',
    breed: 'British Shorthair',
    gender: 'Female',
    age: 8,
    color: 'Gray',
    size: "Medium",
    weight: 10,
    isSpayedNeutered: true,
    species_id: 2,
  },
  {
    pet_name: 'Fluffy',
    breed: 'Persian Cat',
    gender: 'Male',
    age: 5,
    color: 'Orange',
    size: "Medium",
    weight: 8,
    isSpayedNeutered: true,
    species_id: 2,
  },
  {
    pet_name: 'Pepper',
    breed: 'Bombay Cat',
    gender: 'Female',
    age: 1,
    color: 'Black',
    size: "Small",
    weight: 4,
    isSpayedNeutered: false,
    species_id: 2,
  },
  {
    pet_name: 'Oreo',
    breed: 'Oriental Shorthair',
    gender: 'Male',
    age: 3,
    color: 'Black/White',
    size: "Medium",
    weight: 7,
    isSpayedNeutered: true,
    species_id: 2,
  },
  {
    pet_name: 'Cookie',
    breed: 'Birman',
    gender: 'Female',
    age: 10,
    color: 'White/Brown',
    size: "Large",
    weight: 12,
    isSpayedNeutered: true,
    species_id: 2,
  },

  // Rabbits
  {
    pet_name: 'Hopper',
    breed: 'Angora',
    gender: 'Female',
    age: 7,
    color: 'White',
    size: "Small",
    weight: 5,
    isSpayedNeutered: false,
    species_id: 3,
  },
  {
    pet_name: 'Coco',
    breed: 'Belgian Hare',
    gender: 'Male',
    age: 3,
    color: 'Reddish',
    size: "Small",
    weight: 7,
    isSpayedNeutered: true,
    species_id: 3,
  },
  {
    pet_name: 'Snowball',
    breed: 'Chinchilla',
    gender: 'Male',
    age: 1,
    color: 'Gray/White',
    size: "Large",
    weight: 5,
    isSpayedNeutered: false,
    species_id: 3,
  },
  {
    pet_name: 'Daisy',
    breed: 'Dward Hotot',
    gender: 'Female',
    age: 2,
    color: 'White',
    size: "Small",
    weight: 2,
    isSpayedNeutered: true,
    species_id: 3,
  },
];

const seedPets = () => Pets.bulkCreate(petData);

module.exports = seedPets;