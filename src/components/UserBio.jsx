import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaUsers  } from "react-icons/fa6";
import { SlUserFollowing } from "react-icons/sl";

function UserBio({ userData }) {
  return (
<main className="border-white bg-main_bg shadow-md border-b-[1px] border-opacity-25">
          <div className="">
            <div className="mx-auto py-8 container">
              <div className="flex md:flex-row lg:flex-row flex-col sm:flex-col items-center gap-5 ml-5">
                <div className="flex-shrink-0">
                  <img
                    src={userData.avatar_url}
                    alt="userData.name"
                    className="rounded-full w-60 h-60 img"
                  />
                </div>
                <div className="gap-5 ml-4">
                  <h2 className="font-semibold text-white text-xl name">
                    {userData.name}
                  </h2>
                  <p className="text-gray-500">{userData.login}</p>
                  <p className="mt-2 text-gray-300 bio">{userData.bio}</p>
                  <p className="mt-1 text-gray-300">
                    <div className="flex justify-start items-center gap-2">

                  <FaLocationDot/>
                    {userData.location}
                    </div>
                  </p>
                  <p className="mt-1 text-gray-300">
                    public repositories: {userData.public_repos}
                  </p>
                  <p className="mt-1 text-gray-300">
                    public gists: {userData.public_gists}
                  </p>
                  <p className="mt-1 text-gray-300">
                    Profile created at:{" "}
                    {new Date(userData.created_at).toISOString().split("T")[0]}
                  </p>
                  <div className="flex justify-start items-center socialContainer">
                    <a
                      href={`https://twitter.com/${userData.twitter_username}`}
                      className="flex items-center gap-2 mt-2 mr-2 text-blue-300 hover:underline"
                    >
                      <FaXTwitter className="text-white" />
                      Twitter
                    </a>

                    <a
                      href={userData.html_url}
                      className="flex items-center gap-2 mt-2 mr-2 text-blue-300 hover:underline"
                    >
                      <FaGithub className="text-white" />
                      Github
                    </a>
                  </div>
                  <div className="flex justify-start items-center gap-2 text-white">
                    <span className="flex justify-start items-center gap-2"><FaUsers  /> {userData.followers} followers </span>
                    <span className="flex justify-start items-center gap-2"> <SlUserFollowing/> {userData.following} following</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>  )
}

export default UserBio