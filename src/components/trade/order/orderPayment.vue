/* eslint-disable */
<template>
  <div class="overview">
    <div class="center-title">
				<p>交易管理&nbsp;&nbsp;>&nbsp;&nbsp;订单支付查询</p>
			</div>
			<div class="center-main">
				<div class="part-title">订单支付查询</div>
				<div class="part-main">
					<div class="part-top ">
						<form>
              <el-row>
                <el-col :span="6">
                  <div class="fbox ">
                      <label class="input_lab">交易归属</label>
                      <div class="">
                          <template>
                            <el-select v-model="value4" clearable placeholder="请选择" size="medium">
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </template>
                      </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="fbox ">
								        <label class="input_lab">交易状态</label>
								        <div class="">
								             <template>
                            <el-select v-model="value4" clearable placeholder="请选择" size="medium">
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </template>
								        </div>
								    </div>
                </el-col>
                <el-col :span="6">
                  	<div class="fbox ">
								        <label class="input_lab">*订单号</label>
								        <div class="">
								          <el-input
                            placeholder="请输入内容"
                            v-model="input10"
                            clearable
                            size="medium">
                          </el-input>
								        </div>
								    </div>
                </el-col>
                <el-col :span="6">
                  <div class="fbox ">
								        <label class="input_lab"><span>*</span>流水号</label>
								        <div class="">
                          <el-input
                            placeholder="请输入内容"
                            v-model="input10"
                            clearable
                            size="medium">
                          </el-input>
								        </div>
								    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                   <div class="fbox ">
								        <label class="input_lab">交易日期</label>
								        <div class="">
								            <template>
                                <el-date-picker
                                  v-model="value13"
                                  type="daterange"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  :default-time="['00:00:00', '23:59:59']"
                                  size="medium">
                                </el-date-picker>
                            </template>
								        </div>
								    </div>
                </el-col>
                <el-col :span="8">
                  <div style="margin-top:26px;"><el-button type="primary" size="medium">查询</el-button></div>
                </el-col>
                <el-col :span="8"></el-col>
              </el-row>
						</form>
					</div>
					<div class="part-bottom">
						<div class="part-bottom-tit">
							<ul class="clearfix">
								<li>总金额：2,800.80元</li>
								<li>手续费总计：80.80元</li>
                <li><el-button type="primary" size="small">下载表格</el-button></li>
							</ul>
						</div>
						<div class="part-bottom-table">
                      <template>
                        <el-table
                          :data="tableData"
                          border
                          style="width: 100%">
                          <el-table-column
                            fixed
                            prop="date"
                            label="日期"
                            width="150">
                          </el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            prop="province"
                            label="省份"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            prop="city"
                            label="市区"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            prop="address"
                            label="地址"
                            width="300">
                          </el-table-column>
                          <el-table-column
                            prop="zip"
                            label="邮编"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                            <template slot-scope="scope">
                              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                              <el-button type="text" size="small">编辑</el-button>
                            </template>
                          </el-table-column>
                        </el-table>
                      </template>
				        </div>
				        <div class="part-bottom-page">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                  </el-pagination>
                </div>
					</div>
				</div>

			</div>
  </div>
</template>

<script>
export default {
  name: "orderPayment",
  data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value4: '',
        input10: '',
        value13: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>

<style scoped>
.part-bottom-page{
  padding-top: 15px;
}
</style>
