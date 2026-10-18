// Characters sourced from the Steal a Brainrot Wiki (stealabrainrot.fandom.com).
// incomePerSec is the base in-game income; price is the BrainrotDrop coin value (1M/s = 10 coins).
export type Tier = "rare" | "epic" | "legendary" | "mythic" | "og"

export interface Brainrot {
  id: string
  name: string
  incomePerSec: number
  price: number
  rarity: "Secret" | "OG"
  tier: Tier
  image: string
}

export const BRAINROTS: Brainrot[] = [
  { id: "money-money-puggy", name: "Money Money Puggy", incomePerSec: 21000000, price: 210, rarity: "Secret", tier: "rare", image: "/img/brainrots/money-money-puggy.png" },
  { id: "bat-in-the-box", name: "Bat-in-the-Box", incomePerSec: 22500000, price: 225, rarity: "Secret", tier: "rare", image: "/img/brainrots/bat-in-the-box.png" },
  { id: "los-bros", name: "Los Bros", incomePerSec: 24000000, price: 240, rarity: "Secret", tier: "rare", image: "/img/brainrots/los-bros.png" },
  { id: "chillin-chili", name: "Chillin Chili", incomePerSec: 25000000, price: 250, rarity: "Secret", tier: "rare", image: "/img/brainrots/chillin-chili.png" },
  { id: "tosto-dino", name: "Tosto Dino", incomePerSec: 27000000, price: 270, rarity: "Secret", tier: "rare", image: "/img/brainrots/tosto-dino.png" },
  { id: "tralaledon", name: "Tralaledon", incomePerSec: 27500000, price: 275, rarity: "Secret", tier: "rare", image: "/img/brainrots/tralaledon.png" },
  { id: "lavamanta", name: "Lavamanta", incomePerSec: 28500000, price: 285, rarity: "Secret", tier: "rare", image: "/img/brainrots/lavamanta.png" },
  { id: "esok-sekolah", name: "Esok Sekolah", incomePerSec: 30000000, price: 300, rarity: "Secret", tier: "rare", image: "/img/brainrots/esok-sekolah.png" },
  { id: "tang-tang-keletang", name: "Tang Tang Keletang", incomePerSec: 33500000, price: 335, rarity: "Secret", tier: "rare", image: "/img/brainrots/tang-tang-keletang.png" },
  { id: "ketupat-kepat", name: "Ketupat Kepat", incomePerSec: 35000000, price: 350, rarity: "Secret", tier: "rare", image: "/img/brainrots/ketupat-kepat.png" },
  { id: "la-taco-combinasion", name: "La Taco Combinasion", incomePerSec: 35000000, price: 350, rarity: "Secret", tier: "rare", image: "/img/brainrots/la-taco-combinasion.png" },
  { id: "tictac-sahur", name: "Tictac Sahur", incomePerSec: 37500000, price: 375, rarity: "Secret", tier: "rare", image: "/img/brainrots/tictac-sahur.png" },
  { id: "los-puggies", name: "Los Puggies", incomePerSec: 40000000, price: 400, rarity: "Secret", tier: "epic", image: "/img/brainrots/los-puggies.png" },
  { id: "swaggy-bros", name: "Swaggy Bros", incomePerSec: 40000000, price: 400, rarity: "Secret", tier: "epic", image: "/img/brainrots/swaggy-bros.png" },
  { id: "ketchuru-and-musturu", name: "Ketchuru and Musturu", incomePerSec: 42500000, price: 425, rarity: "Secret", tier: "epic", image: "/img/brainrots/ketchuru-and-musturu.png" },
  { id: "rico-dinero", name: "Rico Dinero", incomePerSec: 42500000, price: 425, rarity: "Secret", tier: "epic", image: "/img/brainrots/rico-dinero.png" },
  { id: "gold-gold-gold", name: "Gold Gold Gold", incomePerSec: 45000000, price: 450, rarity: "Secret", tier: "epic", image: "/img/brainrots/gold-gold-gold.png" },
  { id: "garama-and-madundung", name: "Garama and Madundung", incomePerSec: 50000000, price: 500, rarity: "Secret", tier: "epic", image: "/img/brainrots/garama-and-madundung.png" },
  { id: "nacho-spyder", name: "Nacho Spyder", incomePerSec: 50000000, price: 500, rarity: "Secret", tier: "epic", image: "/img/brainrots/nacho-spyder.png" },
  { id: "spaghetti-tualetti", name: "Spaghetti Tualetti", incomePerSec: 60000000, price: 600, rarity: "Secret", tier: "epic", image: "/img/brainrots/spaghetti-tualetti.png" },
  { id: "queen-bee", name: "Queen Bee", incomePerSec: 65000000, price: 650, rarity: "Secret", tier: "epic", image: "/img/brainrots/queen-bee.png" },
  { id: "los-spaghettis", name: "Los Spaghettis", incomePerSec: 70000000, price: 700, rarity: "Secret", tier: "epic", image: "/img/brainrots/los-spaghettis.png" },
  { id: "los-hackers", name: "Los Hackers", incomePerSec: 75000000, price: 750, rarity: "Secret", tier: "epic", image: "/img/brainrots/los-hackers.png" },
  { id: "la-food-combinasion", name: "La Food Combinasion", incomePerSec: 90000000, price: 900, rarity: "Secret", tier: "epic", image: "/img/brainrots/la-food-combinasion.png" },
  { id: "fragrama-and-chocrama", name: "Fragrama and Chocrama", incomePerSec: 100000000, price: 1000, rarity: "Secret", tier: "legendary", image: "/img/brainrots/fragrama-and-chocrama.png" },
  { id: "cash-or-card", name: "Cash or Card", incomePerSec: 100000000, price: 1000, rarity: "Secret", tier: "legendary", image: "/img/brainrots/cash-or-card.png" },
  { id: "fishino-clownino", name: "Fishino Clownino", incomePerSec: 120000000, price: 1200, rarity: "Secret", tier: "legendary", image: "/img/brainrots/fishino-clownino.png" },
  { id: "antonio", name: "Antonio", incomePerSec: 125000000, price: 1250, rarity: "Secret", tier: "legendary", image: "/img/brainrots/antonio.png" },
  { id: "burguro-and-fryuro", name: "Burguro And Fryuro", incomePerSec: 150000000, price: 1500, rarity: "Secret", tier: "legendary", image: "/img/brainrots/burguro-and-fryuro.png" },
  { id: "los-secret-combinasionas", name: "Los Secret Combinasionas", incomePerSec: 150000000, price: 1500, rarity: "Secret", tier: "legendary", image: "/img/brainrots/los-secret-combinasionas.png" },
  { id: "cola-cat", name: "Cola Cat", incomePerSec: 160000000, price: 1600, rarity: "Secret", tier: "legendary", image: "/img/brainrots/cola-cat.png" },
  { id: "celestial-pegasus", name: "Celestial Pegasus", incomePerSec: 175000000, price: 1750, rarity: "Secret", tier: "legendary", image: "/img/brainrots/celestial-pegasus.png" },
  { id: "elefanto-frigo", name: "Elefanto Frigo", incomePerSec: 185000000, price: 1850, rarity: "Secret", tier: "legendary", image: "/img/brainrots/elefanto-frigo.png" },
  { id: "la-supreme-combinasion", name: "La Supreme Combinasion", incomePerSec: 200000000, price: 2000, rarity: "Secret", tier: "legendary", image: "/img/brainrots/la-supreme-combinasion.png" },
  { id: "digi-narwhal", name: "Digi Narwhal", incomePerSec: 200000000, price: 2000, rarity: "Secret", tier: "legendary", image: "/img/brainrots/digi-narwhal.png" },
  { id: "arcadragon", name: "Arcadragon", incomePerSec: 215000000, price: 2150, rarity: "Secret", tier: "legendary", image: "/img/brainrots/arcadragon.png" },
  { id: "signore-carapace", name: "Signore Carapace", incomePerSec: 275000000, price: 2750, rarity: "Secret", tier: "legendary", image: "/img/brainrots/signore-carapace.png" },
  { id: "hydra-dragon-cannelloni", name: "Hydra Dragon Cannelloni", incomePerSec: 300000000, price: 3000, rarity: "Secret", tier: "mythic", image: "/img/brainrots/hydra-dragon-cannelloni.png" },
  { id: "dragon-skeletonini", name: "Dragon Skeletonini", incomePerSec: 325000000, price: 3250, rarity: "Secret", tier: "mythic", image: "/img/brainrots/dragon-skeletonini.png" },
  { id: "griffin", name: "Griffin", incomePerSec: 400000000, price: 4000, rarity: "Secret", tier: "mythic", image: "/img/brainrots/griffin.png" },
  { id: "los-dragons", name: "Los Dragons", incomePerSec: 425000000, price: 4250, rarity: "Secret", tier: "mythic", image: "/img/brainrots/los-dragons.png" },
  { id: "phoenix", name: "Phoenix", incomePerSec: 425000000, price: 4250, rarity: "Secret", tier: "mythic", image: "/img/brainrots/phoenix.png" },
  { id: "skibidi-toilet", name: "Skibidi Toilet", incomePerSec: 450000000, price: 4500, rarity: "OG", tier: "og", image: "/img/brainrots/skibidi-toilet.png" },
  { id: "john-pork", name: "John Pork", incomePerSec: 500000000, price: 5000, rarity: "OG", tier: "og", image: "/img/brainrots/john-pork.png" },
  { id: "headless-horseman", name: "Headless Horseman", incomePerSec: 600000000, price: 6000, rarity: "OG", tier: "og", image: "/img/brainrots/headless-horseman.webp" },
  { id: "meowl", name: "Meowl", incomePerSec: 600000000, price: 6000, rarity: "OG", tier: "og", image: "/img/brainrots/meowl.png" },
  { id: "strawberry-elephant", name: "Strawberry Elephant", incomePerSec: 750000000, price: 7500, rarity: "OG", tier: "og", image: "/img/brainrots/strawberry-elephant.png" },
  { id: "spyder-elephant", name: "Spyder Elephant", incomePerSec: 1000000000, price: 10000, rarity: "OG", tier: "og", image: "/img/brainrots/spyder-elephant.png" },
]

export const BRAINROT_BY_ID: Record<string, Brainrot> = Object.fromEntries(
  BRAINROTS.map((b) => [b.id, b]),
)

export const WIKI_URL = "https://stealabrainrot.fandom.com/wiki/"

export function wikiLink(b: Brainrot) {
  return WIKI_URL + encodeURIComponent(b.name.replace(/ /g, "_"))
}

export const TIER_META: Record<Tier, { label: string; color: string; glow: string }> = {
  rare: { label: "Secret", color: "#38bdf8", glow: "rgba(56,189,248,.45)" },
  epic: { label: "Secret+", color: "#a855f7", glow: "rgba(168,85,247,.5)" },
  legendary: { label: "Legendary", color: "#f59e0b", glow: "rgba(245,158,11,.55)" },
  mythic: { label: "Mythic", color: "#ef4444", glow: "rgba(239,68,68,.55)" },
  og: { label: "OG", color: "#f472b6", glow: "rgba(244,114,182,.6)" },
}
