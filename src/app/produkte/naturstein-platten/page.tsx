import { type Metadata } from 'next';
import { productCategories } from '@/lib/products';
import { CategoryPageClient } from '@/components/category-page-client';

export const metadata: Metadata = {
  title: 'Naturstein-Platten | ROCK DEALER',
  description: 'Hochwertige Natursteinplatten für zeitlose Außenbereiche.',
};

export default function NatursteinPlattenPage() {
    const category = productCategories.find(c => c.id === 'naturstein-platten');
    
    if (!category) return null;

    const intro = "Hochwertige Natursteinplatten für zeitlose Außenbereiche.";

    return <CategoryPageClient category={category} intro={intro} />;
}
