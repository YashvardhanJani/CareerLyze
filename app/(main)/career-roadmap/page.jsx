"use client";

import { useState } from "react";
import { generateRoadmap } from "@/actions/roadmap";

export default function CareerRoadmapPage() {
  const [career, setCareer] = useState("");
  const [skills, setSkills] = useState("");

  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setRoadmap(null);

    if (!career || !skills) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const result = await generateRoadmap({
        career,
        skills,
      });

      if (result.error) {
        setError(result.error);
      } else {
        setRoadmap(result);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        AI Career Roadmap Generator
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 border rounded-2xl p-6 shadow-sm"
      >
        <div>
          <label className="block font-medium mb-2">
            Target Career
          </label>

          <select
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            className="w-full border rounded-xl p-3"
          >
            <option value="">Select Career</option>

            <option value="Frontend Developer">
              Frontend Developer
            </option>

            <option value="Backend Developer">
              Backend Developer
            </option>

            <option value="Full Stack Developer">
              Full Stack Developer
            </option>

            <option value="Data Scientist">
              Data Scientist
            </option>

            <option value="AI Engineer">
              AI Engineer
            </option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Current Skills
          </label>

          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="HTML, CSS, JavaScript"
            className="w-full border rounded-xl p-3 h-32"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          {loading
            ? "Generating..."
            : "Generate Roadmap"}
        </button>
      </form>

      {/* ERROR */}
      {error && (
        <div className="mt-6 text-red-500 font-medium">
          {error}
        </div>
      )}

      {/* ROADMAP */}
      {roadmap?.phases && (
        <div className="mt-10 space-y-6">
          <h2 className="text-3xl font-bold">
            {roadmap.career} Roadmap
          </h2>

          {roadmap.phases.map((phase, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4">
                {phase.title}
              </h3>

              {/* SKILLS */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">
                  Skills to Learn
                </h4>

                <ul className="list-disc ml-6">
                  {phase.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* TOOLS */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">
                  Suggested Tools
                </h4>

                <ul className="list-disc ml-6">
                  {phase.tools.map((tool, idx) => (
                    <li key={idx}>{tool}</li>
                  ))}
                </ul>
              </div>

              {/* MILESTONE */}
              <div>
                <h4 className="font-semibold mb-2">
                  Milestone
                </h4>

                <p>{phase.milestone}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}