"use client"
import { useState, useEffect, createContext, useContext } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

// Toast Types
type ToastType = 'success' | 'error' | 'info' | 'warning'

type Toast = {
  id: string
  title?: string
  description: string
  type: ToastType
  duration?: number
}

type ToastContextType = {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

// Context
const ToastContext = createContext<ToastContextType | undefined>(undefined)

// Provider Component
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    setToasts((prev) => [...prev, newToast])

    // Auto remove after duration
    const duration = toast.duration || 5000
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}

// Hook
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

// Toast Container
function ToastContainer({
  toasts,
  removeToast,
}: {
  toasts: Toast[]
  removeToast: (id: string) => void
}) {
  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-md pointer-events-none">
      <div className="pointer-events-auto">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </div>
  )
}

// Individual Toast Item
function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const [isExiting, setIsExiting] = useState(false)

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(onClose, 300)
  }

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return {
          borderColor: 'border-l-teal-500',
          icon: <CheckCircle className="w-5 h-5 text-teal-500" />,
          titleColor: 'text-gray-900',
          descColor: 'text-gray-600',
        }
      case 'error':
        return {
          borderColor: 'border-l-orange-500',
          icon: <AlertCircle className="w-5 h-5 text-orange-500" />,
          titleColor: 'text-gray-900',
          descColor: 'text-gray-600',
        }
      case 'warning':
        return {
          borderColor: 'border-l-yellow-500',
          icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
          titleColor: 'text-gray-900',
          descColor: 'text-gray-600',
        }
      case 'info':
      default:
        return {
          borderColor: 'border-l-blue-500',
          icon: <Info className="w-5 h-5 text-blue-500" />,
          titleColor: 'text-gray-900',
          descColor: 'text-gray-600',
        }
    }
  }

  const styles = getToastStyles()

  return (
    <div
      className={`
        flex items-start gap-3 p-4 mb-3 
        bg-white border border-gray-200 ${styles.borderColor} border-l-4
        rounded-lg shadow-md
        transition-all duration-300 ease-in-out
        ${isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}
      `}
    >
      {styles.icon}
      <div className="flex-1 min-w-0">
        {toast.title && (
          <div className={`font-semibold text-sm mb-1 ${styles.titleColor}`}>
            {toast.title}
          </div>
        )}
        <div className={`text-sm ${styles.descColor}`}>{toast.description}</div>
      </div>
      <button
        onClick={handleClose}
        className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

// Demo Component
export default function ToastDemo() {
  const { addToast } = useToast()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Toast Notification System</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Try different toast types:</h2>
          
          <button
            onClick={() =>
              addToast({
                type: 'info',
                title: 'Did you know?',
                description: 'Here is something that you might like to know.',
              })
            }
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Show Info Toast
          </button>

          <button
            onClick={() =>
              addToast({
                type: 'error',
                title: 'Uh oh, something went wrong',
                description: "Sorry! There was a problem with your request.",
              })
            }
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Show Error Toast
          </button>

          <button
            onClick={() =>
              addToast({
                type: 'success',
                title: 'Yay! Everything worked!',
                description: 'Congrats on the internet loading your request.',
              })
            }
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Show Success Toast
          </button>

          <button
            onClick={() =>
              addToast({
                type: 'warning',
                title: 'Warning',
                description: 'Please be careful with this action.',
              })
            }
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Show Warning Toast
          </button>
        </div>
      </div>
    </div>
  )
}

