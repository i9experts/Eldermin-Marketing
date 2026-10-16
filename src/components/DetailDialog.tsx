import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function DetailDialog({
  open, onClose, title, children,
}: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      id="detail-dialog"
      className="rounded-card shadow-dialog"
      onClose={onClose}
      onClick={e => { if (e.target === ref.current) onClose() }}
    >
      <div className="p-7 sm:p-8 max-h-[80vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 mb-5">
          <h3 className="text-xl font-display font-bold text-navy-deep">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="shrink-0 text-muted hover:text-navy transition-colors -mt-1 -mr-1 p-1">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  )
}
