// components/sinta/InvitationLetterSection.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, X } from 'lucide-react'
import { useState } from 'react'

interface Event {
  name: string
  date: string
  time: string
  startDateTime?: string // Format: YYYYMMDDTHHMMSS for calendar
  endDateTime?: string
}

interface InvitationLetterSectionProps {
  welcomeTitle: string
  welcomeDescription: string
  events: Event[]
  venue: string
  venueDescription: string
  googleMapLink?: string
  closingText: string
  groomName: string
  brideName: string
  onSaveTheDate?: () => void
}

export default function InvitationLetterSection({
  welcomeTitle,
  welcomeDescription,
  events,
  venue,
  venueDescription,
  googleMapLink,
  closingText,
  groomName,
  brideName,
  onSaveTheDate,
}: InvitationLetterSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Generate Google Calendar link for a specific event
  const generateCalendarLink = (event: Event) => {
    const title = `${event.name} - ${groomName} & ${brideName} Wedding`
    const description = `${groomName} & ${brideName} Wedding`
    const location = `${venue}, ${venueDescription}`
    
    // If startDateTime is provided, use it; otherwise create a basic link
    if (event.startDateTime && event.endDateTime) {
      const dates = `${event.startDateTime}/${event.endDateTime}`
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${dates}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`
    }
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`
  }

  const handleSaveDate = (event: Event) => {
    window.open(generateCalendarLink(event), '_blank')
    if (onSaveTheDate) onSaveTheDate()
  }

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Paper Container */}
        <motion.div
          className="bg-white  px-8 py-12 md:px-16 md:py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Welcome Title */}
          <motion.h2
            className="text-2xl md:text-3xl text-center mb-6 text-gray-800"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {welcomeTitle}
          </motion.h2>

          {/* Welcome Description */}
          <motion.p
            className="mt-10 text-center text-sm md:text-sm text-gray-600 mb-10 leading-relaxed"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {welcomeDescription}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-px bg-gray-300 mx-auto mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Events List */}
          <div className="space-y-8 mb-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <p
                  className="text-3xl md:text-4xl text-gray-800 mb-2"
                  style={{ fontFamily: 'The Signature, cursive' }}
                >
                  {event.name}
                </p>
                <h3
                  className="text-sm md:text-base tracking-wider uppercase text-gray-600 mb-1"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {event.date}
                </h3>
                <p
                  className="text-base md:text-lg text-gray-700"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {event.time}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Save the Date Button */}
          {onSaveTheDate && (
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + events.length * 0.1 }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 text-white border border-gray-800 rounded-full text-xs tracking-wider hover:bg-white hover:text-gray-800 transition"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                <Calendar size={16} />
                SAVE THE DATE
              </button>
            </motion.div>
          )}

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-px bg-gray-300 mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 + events.length * 0.1 }}
          />

          {/* Venue */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p
              className="text-xs md:text-sm tracking-wider uppercase text-gray-500 mb-1"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              VENUE
            </p>
            <h4
              className="text-xl md:text-2xl text-gray-800 mb-2"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {venue}
            </h4>
            <p
              className="text-sm md:text-sm text-gray-600 mb-4"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {venueDescription}
            </p>
            {googleMapLink && (
              <a
                href={googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-white text-gray-800 border border-gray-800 rounded-full text-xs tracking-wider hover:bg-gray-800 hover:text-white transition"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                <MapPin size={16} />
                GOOGLE MAPS
              </a>
            )}
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-px bg-gray-300 mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />

          {/* Closing Text */}
          <motion.p
            className="text-center text-sm md:text-sm text-gray-600 mb-8 leading-relaxed"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {closingText}
          </motion.p>

          {/* Final Blessing */}
          <motion.p
            className="text-center text-base md:text-base text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            ᬒᬵᬁ ᬰᬵᬦ᭄ᬢᬶᬄ ᬰᬵᬦ᭄ᬢᬶᬄ ᬰᬵᬦ᭄ᬢᬶᬄ ᬒᬵᬁ
          </motion.p>

          {/* Names */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p
              className="text-xs md:text-sm tracking-wider uppercase text-gray-500 mb-3"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              KAMI YANG BERBAHAGIA
            </p>
            <h5
              className="text-3xl md:text-4xl text-yellow-600"
              style={{ fontFamily: 'The Signature, cursive' }}
            >
              {groomName} & {brideName}
            </h5>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for Event Selection */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              {/* Modal Content */}
              <motion.div
                className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={24} />
                </button>

                {/* Modal Header */}
                <h3
                  className="text-3xl text-center mb-2 text-gray-800"
                  style={{ fontFamily: 'The Signature, cursive' }}
                >
                  Save the Date
                </h3>
                <p
                  className="text-center text-sm text-gray-600 mb-6"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Select an event to add to your calendar
                </p>

                {/* Decorative Line */}
                <div className="w-16 h-px bg-gray-300 mx-auto mb-6" />

                {/* Events List */}
                <div className="space-y-3">
                  {events.map((event, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSaveDate(event)}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-800 hover:bg-gray-50 transition group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-800 group-hover:bg-yellow-600 rounded-full flex items-center justify-center transition">
                          <Calendar size={20} className="text-white" />
                        </div>
                        <div className="text-left flex-1">
                          <p
                            className="text-lg text-gray-800 mb-0.5"
                            style={{ fontFamily: 'The Signature, cursive' }}
                          >
                            {event.name}
                          </p>
                          <p
                            className="text-xs text-gray-600"
                            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                          >
                            {event.date} • {event.time}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Decorative Line */}
                <div className="w-16 h-px bg-gray-300 mx-auto mt-6 mb-4" />

                {/* Footer Text */}
                <p
                  className="text-center text-xs text-gray-500"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Works with Google Calendar, iPhone & Android
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
