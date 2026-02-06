import { ProductItem, NavLink, GalleryItem } from "./types";

export const COLORS = {
  black: "#121212",
  orange: "#FF6600",
  grey: "#C0C0C0",
  darkGrey: "#1E1E1E",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Atacado", href: "#atacado-card" }, // Link direto para o card
  { label: "Contato", href: "#contato" },
];

export const CATEGORIES = ["Todos", "Camisas", "Bonés", "Canecas", "Brindes"];

export const PRODUCTS: ProductItem[] = [
  {
    id: "1",
    title: "Camisa Algodão Premium",
    category: "Camisas",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500",
    description: "Malha 30.1 penteada com estampa em silk HD.",
  },
  {
    id: "2",
    title: "Boné Trucker Logo",
    category: "Bonés",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=500",
    description: "Tela respirável e bordado 3D de alta precisão.",
  },
  {
    id: "3",
    title: "Caneca Mágica",
    category: "Canecas",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=500",
    description: "Revela a imagem com líquido quente. Cerâmica AAA.",
  },
  {
    id: "4",
    title: "Camisa Dry-Fit Sport",
    category: "Camisas",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=500",
    description: "Tecido tecnológico para alta performance e sublimação total.",
  },
  {
    id: "5",
    title: "Chaveiro Acrílico",
    category: "Brindes",
    image: "https://images.unsplash.com/photo-1616616422792-7104b383eb6d?auto=format&fit=crop&q=80&w=500",
    description: "Corte a laser com acabamento impecável.",
  },
  {
    id: "6",
    title: "Kit Corporativo",
    category: "Brindes",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=500",
    description: "Agenda, caneta e garrafa térmica personalizadas.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Pôster Cyberpunk",
    category: "Geek",
    imageUrl: "https://images.unsplash.com/photo-1620641788421-7f1c918e62f9?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "2",
    title: "Arte Digital",
    category: "Geek",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "3",
    title: "Setup Gamer",
    category: "Setup",
    imageUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "4",
    title: "Neon City",
    category: "Decor",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=500",
  },
];

export const WHATSAPP_LINK = "https://wa.me/5511999999999";