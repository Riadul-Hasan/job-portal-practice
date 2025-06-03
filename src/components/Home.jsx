import React, { Suspense } from "react";
import Banner from "./Banner";
import TopJobs from "./TopJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json()
  );
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={"Loading..."}>
        <TopJobs jobsPromise={jobsPromise}></TopJobs>
      </Suspense>
    </div>
  );
};

export default Home;
