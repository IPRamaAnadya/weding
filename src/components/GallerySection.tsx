'use client'

import { motion } from 'framer-motion'

export default function GallerySection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.p
            className="text-xs tracking-[0.35em] text-gray-400 font-serif mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            OUR MOMENTS
          </motion.p>

          <div className="relative inline-block">
            <motion.h2
              className="text-3xl md:text-4xl font-serif tracking-[0.25em] text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              GALLERY
            </motion.h2>

            <motion.p
              className="
                absolute 
                -bottom-4 
                left-1/2 
                -translate-x-1/2
                text-5xl md:text-6xl
                text-gray-300
                font-allura
                pointer-events-none
                select-none
              "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Photos
            </motion.p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-2 md:columns-3 gap-1 md:gap-2 space-y-1 md:space-y-2">
          {[
            '/images/gallery/1.jpg',
            '/images/gallery/2.jpg',
            '/images/gallery/3.jpg',
            '/images/gallery/4.jpg',
            '/images/gallery/5.jpg',
            '/images/gallery/6.jpg',
            '/images/gallery/7.jpg',
            '/images/gallery/8.jpg',
            '/images/gallery/9.jpg',
            '/images/gallery/10.jpg',
            '/images/gallery/11.jpg',
            '/images/gallery/12.jpg',
            '/images/gallery/13.jpg',
          ].map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
            >
              <motion.img
                src={src}
                alt="Wedding Gallery"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
