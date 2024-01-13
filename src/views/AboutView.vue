
<template>
  <Text />
  <Tabulka />
  <Reviews />
  

</template>

<script>
import Tabulka from  '@/components/TabulkaComponent.vue';
import Text from  '@/components/TextComponent.vue';
import Reviews from  '@/components/ReviewComponent.vue';

export default {
components: {
  Tabulka,
  Text,
  Reviews,

},
};
</script>
