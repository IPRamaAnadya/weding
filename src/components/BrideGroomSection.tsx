// components/BrideGroomSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function BrideGroomSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Mobile: Vertical Layout */}
        <div className="block md:hidden">
          {/* Overlapping Images */}
          <motion.div
            className="relative h-64 mb-12 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Groom Image */}
            <motion.div
              className="absolute left-1/2 -translate-x-[90%] w-48 h-64 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/images/bridegroom/bride.jpg')` }}
              />
            </motion.div>

            {/* Bride Image */}
            <motion.div
              className="absolute left-1/2 -translate-x-[10%] -translate-y-8 w-48 h-64 overflow-hidden z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/images/bridegroom/groom.jpg')` }}
              />
            </motion.div>
          </motion.div>

          {/* Details */}
          <div className="space-y-8">
            {/* Groom */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h3 className="text-5xl font-allura mb-2 text-gray-800">Riki</h3>
                <p className="text-xl font-serif mb-2">I Komang Riki Arta Dinanda</p> 
                <p className="text-sm text-gray-600 mb-1">Anak ke-3 dari</p>
                <p className="text-base font-serif text-gray-700">
                  I Nyoman Gede & Ni Wayan Astuti
                </p>
              </div>
              
            </motion.div>

            {/* Bride */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <h3 className="text-5xl font-allura mb-2 text-gray-800">Wulan</h3>
                <p className="text-xl font-serif mb-2">Ni Kadek Wulan Purnama Sari</p>
                <p className="text-sm text-gray-600 mb-1">Anak ke-1 dari</p>
                <p className="text-base font-serif text-gray-700">
                  I Wayan Sutarjana & Ni Ketut Sutami
                </p>
              </div>
              
            </motion.div>
          </div>
        </div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-center">
          {/* Left: Overlapping Images */}
          <motion.div
            className="relative h-96 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Groom Image */}
            <motion.div
              className="absolute left-1/2 -translate-x-[80%] w-64 h-80 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/images/bridegroom/groom.jpg')` }}
              />
            </motion.div>

            {/* Bride Image */}
            <motion.div
              className="absolute left-1/2 -translate-x-[20%] -translate-y-10 w-64 h-80 overflow-hidden z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/images/bridegroom/bride.avif')` }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Details */}
          <div className="space-y-12">
            {/* Groom */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-allura text-gray-800">Riki</h3>
                <p className="text-2xl font-serif mb-2">I Komang Riki Nanda Permana</p>
                <p className="text-sm text-gray-600 mb-1">Anak ketiga dari</p>
                <p className="text-lg font-serif text-gray-700">
                  Mr. I Wayan Suartana & Mrs. Ni Ketut Rai
                </p>
              </div>
              
            </motion.div>

            {/* Bride */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-allura mb-2 text-gray-800">Wulan</h3>
                <p className="text-2xl font-serif mb-2">Ni Kadek Wulan Purnama Sari</p>
                <p className="text-sm text-gray-600 mb-1">The Daughter of</p>
                <p className="text-lg font-serif text-gray-700">
                  I Wayan Sutarjana & Ketut Sutami
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
