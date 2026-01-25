import { type Metadata } from 'next';
import { productCategories } from '@/lib/products';
import { CategoryPageClient } from '@/components/category-page-client';

export const metadata: Metadata = {
  title: 'Kies & Zierkies | ROCK DEALER',
  description: 'Vielseitige Naturmaterialien für Wege, Gärten und Terrassen.',
};

export default function KiesZierkiesPage() {
    const category = productCategories.find(c => c.id === 'kies');
    
    if (!category) {
        // In a real app, you'd redirect or show a 404 page.
        // For this build, we assume the data is correct.
        return null;
    }

    const intro = "Vielseitige Naturmaterialien für Wege, Gärten und Terrassen.";

    return <CategoryPageClient category={category} intro={intro} />;
}
