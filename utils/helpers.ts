// Helper to parse price strings like "$15", "$15 (Half) / $25 (Full)"
export const parsePrice = (priceStr: string): number => {
  if (!priceStr) return 0;
  // Extract the first numeric value found in the string
  const match = priceStr.match(/\$?(\d+(\.\d{1,2})?)/);
  return match ? parseFloat(match[1]) : 0;
};

// Helper to get image based on category if specific image is missing
export const getCategoryImage = (category: string, index: number): string => {
  // Collection of high-quality Unsplash images for Indian food categories
  const images: Record<string, string[]> = {
    'Appetizers': [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600",
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=600",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600"
    ],
    'Tandoor': [
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600",
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600"
    ],
    'Chicken': [
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=600",
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600"
    ],
    'Lamb & Goat': [
      "https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=600",
      "https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=600"
    ],
    'Seafood': [
      "https://images.unsplash.com/photo-1615141982880-13167b6ed3e1?q=80&w=600"
    ],
    'Vegetarian': [
      "https://images.unsplash.com/photo-1517244683847-745431d57ede?q=80&w=600",
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=600"
    ],
    'Biryani': [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600"
    ],
    'Breads': [
      "https://images.unsplash.com/photo-1610192244261-3f33de3f55e0?q=80&w=600"
    ],
    'Desserts': [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600"
    ],
    'Beverages': [
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=600"
    ]
  };

  const categoryImages = images[category] || images['Appetizers'];
  // Return a deterministic image based on index to keep it consistent
  return categoryImages[index % categoryImages.length];
};
