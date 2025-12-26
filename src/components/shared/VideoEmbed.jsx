import React from 'react';
import { motion } from 'framer-motion';

const VideoEmbed = ({ platform, embedId, title }) => {
  const getEmbedUrl = () => {
    switch (platform) {
      case 'youtube':
        return `https://www.youtube.com/embed/${embedId}`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${embedId}`;
      default:
        return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg bg-slate-900"
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={getEmbedUrl()}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  );
};

export default VideoEmbed;
