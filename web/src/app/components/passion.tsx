export default function Passion() {
    return (
        <div className="bg-[#1F274D] min-h-screen text-white flex flex-col">
            {/* Main Content */}
            <div className="flex">
                {/* Left Column */}
                <div className="w-1/2 grid grid-cols-2 gap-3 p-7 color text-black">
                <div className="bg-white rounded-md">
            <img 
              src="/images/project1.jpg" 
              alt="project1"
              className="w-full h-full object-cover rounded-md"
            />
            </div>
                <div className="bg-white h-38 rounded-md">
            <img 
              src="/images/teamphoto.jpg" 
              alt="teamphoto"
              className="w-full h-full object-cover rounded-md"
            />
            </div>
                <div className="bg-white h-38 rounded-md ">
            <img 
              src="/images/project2.jpg" 
              alt="project2"
              className="w-full h-full object-cover rounded-md"
            />
            </div>
                <div className="bg-white h-33 rounded-md ">
            <img 
              src="/images/project3.jpg" 
              alt="project3"
              className="w-full h-full object-cover rounded-md"
            />
                </div>
            </div>

                <div className="w-1/2 p-10 text-left">
                    <h2 className="text-white text-2xl">
                        Lehigh Entrepreneurship Club
                    </h2>
                    <h2 className="text-[#FA9B3B] text-4xl font-bold mt-2">
                        Turning Passion into Purpose
                    </h2>
                    <p className="mt-4 text-lg">
                        The Lehigh Entrepreneurship Club is a thriving community of passionate
                        students, alumni, and aspiring entrepreneurs. Whether you’re an aspiring
                        founder, an innovator, or simply excited about the startup world, we offer
                        the resources, support, and network to help turn your ideas into impactful
                        ventures.
                    </p>
                    <p className="mt-4 text-lg">
                        We are committed to building and sustaining a dynamic entrepreneurial
                        ecosystem at Lehigh. Through a variety of events, hands-on workshops,
                        mentorship programs, and networking opportunities, we empower students to
                        explore entrepreneurship, learn from experienced industry leaders, and
                        connect with fellow innovators.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="flex justify-between w-[50%] mx-auto mt-9">
                <div>
                <p className="text-white mt-1">Founded</p>
                    <h3 className="text-[#FA9B3B] text-2xl font-bold">2024</h3>
                </div>
                <div>
                <p className="text-white mt-1">Members</p>
                    <h3 className="text-[#FA9B3B] text-2xl font-bold">100+</h3>
                
                </div>
                <div>
                <p className="text-white mt-1">Events</p>
                    <h3 className="text-[#FA9B3B] text-2xl font-bold">20+</h3>
                    
                </div>
                <div>
                <p className="text-white mt-1">Founders</p>
                    <h3 className="text-[#FA9B3B] text-2xl font-bold">50+</h3>
                    
                </div>
            </div>
        </div>
    );
}
