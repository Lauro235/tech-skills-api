export default function Home() {
  // Define the contract object
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
    <form className="grid grid-col-1 p-6">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="job title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="job title"
                    id="job-title"
                    autoComplete="job title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Jane Smith"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="JaneSmith@hotmail.com"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="start date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Start Date
              </label>
              <div className="mt-2">
                <input
                  id="start-date"
                  name="start date"
                  type="date"
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="end date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                End Date
              </label>
              <div className="mt-2">
                <input
                  id="end-date"
                  name="end date"
                  type="date"
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-start gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
