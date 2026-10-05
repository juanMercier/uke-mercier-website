import { getCifras } from "@/lib/data";
import CifraReaderClient from "./CifraReaderClient";

export const dynamic = "force-dynamic";

export default async function LeitorDeCifrasPage() {
  const songs = await getCifras();
  return <CifraReaderClient songs={songs} />;
}
