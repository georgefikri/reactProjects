import Head from 'next/head';
import { Inter } from '@next/font/google';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import devEd from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="h-screen min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">developedbyGeorge</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white py-2 px-3 rounded-md ml-8  "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              George Emad
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Front End Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod,
              voluptas, quia, voluptates quae voluptatibus quibusdam
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image src={devEd} fill style={{ objectFit: 'cover' }} />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500"> startups </span> and
              collaborated with talented people to create digital products for both
              business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
            </p>
          </div>
          <div className="lg:flex gap-10">
            {/*  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={design}
                width={100}
                height={100}
                alt="design"
                className=" inline"
              />
              <h3 className="text-lg font-me pt-8 pb-2">Designs</h3>
              <p className="py-2">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            {/*  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="consulting"
                className=" inline"
              />
              <h3 className="text-lg font-me pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            {/*  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} alt="code" className=" inline" />
              <h3 className="text-lg font-me pt-8 pb-2">Code</h3>
              <p className="py-2">
                code is a set of instructions that tell a computer how to perform a
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500"> startups </span> and
              collaborated with talented people to create digital products for both
              business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                alt="portfolio"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                alt="portfolio"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                alt="portfolio"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                alt="portfolio"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                alt="portfolio"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                alt="portfolio"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
