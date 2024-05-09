'use client'
import { LampContainer } from "@/components/ui/LampContainer";
import { motion } from "framer-motion";

export default function Home() {
  const getStarted = () => {
    window.location.href = '/auth'
  }
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text p-5 text-center text-9xl tracking-tight text-transparent font-extrabold md:text-9xl"
        >
          Zero Hunger
        </motion.h1>
        <div className="top-40 w-screen absolute flex flex-col gap-5 justify-center items-center">
          <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-9/12 text-center font-medium text-xl text-gray-400">
            Connecting food establishments with surplus food to those in need. Users can easily donate excess food to local charities or individuals facing food insecurity, reducing waste and supporting communities.
          </motion.p>
          <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut",
          }}
          onClick={getStarted}
          className="top-56 inline-flex h-12 w-40 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Get Started
          </motion.button>
        </div>
      </LampContainer>
    </>
  );
}
