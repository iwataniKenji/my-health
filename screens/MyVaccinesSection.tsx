import { Searchbar } from "../components/Searchbar";
import { CardsSection } from "../components/CardsSection";
import { MainScreenLayout } from "../layouts/MainScreenLayout";

export function MyVaccinesSection() {
  return (
    <MainScreenLayout toolbarTitle="Minhas vacinas">
      <Searchbar />
      <CardsSection />
    </MainScreenLayout>
  );
}
