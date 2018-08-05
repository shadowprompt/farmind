<template>
  <div>
    <el-radio v-model="paramsType" label='0'>Read from external file</el-radio>
    <el-radio v-model="paramsType" label='1'>Set up manually</el-radio>
    <div>
      <template v-if="paramsType=='0'">
        <input type="file" id='file' @change="getInfo">
        <tableData :data="paramsDetail" v-if="importComplete"></tableData>
      </template>
      <template v-else>
        <div class="handle">
          <el-input-number class="handleNumber" controls-position="right" :min="1" v-model="number"
                           placeholder="numbers" label="number of farms"></el-input-number>
          <el-button @click="generate">Generate</el-button>
          <defaultOrManual>
            <div slot="read">
              <el-button>Read</el-button>
            </div>
            <div slot="set">
              <el-input-number label="eeee" size="mini" v-model="params.tolerance_income.mean"
                               placeholder="input mean"></el-input-number>
            </div>
          </defaultOrManual>
        </div>
        <div class="inputContainer">
          <tableInput :input-array="[inputObj]"></tableInput>
        </div>
        <tableData :data="paramsDetail" v-if="showGenerate"></tableData>
      </template>
    </div>
  </div>
</template>

<script>
  import Papa from "papaparse";
  import JSUS from "../utils";

  import tableData from './tableData';
  import tableInput from './tableInput';
  import defaultOrManual from './defaultOrManual';

  import { mapActions, mapState } from 'vuex';

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
    components: {
      tableData, tableInput, defaultOrManual
    },
    data() {
      return {
        paramsType: '0',
        importComplete: false,
        showGenerate: false,
        number: 1,
        inputObj: {
          latitude: {},
          longitude: {},
          byear: {},
          education: {},
          memory: {},
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
        },
        params: {
          tolerance_income: {}
        },
        dataInfo: {
          farms: 0,
          info: []
        },
        initArray: {
          byear: 0
        }
      };
    },
    computed: {
      ...mapState({
        paramsDetail: state => state.paramsDetail
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
      getParams() {
        const params = this.inputObj;
        const res = [];
        const keys = Object.keys(params);
        keys.forEach((item) => {
          console.log('item -> ', item);
          res.push(JSUS.nextNormal(params[item].mean, params[item].sd, this.initArray[item]));
        });
        console.log('res -> ', res);
        return {
          header: keys,
          detail: res
        };
      },
      generate() {
        let eachParams;
        const details = Array(this.number).fill('test').map((item, index) => {
          console.log('45 -> ', item);
          eachParams = this.getParams();
          return [`name-${index + 1}`].concat(eachParams.detail)
          //   name: index,
          //   ...eachParams.detail
          // }
        });
        const header = [""].concat(eachParams.header);
        console.log('header -> ', header);
        console.log('details -> ', details);
        this._setParams([header].concat(details));
        this.showGenerate = true;
      }
    },
    watch: {
      paramsType() {
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

  .handle {
    width: 250px;
    margin: 0 auto;
    .handleNumber {
      width: 60%
    }
  }


</style>
