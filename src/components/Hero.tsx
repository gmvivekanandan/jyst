import React, { useState } from "react";
import fetchTweet from "../api/fetchTweet";

const Hero = () => {
  const [tweets, setTweets] = useState({});

  const fetchData = async (event: any) => {
    event.preventDefault();
    const tweetId: number = event.target.tweetid.value;
    const limit: number = event.target.limit.value;
    const data = await fetchTweet({ tweetId, limit });
    setTweets(data);
  };

  const reset = () => {
    setTweets({});
  };

  if (Object.keys(tweets).length !== 0) {
    return (
      <div className="bg-green-400 h-screen flex flex-col justify-center items-center">
        <div className="h-96 w-96 overflow-y-auto bg-green-200 p-5 rounded-2xl">
          <h3 className="font-semibold text-lg">List</h3>
          <ul>
            {Object.entries(tweets).map((key, value) => {
              return (
                <li key={value}>
                  {key[0]} - {key[1]}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="mt-3 bg-red-500 font-bold text-white px-3 py-2 rounded-lg shadow-md"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-green-400 h-screen flex flex-col justify-center items-center">
        <div className="flex flex-row mb-4">
          <h1 className="font-bold text-4xl">Jy</h1>
          <h1 className="font-bold text-4xl text-red-500">st.</h1>
        </div>
        <form onSubmit={fetchData}>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="tweetid"
              id="tweetid"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-11 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Tweet Id"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                id="limit"
                name="limit"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              >
                <option>100</option>
                <option>10</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="mt-3 bg-red-500 font-bold text-white px-3 py-2 rounded-lg shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default Hero;
