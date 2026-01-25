import { type Metadata } from 'next';
import { productCategories } from '@/lib/products';
import { CategoryPageClient } from '@/components/category-page-client';

export const metadata: Metadata = {
  title: 'Bruchstein | ROCK DEALER',
  description: 'Charakterstarke Natursteine für moderne und klassische Gartengestaltung.',
};

export default function BruchsteinPage() {
    const category = productCategories.find(c => c.id === 'bruchstein');
    
    if (!category) return null;

    const intro = "Charakterstarke Natursteine für moderne und klassische Gartengestaltung.";

    return <CategoryPageClient category={category} intro={intro} />;
}
