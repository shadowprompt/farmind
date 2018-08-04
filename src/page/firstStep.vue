<template>
    <div>
        <input type="radio" v-model="paramsType" value='0'>外部导入
        <input type="radio" v-model="paramsType" value='1'>手工输入
        <div>
            <template  v-if="paramsType==0">
              <input type="file" id='file' @change="getInfo">
              <tableData :data="paramsDetail" v-if="importComplete"></tableData>
            </template>
            <template v-else>
                <div class="handle">
                  <el-input-number class="handleNumber" controls-position="right" size="mini" :min="1" v-model="number" placeholder="numbers" label="number of farms"></el-input-number><el-button>generate</el-button>
                </div>
                <div class="inputContainer">
                  <el-table
                    :data="inputArray">
                    <el-table-column align="center" label="birth">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.byear.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.byear.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="education">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.education.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.education.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="memory">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.memory.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.memory.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="latitude">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.latitude.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.latitude.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="longitude">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.longitude.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.longitude.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="aspiration">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.aspiration.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.aspiration.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="alpha_plus">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.alpha_plus.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.alpha_plus.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="alpha_minus">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.alpha_minus.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.alpha_minus.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="phi_plus">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.phi_plus.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.phi_plus.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="phi_minus">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.phi_minus.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.phi_minus.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column align="center" label="lambda">
                      <el-table-column align="center" label="mean">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.lambda.mean" placeholder="input mean"></el-input-number>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="sd">
                        <template slot-scope="scope">
                          <el-input-number :controls="false" size="mini" v-model="scope.row.lambda.sd" placeholder="input sd"></el-input-number>
                        </template>
                      </el-table-column>
                    </el-table-column>
                  </el-table>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Papa from "papaparse";
import JSUS from "../utils";

import tableData from '../components/tableData';

import {mapActions, mapState} from 'vuex';

console.log('jsus', JSUS);


const item = {
  latitude: "",
  longitude: "",
  byear: "",
  education: "",
  memory: "",
  beta_l: "",
  beta_s: "",
  beta_p: "",
  aspiration: "",
  tolerance_income: "",
  tolerance_activity: "",
  lambda: "",
  alpha_plus: "",
  alpha_minus: "",
  phi_plus: "",
  phi_minus: ""
};

export default {
  name: "firstStep",
  components:{
    tableData
  },
  data() {
    return {
      paramsType: 0,
      importComplete: false,
      labels: [
        "出生年月",
        "教育程度",
        "记忆年限",
        "经纬度",
        "期望",
        "alpha+",
        "alpha-",
        "phi+",
        "phi-",
        "lambda"
      ],
      number:1,
      inputArray:[{
        byear: {},
        education: {},
        memory: {},
        latitude: {},
        longitude: {},
        beta_l: {},
        beta_s: {},
        beta_p: {},
        aspiration: {},
        tolerance_income: {},
        tolerance_activity: {},
        lambda: {},
        alpha_plus: {},
        alpha_minus: {},
        phi_plus: {},
        phi_minus: {}
      }],
      dataInfo: {
        farms: 0,
        info: []
      }
    };
  },
  computed:{
    ...mapState({
      paramsDetail: state =>  state.paramsDetail
    })
  },
  mounted() {
    window.m = this;
  },
  methods: {
    ...mapActions(['_setParams']),
    getInfo(event) {
      const files = event.target.files || document.getElementById("file").files;
      Papa.parse(files[0], {
        encoding: "GBK",
        complete: res => {
          const { data } = res;
          this._setParams(data);
          this.importComplete = true;
        }
      });
    },
    handleFarmsChange() {
      console.log("handleFarmsChange");
      this.dataInfo.info = [];
      for (let i = 0; i < this.dataInfo.farms; i++) {
        this.dataInfo.info.push(JSON.parse(JSON.stringify(item)));
      }
    }
  },
  watch:{
    paramsType(){
      this.importComplete = false;
    }
  }
};
</script>

<style lang="less" scoped>
.inlineBlock {
  display: inline-block;
  padding: 2px;
}
.inputItem {
}

.handle{
  width: 250px;
  margin: 0 auto;
  .handleNumber{
    width: 60%
  }
}
.el-input-number--mini{
  width: 100%;
}
</style>
