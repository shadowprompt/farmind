<template>
  <el-table border :data="data">
    <el-table-column prop="name" align="center" label="name">
    </el-table-column>
    <el-table-column prop="latitude" align="center" label="latitude">
    </el-table-column>
    <el-table-column prop="longitude" align="center" label="longitude">
    </el-table-column>
    <el-table-column prop="byear" align="center" label="byear">
    </el-table-column>
    <el-table-column prop="education" align="center" label="education">
    </el-table-column>
    <el-table-column prop="memory" align="center" label="memory">
    </el-table-column>
    <el-table-column prop="aspiration" align="center" label="aspiration">
    </el-table-column>
    <el-table-column
      prop="tolerance_income"
      align="center"
      label="tolerance_income"
    >
    </el-table-column>
    <el-table-column
      prop="tolerance_activity"
      align="center"
      label="tolerance_activity"
    >
    </el-table-column>
    <el-table-column prop="lambda" align="center" label="lambda">
    </el-table-column>
    <el-table-column prop="alpha_plus" align="center" label="alpha_plus">
    </el-table-column>
    <el-table-column prop="alpha_minus" align="center" label="alpha_minus">
    </el-table-column>
    <el-table-column prop="phi_plus" align="center" label="phi_plus">
    </el-table-column>
    <el-table-column prop="phi_minus" align="center" label="phi_minus">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'TableData',
  props: ['data'],
};
</script>
