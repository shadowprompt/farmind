<template>
  <el-table
    :data="inputArray">
    <el-table-column align="center" label="latitude">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.latitude.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.latitude.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="longitude">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.longitude.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.longitude.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="birth">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.byear.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.byear.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="education">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.education.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.education.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="memory">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.memory.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.memory.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="aspiration">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.aspiration.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.aspiration.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="lambda">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.lambda.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.lambda.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="alpha_plus">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.alpha_plus.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.alpha_plus.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="alpha_minus">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.alpha_minus.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.alpha_minus.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="phi_plus">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.phi_plus.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.phi_plus.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column align="center" label="phi_minus">
      <el-table-column align="center" label="mean">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.phi_minus.mean"
                           placeholder="input mean"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="sd">
        <template slot-scope="scope">
          <el-input-number :controls="false" size="mini" v-model="scope.row.phi_minus.sd"
                           placeholder="input sd"></el-input-number>
        </template>
      </el-table-column>
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    name: 'tableInput',
    props: ['inputArray']
  }
</script>

<style scoped>
  .el-input-number--mini {
    width: 100%;
  }
</style>
