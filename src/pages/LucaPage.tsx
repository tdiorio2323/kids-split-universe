import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Pickaxe, Hammer, Compass, Trophy, Star, Gem, Crown } from "lucide-react";

const LucaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-emerald-400 to-green-500 relative overflow-hidden">
      {/* Premium floating particle system */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-emerald-400 animate-particle-float opacity-70 rounded-sm shadow-lg shadow-emerald-400/50"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 animate-particle-float opacity-60 rounded-sm shadow-lg shadow-yellow-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-blue-400 animate-particle-float opacity-50 rounded-sm shadow-lg shadow-blue-400/50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-purple-400 animate-particle-float opacity-65 rounded-sm shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-3.5 h-3.5 bg-orange-400 animate-particle-float opacity-75 rounded-sm shadow-lg shadow-orange-400/50" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Premium Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced layered background with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/60 via-emerald-400/40 to-green-500/60 backdrop-blur-[1px]"></div>
        
        {/* Enhanced voxel layers with premium effects */}
        <div className="absolute inset-0 mc-hills opacity-20 animate-float-minecraft" style={{animationDelay: '0s', filter: 'brightness(1.2) saturate(1.3)'}}></div>
        <div className="absolute inset-0 mc-forest opacity-30 animate-float-minecraft" style={{animationDelay: '1s', filter: 'brightness(1.1) saturate(1.2)'}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 mc-ground animate-block-glow"></div>
        
        {/* Premium floating icons */}
        <div className="absolute top-20 left-20 z-30">
          <div className="relative">
            <Pickaxe className="w-16 h-16 text-brown-600 animate-float-minecraft drop-shadow-2xl" style={{
              filter: 'drop-shadow(0 0 20px rgba(161, 98, 7, 0.8))',
              color: '#a16207'
            }} />
            <div className="absolute inset-0 bg-yellow-600/30 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
        <div className="absolute top-32 right-20 z-30">
          <div className="relative">
            <Hammer className="w-14 h-14 text-stone-600 animate-float-minecraft drop-shadow-2xl" style={{
              filter: 'drop-shadow(0 0 20px rgba(87, 83, 82, 0.8))',
              animationDelay: '1s'
            }} />
            <div className="absolute inset-0 bg-stone-400/30 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
        <div className="absolute bottom-32 right-16 z-30">
          <div className="relative">
            <Compass className="w-12 h-12 text-red-600 animate-float-minecraft drop-shadow-2xl" style={{
              filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.8))',
              animationDelay: '2s'
            }} />
            <div className="absolute inset-0 bg-red-400/30 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Ultra-premium glassmorphism content container */}
        <div className="relative z-40 p-12 rounded-3xl bg-white/15 backdrop-blur-2xl border border-white/25 shadow-2xl hover:bg-white/20 hover:border-white/35 transition-all duration-700 hover:scale-105 transform-gpu">
          <div className="text-center">
            <img 
              src="/lovable-uploads/881dacbb-4466-410e-a1fa-f7843c55c379.png" 
              alt="LUCA"
              className="h-32 md:h-40 w-auto mx-auto mb-8 pixel-border animate-pixel-shimmer"
              style={{ 
                imageRendering: 'pixelated',
                filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.5)) drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
              }}
            />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              textShadow: '0 0 40px rgba(255,255,255,0.6), 0 8px 16px rgba(0,0,0,0.8)',
              letterSpacing: '0.05em'
            }}>
              Welcome to My Minecraft World
            </h1>
            <Link to="/">
              <Button 
                size="lg" 
                className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-stone-600 to-stone-700 text-white hover:from-stone-500 hover:to-stone-600 border-2 border-stone-400/50 shadow-2xl hover:shadow-stone-500/50 transform hover:scale-105 transition-all duration-300 ease-premium backdrop-blur-sm"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  borderRadius: '16px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.4)'
                }}
              >
                <ArrowLeft className="w-6 h-6 mr-3" />
                Back to Portal
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Premium Content Sections */}
      <main className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-16">
        {/* Luxury About Section */}
        <section className="relative py-20 px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent mb-8" style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  lineHeight: '1.1'
                }}>
                  About Luca
                </h2>
                <div className="absolute -top-4 -left-4 w-6 h-6">
                  <Star className="w-full h-full text-emerald-400 animate-float-minecraft opacity-60" />
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed" style={{
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                Welcome to my world! I'm Luca, and I love building amazing things in Minecraft. 
                From towering castles to underground redstone contraptions, there's always 
                something new to create.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed" style={{
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                Explore my gallery to see some of my favorite builds, or check out my 
                latest projects where I'm always experimenting with new designs.
              </p>
              <div className="flex space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700 font-medium">Master Builder</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gem className="w-6 h-6 text-emerald-500" />
                  <span className="text-gray-700 font-medium">Diamond Level</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden bg-gradient-to-br from-white/90 to-emerald-50/90 backdrop-blur-sm border-2 border-emerald-200/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 transform-gpu">
                <img 
                  src="/lovable-uploads/bfb5103c-7795-4142-89d8-6a899ba19a64.png" 
                  alt="Luca playing VR games at an arcade"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
              </Card>
              <div className="absolute -top-6 -right-6 w-12 h-12">
                <Crown className="w-full h-full text-yellow-400 animate-float-minecraft drop-shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Gallery Section */}
        <section className="py-24 px-8 bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent mb-6" style={{
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                Epic Builds Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                Discover the most incredible creations from my Minecraft adventures
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {name: "Dragon Castle", desc: "A massive medieval fortress with hidden chambers"},
                {name: "Redstone City", desc: "An automated metropolis powered by redstone"},
                {name: "Sky Islands", desc: "Floating paradises connected by rainbow bridges"},
                {name: "Underground Base", desc: "A secret hideout carved into bedrock"},
                {name: "Pixel Art World", desc: "Gigantic artwork recreated in blocks"},
                {name: "Ocean Temple", desc: "An underwater palace with guardian statues"}
              ].map((item, index) => (
                <Card key={index} className="group overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-emerald-200/30 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 transform-gpu">
                  <div className="relative h-64 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                    <span className="relative z-10 text-white text-2xl font-bold text-center px-4" style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      textShadow: '0 4px 8px rgba(0,0,0,0.5)'
                    }}>
                      {item.name}
                    </span>
                    <div className="absolute top-4 right-4">
                      <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3" style={{
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-8 h-8">
            <Gem className="w-full h-full text-emerald-300 animate-float-minecraft opacity-30" />
          </div>
          <div className="absolute bottom-20 right-10 w-10 h-10">
            <Crown className="w-full h-full text-yellow-300 animate-float-minecraft opacity-30" style={{animationDelay: '2s'}} />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="minecraft-title text-4xl text-center mb-12 text-minecraft-stone">Current Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-minecraft-wood">
                <h3 className="minecraft-title text-2xl mb-4 text-minecraft-stone">Medieval Castle</h3>
                <div className="h-32 bg-gradient-to-br from-minecraft-stone to-minecraft-wood mb-4 rounded"></div>
                <p className="text-gray-700 mb-4">
                  Building a massive medieval castle complete with towers, a moat, and hidden passages!
                </p>
                <div className="bg-minecraft-grass/20 p-3 rounded">
                  <div className="text-sm text-gray-600 mb-1">Progress</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-minecraft-grass h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">65% Complete</div>
                </div>
              </Card>

              <Card className="p-6 border-red-500">
                <h3 className="minecraft-title text-2xl mb-4 text-minecraft-stone">Redstone Computer</h3>
                <div className="h-32 bg-gradient-to-br from-red-500 to-red-700 mb-4 rounded"></div>
                <p className="text-gray-700 mb-4">
                  Creating a working calculator using only redstone circuits. It's tricky but super fun!
                </p>
                <div className="bg-red-100 p-3 rounded">
                  <div className="text-sm text-gray-600 mb-1">Progress</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">30% Complete</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-green-50/70 to-emerald-50/70">
          <div className="max-w-6xl mx-auto">
            <h2 className="minecraft-title text-4xl text-center mb-12 text-minecraft-stone">Inventory</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "Diamond Sword", desc: "Sharpness IV, Unbreaking III", color: "from-cyan-500 to-blue-600" },
                { name: "Pickaxe", desc: "Efficiency V, Mending", color: "from-emerald-500 to-green-600" },
                { name: "Shield", desc: "Banner: Luca Crest", color: "from-yellow-400 to-orange-500" },
                { name: "Elytra", desc: "Firework Boosts Ready", color: "from-purple-500 to-fuchsia-600" },
                { name: "Totem of Undying", desc: "Emergency Save", color: "from-amber-400 to-rose-500" },
                { name: "Golden Carrots", desc: "x64 Stack", color: "from-orange-400 to-amber-500" },
              ].map((item) => (
                <Card key={item.name} className="overflow-hidden border-2 border-emerald-200/50 bg-white/80 backdrop-blur-sm shadow-sm">
                  <div className={`h-24 bg-gradient-to-br ${item.color} relative`}></div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-gray-600">{item.desc}</p>
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

export default LucaPage;
