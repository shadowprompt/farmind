<template>
  <div>
    <step-indicator :steps="steps" :current-index.sync="stepIndex"></step-indicator>
    <section class="step-container">
      <component :is="currentComponent" ref="dynamic"></component>
    </section>
  </div>
</template>
<script>
import StepIndicator from '../components/StepIndicator';

export default {
  name: 'Index',
  components: { StepIndicator },
  data() {
    return {
      stepIndex: 0,
      steps: [
        {
          label: '参数化',
          component: () => import('./firstStep'),
        },
        { label: '初始化' },
        { label: '设置MP' },
        { label: '完成' },
      ],
    };
  },
  mounted() {
    window.v = this;
  },
  computed: {
    currentStep() {
      return this.steps[this.stepIndex];
    },
    currentComponent() {
      return this.currentStep.component;
    },
  },
  methods: {

  },
};
</script>
