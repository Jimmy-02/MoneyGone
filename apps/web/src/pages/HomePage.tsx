import { HomeHero } from "../components/HomeHero";
import { TrustStrip } from "../components/TrustStrip";
import { useHomeCatalog } from "../hooks/useHomeCatalog";

const HomePage = () => {
  
  const {
    categories,
    loadingCategories,
  } = useHomeCatalog();
  return (
    <div className="space-y-12">
      <HomeHero categories={categories} loadingCategories={loadingCategories} />

      <TrustStrip/>
    </div>
  );
}

export default HomePage