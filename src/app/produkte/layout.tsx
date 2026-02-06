import { CategoryNav } from '@/components/category-nav';

export default function ProdukteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background">
      <CategoryNav />
      {children}
    </main>
  );
}
