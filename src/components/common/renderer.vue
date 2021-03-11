<template>
  <board-index
    v-if="collection === 'board' && document === 'list'"
  ></board-index>
  <board-content
    v-else-if="collection === 'board'"
    :document="document"
  ></board-content>
  <page-index
    v-else-if="collection === 'page' && document === 'list'"
  ></page-index>
  <page-content
    v-else-if="collection === 'page'"
    :document="document"
  ></page-content>
  <error-page v-else></error-page>
</template>

<script>
import BoardIndex from "@/views/board/index";
import BoardContent from "@/views/board/content";
import PageIndex from "@/views/page/index";
import PageContent from "@/views/page/content";
import ErrorPage from "@/views/PageNotFound";
export default {
  components: { BoardIndex, BoardContent, PageIndex, PageContent, ErrorPage },
  computed: {
    collection() {
      return this.$route.params.collection;
    },
    document() {
      return this.$route.params.document;
    }
  }
};
</script>

<style></style>
