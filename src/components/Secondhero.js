import React from "react";
import Image from "next/image";

const Secondhero = () => {
  return (
    <>
      <div className=" ml-20 -mt-14 flex gap-48">
        <Image
          src="/Assets/axon.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          className="w-auto h-24"
          alt="Picture of the author"
        />

        <Image
          src="/Assets/Jetstar.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          className="w-auto h-24"
          alt="Picture of the author"
        />

        <Image
          src="/Assets/Expedia.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          className="w-auto h-24 "
          alt="Picture of the author"
        />

        <Image
          src="/Assets/Qantas.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          className="w-24 h-24"
          alt="Picture of the author"
        />

        <Image
          src="/Assets/Litalia.png"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          className="w-24 h-24"
          alt="Picture of the author"
        />
      </div>
    </>
  );
};

export default Secondhero;
