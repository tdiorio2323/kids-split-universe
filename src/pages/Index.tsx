import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex relative overflow-hidden split">
      {/* Luca's Minecraft Side */}
      <Link
        to="/luca"
        className="panel luca"
      >
        <div className="h-full relative overflow-hidden">
          {/* Minecraft Landscape Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/assets/luca-minecraft-landscape.png)' }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
          
          {/* Floating Minecraft Items */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 minecraft-emerald animate-bounce opacity-80" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 minecraft-star animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="minecraft-text-container mb-4 transform group-hover:scale-110 transition-transform">
              <h1 className="minecraft-title-enhanced text-6xl md:text-8xl text-white font-bold tracking-wider">
                LUCA
              </h1>
            </div>
            <p className="minecraft-title text-lg md:text-xl mb-8 opacity-90 text-white drop-shadow-md font-semibold">
              Minecraft Adventures
            </p>
            <span className="cta">Enter World</span>
          </div>
        </div>
      </Link>

      {/* Sofia's K-Pop Side */}
      <Link
        to="/sofia"
        className="panel sofia"
      >
        <div className="content">
          <h1 className="sofia-title">SOFIA</h1>
          <p className="subtitle">K-Pop × Demon Hunters</p>
          <span className="cta">Enter Realm</span>
        </div>
      </Link>
    </div>
  );
};

export default Index;