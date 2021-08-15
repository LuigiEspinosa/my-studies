<template>
  <div>
    <BounceLoader :loading="isLoading" :color="'#68d391'" :size="100" />
    <PxAssetsTable v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  components: { PxAssetsTable },

  mounted() {
    this.isLoading = true;

    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
