"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, Search, Minus, Plus, Play, Pause } from "lucide-react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import dynamic from "next/dynamic";

const PDFRenderer = dynamic(() => import('@/components/PDFRenderer'), { ssr: false });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function CifraReader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [songs, setSongs] = useState<{ name: string; url: string }[]>([]);
  const [selectedSong, setSelectedSong] = useState<{ name: string; url: string } | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [filteredSongs, setFilteredSongs] = useState<{ name: string; url: string }[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [wasManuallyScrolled, setWasManuallyScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const fetchSongs = async () => {
      const songList = await listAll(ref(storage, "lyrics"));
      const songData = await Promise.all(
        songList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return { name: changeFileName(item.name), url };
        })
      );
      setSongs(songData);
      setFilteredSongs(songData);
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout | null = null;
    if (selectedSong && isScrolling && scrollSpeed > 0) {
      scrollInterval = setInterval(() => {
        if (contentRef.current) {
          if (wasManuallyScrolled && contentRef.current.scrollTop <= 0) {
            setIsScrolling(false);
            setWasManuallyScrolled(false);
          } else {
            contentRef.current.scrollTop += scrollSpeed;
          }
        }
      }, 50);
    }
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [selectedSong, scrollSpeed, isScrolling, wasManuallyScrolled]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    if (query === "") {
      setFilteredSongs(songs);
    } else {
      const results = songs.filter((song) =>
        song.name.toLowerCase().includes(query)
      );
      setFilteredSongs(results);
    }
  };


  const handleSongSelect = (song: { name: string; url: string }) => {
    setSelectedSong(song);
    setWasManuallyScrolled(false);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  const handleScroll = () => {
    if (contentRef.current) {
      const currentScrollTop = contentRef.current.scrollTop;
      if (currentScrollTop < lastScrollTopRef.current) {
        setWasManuallyScrolled(true);
      }
      lastScrollTopRef.current = currentScrollTop;

      if (currentScrollTop <= 0 && wasManuallyScrolled) {
        setIsScrolling(false);
        setWasManuallyScrolled(false);
      }
    }
  };

  return (
    <div className="pt-24 lg:pt-16">
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "w-64" : "w-0"} transition-all duration-300 bg-white shadow-lg overflow-hidden`}>
          <div className="p-4 h-full overflow-y-auto scrollbar-hide">
            <h2 className="text-xl font-bold mb-4">Biblioteca de Cifras</h2>
            <div className="relative mb-4">
            <input
              type="text"
              placeholder="Buscar cifras..."
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
            <ul className="space-y-2">
              {filteredSongs.length > 0 ? (
                <ul className="space-y-2">
                  {filteredSongs.map((song, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleSongSelect(song)}
                        className="w-full text-left p-2 hover:bg-gray-100 rounded"
                      >
                        {song.name}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Sem Resultados</p>
              )}
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden bg-primary">
          <div className="flex justify-between items-center p-4 bg-white shadow">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded hover:bg-gray-100">
              <Menu size={24} />
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <div className="flex items-center space-x-4">
              <button onClick={() => setScrollSpeed(Math.max(0, scrollSpeed - 0.5))} className="p-2 rounded hover:bg-gray-100">
                <Minus size={20} />
                <span className="sr-only">Decrease scroll speed</span>
              </button>
              <span className="font-bold">{scrollSpeed.toFixed(1)}</span>
              <button onClick={() => setScrollSpeed(scrollSpeed + 0.5)} className="p-2 rounded hover:bg-gray-100">
                <Plus size={20} />
                <span className="sr-only">Increase scroll speed</span>
              </button>
              <button onClick={toggleScrolling} className="p-2 rounded hover:bg-gray-100">
                {isScrolling ? <Pause size={20} /> : <Play size={20} />}
                <span className="sr-only">{isScrolling ? 'Pause scrolling' : 'Start scrolling'}</span>
              </button>
            </div>
          </div>
          <div
            ref={contentRef}
            className="h-full overflow-y-auto p-8 scrollbar-hide"
            onScroll={handleScroll}
          >
            {selectedSong ? (
              <div>
                {/* <h2 className="text-2xl font-bold mb-4">{selectedSong.name}</h2> */}
                <PDFRenderer url={selectedSong.url} />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-500">Bem-vindo ao Leitor de Cifras</h1>
                <p className="pb-16 text-xl text-gray-500">Selecione uma cifra para começar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function changeFileName(filename: string) {
  const regex = /^\d+\s*/;
  const result = filename.replace(regex, '');
  return result.split('.').slice(0, -1).join('.');
}