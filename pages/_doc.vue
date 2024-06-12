<template>
  <div>
    <NuxtContent :document="doc" />
  </div>
</template>

<script>
export default {
  transition: {
    name: "page",
    mode: "out-in",
  },
  async asyncData({ $content, params }) {
    const doc = await $content("documentation", params.doc).fetch();
    return { doc };
  },
};
</script>
