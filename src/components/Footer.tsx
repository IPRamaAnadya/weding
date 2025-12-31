'use client'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white py-16 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="mx-4 text-gray-300 text-xs">✦</div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <p className="font-serif text-gray-500 text-sm tracking-wide leading-relaxed">
            With love and gratitude
          </p>
          
          <p className="font-serif text-gray-400 text-xs tracking-[0.2em]">
            Created by{' '}
            <span className="text-gray-600 font-medium tracking-wider">
              I Putu Rama Anadya
            </span>
          </p>
          
          <p className="font-serif text-gray-300 text-xs mt-6">
            © 2026 · Riki & Wulan
          </p>
        </div>
      </div>
    </footer>
  )
}
