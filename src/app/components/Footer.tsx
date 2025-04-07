import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Left Links */}
          <div className="flex flex-col space-y-2 mb-6 md:mb-0">
            <Link href="/contact" className="text-text hover:text-primary transition-colors">
              contact
            </Link>
            <Link href="/bonus-content" className="text-text hover:text-primary transition-colors">
              bonus content
            </Link>
            <Link href="/content-warnings" className="text-text hover:text-primary transition-colors">
              content warnings
            </Link>
          </div>

          {/* Center Logo */}
          <Link href="/" className="font-playfair text-primary mb-6 md:mb-0 text-center tracking-wide">
            <span className="text-4xl">Tess</span>
            <span className="text-3xl mx-2">&</span>
            <span className="text-4xl">Saundra</span>
          </Link>

          {/* Right Social Links */}
          <div className="flex flex-col items-end space-y-2">
            <h3 className="text-primary mb-2 font-playfair">let's be friends</h3>
            <div className="flex space-x-4">
              <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors" aria-label="TikTok">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors" aria-label="Pinterest">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link href="https://goodreads.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors" aria-label="Goodreads">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.525 15.977V.49h-2.059v2.906h-.064c-.211-.455-.481-.891-.842-1.307-.36-.412-.767-.777-1.232-1.094-.466-.314-.962-.561-1.519-.736C13.256.087 12.669 0 12.038 0c-1.21 0-2.3.225-3.246.67-.947.447-1.743 1.057-2.385 1.83-.642.773-1.133 1.676-1.47 2.711-.336 1.037-.506 2.129-.506 3.283 0 1.199.141 2.326.425 3.382.286 1.057.737 1.976 1.368 2.762.631.78 1.412 1.397 2.375 1.833.961.436 2.119.661 3.471.661 1.248 0 2.33-.315 3.262-.946s1.638-1.473 2.119-2.525h.061v2.284c0 2.044-.421 3.607-1.264 4.705-.84 1.081-2.224 1.638-4.146 1.638-.572 0-1.128-.061-1.669-.181-.542-.12-1.036-.315-1.487-.57-.437-.271-.827-.601-1.143-1.038-.316-.435-.526-.961-.632-1.593H5.064c.067.887.315 1.654.737 2.3.424.646.961 1.172 1.602 1.593.641.406 1.367.706 2.172.902.811.194 1.639.3 2.494.3 1.383 0 2.541-.195 3.486-.555.947-.376 1.714-.902 2.301-1.608.601-.708 1.021-1.549 1.293-2.556.27-1.007.42-2.134.42-3.367l-.044.062zm-7.484-.557c-.955 0-1.784-.189-2.479-.571-.697-.38-1.277-.882-1.732-1.503-.467-.621-.797-1.332-1.022-2.139s-.332-1.633-.332-2.484c0-.871.105-1.725.301-2.563.21-.84.54-1.587.992-2.24.451-.652 1.037-1.182 1.728-1.584s1.533-.605 2.51-.605 1.803.209 2.459.624c.656.415 1.191.957 1.602 1.619.408.662.689 1.396.841 2.201.15.801.226 1.601.226 2.401 0 .872-.106 1.737-.301 2.589-.21.851-.54 1.609-.992 2.271-.452.662-1.037 1.198-1.728 1.604-.691.408-1.572.601-2.553.601zm12.621-4.016H16.97v-2.031h6.681v2.031h-3.278V19.8h-2.405v-8.396z"/>
                </svg>
              </Link>
              <Link href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors" aria-label="Spotify">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text/70">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/terms" className="hover:text-primary transition-colors">
              terms of use
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              privacy policy
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="font-playfair">Copyright © 2024 - Tess & Saundra Keeler · All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}