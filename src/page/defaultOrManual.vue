<template>
  <div>
    <h4>Uncertainty allowed</h4>
    <el-switch
      v-model="isSelect"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="Set it manually"
      inactive-text="Default is 0">
    </el-switch>
    <div v-if="isSelect">
      <el-radio v-model="paramsType" label='0'>Read from external file
        <slot name="read" v-if="paramsType==='0'"></slot>
      </el-radio>
      <el-radio v-model="paramsType" label='1'>Set up manually
        <slot name="set" v-if="paramsType==='1'"></slot>
      </el-radio>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'defaultOrManual',
    data() {
      return {
        isSelect: true,
        paramsType: '0'
      };
    }
  }
</script>

<style scoped>

</style>
