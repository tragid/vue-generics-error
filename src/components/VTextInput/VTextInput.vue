<script setup lang="ts">
import type {
  IFormTextInput,
  VFormInputBaseProps,
} from '@/components/types';
import {
  ref,
  watch,
} from 'vue';

interface VFormTextInputProps extends IFormTextInput, VFormInputBaseProps {
}

const props = withDefaults(defineProps<VFormTextInputProps>(), {});

const innerValue = ref<string>();

function setValue(newValue?: string): void {
  console.log(newValue);
  innerValue.value = newValue;
}

watch(() => props.value, (newValue, oldValue) => {
  console.log(newValue, oldValue);
  setValue(newValue);
}, {
  immediate: true,
});
</script>

<template>
<div>
  <label>
    <input type="text" v-model="innerValue" />
    {{ label }}
  </label>
</div>
</template>
