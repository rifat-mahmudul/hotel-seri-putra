"use client";
import { HomeIcon } from "lucide-react";
import { useState } from "react";
import CheckInModal from "./modals/CheckInModal";

export default function Home() {
  const rooms = [
    // 1st floor
    { icon: HomeIcon, title: "101" },
    { icon: HomeIcon, title: "102" },
    { icon: HomeIcon, title: "103" },
    { icon: HomeIcon, title: "104" },
    { icon: HomeIcon, title: "105" },
    { icon: HomeIcon, title: "106" },
    { icon: HomeIcon, title: "107" },
    { icon: HomeIcon, title: "108" },
    { icon: HomeIcon, title: "109" },
    { icon: HomeIcon, title: "110" },
    { icon: HomeIcon, title: "111" },
    { icon: HomeIcon, title: "112" },
    { icon: HomeIcon, title: "113" },
    { icon: HomeIcon, title: "114" },
    { icon: HomeIcon, title: "115" },
    { icon: HomeIcon, title: "116" },
    { icon: HomeIcon, title: "117" },
    { icon: HomeIcon, title: "118" },

    // 2nd floor
    { icon: HomeIcon, title: "201" },
    { icon: HomeIcon, title: "202" },
    { icon: HomeIcon, title: "203" },
    { icon: HomeIcon, title: "204" },
    { icon: HomeIcon, title: "205" },
    { icon: HomeIcon, title: "206" },
    { icon: HomeIcon, title: "207" },
    { icon: HomeIcon, title: "208" },
    { icon: HomeIcon, title: "209" },
    { icon: HomeIcon, title: "210" },
    { icon: HomeIcon, title: "211" },
    { icon: HomeIcon, title: "212" },
    { icon: HomeIcon, title: "213" },
    { icon: HomeIcon, title: "214" },
    { icon: HomeIcon, title: "215" },
    { icon: HomeIcon, title: "216" },
    { icon: HomeIcon, title: "217" },
    { icon: HomeIcon, title: "218" },

    // 3rd floor
    { icon: HomeIcon, title: "301" },
    { icon: HomeIcon, title: "302" },
    { icon: HomeIcon, title: "303" },
    { icon: HomeIcon, title: "304" },
    { icon: HomeIcon, title: "305" },
    { icon: HomeIcon, title: "306" },
    { icon: HomeIcon, title: "307" },
    { icon: HomeIcon, title: "308" },
    { icon: HomeIcon, title: "309" },
    { icon: HomeIcon, title: "310" },
    { icon: HomeIcon, title: "311" },
    { icon: HomeIcon, title: "312" },
    { icon: HomeIcon, title: "313" },
    { icon: HomeIcon, title: "314" },
    { icon: HomeIcon, title: "315" },
    { icon: HomeIcon, title: "316" },
    { icon: HomeIcon, title: "317" },
    { icon: HomeIcon, title: "318" },

    // 4th floor
    { icon: HomeIcon, title: "401" },
    { icon: HomeIcon, title: "402" },
    { icon: HomeIcon, title: "403" },
    { icon: HomeIcon, title: "404" },
    { icon: HomeIcon, title: "405" },
    { icon: HomeIcon, title: "406" },
    { icon: HomeIcon, title: "407" },
    { icon: HomeIcon, title: "408" },
    { icon: HomeIcon, title: "409" },
    { icon: HomeIcon, title: "410" },
    { icon: HomeIcon, title: "411" },
    { icon: HomeIcon, title: "412" },
    { icon: HomeIcon, title: "413" },
    { icon: HomeIcon, title: "414" },
    { icon: HomeIcon, title: "415" },
    { icon: HomeIcon, title: "416" },
    { icon: HomeIcon, title: "417" },
    { icon: HomeIcon, title: "418" },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#003780] uppercase">
          Room View
        </h1>
        <p className="mt-2 text-gray-600">Select Room From Here</p>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-12 gap-10">
        {rooms.map((room, index) => (
          <button
            onClick={handleModal}
            key={index}
            className="flex items-center gap-2 p-4 rounded-lg shadow-sm transition bg-gradient-to-tl from-[#808080] hover:to-[#003780] to-[white] hover:text-white flex-col w-24"
          >
            <span>{<room.icon />}</span>
            <span>{room.title}</span>
          </button>
        ))}
      </div>

      {isModalOpen && (
        <CheckInModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
