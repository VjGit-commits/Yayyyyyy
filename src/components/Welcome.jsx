import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white">

      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        🎉 Happy Birthday 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-2xl"
      >
        Welcome to your magical birthday journey ✨
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 rounded-full bg-pink-500 px-8 py-4 text-xl"
      >
        Begin Adventure ❤️
      </motion.button>

    </div>
  );
}