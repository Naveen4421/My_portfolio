import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">Contact Me</h1>

      <p className="mb-10 text-lg">
        Feel free to reach out for collaborations or opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-8 text-lg">
          <div>
            <FiMail size={30} />
            <p className="font-semibold mt-2">Email</p>
            <p>navi25231@gmail.com</p>
          </div>

          <div>
            <FaLinkedin size={30} />
            <p className="font-semibold mt-2">LinkedIn</p>
            <p>linkedi-Naveen S</p>
          </div>

          <div>
            <FaGithub size={30} />
            <p className="font-semibold mt-2">GitHub</p>
            <p>github-NAveen4421</p>
          </div>

          <div>
            <FaMapMarkerAlt size={30} />
            <p className="font-semibold mt-2">Location</p>
            <p>India</p>
          </div>
        </div>

        <div>
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
            <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
            <textarea rows={5} placeholder="Message" className="w-full border p-3 rounded" />
            <button className="w-full bg-black text-white py-3 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
