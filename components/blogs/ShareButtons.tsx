// components/blogs/ShareButtons.tsx
'use client';

import { Facebook, Twitter, Linkedin, Link2, Mail } from 'lucide-react';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa6";


interface ShareButtonsProps {
  title: string;
  url: string;
  excerpt?: string;
}

export default function ShareButtons({ title, url, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt || '');

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedExcerpt}%0A%0A${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  return (
    <div className="border-t border-gray-200 pt-8 mt-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Share this article</h3>
      
      <div className="flex flex-wrap gap-3">
        {/* Facebook */}
        <button
          onClick={() => handleShare('facebook')}
          className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg transition-colors duration-200 cursor-pointer"
          aria-label="Share on Facebook"
        >
          <Facebook size={20} />
          <span className="font-medium">Facebook</span>
        </button>

        {/* Twitter */}
        <button
          onClick={() => handleShare('twitter')}
          className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#1A94DA] text-white rounded-lg transition-colors duration-200 cursor-pointer"
          aria-label="Share on Twitter"
        >
          <Twitter size={20} />
          <span className="font-medium">Twitter</span>
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => handleShare('linkedin')}
          className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#095196] text-white rounded-lg transition-colors duration-200 cursor-pointer"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={20} />
          <span className="font-medium">LinkedIn</span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => handleShare('whatsapp')}
          className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg transition-colors duration-200 cursor-pointer"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp size={20} />
          <span className="font-medium">WhatsApp</span>
        </button>

        {/* Email */}
        <button
          onClick={() => handleShare('email')}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 cursor-pointer"
          aria-label="Share via Email"
        >
          <Mail size={20} />
          <span className="font-medium">Email</span>
        </button>

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-4 py-2 ${
            copied 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-amber-800 hover:bg-amber-900'
          } text-white rounded-lg transition-colors duration-200 cursor-pointer`}
          aria-label="Copy link"
        >
          <Link2 size={20} />
          <span className="font-medium">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>

      {/* Alternative compact version for mobile */}
      <div className="mt-4 text-sm text-gray-500">
        Share this article with your network to help others discover our memorial services.
      </div>
    </div>
  );
}