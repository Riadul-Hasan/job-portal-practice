import React from "react";
import { useParams } from "react-router";
import useAuth from "../hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(id, user);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedin, github, resume);

    const application = {
      id,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Application submitted success",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3 className="text-5xl text-center py-10">Apply Job for: </h3>

      <form onSubmit={handleFormSubmit} className="flex justify-center py-10">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Id</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="linkedin url"
          />

          <label className="label">GitHub Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Your github link"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume link"
          />
          <input type="submit" className="btn btn-primary" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
