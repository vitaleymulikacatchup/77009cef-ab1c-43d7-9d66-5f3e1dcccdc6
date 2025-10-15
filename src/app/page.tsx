"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "hero_image", url: "https://images.pexels.com/photos/2061886/pexels-photo-2061886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Portrait of a stylish young man smoking under a graffiti-covered bridge, adding urban flair." },
  { id: "product_1", url: "https://images.pexels.com/photos/5128093/pexels-photo-5128093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Colorful eyelash brushes and tweezers on a marble surface. Perfect for beauty and cosmetic themes." },
  { id: "product_2", url: "https://images.pexels.com/photos/238230/pexels-photo-238230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Flat lay of modern lifestyle items including a knife, smartphone, and vape on a wooden surface." },
  { id: "product_3", url: "https://images.pexels.com/photos/14289163/pexels-photo-14289163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Portrait of a woman with curly hair vaping indoors, featuring smoke and a relaxed expression." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Products", id: "products" }, { name: "Contact", id: "contact" }]}
          brandName="Vape Shop"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Explore Premium Vapes"
            description="The finest selection of vaping products to suit your style."
            imageSrc="https://images.pexels.com/photos/2061886/pexels-photo-2061886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Shop Now", href: "products" }]}
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              { id: "1", brand: "VapeCo", name: "Eclipse Motion Pro", price: "$150", rating: 4, reviewCount: "23.9k", imageSrc: "https://images.pexels.com/photos/5128093/pexels-photo-5128093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", brand: "CloudTech", name: "Storm 2000", price: "$99", rating: 5, reviewCount: "12.7k", imageSrc: "https://images.pexels.com/photos/238230/pexels-photo-238230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "3", brand: "FlavorBurst", name: "Tropical Blast", price: "$35", rating: 4, reviewCount: "18.3k", imageSrc: "https://images.pexels.com/photos/14289163/pexels-photo-14289163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
            title="Our Products"
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay in the Loop"
            description="Subscribe to our newsletter for the latest vape news and exclusive offers."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
            imageSrc="https://images.pexels.com/photos/2061886/pexels-photo-2061886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            mediaPosition="right"
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-900 text-white">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Shop", items: [{ label: "All Products", href: "products" }, { label: "New Arrivals", href: "new" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 Vape Shop"
            className="bg-blue-900 text-white"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
