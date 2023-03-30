const contract = {
  startDate: "2023-04-01",
  endDate: "2023-09-30",
  name: "John Doe",
  contact: "Software Engineer",
  skills: {
    Java: 5,
    Javascript: 5,
  },
};
// Define the required roles object
const requiredRoles = {
  "Java Developer": {
    Java: 5,
    AWS: 2,
  },
  "Javascript Developer": {
    Javascript: 5,
    AWS: 1,
  },
  "Python Developer": {
    Python: 5,
    AWS: 1,
  },
};
// Define a sample list of candidates
const candidates = [
  {
    name: "Alice",
    skills: {
      Java: 5,
      AWS: 3,
    },
  },
  {
    name: "Bob",
    skills: {
      Javascript: 5,
      AWS: 2,
    },
  },
  {
    name: "Charlie",
    skills: {
      Python: 4,
      AWS: 1,
    },
  },
  {
    name: "David",
    skills: {
      Java: 4,
      AWS: 2,
    },
  },
];

export { contract, requiredRoles, candidates };
