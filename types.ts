import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isChefSpecial?: boolean;
  image?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  source: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CartItem extends MenuItem {
  cartId: string;
  quantity: number;
  parsedPrice: number;
  variant?: string;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}