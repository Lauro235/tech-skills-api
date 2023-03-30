export default function Home() {
  // Define the contract object
  const contract = {
    startDate: "2023-04-01",
    endDate: "2023-09-30",
    name: "Software Developer",
    contact: "John Doe",
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
  // Define the matching algorithm
  function matchRoles(requiredRoles, candidates) {
    const matchedCandidates = {};
    // Iterate over each required role
    for (const [role, skills] of Object.entries(requiredRoles)) {
      // Find candidates that match the required skills for the role
      const matchingCandidates = candidates.filter((candidate) => {
        return Object.entries(skills).every(([skill, demand]) => {
          return candidate.skills[skill] >= demand;
        });
      });
      // Add the matching candidates to the result object
      matchedCandidates[role] = matchingCandidates;
    }
    return matchedCandidates;
  }
  // Call the matching algorithm and display the results
  const matchedCandidates = matchRoles(requiredRoles, candidates);
  console.log(matchedCandidates);
  return (
    <main>
      <h1 className="text-4xl">Hello World</h1>
    </main>
  );
}
