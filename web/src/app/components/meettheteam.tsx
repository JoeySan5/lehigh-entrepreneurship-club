export default function MeetTheTeam() {
    return (
      <div className="bg-gray-100">
        {/* Header Section */}
        <div className="bg-[#1F274D] text-white py-6">
          <div className="text-center">
            <h1 className="text-3xl font-[Poppins] font-bold">Meet our 24–25 Leadership</h1>
            <p className="text-xl mt-8 font-[Poppins]">
              Feel free to reach out to us on LinkedIn or via email for any questions or opportunities.
            </p>
          </div>
        </div>
  
        {/* Grid of Images */}
        <div className="grid grid-cols-3 gap-8 p-12 mt-5 mx-auto max-w-screen-md">
          <div className="w-full h-40 bg-gray-300 rounded-md">
            <img 
              src="/images/joseph.jpeg" 
              alt="joseph"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full h-40 bg-gray-300 rounded-md">
            <img 
              src="/images/simran.png" 
              alt="simran"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full h-40 bg-gray-300 rounded-md">
            <img 
              src="/images/keiran.jpg" 
              alt="Keiran"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full h-40 bg-gray-300 rounded-md">
            <img 
              src="/images/atang.jpg" 
              alt="Atang"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full h-40 bg-gray-300 rounded-md">
            <img 
              src="/images/eric.jpg" 
              alt="eric"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full h-40 bg-gray-300 rounded-md">
            <img 
              src="/images/aaron.jpg" 
              alt="aaron"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    );
  }
  