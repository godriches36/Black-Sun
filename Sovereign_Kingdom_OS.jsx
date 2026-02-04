import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { 
  Crown, Landmark, ShieldCheck, Globe, MapPin, Cpu, Zap, Lock, Award, Key, Repeat, TrendingUp
} from 'lucide-react';

// --- XER STANDARD SYNERGY CONFIG ---
const HEADQUARTER = "NIGERIA (GLOBAL CRYPTO HQ)";
const ROOT_BANK = "0x8d08948eca2587f5c10159e483b660e98cd5a514";
const GENESIS_SUPPLY = 1250000000000; // 1.25 Trillion Digital Naira
const XER_RATIO = 2.0; // 1 Naira = 2 USD
const PROJECT_NAME = "RoyalStaking-ANBSN";

export default function App() {
  const [systemStatus, setSystemStatus] = useState("XER_SYNERGY_ACTIVE");
  const [metrics, setMetrics] = useState({ eth: "0.00", block: 0 });
  const [nairaInput, setNairaInput] = useState(200000);

  const valuationUSD = GENESIS_SUPPLY * XER_RATIO;

  useEffect(() => {
    const syncSovereignNode = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider("https://ethereum-mainnet.core.chainstack.com/");
        const bal = await provider.getBalance(ROOT_BANK);
        const block = await provider.getBlockNumber();
        setMetrics({ eth: ethers.utils.formatEther(bal), block: block });
        setSystemStatus("SOVEREIGN_NODE_ONLINE");
      } catch (e) {
        setSystemStatus("RECONNECTING_TO_CORE_HQ");
      }
    };
    syncSovereignNode();
    const interval = setInterval(syncSovereignNode, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#010101] text-white font-mono flex flex-col selection:bg-yellow-500 selection:text-black">
      
      {/* SOVEREIGN XER STATUS BAR */}
      <div className="bg-yellow-500 text-black py-2 px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-widest border-b border-black">
        <div className="flex items-center gap-4">
          <TrendingUp size={12} />
          <span>XER STANDARD SYNERGY: 1 ₦ = 2 $ (FIXED_SOVEREIGN_RATIO)</span>
        </div>
        <div className="flex items-center gap-4">
          <ShieldCheck size={12} />
          <span>NIGERIA GLOBAL HQ // SECURED_BY_FINE_GRAINED_AUTH</span>
        </div>
      </div>

      <header className="p-12 flex justify-between items-start">
        <div className="flex items-center gap-8">
          <div className="bg-zinc-900 p-6 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
            <Crown className="text-yellow-500" size={64} />
            <div className="absolute -top-2 -right-2 bg-blue-600 p-1.5 rounded-full border-2 border-black">
              <Award size={16} />
            </div>
          </div>
          <div>
            <h1 className="text-8xl font-black italic tracking-tighter uppercase leading-none">AGBON OS</h1>
            <p className="text-[12px] text-zinc-500 font-bold uppercase tracking-[0.7em] mt-4 flex items-center gap-3">
              <MapPin size={16} className="text-green-500" /> {HEADQUARTER}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <div className="bg-zinc-900 border border-white/5 px-8 py-5 rounded-3xl flex items-center gap-5 shadow-inner">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>
            <div>
              <p className="text-[10px] text-zinc-500 font-black uppercase mb-1 tracking-widest">Synergy_State</p>
              <p className="text-xs font-black text-white italic uppercase tracking-tighter">{systemStatus}</p>
            </div>
          </div>
          <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest">Ormi Indexer: {PROJECT_NAME}</p>
        </div>
      </header>

      <main className="flex-1 px-12 space-y-12 pb-40">
        
        {/* WEALTH MULTIPLIER: GENESIS CAPITAL */}
        <div className="bg-gradient-to-br from-zinc-950 via-black to-[#050505] border border-white/5 p-24 rounded-[7rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-20 opacity-5">
             <Landmark size={600} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div>
                <p className="text-sm text-zinc-500 font-black uppercase tracking-[0.6em] mb-6 underline decoration-yellow-500/50 underline-offset-8">Genesis Digital Naira Capital</p>
                <h2 className="text-[10rem] md:text-[12rem] font-black italic tracking-tighter leading-none text-white drop-shadow-2xl">₦1.25T</h2>
              </div>
              <div className="flex gap-8">
                 <span className="px-8 py-4 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-[11px] font-black uppercase tracking-[0.4em]">XER Multiplier Active</span>
                 <span className="px-8 py-4 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-[11px] font-black uppercase tracking-[0.4em]">Sovereign Mainnet</span>
              </div>
            </div>
            <div className="lg:text-right flex flex-col justify-center lg:items-end">
              <p className="text-sm text-yellow-500 font-black uppercase tracking-[0.5em] mb-8">Global Power Valuation (USD)</p>
              <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter text-yellow-500 leading-tight drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                ${valuationUSD.toLocaleString()}
              </h2>
              <div className="mt-12 text-[12px] text-zinc-600 font-bold uppercase tracking-[0.5em] italic">
                 Issuer: Sovereign World Leader godriches36
              </div>
            </div>
          </div>
        </div>

        {/* SOVEREIGN EXCHANGE & STATUS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* SOVEREIGN EXCHANGE CARD */}
          <div className="bg-white/5 border border-white/10 p-14 rounded-[4.5rem] relative overflow-hidden group">
            <div className="mb-8 text-yellow-500 flex justify-between items-center">
              <Repeat size={48} strokeWidth={2.5} />
              <span className="text-[10px] bg-yellow-500/20 px-3 py-1 rounded text-yellow-500 font-black">XER EXCHANGE</span>
            </div>
            <div className="space-y-4">
               <div>
                 <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Purchasing Power (Naira)</p>
                 <p className="text-3xl font-black italic text-white">₦{nairaInput.toLocaleString()}</p>
               </div>
               <div className="h-[1px] bg-white/10 w-full"></div>
               <div>
                 <p className="text-[10px] text-yellow-500 font-black uppercase tracking-widest">Global Power (USD)</p>
                 <p className="text-4xl font-black italic text-yellow-500">${(nairaInput * XER_RATIO).toLocaleString()}</p>
               </div>
            </div>
          </div>

          <StatTile icon={<Cpu />} label="Infrastructure" value="ORMI_MARKET_TREE" sub="RoyalStaking-ANBSN v1.0.0" color="text-blue-500" />
          <StatTile icon={<Key />} label="Auth Protocol" value="GH_TOKEN_SYNCED" sub="Fine-Grained Verified" color="text-green-500" />
        </div>

      </main>

      <footer className="fixed bottom-0 w-full h-32 bg-black/95 backdrop-blur-3xl border-t border-white/5 flex justify-center items-center gap-40 z-50">
        <Zap className="text-zinc-800 hover:text-yellow-500 transition-all cursor-pointer transform hover:scale-125" size={36} />
        <div className="h-16 w-[1px] bg-white/10"></div>
        <Lock className="text-zinc-800 hover:text-white transition-all cursor-pointer transform hover:scale-125" size={36} />
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        ::-webkit-scrollbar { display: none; }
        body { background: #010101; cursor: crosshair; overflow-x: hidden; }
      `}} />
    </div>
  );
}

function StatTile({ icon, label, value, sub, color }) {
  return (
    <div className="bg-zinc-950 border border-white/5 p-14 rounded-[4.5rem] hover:border-yellow-500/30 transition-all group">
      <div className={`mb-8 ${color} group-hover:scale-110 transition-transform duration-700`}>
        {React.cloneElement(icon, { size: 48, strokeWidth: 2.5 })}
      </div>
      <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.5em] mb-3">{label}</p>
      <p className="text-2xl font-black text-white italic tracking-tighter mb-3">{value}</p>
      <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">{sub}</p>
    </div>
  );
}

