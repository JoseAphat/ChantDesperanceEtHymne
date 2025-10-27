import SongListScreen from "../components/SongListScreen";
import Vcreole from "./VersionCreole";

export default function NewCreole() {
  return (
    <SongListScreen
      data={Vcreole}
      headerTitle="C.E Francais V. Créole"
      category="C.E Francais V.Créole"
      previousTitle="C.E Version Créole"
      normalizeMode="creole"
    />
  );
}
