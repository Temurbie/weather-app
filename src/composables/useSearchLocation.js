import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRouteInfo } from "@/storie/useRoutInfo";
import MapBoxSearchCity from "../services/mapBoxSerachCity.ts";

export function useSearchLocation() {
  const searchQuery = ref("");
  const queryTimeout = ref(null);
  const mapBoxSearchResult = ref([]);   // har doim massiv
  const haveError = ref(false);

  const routeInfoPinia = useRouteInfo();
  const router = useRouter();

  const mapboxAPIKey = import.meta.env.VITE_MAPBOX_KEY;

  async function getSearchResult() {
    clearTimeout(queryTimeout.value);

    if (searchQuery.value.trim() !== "") {
      queryTimeout.value = setTimeout(async () => {
        try {
          clearTimeout(queryTimeout.value);

          const result = await MapBoxSearchCity.getCites(
            searchQuery.value,
            mapboxAPIKey
          );

          // har doim massiv qilib beramiz
          mapBoxSearchResult.value = Array.isArray(result) ? result : [];
          haveError.value = false;
        } catch (err) {
          console.error("MapBox search error:", err);
          haveError.value = true;
          mapBoxSearchResult.value = [];
        }
      }, 300);
    } else {
      // agar qidiruv bo‘sh bo‘lsa, massivni tozalaymiz
      mapBoxSearchResult.value = [];
      queryTimeout.value = null;
    }
  }

  function previewCity(result) {
    if (!result?.place_name || !result?.geometry) {
      console.warn("Invalid city result:", result);
      return;
    }

    const parts = result.place_name.split(",");
    const state = parts[0]?.trim() || "unknown";
    const city = parts[1]?.trim() || "unknown";

    routeInfoPinia.setrouteInfo(result);

    router.push({
      name: "cityView",
      params: {
        state,
        city,
      },
      query: {
        lat: result.geometry.coordinates?.[1] ?? 0,
        lon: result.geometry.coordinates?.[0] ?? 0,
        preview: true,
      },
    });
  }

  return {
    getSearchResult,
    searchQuery,
    mapBoxSearchResult,
    haveError,
    previewCity,
  };
}
