import React from "react";
import useAuth from "../hook/useAuth";

const AddJob = () => {
  const {user} = useAuth()
  const handleAddJob = (e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    // console.log(data)

    // process salary range as make it object
    const {min, max, currency, ...newJob} = data;
    console.log(newJob)
    newJob.salaryRange = {
      min, max, currency
    }

    // process requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map(req => req.trim())
    newJob.requirements = requirementsClean

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities.split(",").map(res => res.trim())
    console.log(newJob)
  }
  return (
    <div className="flex justify-center ">
      <form onSubmit={handleAddJob} className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input"
            name="company"
            placeholder="Company name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            placeholder="Company Location"
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="On site"
              value="onSite"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="hybrid"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Next.js"
            />
          </div>
        </fieldset>
        {/* Job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job category"
            name="category"
            className="select"
          >
            <option disabled={true}>Select Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" className="input" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                className="input"
                name="min"
                placeholder="Min salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input"
                name="max"
                placeholder="Max salary"
              />
            </div>
            <div>
              <label className="label">Currency</label>

              <select
                defaultValue="Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Salary Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EURO</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Description</legend>
          <textarea className="textarea" name="description" placeholder="Job description"></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Requirements</legend>
          <textarea className="textarea" name="requirements" placeholder="Requirements separated by comma"></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Responsibilities</legend>
          <textarea className="textarea" name="responsibilities" placeholder="Responsibilities separated by comma"></textarea>
        </fieldset>



      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">HR Related info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input"
            name="hrName"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            defaultValue={user.email}
            className="input"
            name="hrEmail"
            placeholder="HR Email"
          />

          <input type="submit" className="btn btn-secondary" value="Submit Information" />
        </fieldset>









      </form>
    </div>
  );
};

export default AddJob;
