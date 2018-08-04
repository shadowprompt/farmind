<template>
    <div>
        <NavProgress :steps="steps" :currentIndex="currentIndex"></NavProgress>
        <div>
            <button @click="prev" v-if="hasPrev">上一步</button>
            <button @click="next" v-if="hasNext">下一步</button>
        </div>
        <component :is="comps[currentIndex]" ref="dynamic"></component>

    </div>

</template>
<script>
import NavProgress from "./NavProgress";

export default {
  name: "Program",
  components: { NavProgress },
  data() {
    return {
      index: 0,
      steps: [
        { label: "参数化" },
        { label: "初始化" },
        { label: "设置MP" },
        { label: "完成" }
      ],
      comps: [() => import("./firstStep")]
    };
  },
  mounted() {
    window.v = this;
  },
  computed: {
    hasPrev() {
      return this.currentIndex > 0;
    },
    hasNext() {
      return this.currentIndex < this.steps.length - 1;
    },
    currentIndex: {
      get() {
        return this.index;
      },
      set(val) {
        this.index = val;

      }
    }
  },
  methods: {
    next() {
      if (this.currentIndex < this.steps.length - 1) {
        this.currentIndex++;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
};
</script>
