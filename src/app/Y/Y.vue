<template>
  <div :class="$style.y">
    Y
  </div>
</template>

<script lang="ts">
export default {
  name: 'Y',
  components: {},
  props: {},
  data: (): any => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.y {
  // this class is only applied if you add css properties
}
</style>
