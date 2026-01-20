import React from 'react';
import { videos } from '../data/siteData';

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">视频展示</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            观看专业瑜伽导师的示范
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="rounded-lg overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="200"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;