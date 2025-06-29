"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
    return createPortal(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-background/90 border border-accent/30 backdrop-blur-md rounded-2xl 
                py-8 px-6 xs:px-10 sm:px-16 shadow-2xl text-center space-y-6 max-w-md mx-4"
            >
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Background Music</h3>
                <p className="font-light text-muted">
                    Would you like to enable background music for a more immersive experience?
                </p>
                <div className="flex items-center justify-center space-x-4 pt-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggle}
                        className="px-6 py-3 bg-accent text-background font-medium rounded-xl 
                        hover:bg-accent/90 transition-colors shadow-lg"
                    >
                        Yes, Enable
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onClose}
                        className="px-6 py-3 border border-accent/30 text-foreground rounded-xl 
                        hover:bg-accent/10 transition-colors"
                    >
                        No, Thanks
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>,
        document.getElementById("my-modal")
    );
};

const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleFirstUserInteraction = useCallback(() => {
        const musicConsent = localStorage.getItem("musicConsent");
        if (musicConsent === "true" && !isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }

        ["click", "keydown", "touchstart"].forEach((event) =>
            document.removeEventListener(event, handleFirstUserInteraction)
        );
    }, [isPlaying]);

    useEffect(() => {
        const consent = localStorage.getItem("musicConsent");
        const consentTime = localStorage.getItem("consentTime");

        if (
            consent &&
            consentTime &&
            new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
        ) {
            setIsPlaying(consent === "true");

            if (consent === "true") {
                ["click", "keydown", "touchstart"].forEach((event) =>
                    document.addEventListener(event, handleFirstUserInteraction)
                );
            }
        } else {
            setShowModal(true);
        }
    }, [handleFirstUserInteraction]);

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(!isPlaying);
        newState ? audioRef.current.play() : audioRef.current.pause();
        localStorage.setItem("musicConsent", String(newState));
        localStorage.setItem("consentTime", new Date().toISOString());
        setShowModal(false);
    };
    return (
        <div className="fixed bottom-4 right-4 z-50 group">
            {showModal && (
                <Modal onClose={() => setShowModal(false)} toggle={toggle} />
            )}

            <audio ref={audioRef} loop>
                <source src={"/audio/FEIN.mp3"} type="audio/mpeg" />
                your browser does not support the audio element.
            </audio>
            <motion.button
                onClick={toggle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-3 xs:p-4 
                bg-background/20 border border-accent/30 backdrop-blur-sm hover:bg-accent/20 hover:border-accent/50 
                transition-all duration-300 shadow-lg hover:shadow-glow"
                aria-label={"Sound control button"}
                name={"Sound control button"}
            >
                {isPlaying ? (
                    <Volume2
                        className="w-full h-full text-foreground group-hover:text-accent"
                        strokeWidth={1.5}
                    />
                ) : (
                    <VolumeX
                        className="w-full h-full text-foreground group-hover:text-accent"
                        strokeWidth={1.5}
                    />
                )}
            </motion.button>
        </div>
    );
};

export default Sound;