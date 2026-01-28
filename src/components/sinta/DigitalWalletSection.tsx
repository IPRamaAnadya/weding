// components/sinta/DigitalWalletSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface WalletAccount {
  bankName: string
  accountNumber: string
  accountName: string
}

interface DigitalWalletSectionProps {
  sectionTitle?: string
  accounts: WalletAccount[]
}

export default function DigitalWalletSection({
  sectionTitle = "Wedding Gift",
  accounts,
}: DigitalWalletSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (accountNumber: string, index: number) => {
    try {
      await navigator.clipboard.writeText(accountNumber)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl text-gray-800 mb-3"
            style={{ fontFamily: 'The Signature, cursive' }}
          >
            {sectionTitle}
          </h2>
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          >
            Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih
          </p>
        </motion.div>

        {/* Wallet Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border border-gray-200 p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Bank Name */}
              <h3
                className="text-2xl md:text-3xl text-gray-800 mb-4"
                style={{ fontFamily: 'The Signature, cursive' }}
              >
                {account.bankName}
              </h3>

              {/* Account Name */}
              <div className="mb-4">
                <p
                  className="text-xs text-gray-500 mb-1"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Atas Nama
                </p>
                <p
                  className="text-base text-gray-800 font-medium"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {account.accountName}
                </p>
              </div>

              {/* Account Number */}
              <div className="mb-4">
                <p
                  className="text-xs text-gray-500 mb-1"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Nomor Rekening
                </p>
                <p
                  className="text-lg text-gray-800 font-medium tracking-wider"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {account.accountNumber}
                </p>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(account.accountNumber, index)}
                className={`
                  w-full py-3 px-6 rounded-full text-xs tracking-wider
                  transition-all duration-300
                  flex items-center justify-center gap-2
                  ${
                    copiedIndex === index
                      ? 'bg-green-600 text-white border border-green-600'
                      : 'bg-gray-800 text-white border border-gray-800 hover:bg-white hover:text-gray-800'
                  }
                `}
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                {copiedIndex === index ? (
                  <>
                    <Check size={16} />
                    TERSALIN
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    SALIN NOMOR REKENING
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          >
            Terima kasih atas doa dan dukungan Anda
          </p>
        </motion.div>
      </div>
    </section>
  )
}
