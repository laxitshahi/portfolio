import type { NextPage } from "next";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center text-3xl"></div>
      {/* Profile picture badge */}
      <div className="grid min-h-screen m-auto text-center place-items-center align-center">
        <div className="border-b-8 border-black rounded-full ">
          <Image
            className="w-full rounded-full "
            width={300}
            height={300}
            src="/images/profile.jpeg"
            alt="Picture of a young adult male"
          />
        </div>
        <h2 className="flex justify-center text-5xl">
          Hello, my name is Laxit!
        </h2>
      </div>
    </div>
  );
};

export default Home;
