import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

const SofiaPage = () => {
  const [guestbookEntry, setGuestbookEntry] = useState({ name: "", message: "" });
  const [entries, setEntries] = useState([
    { name: "Alex", message: "Sofia, you're amazing! Love your style! ✨" },
    { name: "Maya", message: "Your demon hunter cosplay was incredible! 🔥" }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestbookEntry.name && guestbookEntry.message) {
      setEntries([guestbookEntry, ...entries]);
      setGuestbookEntry({ name: "", message: "" });
    }
  };

  // Persisted lightstick accent color
  const ACCENT_KEY = "sofia_accent";
  const [accent, setAccent] = useState<string>(() => {
    try {
      return localStorage.getItem(ACCENT_KEY) || "#FF1493";
    } catch {
      return "#FF1493";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(ACCENT_KEY, accent);
    } catch {
      // ignore write errors
    }
  }, [accent]);

  // Simple audio player for playlist
  const playlist = [
    { title: "BLACKPINK - How You Like That", url: "/media/sofia/how-you-like-that.mp3" },
    { title: "NewJeans - Get Up", url: "/media/sofia/get-up.mp3" },
    { title: "aespa - Spicy", url: "/media/sofia/spicy.mp3" },
    { title: "ITZY - SNEAKERS", url: "/media/sofia/sneakers.mp3" },
    { title: "IVE - LOVE DIVE", url: "/media/sofia/love-dive.mp3" },
  ];
  const [current, setCurrent] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = (index?: number) => {
    if (typeof index === "number") setCurrent(index);
    setPlaying(true);
  };
  const pause = () => setPlaying(false);
  const prev = () => setCurrent((i) => (i - 1 + playlist.length) % playlist.length);
  const next = () => setCurrent((i) => (i + 1) % playlist.length);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.src = playlist[current]?.url || "";
    if (playing) {
      el.play().catch(() => setPlaying(false));
    } else {
      el.pause();
    }
  }, [current, playing]);
  
  const onEnded = () => {
    setCurrent((i) => (i + 1) % playlist.length);
    setPlaying(true);
  };

  return (
    <div className="min-h-screen kpop-bg">
      {/* Header */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="neon-title text-8xl md:text-9xl mb-4">SOFIA</h1>
          <p className="text-white text-xl md:text-2xl mb-8 drop-shadow-lg">K-Pop × Demon Hunters</p>
          <Link to="/">
            <Button variant="secondary" size="lg" className="backdrop-blur-sm bg-white/20 text-white border-white/30 hover:bg-white/30">
              ← Back to Portal
            </Button>
          </Link>
        </div>
      </header>

      {/* Content Sections */}
      <main className="bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900">
        {/* About Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="neon-title text-4xl mb-6">About Sofia</h2>
              <p className="text-white/90 text-lg mb-4">
                Hi there! I'm Sofia, and I live in two amazing worlds - the colorful, energetic 
                universe of K-Pop and the mystical realm of demon hunters. 
              </p>
              <p className="text-white/90 text-lg">
                When I'm not dancing to the latest K-Pop hits, you'll find me creating stories 
                about brave demon hunters who protect the world with style and grace.
              </p>
            </div>
            <Card className="p-6 backdrop-blur-sm bg-white/10 border-neon-pink/30 text-white">
              <h3 className="neon-title text-xl mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                <li>🎵 Favorite K-Pop Group: BLACKPINK</li>
                <li>⚔️ Favorite Demon Hunter: Nezuko</li>
                <li>💃 Dance Style: Hip-Hop & Contemporary</li>
                <li>📖 Currently Reading: Demon Slayer Manga</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="neon-title text-4xl text-center mb-12">Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-xl hover:shadow-neon-pink/20 transition-all backdrop-blur-sm bg-white/10 border-neon-purple/30">
                  <div className="h-48 bg-gradient-to-br from-neon-pink/30 via-neon-purple/30 to-neon-blue/30 flex items-center justify-center">
                    <span className="neon-title text-2xl">✨ {item} ✨</span>
                  </div>
                  <div className="p-4">
                    <h3 className="neon-title text-lg mb-2">Photo {item}</h3>
                    <p className="text-white/80 text-sm">Epic moment captured in neon style!</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="neon-title text-4xl text-center mb-12">Media & Favorites</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 backdrop-blur-sm bg-white/10 border-neon-pink/30">
                <h3 className="neon-title text-2xl mb-4">K-Pop Playlist</h3>
                <div className="space-y-3 mb-4">
                  {playlist.map((track, idx) => (
                    <button
                      key={track.title}
                      onClick={() => play(idx)}
                      className={`w-full text-left flex items-center p-3 rounded-lg transition ${
                        idx === current ? "bg-neon-purple/30" : "bg-neon-purple/20 hover:bg-neon-purple/30"
                      }`}
                    >
                      <span className="text-neon-cyan text-lg mr-3">{idx === current && playing ? "▶" : "♪"}</span>
                      <span className="text-white">{track.title}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="secondary" className="bg-white/20 text-white border-white/30" onClick={prev} aria-label="Previous">
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  {playing ? (
                    <Button className="bg-neon-pink text-white" onClick={pause} aria-label="Pause">
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  ) : (
                    <Button className="bg-neon-pink text-white" onClick={() => play()} aria-label="Play">
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  )}
                  <Button variant="secondary" className="bg-white/20 text-white border-white/30" onClick={next} aria-label="Next">
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>
                <audio ref={audioRef} onEnded={onEnded} className="hidden" />
                <p className="text-white/70 text-xs mt-3">
                  Drop MP3s in <code className="text-white/90">public/media/sofia/</code> using the suggested filenames to enable playback.
                </p>
              </Card>

              <Card className="p-6 backdrop-blur-sm bg-white/10 border-neon-blue/30">
                <h3 className="neon-title text-2xl mb-4">Demon Hunter Arsenal</h3>
                <div className="space-y-3">
                  {[
                    "⚔️ Nichirin Blade (Purple)",
                    "🌙 Moon Breathing Technique",
                    "💎 Crystal Charm Necklace", 
                    "🔥 Flame Resistance Cloak",
                    "✨ Sparkle Dust Grenades"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-neon-blue/20 rounded-lg">
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Lightstick Color Selector */}
        <section className="py-16 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="neon-title text-4xl text-center mb-12">Lightstick Color</h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <Card className="p-6 backdrop-blur-sm bg-white/10 border-neon-purple/30">
                <h3 className="neon-title text-2xl mb-4">Pick Your Glow</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "#FF1493", // neon pink
                    "#9932CC", // purple
                    "#00CED1", // cyan
                    "#4169E1", // royal blue
                    "#FFD700", // gold
                  ].map((c) => (
                    <button
                      key={c}
                      aria-label={`Choose color ${c}`}
                      onClick={() => setAccent(c)}
                      className="w-10 h-10 rounded-full border-2 border-white/50 shadow-md hover:scale-105 transition"
                      style={{ background: c, boxShadow: c === accent ? `0 0 20px ${c}` : undefined }}
                    />
                  ))}
                </div>
              </Card>
              <Card className="p-6 backdrop-blur-sm bg-white/10 border-neon-blue/30">
                <h3 className="neon-title text-2xl mb-4">Preview</h3>
                <div
                  className="h-40 rounded-xl flex items-center justify-center text-white font-bold"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${accent}, rgba(0,0,0,0.2))`,
                    boxShadow: `0 0 30px ${accent}`,
                  }}
                >
                  {accent}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Guestbook Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="neon-title text-4xl text-center mb-12">Guestbook</h2>
            
            {/* Guestbook Form */}
            <Card className="p-6 mb-8 backdrop-blur-sm bg-white/10 border-neon-pink/30">
              <h3 className="neon-title text-xl mb-4">Leave a Message!</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={guestbookEntry.name}
                  onChange={(e) => setGuestbookEntry({ ...guestbookEntry, name: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Textarea
                  placeholder="Your message..."
                  value={guestbookEntry.message}
                  onChange={(e) => setGuestbookEntry({ ...guestbookEntry, message: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  rows={3}
                />
                <Button type="submit" className="neon-title bg-neon-pink hover:bg-neon-purple text-white">
                  ✨ Add Message ✨
                </Button>
              </form>
            </Card>

            {/* Guestbook Entries */}
            <div className="space-y-4">
              {entries.map((entry, idx) => (
                <Card key={idx} className="p-4 backdrop-blur-sm bg-white/10 border-neon-cyan/30">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{entry.name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="neon-title text-sm mb-1">{entry.name}</h4>
                      <p className="text-white/90">{entry.message}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SofiaPage;
