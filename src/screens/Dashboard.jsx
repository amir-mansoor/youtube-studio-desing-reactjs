import thumbnail from "../assets/thumbnail.jpg";

const Dashboard = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-5">Channel Dashboard</h1>

      {/* Card Container */}
      <div className="flex space-x-5">
        {/* Latest Video Performance Card */}
        <div className="border border-gray-500 rounded-2xl py-10 px-4 w-[30%]">
          <h2 className="text-xl font-semibold mb-2">
            Latest Video Performance
          </h2>

          <div className="relative">
            {/* Thumbnail Image */}
            <img
              src={thumbnail}
              alt="thumbnail"
              className="rounded-lg w-full"
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg"></div>

            {/* Video Title on Thumbnail */}
            <h3 className="absolute bottom-2 left-4 text-white px-2 py-1 text-sm font-semibold">
              Just Two Minutes Of Your Life
            </h3>
          </div>
          {/* Video Stats */}
          <div className="mt-3 text-gray-300 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Views</span>
              <span className="font-semibold">10.5K</span>
            </div>
            <div className="flex justify-between">
              <span>Avg Percentage Viewed</span>
              <span className="font-semibold">45%</span>
            </div>
            <div className="flex justify-between">
              <span>Likes</span>
              <span className="font-semibold">1.2K</span>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-start gap-3 w-fit">
            <button className="text-white p-2 rounded-full border cursor-pointer backdrop-brightness-125">
              Go to video analytics
            </button>
            <button className="text-white p-2 rounded-full border cursor-pointer backdrop-brightness-125">
              See Comments (1.5k)
            </button>
          </div>
        </div>

        {/* Channel Analytics Card */}
        <div className="border border-gray-500 rounded-2xl p-4 w-[30%] ">
          <h2 className="text-xl font-semibold mb-2">Channel Analytics</h2>

          {/* Current Subscribers */}
          <p className="text-3xl font-bold text-white">12.3K</p>
          <p className="text-gray-400 text-sm">Current Subscribers</p>

          {/* Divider Line */}
          <div className="border-t border-gray-600 my-3"></div>

          {/* Summary (Last 28 Days) */}
          <h3 className="text-lg font-semibold">Last 28 Days</h3>
          <p>
            <strong>Views:</strong> 50.2K
          </p>
          <p>
            <strong>Watch Time:</strong> 1200 hours
          </p>
          <p>
            <strong>Top Videos:</strong> "Just Two Minutes Of Your Life"
          </p>

          {/* Channel Analytics Button */}
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">
            Channel Analytics
          </button>
        </div>

        {/* Ideas for You Card */}
        <div className="border border-gray-500 rounded-2xl p-4 w-[30%] bg-[#161616]">
          <h2 className="text-xl font-semibold mb-2">Ideas for You</h2>

          {/* Idea Title */}
          <h3 className="text-lg font-semibold text-white">
            "How to Increase Engagement"
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mt-2">
            Learn the best strategies to increase engagement on your videos and
            grow your channel effectively.
          </p>

          {/* Get Started Button */}
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
