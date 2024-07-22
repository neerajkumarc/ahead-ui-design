"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollCard from "@/components/ScrollCard";
import { motion } from "framer-motion";
export default function Home() {
  return (<>
    <main className="p-4">
      <div className="md:px-20 md:max-w-6xl mx-auto">
        <div className='md:p-8 py-4 bg-[#EEEBFE] min-h-screen relative rounded-3xl flex flex-col md:flex-row overflow-hidden'>
          <div className='z-10 px-4 flex basis-1/2 items-center justify-center '>
            <div className='flex items-center justify-start flex-col'>
              <div className='w-full'><p className='text-lg'>Ahead app</p></div>
              <div><p className='mt-5 text-5xl font-bold'>Master Your life by mastering emotions</p></div>
              <div className="flex gap-2 md:gap-7 items-center  w-full my-8">
                <Image
                  width={150}
                  height={30}
                  alt="Apple Play Store"
                  src="/assets/app-store.svg"
                  className="cursor-pointer"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {[...Array(5)].map((val, index) => {
                      return (
                        <Image
                          alt="star"
                          src="/starIcon.svg"
                          width={16}
                          height={16}
                          key={index}
                        />
                      );
                    })}
                  </div>
                  <p className="text-sm">100+ AppStore reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-28 md:mt-0 pb-10 basis-1/2 flex items-center justify-center w-full'>
            <div className='h-64 w-64 flex items-center '><Image className='h-full w-full' height={100} width={100} src="/mobile.svg" alt="" /></div>
            <motion.div
              whileInView="visible"
              viewport={{ once: true }}
              initial="hidden"
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1, rotate: 360 },
              }}
              transition={{
                type: "",
                duration: 2,
                ease: "easeInOut",
              }}
              style={{ border: "3px solid white ", borderStyle: "dashed" }} className=' absolute rounded-full h-96 w-96  border-dashed border-white'>
              <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ top: "55px" }} className='absolute h-16 w-12'><Image height={100} width={100} className='h-full w-full' src="/blue-ghost.png" alt="" /></motion.div>
              <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ right: "-30px", top: "50%", transform: "translate(-50%,-50%)" }} className='absolute h-16 w-14'><Image height={100} width={100} className='h-full w-full' src="/red-ghost.png" alt="" /></motion.div>
              <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ bottom: "-22px", right: "50%" }} className='absolute h-14 w-12'><Image height={100} width={100} src="/newGhost.png" alt="" /></motion.div>
            </motion.div>
          </div>
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: {
                x: [0, 10],
                y: [55, -25],
                rotate: 25,
              },
              hidden: { y: 35 },
            }}
            animate={{
              x: [0, 10],
              y: [55, -5],
              rotate: 25,
            }}
            transition={{
              type: "tween",
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="h-28 w-24 absolute"
            style={{ right: "50%", top: "40%", transform: "translate(50%,50%)" }}
          >
            <Image height={100} width={100} src="/leaf.png" alt="" />
          </motion.div>
          <motion.div whileInView="visible" viewport={{ once: true }} animate={{ x: -150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ bottom: "-13px", left: "150px" }} className='absolute bg-orange-300 rounded-full h-12 w-12'></motion.div>
          <motion.div whileInView="visible" viewport={{ once: true }} animate={{ y: -150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ left: "-15px", top: "50%" }} className='absolute bg-blue-300 rounded-full h-12 w-12'></motion.div>
          <motion.div whileInView="visible" viewport={{ once: true }} animate={{ x: -150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ right: "150px", top: "-15px" }} className='absolute bg-yellow-300 rounded-full h-12 w-12'></motion.div>
          <motion.div whileInView="visible" viewport={{ once: true }} animate={{ x: 150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ left: "150px", top: "0px" }} className='absolute  h-12 w-12'><Image src="/singleLeaf.png" height={48} width={48} alt="" /></motion.div>
        </div>
      </div>

      <section className="max-w-5xl m-auto lg:p-20 py-10 lg:flex justify-between items-center">
        <h1 className="flex-1 font-extrabold text-3xl m-2">EQ beats IQ</h1>
        <p className="flex-1 m-4 lg:m-2">People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
        <p className="flex-1 m-4 lg:m-2">
          They are more successful in thier pursuits and make for inspiring leaders. According to science, they earn $29k a year.
        </p>
      </section>

      <section className="p-5 lg:p-20  max-w-5xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <motion.div
            className="inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, x: 0 },
              hidden: { opacity: 0, scale: 0, x: "-50%" },
            }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-5">
              Does this sound familiar...
            </h1>
          </motion.div>
        </div>
        <ScrollCard />
      </section>

      <section className=" w-full max-w-5xl mx-auto py-16">
        <div className="md:px-10 relative mb-10">
          <div
            style={{ height: "100vh" }}
            className="bg-[#fef6f1] overflow-hidden relative md:flex rounded-3xl py-10"
          >
            <div className="z-10 basis-1/2 px-7 mt-16">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-md text-left">Built Out of Frustration</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">Meet the ahead app</p>
                </div>
              </div>
            </div>
            <div className="z-10 basis-1/2 flex items-center p-8 md:p-0">
              <div className="flex flex-col gap-12 w-4/5  items-center">
                <div>
                  <p className="text-lg">
                    A personalized pocket coach that provide
                    bitesized,science-driven tools to boost emotional intelligence.
                  </p>
                </div>
                <div>
                  <p className="text-lg">
                    Think of it as a pocket cheerleader towards a better, more
                    fulfilling.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              whileInView="visible"
              viewport={{ once: true }}
              initial="hidden"
              variants={{
                visible: {
                  x: [0, 10],
                  y: [55, -25],
                  rotate: 25,
                },
                hidden: { y: 55 },
              }}
              animate={{
                x: [0, 10],
                y: [55, -5],
                rotate: 25,
              }}
              transition={{
                type: "tween",
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.6
              }}
              className="h-28 w-24 absolute -z-10 md:z-0"
              style={{ right: "60%", top: "20%", transform: "translate(50%,50%)" }}
            >
              <Image height={100} width={100} src="/leaf.png" alt="" />
            </motion.div>

            <div
              style={{ top: "62%", left: "15%", transform: "translate(-50%,-50%)" }}
              className="absolute  flex justify-center items-center rounded-full bg-white h-44 w-44 border-8 border-borderGrey m-28 md:m-0"
            >
              <motion.div
                transition={{ duration: "1.5" }}
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { rotate: [0, 25, -15, 0] },
                  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
                }}
                className="h-20 w-16 inline-block"
              >
                <Image height={100} width={100} src="/newGhost.png" className="h-full w-full" alt="" />
              </motion.div>
              <motion.div
                whileInView="visible"
                viewport={{ once: true }}
                initial="hidden"
                variants={{
                  visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
                  hidden: { y: 60, opacity: 0, scale: 0.5 },
                }}
                transition={{
                  type: "spring",
                  duration: "1.5",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute h-11 w-11"
                style={{ top: "-22px" }}
              >
                <Image height={100} width={100} src="/badge.png" alt="" />
              </motion.div>
            </div>
          </div>
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, rotate: 360 },
              hidden: { opacity: 1 },
            }}

            transition={{
              loop: Infinity,
              ease: "linear",
              duration: 2,
            }}
            style={{ right: "280px", top: "-20px" }}
            className="h-11 w-11 absolute "
          >
            <Image height={100} width={100} src="/flower.png" alt="" />
          </motion.div>
        </div>

      </section>

      <section className="max-w-5xl mx-auto px-8 md:px-20 mt-10 mb-24 ">
        <div className="flex flex-row justify-between items-center">
          <motion.div
            className="inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, x: 0 },
              hidden: { opacity: 0, scale: 0, x: "-50%" },
            }}
          >
            <div className="text-md font-bold text-black">
              Wrong with self improvement & how we&apos;re fixing it.
            </div>
            <div className="text-xl md:text-4xl pb-3 font-bold text-black">
              Self Improvement. Ugh.
            </div>
          </motion.div>
        </div>

        <div className="px-20 pt-14 h-96 overflow-y-scroll scrollbar-hide">
          <div className="border-l-2 border-l-violet-300 flex  flex-col gap-16">
            {[...Array(8)].map((val, index) => {
              return (
                <div key={index}
                >
                  <motion.div
                    className=" max-w-[40rem] relative align-top pl-8">
                    <div style={{ left: "-12px" }} className="absolute">🟣</div>
                    <p className="text-xl font-bold">It&apos;s not easy as 1-2-3</p>
                    <p className="mt-3">
                      The journey may be long but our sessions are quick. We get
                      to the point and tell you what you want to know (and nothing
                      else).
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-5xl m-auto lg:p-20 py-10 lg:flex justify-between items-center">
        <h1 className="flex-1 font-extrabold text-3xl m-2">EQ beats IQ</h1>
        <p className="flex-1 m-4 lg:m-2">People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
        <p className="flex-1 m-4 lg:m-2">
          They are more successful in thier pursuits and make for inspiring leaders. According to science, they earn $29k a year.
        </p>
      </section>

      <section className="mt-16 max-w-5xl mx-auto mb-32 rounded-3xl bg-blue-50 p-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
        >
          <h3 className="text-center text-gray-600 text-lg font-semibold">
            Let your friends, family, and co-worker (anonymously) rate your social
            skills
          </h3>
          <h1 className="text-[2.4rem] font-bold text-center mt-4">
            Ever wondered what others think of you?
          </h1>
        </motion.div>
        <div className="mt-8 flex justify-center relative">
          <div className="md:flex justify-evenly w-[70rem] z-[10]">
            <div className="flex-col justify-center">
              <div className="flex justify-center">
                <div className="">
                  <Image width={50} height={50} alt="" src="/badge.png" />
                </div>
              </div>
              <div className="text-center">
                Answer questions on <br />
                your skill.
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="">
                  <Image width={50} height={50} alt="" src="/badge.png" />
                </div>
              </div>
              <div className="text-center">
                Let other anonymously answer <br />
                question about you.
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="">
                  <Image width={50} height={50} alt="" src="/badge.png" />
                </div>
              </div>
              <div className="text-center">
                Find you where others and <br />
                you find the view same ways.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen flex max-w-5xl mx-auto flex-col items-center justify-center gap-4">
        <p>We take privacy seriously.</p>
        <h1 className="text-3xl font-extrabold">Before you get started</h1>
        <p className="max-w-lg text-center">"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
        <p>with love, Team ahead</p>
        <Button className="rounded-3xl">Start a test</Button>
        <p className="text-xs">Take only 5 minutes</p>
      </section>

      <section className="mt-16 max-w-5xl mx-auto rounded-2xl bg-violet-100 md:p-12 md:px-16 p-4">
        <div className="flex  justify-between items-center text-5xl font-bold">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}
          >
            <span className="text-4xl md:text-5xl">Work with us</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "50%" },
            }}
          >
            <span className="text-violet-800 text-3xl md:text-4xl">ahead</span>
          </motion.div>
        </div>
        <div className="mt-12 md:flex gap-20 overflow-hidden">
          <div className="grow mb-16">
            <div className="rounded-2xl bg-white max-w-[30rem] shadow-lg">
              <motion.div
                className="pl-4 inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 4 }}
                variants={{
                  visible: { opacity: [0.8, 0.9, 1.01, 1], scale: [0.6, 0.55, 0.8, 1], rotate: [0, 45, -35, 10, 0] },
                  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
                }}
              >
                <Image width={60} height={60} alt="" src="/ghost.png" />
              </motion.div>
              <div className="flex flex-col gap-3 px-4">
                <h2 className="font-bold">About</h2>
                <p className="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus fugit ipsum voluptate deserunt, non velit a
                  blanditiis officia dolor eligendi eveniet cumque quasi
                  reprehenderit minus?
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-8  p-4 rounded-2xl  mt-8 bg-orange-50">
                <h2 className="font-bold">Product</h2>
                <p className="font-normal">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore temporibus dignissimos, laboriosam corporis deleniti
                  quod quidem explicabo? Repellendus officiis odit corrupti
                  ducimus soluta dolor accusamus repellat, nostrum suscipit,
                  distinctio ipsam!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-h-[75vh] overflow-y-auto overflow-x-hidden pr-6 custom-scrollbar">
            {[...Array(6)].map((val, index) => (
              <div
                className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]"
                key={index}
              >
                <h2 className="font-bold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </h2>
                <p className="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus fugit ipsum voluptate deserunt, non velit a
                  blanditiis officia dolor eligendi eveniet cumque quasi
                  reprehenderit minus?
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8 max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-extrabold">Open vacancies</h1>
        <div className="flex flex-wrap gap-4 lg:justify-center">
          {Array.from({ length: 3 }).map((val, index) => (
            <div className="bg-[#fefbec] py-8 px-12 rounded-2xl" key={index}>
              <p className="font-semibold text-lg">Senior Full-stack Engineer</p>
              <ul className="list-disc">
                <li>Full time</li>
                <li>remote</li>
                <li>$500 share options</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  </>
  );
}
