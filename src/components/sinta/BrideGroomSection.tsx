// components/sinta/BrideGroomSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

interface Person {
  name: string
  fullName: string
  childOf: string
  parents: string
  instagram?: string
  image: string
}

interface BrideGroomSectionProps {
  groom: Person
  bride: Person
}

export default function BrideGroomSection({ groom, bride }: BrideGroomSectionProps) {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Vertical Card Layout */}
        <div className="block md:hidden space-y-8">
          {/* Groom Card */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-full h-96 bg-cover bg-center mb-6"
              style={{ backgroundImage: `url('${groom.image}')` }}
            />
            <h3 
              className="text-5xl -mb-4 text-yellow-600"
              style={{ fontFamily: 'The Signature, cursive' }}
            >
              {groom.name}
            </h3>
            <p 
              className="text-lg -mb-1"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {groom.fullName}
            </p>
            <p 
              className="text-sm text-gray-600 mb-1"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {groom.childOf}
            </p>
            <p 
              className="text-base text-gray-700 mb-4"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {groom.parents}
            </p>
            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
              >
                <Instagram size={18} />
                <span style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  @{groom.instagram}
                </span>
              </a>
            )}
          </motion.div>

          {/* Bride Card */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="w-full h-96 bg-cover bg-center mb-6"
              style={{ backgroundImage: `url('${bride.image}')` }}
            />
            <h3 
              className="text-5xl -mb-4 text-yellow-600"
              style={{ fontFamily: 'The Signature, cursive' }}
            >
              {bride.name}
            </h3>
            <p 
              className="text-lg mb-2"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {bride.fullName}
            </p>
            <p 
              className="text-sm text-gray-600 mb-1"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {bride.childOf}
            </p>
            <p 
              className="text-base text-gray-700 mb-4"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {bride.parents}
            </p>
            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
              >
                <Instagram size={18} />
                <span style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  @{bride.instagram}
                </span>
              </a>
            )}
          </motion.div>
        </div>

        {/* Desktop: Window Grid Layout - 4 containers */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-0">
          {/* 1. Groom Image */}
          <motion.div
            className="h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${groom.image}')` }}
            />
          </motion.div>

          {/* 2. Groom Data */}
          <motion.div
            className="h-[600px] flex flex-col items-start justify-center text-left px-8 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 
              className="text-6xl -mb-2 text-yellow-600"
              style={{ fontFamily: 'The Signature, cursive' }}
            >
              {groom.name}
            </h3>
            <p 
              className="text-xl mb-3"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {groom.fullName}
            </p>
            <p 
              className="text-sm text-gray-600 mb-2"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {groom.childOf}
            </p>
            <p 
              className="text-base text-gray-700 mb-6"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {groom.parents}
            </p>
            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
              >
                <Instagram size={20} />
                <span style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  @{groom.instagram}
                </span>
              </a>
            )}
          </motion.div>

          {/* 3. Bride Data */}
          <motion.div
            className="h-[600px] flex flex-col items-end justify-center text-right px-8 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 
              className="text-6xl -mb-2 text-yellow-600"
              style={{ fontFamily: 'The Signature, cursive' }}
            >
              {bride.name}
            </h3>
            <p 
              className="text-xl mb-3"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {bride.fullName}
            </p>
            <p 
              className="text-sm text-gray-600 mb-2"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {bride.childOf}
            </p>
            <p 
              className="text-base text-gray-700 mb-6"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {bride.parents}
            </p>
            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
              >
                <Instagram size={20} />
                <span style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  @{bride.instagram}
                </span>
              </a>
            )}
          </motion.div>

          {/* 4. Bride Image */}
          <motion.div
            className="h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${bride.image}')` }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
