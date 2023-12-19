<script setup lang="ts">
import type {
  IFormCheckboxInput,
  VFormInputBaseProps,
} from '@/components/types';
import {
  ref,
  watch,
} from 'vue';

interface VFormCheckboxProps extends IFormCheckboxInput, VFormInputBaseProps {
}

const props = withDefaults(defineProps<VFormCheckboxProps>(), {});

const innerValue = ref<boolean>();

function setValue(newValue: boolean): void {
  innerValue.value = newValue;
}

watch(() => props.value, setValue, {
  immediate: true,
});
</script>

<template>
<div>
  <label>
    <input type="checkbox" v-model="innerValue" />
    {{ label }}
  </label>
</div>
</template>
