<!--
* @Component: CopyLabel
* @Maintainer: Hill Pan
* @Description:
-->
<script setup lang="ts">
import {onUnmounted} from "vue";
import ClipboardJS from "clipboard";

// ToolTip
const tooltip = ref<string>("Click to copy");
// SnackBar
const snackbar = ref<boolean>(false);
const timeout = ref<number>(1000);
const promptMsg = "Copied to clipboard!";
// Copy Animation Flag
const heartBeat = ref<boolean>(false);
// Props
const props = defineProps({
  // Text to copy to clipboard
  text: {
    type: String,
    default: "",
  },
});

const { text } = toRefs(props);

const myClipboard = new ClipboardJS('.copyLabel', {
  text: function (trigger) {
    trigger.classList.toggle('heartBeat');
    snackbar.value = true;

    setTimeout(() => {
      trigger.classList.toggle('heartBeat');
    }, 1000);

    // console.debug("Copied \"" + trigger.textContent + "\" to clipboard!");

    return trigger.textContent? trigger.textContent : "";
  }
});

// myClipboard.on('success', function(e) {
//   // hill debug
//   console.debug("复制成功，内容为：",e.text);
//   console.debug("操作类型：", e.action);
//   console.debug("触发元素：", e.trigger);
//
//   // myClipboard.destroy();  // 注：不能销毁，否则只能复制一次，后续无法复制
// });

myClipboard.on('error', function(e) {
  console.debug("Failed to Copy!");
  console.debug("Action type:", e.action);
  console.debug("Trigger target：", e.trigger);
});

// life cycle -------------------------------------------------------------
onUnmounted(() => {
  myClipboard.destroy();
});
</script>

<template>
  <v-snackbar v-model="snackbar" :timeout="timeout">
    {{ promptMsg }}
    <template v-slot:actions>
      <v-btn :active="true" density="compact" icon="mdi-close-circle-outline" @click="snackbar = false"></v-btn>
    </template>
  </v-snackbar>
  <v-tooltip location="bottom">
    <template v-slot:activator="{ props }">
      <span
          :class="{ heartBeat: heartBeat === true, }"
          class="text copyLabel"
          v-bind="props"
      >
        {{ text }}
      </span>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<style scoped lang="scss">
.text {
  cursor: pointer;
  display: inline-block;
  border-bottom: 1px dashed;
}

.heartBeat {
  animation: heartBeat 0.5s;
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
}
</style>
