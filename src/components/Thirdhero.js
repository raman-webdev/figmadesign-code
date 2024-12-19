import React from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { LiaAngleRightSolid } from "react-icons/lia";
import Image from "next/image";

const Thirdhero = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="p-16 ml-4">
          <h3 className="text-blue-400 font-semibold">DESTINATI FAVORIT</h3>
          <br />
          <h1 className="inline-flex font-bold text-2xl">
            <MdFlightTakeoff className="w-6 h-6 " />. TEMUKAN DESTINASI
            FAVORITMU
          </h1>
        </div>
        <div className="text-blue-400 gap-2 flex items-center">
          Lihat Simua <LiaAngleRightSolid className="mt-1" />
        </div>
      </div>

      <div className="p-2 flex justify-evenly">
        <div className="relative">
          <Image
            src="/Assets/img1.png"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="w-auto h-auto"
            alt="Picture of the author"
          />
          <div className="absolute bottom-0 p-0.5 backdrop-blur-sm bg-white/30 rounded-tr-md w-28 h-12 text-start">
          <span className="font-semibold">Raja Ampat</span> <br />
            Bali
          </div>
        </div>
        <div className="relative">
          <Image
            src="/Assets/img2.png"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="w-auto h-auto"
            alt="Picture of the author"
          />
          <div className="absolute bottom-0 p-0.5 backdrop-blur-sm bg-white/30 rounded-tr-md w-28 h-12 text-start"> <span className="font-semibold">Labuan Bajo</span> <br />NTT</div>
        </div>
        <div className="relative ">
          <Image
            src="/Assets/img3.png"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="w-auto h-auto"
            alt="Picture of the author"
          />
          <div className="absolute bottom-0 p-0.5 backdrop-blur-sm  bg-white/30 rounded-tr-md w-28 h-12 text-start"><span className="font-semibold">Kawah Ijen</span> <br /> Jawa Timur</div>
        </div>
        <div className="relative">
          <Image
            src="/Assets/img4.png"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="w-auto h-auto"
            alt="Picture of the author"
          />
          <div className="absolute bottom-0 p-0.5 backdrop-blur-sm  bg-white/30 rounded-tr-md w-28 h-12 text-start"><span className="font-semibold">Bromo</span> <br />Jawa Timur</div>
        </div>
      </div>
    </>
  );
};

export default Thirdhero;
