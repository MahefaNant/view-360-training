"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HotSpot } from "@/lib/config";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotspot: HotSpot | null;
}

export function InfoModal({ isOpen, onClose, hotspot }: InfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{hotspot?.text}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}