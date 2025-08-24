export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center px-6 py-8 ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white text-black rounded-lg shadow-lg p-8 mt-20">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">CONTACT US</h1>

          <div className="flex items-start gap-4">
            <span className="text-yellow-400 text-2xl">📞</span>
            <div>
              <h2 className="font-semibold">Call</h2>
              <p>+94 11 200 300, +94 11 200 400</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-yellow-400 text-2xl">📍</span>
            <div>
              <h2 className="font-semibold">Location</h2>
              <p>No. 18, Galle Road, Colombo, Sri Lanka.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-yellow-400 text-2xl">⏰</span>
            <div>
              <h2 className="font-semibold">Working Hours</h2>
              <p>Monday to Friday - 10 AM to 8 PM</p>
              <p>Weekends & Poya Days - Closed</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="space-y-4 bg-gray-800 p-6 rounded-lg text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter a Valid Email Address"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div>
              <label className="text-sm">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="text-sm">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea
              placeholder="Type Your Message"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 h-24"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition rounded-lg border-2"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}