"use client";
import Image from "next/image";

function loading() {
  return <div>
    <Image src={"/assets/images/loading.svg"} width={100} height={100} alt="loading" />
    <h2>Loading...</h2>
  </div>;
}

export default loading;
