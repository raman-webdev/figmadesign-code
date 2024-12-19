import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const Fourhero = () => {
  return (
    <>
      <div className="p-14">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-blue-400">MENGENAL DESTINIZE</h4>
            <h1 className="font-bold text-3xl">
              🖼. Galeri Pariwisata & Blog Travel
            </h1>
          </div>
          <div className="text-blue-400 flex gap-2 ">
            <span>Lihat semua </span>
            <FaAngleRight className="mt-1" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2">
          <div>
            <div>
              <Image
                src="/Assets/cover1.png"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                className="w-auto h-auto"
                alt="Picture of the author"
              />
            </div>
            <div>
              <p className="text-gray-500 mt-4">26 DECEMBER 2021</p>
              <h3 className="font-semibold mt-2">Tips naik gunung Bromo <br /> 
Biar gak capek cyin😥😛</h3>
              <p className="mt-2">Jadi gini gann, anda tau bromo? <br />
yaaa gunung kann!</p>
              <p className="mt-2 text-blue-400">Baca selengkapnya.</p>
            </div>
          </div>
          <div>
          <Image
      src="/Assets/cover2.png"
      width={500}
      height={500}
      style={{objectFit:"contain"}}
      alt="Picture of the author"
    />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourhero;
