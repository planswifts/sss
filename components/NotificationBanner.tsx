'use client'

import { AlertCircle, X } from 'lucide-react'
import { useState } from 'react'

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg mx-6 mt-4 p-4 flex items-start gap-3">
      <AlertCircle size={20} className="text-orange-600 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">What's new in SwiftPay:</h3>
        <p className="text-sm text-gray-700 mt-1">We've upgraded sign-in for stronger security, and you can now manage team users and set up approval workflows directly in Merchant Portal.</p>
        <div className="flex gap-4 mt-3">
          <a href="#" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1">
            Learn More <span>→</span>
          </a>
          <button onClick={() => setIsVisible(false)} className="text-sm font-semibold text-red-600 hover:text-red-700">
            Close
          </button>
        </div>
      </div>
      <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-orange-100 rounded">
        <X size={18} className="text-gray-400" />
      </button>
    </div>
  )
}
