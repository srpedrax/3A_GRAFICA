import { LucideIcon } from "lucide-react";

export interface ProductItem {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  isWholesale?: boolean; // Para identificar o card de atacado
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}