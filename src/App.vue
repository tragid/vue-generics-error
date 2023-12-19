<script setup lang="ts">
// empty
import VCheckbox from '@/components/VCheckbox/VCheckbox.vue';
import VTextInput from '@/components/VTextInput/VTextInput.vue';
import { ref } from 'vue';

const checkboxValue = ref(true);
const textValue = ref('');
</script>

<template>
  <div>
    Error 2

    <VCheckbox :value="checkboxValue" />
    <VTextInput :value="textValue" />
  </div>
</template>
