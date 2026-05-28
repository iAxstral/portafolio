import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CopyButtonProps {
  textToCopy: string;
  tooltipText: string;
  copiedText: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'icon';
  displayLabel?: string;
}

export default function CopyButton({ textToCopy, tooltipText, copiedText, className = '', variant = 'primary', displayLabel }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const baseClass = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-cyan-600 dark:text-cyan-400';
  const textToShow = displayLabel || textToCopy;

  return (
    <div className={`relative inline-block ${variant === 'icon' ? '' : 'w-full sm:w-auto'}`} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <button onClick={handleCopy} className={`${baseClass} ${className} w-full sm:w-auto`} aria-label={tooltipText}>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {variant !== 'icon' && <span>{copied ? copiedText : textToShow}</span>}
        </span>
      </button>
      
      <AnimatePresence>
        {showTooltip && !copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-black text-sm rounded shadow-lg whitespace-nowrap z-20 pointer-events-none"
          >
            {tooltipText}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-200 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
