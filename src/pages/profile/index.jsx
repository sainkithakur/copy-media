import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";

const Profile = () => {
  return (
    <div>
      <div className="p-6  border-b-2 gap-5 sm:gap-12 md:gap-16 sm:p-12 dark:bg-white dark:text-gray-100 ">
        <div className="flex ml-24 flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row mt-10">
          <img
            src="https://source.unsplash.com/75x75/?portrait"
            alt=""
            className="bg-pink-500 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full p-1"
          />
          <div className="flex flex-col  ">
            <div className=" flex">
              <h1 className="font-medium text-2xl capitalize md:text-3xl ml-20 text-black ">
                Leroy Jenkins
              </h1>
              <div className="ml-24">
                <button
                  type="button"
                  className="px-1 py-1 font-semibold rounded  text-white btn ">
                  Edit Profile
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="px-1 py-1  font-semibold rounded  text-white btn ">
                  View Archive
                </button>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="text-black h-10 w-20 font-size">
                <AiTwotoneSetting />
              </div>
            </div>

            <b>
              <p className="dark:text-gray-600  ml-20">Full-stack developer</p>
            </b>
            <div className="flex text-black mt-1 font-semibold">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p>12 Posts</p>
              &nbsp;&nbsp;&nbsp;
              <p>12 Followers</p>&nbsp;&nbsp;&nbsp;
              <p>12 Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
