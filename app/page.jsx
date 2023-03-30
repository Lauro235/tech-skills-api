"use client";
import { candidates, requiredRoles } from "@/data/data";
import { useState } from "react";

function Home() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [answer, setAnswer] = useState('');
  const [inputData, setInputData] = useState({
    "job-title": "",
    skills: [],
  });
  const [potentialCandidates, setPotentialCandidates] = useState(candidates);

  function matchRoles(requiredRoles, candidates) {
    const matchedCandidates = {};
    for (const [role, skills] of Object.entries(requiredRoles)) {
      const matchingCandidates = candidates.filter((candidate) => {
        return Object.entries(skills).every(([skill, demand]) => {
          return candidate.skills[skill] >= demand;
        });
      });

      matchedCandidates[role] = matchingCandidates;
    }
    return matchedCandidates;
  }

  function handleChangeInput(event) {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
    console.log(inputData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const matchedCandidates = matchRoles(requiredRoles, candidates);
    return matchedCandidates;
  }

  function handleSkillSelect(event) {
    const skill = event.target.value;
    if (event.target.checked) {
      setSelectedSkills([...selectedSkills, skill]);
    } else {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    }

    console.log(inputData);
    console.log(selectedSkills);
  }

  function submitCandidates(e) {
    e.preventDefault();
    for (let skill of selectedSkills) {
      for (let candidate of potentialCandidates) {
        if (candidate.skills.hasOwnProperty(skill)) {
          setAnswer(`${candidate.name} has the skill ${skill}`);
        }
      }
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center min-h-screen bg-gradient-to-br from-purple-800 to-indigo-600">
      <form
        className="w-full max-w-2xl px-6 py-10 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-800">Profile</h1>
          <p className="text-sm text-gray-600 mt-2">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div>
            <label
              htmlFor="job-title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Job Title
            </label>
            <input
              role={'textbox'}
              type="text"
              name="job-title"
              id="job-title"
              className="w-full px-4 py-2 rounded-md border border-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your job title"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Skills
            </label>
            <div className="flex flex-col">
              {Object.keys(requiredRoles).map((role, idx) => (
                <div key={idx} className="mb-4">
                  <h2 className="text-lg font-medium text-gray-800 mb-2">
                    {role}
                  </h2>
                  {Object.keys(requiredRoles[role]).map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <input
                        type="checkbox"
                        value={skill}
                        id={skill}
                        className="mr-2"
                        onChange={handleSkillSelect}
                      />
                      <label htmlFor={skill} className="text-gray-700">
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            onClick={submitCandidates}
          >
            Save
          </button>
        </div>
      </form>
      <div className="w-full max-w-2xl px-6 py-10 bg-white rounded-lg shadow-md mt-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Matched Candidates</h1>
        {potentialCandidates.map((candidate, idx) => (
          <div key={idx} className="mb-4">
           
            <p className="text-gray-700">{answer}</p>
          </div>

        ))}    
              
      </div>
    </div>
  );
}


export default Home;
