"use client";
import Image from "next/image";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { CiGlobe, CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { TfiAngleDown } from "react-icons/tfi";

const Header = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex items-center border-b-2">
          <div className="p-6 ml-14 flex items-center gap-2">
            <Image
              src="/Assets/logo.png"
              width={500}
              height={500}
              className="h-10 w-10"
              style={{ objectFit: "cover" }}
              alt="Picture of the author"
            />

            <h3 className="font-semibold ">DESTINIZE</h3>
          </div>

          <div>
            <div className="w-[650px] h-10 border-2 rounded-2xl  border-b-lime-200 flex items-center gap-2 p-3">
              <CiSearch className="h-6 w-8" />
              <input type="text" placeholder="Search Here..."/>
            </div>
          </div>

          <div className="flex items-center p-8 gap-2">
            <CiGlobe className="h-8 w-10" />
            <h5>Bahasa Indonesia</h5>
            <GoTriangleDown className="h-8 w-8" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <CiLocationOn className="h-8 w-10" />
              <div>
                <h5>Lokasi</h5>
                <h2 className="font-bold text-blue-500">
                  Indonesia, Yoktakarta
                </h2>
              </div>
              <GoTriangleDown className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="p-3 ml-[70px] flex  w-full">
          <div className="flex w-full items-center justify-between ">
            <div>
              <ul className="flex items-center gap-6">
                <li>Gunung</li>
                <TfiAngleDown />
                <li>Pantai</li>
                <TfiAngleDown />
                <li>Kuliner</li>
                <TfiAngleDown />
                <li>Outbond</li>
                <TfiAngleDown />
                <li>Sejarah</li>
                <TfiAngleDown />
                <li>Edukasi</li>
                <TfiAngleDown />
                <li>Romantis</li>
                <TfiAngleDown />
                <li>Alam</li>

                <TfiAngleDown />
              </ul>
            </div>

            <div className="flex mr-[250px] gap-4">
              <div className=" bg-blue-400 h-16 w-16 flex items-center justify-center rounded-full">
                <BiSolidShoppingBagAlt className="w-6 h-6" />
              </div>
              <div className=" bg-blue-400 h-16 w-16 flex items-center justify-center rounded-full">
                <CiUser className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
