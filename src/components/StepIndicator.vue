<template>
  <div class="container">
    <div class="step-indicator">
      <div
        class="item"
        v-for="(item, index) in steps"
        :key="index"
        :class="{ active: currentIndex === index, finish: currentIndex > index }"
        @click="currentIndex >= index && handleClick(index)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="step-controller">
      <button @click="prev" v-if="hasPrev">上一步</button>
      <button @click="next" v-if="hasNext">下一步</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StepIndicator',
  props: ['steps', 'currentIndex'],
  computed: {
    hasPrev() {
      return this.currentIndex > 0;
    },
    hasNext() {
      return this.currentIndex < this.steps.length - 1;
    },
  },
  methods: {
    handleClick(index) {
      console.log('当前点击index ', index);
    },
    next() {
      if (this.currentIndex < this.steps.length - 1) {
        this.$emit('update:currentIndex', this.currentIndex + 1);
        // this.currentIndex++;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.$emit('update:currentIndex', this.currentIndex - 1);
        // this.currentIndex--;
      }
    },
  },
};
</script>

<style lang="scss">
.step-indicator {
  display: flex;
  .item {
    flex: 1;
    position: relative;
    &:not(:first-child):before {
      position: absolute;
      content: '';
      top: 30%;
      left: -40%;
      border: 3px solid green;
      width: 80%;
    }
    &.finish {
      color: gray;
      &::before {
        border: 3px solid gray;
      }
    }
    &.active {
      color: red;
      &::before {
        border: 3px solid red;
      }
    }
  }
}
</style>
