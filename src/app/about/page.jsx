import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="mb-12 ">
      <section className="flex flex-col">
        <div className="p-16 bg-blue-500">
          <h3 className="lg:text-3xl text-lg text-white text-center">
            About Us
          </h3>
        </div>

        <div className="flex flex-col mb-8">
          <div className="text-blue-500 text-4xl text-center p-4 space-y-4">
            <h3>Service</h3>
          </div>
          <div className="lg:text-5xl text-2xl text-blue-950 text-center">
            How Can We Help You?
          </div>
          <div className="lg:px-14 px-6 lg:text-center text-justify">
            <p>
              Herns Medical has been in business for a little over a decade and
              has successful supplies over 100 medical equipments to various
              hospitals and medical centers around the world, both within and
              outside the States, we pride ourselves on offering the finest
              hospital equipment, featuring cutting-edge technology and
              exceptional durability. We collaborate closely with top
              manufacturers to ensure our products meet the highest standards of
              quality and performance. Our comprehensive range includes all
              types of medical appliances, providing healthcare professionals
              with the tools they need to deliver exceptional patient care. With
              a focus on seamless integration and long-lasting reliability,
              we&apos;re dedicated to helping medical facilities achieve optimal
              results.
            </p>
          </div>
        </div>

        <section className="flex justify-center items-center p-4 h-fit">
        <div className="lg:w-3/4 w-full h-4/5 flex lg:flex-row flex-col rounded-md shadow-lg">
          <div className="lg:w-2/5 w-full p-4 flex flex-col justify-center items-center">
            <div className="py-4">
              <p className="text-center text-blue-800 text-xl font-bold">Message from the CEO</p>
            </div>
            <div className="p-4">
              <p
              className="text-jutify text-blue-500 text-sm font-normal"
              >
                We provide top-quality medical equipment to enhance patient care
                and support healthcare professionals. Trust us for innovative
                and reliable solutions.
              </p>
            </div>
            <Link href="/contact" className=" p-4">
              <button className="px-10 bg-blue-600 py-3 text-white rounded-md hover:bg-blue-200 hover:text-blue-900 text-lg lg:block md:block hidden">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="lg:w-3/5 w-full h-full">
            <div>
              <Image
                src="/assets/ceo.jpeg"
                alt="ceo"
                width={500}
                height={50}
                className=" h-96 w-full rounded-md"
              />
             </div>
          </div>
        </div>
      </section>
      <section className="py-12  bg-[#e6f7f7]">
        <div className="lg:px-14 px-6 text-center">
          <h3 className="text-blue-500 text-4xl p-4 space-y-4">
            Our Delivery Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "New York City, New York",
              "Grand Canyon, Arizona",
              "Yellowstone National Park, Wyoming, Montana, Idaho",
              "San Francisco, California",
              "Washington, D.C.",
              "Las Vegas, Nevada",
              "Hawaii",
              "New Orleans, Louisiana",
              "Yosemite National Park, California",
              "Miami, Florida",
              "Glacier National Park, Montana",
              "Chicago, Illinois",
              "Niagara Falls, New York",
              "Yellowstone National Park, Wyoming",
              "Acadia National Park, Maine",
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
              >
                <FaMapMarkerAlt className="text-[#3b6cf2] text-2xl" />
                <p className="text-gray-800 text-lg">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}
