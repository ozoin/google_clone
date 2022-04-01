import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const SearchInputVal = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = SearchInputVal.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  const blogPush = (e) => {
    e.preventDefault();
    router.push("/blog");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 text-md text-gray-700 justify-between">
        <div className="flex space-x-5 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-5 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-100" />
          <Avatar
            url={
              "http://sun9-39.userapi.com/s/v1/ig2/8aqATIMGN_0ucbrpPT2w9-Od9s4_R-28vuF1rs263b_AnT8lBidXi9Tp1qazfob7TONkocJPt4t4cK1Z6ZOpdx3e.jpg?size=200x0&quality=96&crop=35,35,1002,1009&ava=1"
            }
          />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={100}
          width={300}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-6 mr-3 cursor-pointer text-gray-500" />
          <input
            ref={SearchInputVal}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className=" h-6 text-gray-500 cursor-pointer" />
        </div>

        <div className="flex mt-4 flex-col w-1/2 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            Random
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
