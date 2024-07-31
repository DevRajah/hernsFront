"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaBrain, FaAward, FaStethoscope } from "react-icons/fa";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const items = [
  {
    icon: <FaHeart />,
    title: "Cardiac Care",
    description: "All-inclusive heart health services.",
  },
  {
    icon: <FaBrain />,
    title: "Mental Wellness",
    description: "Comprehensive mental health support.",
  },
  {
    icon: <FaAward />,
    title: "Premium Service",
    description: "Top-notch patient care and services.",
  },
  {
    icon: <FaStethoscope />,
    title: "Medical Equipment",
    description: "Superior quality hospital equipment available.",
  },
];

const Products = [
  {
    id: 1,
    name: "Portable X-ray Machines",
    description:
      "State-of-the-art portable X-ray machines for accurate diagnostics on the go.",
    imageUrl: "/assets/x-ray.jpg",
  },
  {
    id: 2,
    name: "Microscopes",
    description:
      "High-resolution microscopes for precise and detailed examination.",
    imageUrl: "/assets/microscopes.jpeg",
  },
  {
    id: 3,
    name: "Ultrasound Machines",
    description: "Advanced ultrasound machines for clear and accurate imaging.",
    imageUrl: "/assets/ultra-scan.jpeg",
  },
  {
    id: 4,
    name: "MRI Scanners",
    description:
      "High-performance MRI scanners for detailed and accurate scans.",
    imageUrl: "/assets/mri-scaner.jpg",
  },
  {
    id: 5,
    name: "CT Scanners",
    description: "Cutting-edge CT scanners for fast and accurate imaging.",
    imageUrl: "/assets/ct-scaner.webp",
  },
  {
    id: 6,
    name: "Patient Monitors",
    description:
      "Reliable patient monitors for continuous vital signs tracking.",
    imageUrl: "/assets/p-m.jpeg",
  },
  {
    id: 7,
    name: "ECG Machines",
    description: "High-precision ECG machines for accurate heart monitoring.",
    imageUrl: "/assets/ECG-v.webp",
  },
  {
    id: 8,
    name: "Defibrillators",
    description: "Top-quality defibrillators for emergency cardiac care.",
    imageUrl: "/assets/Defibrillators.jpeg",
  },
  {
    id: 9,
    name: "Ventilators",
    description: "Advanced ventilators for critical respiratory support.",
    imageUrl: "/assets/Ventilators.jpg",
  },
  {
    id: 10,
    name: "Infusion Pumps",
    description: "Reliable infusion pumps for precise medication delivery.",
    imageUrl: "/assets/Infusion-Pumps.jpg",
  },
  {
    id: 11,
    name: "Anesthesia Machines",
    description:
      "State-of-the-art anesthesia machines for safe and effective anesthesia delivery.",
    imageUrl: "/assets/a-m.jpeg",
  },
  {
    id: 12,
    name: "Surgical Instruments",
    description:
      "High-quality surgical instruments for precise surgical procedures.",
    imageUrl: "/assets/Surgical-Instruments.webp",
  },
  {
    id: 13,
    name: "Dialysis Machines",
    description: "Advanced dialysis machines for effective renal care.",
    imageUrl: "/assets/Dialysis-Machines.jpg",
  },
  {
    id: 14,
    name: "Oxygen Concentrators",
    description:
      "Reliable oxygen concentrators for supplemental oxygen therapy.",
    imageUrl: "/assets/Oxygen-Concentrators.jpeg",
  },
  {
    id: 15,
    name: "Syringe Pumps",
    description: "High-precision syringe pumps for accurate drug delivery.",
    imageUrl: "/assets/Syringe-Pumps.webp",
  },
  {
    id: 16,
    name: "Patient Warmers",
    description: "Efficient patient warmers for maintaining body temperature.",
    imageUrl: "/assets/Patient-Warmers.jpeg",
  },
  {
    id: 17,
    name: "Nebulizers",
    description: "Effective nebulizers for respiratory treatment.",
    imageUrl: "/assets/download.jpeg",
  },
  {
    id: 18,
    name: "Blood Pressure Monitors",
    description: "Accurate blood pressure monitors for precise measurement.",
    imageUrl: "/assets/BloodPressureMonitors.jpeg",
  },
  {
    id: 19,
    name: "Thermometers",
    description: "Reliable thermometers for accurate temperature measurement.",
    imageUrl: "/assets/Thermometers.jpeg",
  },
  {
    id: 20,
    name: "Glucometers",
    description: "High-precision glucometers for blood glucose monitoring.",
    imageUrl: "/assets/Glucometers.jpeg",
  },
  {
    id: 21,
    name: "Pulse Oximeters",
    description: "Reliable pulse oximeters for oxygen saturation monitoring.",
    imageUrl: "/assets/Pulse-Oximeters.jpeg",
  },
  {
    id: 22,
    name: "Stethoscopes",
    description: "High-quality stethoscopes for accurate auscultation.",
    imageUrl: "/assets/Stethoscopes.jpeg",
  },
  {
    id: 23,
    name: "Medical Lights",
    description:
      "Efficient medical lights for surgical and diagnostic procedures.",
    imageUrl: "/assets/Medical-Lightss.jpeg",
  },
  {
    id: 24,
    name: "Sterilizers",
    description: "Advanced sterilizers for effective infection control.",
    imageUrl: "/assets/Sterilizers.jpeg",
  },
  {
    id: 25,
    name: "Dental Equipment",
    description: "Comprehensive dental equipment for professional dental care.",
    imageUrl: "/assets/Dental-Equipment.jpeg",
  },
  {
    id: 26,
    name: "Medical Furniture",
    description: "Durable medical furniture for healthcare settings.",
    imageUrl: "/assets/Medical-Furniture.jpeg",
  },
  {
    id: 27,
    name: "Medical Cabinets",
    description: "Efficient medical cabinets for organized storage.",
    imageUrl: "/assets/Medical-Cabinets.jpeg",
  },
  {
    id: 28,
    name: "Medical Carts",
    description: "Versatile medical carts for easy transportation.",
    imageUrl: "/assets/Medical-Carts.jpeg",
  },
  {
    id: 29,
    name: "Hospital Beds",
    description: "Comfortable hospital beds for patient care.",
    imageUrl: "/assets/hospital-bed.jpg",
  },
  {
    id: 30,
    name: "Wheelchairs",
    description: "Durable wheelchairs for patient mobility.",
    imageUrl: "/assets/wheelchair.webp",
  },
  {
    id: 31,
    name: "Stretchers",
    description: "Reliable stretchers for patient transport.",
    imageUrl: "/assets/Stretchers.jpeg",
  },
  {
    id: 32,
    name: "Medical Scales",
    description: "Accurate medical scales for weight measurement.",
    imageUrl: "/assets/Medical-Scales.jpeg",
  },
  {
    id: 33,
    name: "Medical Refrigerators",
    description: "Efficient medical refrigerators for safe storage.",
    imageUrl: "/assets/Medical-Refrigerators.jpeg",
  },
  {
    id: 34,
    name: "Medical Freezers",
    description: "Reliable medical freezers for temperature-sensitive storage.",
    imageUrl: "/assets/Medical-Freezers.jpeg",
  },
  {
    id: 35,
    name: "IV Stands",
    description: "Sturdy IV stands for intravenous therapy.",
    imageUrl: "/assets/ivstands.jpg",
  },
  {
    id: 36,
    name: "Medical Trolleys",
    description: "Versatile medical trolleys for efficient workflow.",
    imageUrl: "/assets/Medical-Trolleys.jpeg",
  },
  {
    id: 37,
    name: "Surgical Tables",
    description: "High-quality surgical tables for operative procedures.",
    imageUrl: "/assets/Surgical-Tables.jpg",
  },
  {
    id: 38,
    name: "Examination Tables",
    description: "Comfortable examination tables for patient assessment.",
    imageUrl: "/assets/Examination-Tables.jpeg",
  },
  {
    id: 39,
    name: "Medical Lights",
    description: "Advanced medical lights for diagnostic clarity.",
    imageUrl: "/assets/Medical-Lights.jpeg",
  },
  {
    id: 40,
    name: "Autoclaves",
    description: "High-performance autoclaves for sterilization.",
    imageUrl: "/assets/Autoclaves.jpeg",
  },
  {
    id: 41,
    name: "Medical Waste Bins",
    description: "Safe disposal of medical waste with reliable bins.",
    imageUrl: "/assets/Medical-Bins.jpeg",
  },
  {
    id: 42,
    name: "Diagnostic Kits",
    description: "Comprehensive diagnostic kits for accurate testing.",
    imageUrl: "/assets/Diagnostic-Kit.jpeg",
  },
  {
    id: 43,
    name: "Medical Masks",
    description: "High-quality medical masks for protection.",
    imageUrl: "/assets/surgiical-mask.jpg",
  },
  {
    id: 44,
    name: "Surgical Gloves",
    description: "Sterile surgical gloves for safe procedures.",
    imageUrl: "/assets/Surgical-Gloves.jpeg",
  },
  {
    id: 45,
    name: "Medical Gowns",
    description: "Protective medical gowns for hygiene.",
    imageUrl: "/assets/surgical-gown.jpg",
  },
  {
    id: 46,
    name: "Medical Drapes",
    description: "Sterile medical drapes for operative fields.",
    imageUrl: "/assets/Medical-Drapes.jpeg",
  },
  {
    id: 47,
    name: "Medical Bandages",
    description: "High-quality medical bandages for wound care.",
    imageUrl: "/assets/Medical-Bandages.jpeg",
  },
  {
    id: 48,
    name: "Medical Tape",
    description: "Reliable medical tape for secure bandaging.",
    imageUrl: "/assets/Medical-Tapes.jpeg",
  },
  {
    id: 49,
    name: "Medical Gauze",
    description: "Sterile medical gauze for wound dressing.",
    imageUrl: "/assets/Medical-Gauze.jpeg",
  },
  {
    id: 50,
    name: "First Aid Kits",
    description: "Comprehensive first aid kits for emergency care.",
    imageUrl: "/assets/FirstAidKits.jpeg",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mb-14">
      <div className="lg:h-[70vh] h-[140vh] w-full flex flex-col lg:flex-row overflow-hidden bg-[#0064f7]">
        <motion.div
          className="h-full w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-8 py-12 lg:py-8 lg:h-3/4 flex flex-col justify-between rounded-lg text-white w-full max-w-lg lg:max-w-none">
            <div className="lg:text-5xl text-2xl lg:text-left text-center font-extrabold mb-6 lg:mb-4 tracking-wide">
              <h2>Hern Medical: Delivering Quality Equipment</h2>
            </div>
            <ul className="space-y-4 list-disc px-4 text-base lg:text-lg">
              <li className="pl-2 leading-relaxed">
                Innovative health machines for medical treatments.
              </li>
              <li className="pl-2 leading-relaxed">
                Advanced technology for personalized care.
              </li>
              <li className="pl-2 leading-relaxed">
                Cutting-edge health monitoring devices and treatments.
              </li>
              <li className="pl-2 leading-relaxed">
              our equipments will govern exceptional care and good health solutions
              </li>
            </ul>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-8 lg:mt-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="py-4 px-10 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/product" className="text-white font-semibold">
                  View Products
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="py-4 px-10 rounded-md bg-gradient-to-r from-white to-[#717273] text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/contact" className="text-blue-700 font-semibold">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="h-full w-full lg:w-1/2 "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            loader={myLoader}
            src="/assets/hero.png"
            alt="Medical Equipment"
            width={10}
            height={10}
            className="rounded-lg object-fit w-full h-full"
            quality={100}
          />
        </motion.div>
      </div>
      <section className="min-h-[50vh] w-11/12 rounded-md py-6 bg-[#3c88fb] my-8 mx-auto">
        <motion.div
          className="h-full w-full flex flex-col items-center justify-center p-4 lg:p-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="lg:text-3xl text-lg text-white text-center">
            Why Choose <span className="text-blue-900">Herns Medical, Inc.</span>
            for Medical Equipment?
          </h1>
          <p className="text-white lg:text-xl text-xs text-justify lg:text-center lg:p-8">
            Discover the difference our hospital&apos;s medical equipment can
            make in your healthcare experience. We offer a wide range of
            high-quality hospital&apos;s equipment designed to meet the needs of
            both medical professionals and patients. From state-of-the-art
            diagnostic tools to essential surgical instruments, our products are
            sourced from trusted manufacturers and rigorously tested for
            reliability and safety. Our knowledgeable staff is here to assist
            you in selecting the right equipment for your specific requirements,
            ensuring you receive the best value and performance. Trust our
            hospital for top-tier medical equipment that enhances patient care
            and supports your practice.
          </p>

          <Link href="/product">
            <button className="px-10 bg-white lg:py-3 py-2 text-blue-900 rounded-md hover:bg-blue-200 text-lg lg:block md:block mx-auto">
              View Products
            </button>
          </Link>
        </motion.div>
      </section>
      <div className="h-[100vh] w-full flex justify-center items-center">
        <section className="h-4/5 w-4/6 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-4 p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="lg:p-8 p-4 rounded shadow h-fit flex flex-col lg:gap-6 gap-2 bg-white hover:bg-blue-200 cursor-pointer transition-all duration-300"
            >
              <div className="lg:text-7xl text-xl text-[#3c88fb] transition-all duration-300">
                {item.icon}
              </div>
              <div className="transition-all duration-300">
                <h3 className="text-lg font-bold text-[#3c88fb]">
                  {item.title}
                </h3>
                <p className="text-[#3c88fb] ">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className="worker my-8 flex flex-col">
        <div className="Service-titlewhat p-4">
          <h3 className="lg:text-3xl text-lg text-blue-500 text-center">
            Products
          </h3>
        </div>
        <section className=" p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {Products.map((Product) => (
            <div
              className="max-w-sm bg-white border hover:border-blue-200 rounded-lg shadow dark:bg-blue-800 dark:border-blue-700"
              key={Product.id}
            >
              <>
                <Image
                  src={Product.imageUrl}
                  alt={Product.name}
                  className="rounded-md"
                  width={500}
                  height={500}
                />
              </>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                  {Product?.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-blue-700 dark:text-gray-400">
                {Product?.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
