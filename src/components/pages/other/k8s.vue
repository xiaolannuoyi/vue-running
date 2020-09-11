<template>
  <div class="k8s-main" v-if="Object.keys(result).length > 0">
    <!-- 第一行 -->
    <div class="ingress-box">
      <div class="ingress-line">
        <div class="item-box flex-box">
          <div
            v-for="item in result.ingressStatus"
            :key="item.podName"
            :class="['ellipse', item.status ? 'green' : 'red']"
          >
            <el-tooltip
              class="item"
              placement="bottom"
              effect="light"
              :popper-class="
                item.status ? 'green-k8s-atooltip' : 'red-k8s-atooltip'
              "
            >
              <div slot="content">
                <p>容器名称：{{ item.podName }}</p>
                <p>ip：{{ item.ipAddr }}</p>
                <p>开始时间：{{ item.startTime }}</p>
                <p>重启次数：{{ item.restartCount }}</p>
              </div>
              <div class="ingress-title">{{ item.podName }}</div>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二行 -->
    <div class="modules-box">
      <div
        v-for="(value, key) in result.modulesStatus"
        :key="key"
        class="modules-line"
      >
        <div class="item-box">
          <div class="modules-item-title">{{ key }}</div>
          <div class="flex-box">
            <div
              v-for="item in value"
              :key="item.podName"
              :class="['ellipse', item.status ? 'green' : 'red']"
            >
              <el-tooltip
                placement="bottom"
                effect="light"
                :popper-class="
                  item.status ? 'green-k8s-atooltip' : 'red-k8s-atooltip'
                "
              >
                <div slot="content">
                  <p>容器名称：{{ item.podName }}</p>
                  <p>ip：{{ item.ipAddr }}</p>
                  <p>开始时间：{{ item.startTime }}</p>
                  <p>重启次数：{{ item.restartCount }}</p>
                </div>
                <div class="ingress-title">{{ item.podName }}</div>
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三行 -->
    <div class="node-box">
      <div class="item-box flex-box">
        <div
          v-for="item in result.nodeStatus"
          :key="item.nodeName"
          class="square"
        >
          <div class="node-item-title">{{ item.nodeName }}</div>
          <div>
            <span>节点状态：</span>
            <span
              :class="[
                'status-box',
                item.nodeStatus == 'True' ? 'green-status' : 'red-status'
              ]"
            ></span>
            <el-tooltip
              placement="right"
              effect="light"
              v-show="item.nodeStatus != 'True'"
              :popper-class="
                item.nodeStatus == 'True'
                  ? 'green-k8s-atooltip'
                  : 'red-k8s-atooltip'
              "
            >
              <div slot="content">
                <span>outOfDisk：</span>
                <span
                  :class="[
                    'status-box',
                    item.outOfDisk != 'True' ? 'green-status' : 'red-status'
                  ]"
                ></span>
                <br />
                <span>memoryPressure：</span>
                <span
                  :class="[
                    'status-box',
                    item.memoryPressure != 'True'
                      ? 'green-status'
                      : 'red-status'
                  ]"
                ></span>
                <br />

                <span>pidPressure：</span>
                <span
                  :class="[
                    'status-box',
                    item.pidPressure != 'True' ? 'green-status' : 'red-status'
                  ]"
                ></span>
                <br />

                <span>diskPressure：</span>
                <span
                  :class="[
                    'status-box',
                    item.diskPressure != 'True' ? 'green-status' : 'red-status'
                  ]"
                ></span>
              </div>
              <i class="el-icon-info info-icon"></i>
            </el-tooltip>
          </div>
          <div>
            <span>ip:</span>
            <span>{{ item.ipAddr }}</span>
          </div>
          <div class="node-item-flex">
            <div>
              <p>
                <span>负载1：</span>
                <span>{{ item.load1 }}</span>
              </p>
              <p>
                <span>负载5：</span>
                <span>{{ item.load5 }}</span>
              </p>
              <p>
                <span>负载15：</span>
                <span>{{ item.load15 }}</span>
              </p>
            </div>
            <div>
              <span>负载状态：</span>
              <span
                :class="[
                  'status-box',
                  item.loadStatus == 3
                    ? 'green-status'
                    : item.loadStatus == 2
                    ? 'yellow-status'
                    : 'red-status'
                ]"
              ></span>
            </div>
          </div>
          <div class="node-item-flex" style="text-align:center">
            <div>
              <el-tooltip placement="right" effect="light">
                <div slot="content">
                  {{ item.diskUsed }} / {{ item.diskTotal }}
                </div>
                <el-progress
                  type="circle"
                  :width="50"
                  :percentage="+(+item.diskUsage).toFixed(2)"
                ></el-progress>
              </el-tooltip>
              <br />
              <span>磁盘</span>
            </div>
            <div>
              <el-tooltip placement="right" effect="light">
                <div slot="content">
                  {{ item.memoryUse }} / {{ item.memoryTotal }}
                </div>
                <el-progress
                  type="circle"
                  :width="50"
                  :percentage="+(+item.memoryUsage).toFixed(2)"
                ></el-progress>
              </el-tooltip>
              <br />
              <span>内存</span>
            </div>
            <div>
              <el-tooltip placement="right" effect="light">
                <div slot="content">{{ item.cpuUse }}/{{ item.cpuTotal }}</div>
                <el-progress
                  type="circle"
                  :width="50"
                  :percentage="+(+item.cpuUsage).toFixed(2)"
                ></el-progress>
              </el-tooltip>
              <br />
              <span>cpu</span>
            </div>
          </div>
          <div>
            <span>服务数量：</span>
            <span>{{ item.podNums }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      // result: {},
      result: {
        ingressStatus: [
          {
            podName: "nginx-ingress-controller-9ml2k",
            status: true,
            ipAddr: "172.18.187.61",
            startTime: "2020-09-04T03:38:56Z",
            restartCount: 0
          },
          {
            podName: "nginx-ddingress-controller-9ml2k",
            status: true,
            ipAddr: "172.18.187.61",
            startTime: "2020-09-04T03:38:56Z",
            restartCount: 0
          }
        ],
        modulesStatus: {
          "k8s-master": [
            {
              podName: "etcd-k8s-master",
              status: true,
              ipAddr: "172.18.187.60",
              startTime: "2020-03-18T12:13:43Z",
              restartCount: 9
            },
            {
              podName: "kube-apiserver-k8s-master",
              status: true,
              ipAddr: "172.18.187.60",
              startTime: "2020-03-18T12:13:43Z",
              restartCount: 1
            },
            {
              podName: "kube-controller-manager-k8s-master",
              status: true,
              ipAddr: "172.18.187.60",
              startTime: "2020-03-18T12:13:43Z",
              restartCount: 16
            },
            {
              podName: "kube-scheduler-k8s-master",
              status: true,
              ipAddr: "172.18.187.60",
              startTime: "2020-03-18T12:13:43Z",
              restartCount: 15
            }
          ],
          "k8s-masterdfsd": [
            {
              podName: "etcd-k8s-master",
              status: true,
              ipAddr: "172.18.187.60",
              startTime: "2020-03-18T12:13:43Z",
              restartCount: 9
            },
            {
              podName: "kube-apiserver-k8s-master",
              status: true,
              ipAddr: "172.18.187.60",
              startTime: "2020-03-18T12:13:43Z",
              restartCount: 1
            },
            {
              podName: "kube-controller-manager-k8s-master",
              status: true,
              ipAddr: "172.18.187.60",
              startTime: "2020-03-18T12:13:43Z",
              restartCount: 16
            },
            {
              podName: "kube-scheduler-k8s-master",
              status: true,
              ipAddr: "172.18.187.60",
              startTime: "2020-03-18T12:13:43Z",
              restartCount: 15
            }
          ]
        },
        nodeStatus: [
          {
            nodeName: "harbor",
            nodeStatus: "False",
            outOfDisk: "True",
            memoryPressure: "False",
            pidPressure: "False",
            diskPressure: "False",
            ipAddr: "172.18.187.62",
            load1: "0.24",
            load5: "0.21",
            load15: "0.17",
            loadStatus: 3,
            diskUsage: "33.00403554783581",
            diskUsed: "139482116096",
            diskTotal: "422621396992",
            memoryUse: 5799,
            memoryTotal: 7822,
            memoryUsage: "0.7414",
            cpuTotal: 4000,
            cpuUse: 111,
            cpuUsage: "0.0278",
            podNums: 12
          },
          {
            nodeName: "k8s-node1",
            nodeStatus: "True",
            outOfDisk: "False",
            memoryPressure: "False",
            pidPressure: "False",
            diskPressure: "False",
            ipAddr: "172.18.187.61",
            load1: "0.5",
            load5: "0.5",
            load15: "0.42",
            loadStatus: 3,
            diskUsage: "27.11397561590312",
            diskUsed: "114589462528",
            diskTotal: "422621396992",
            memoryUse: 11659,
            memoryTotal: 15885,
            memoryUsage: "0.7340",
            cpuTotal: 4000,
            cpuUse: 345,
            cpuUsage: "0.0863",
            podNums: 20
          },
          {
            nodeName: "k8s-node2",
            nodeStatus: "True",
            outOfDisk: "False",
            memoryPressure: "False",
            pidPressure: "False",
            diskPressure: "False",
            ipAddr: "172.18.187.63",
            load1: "0.4",
            load5: "0.4",
            load15: "0.44",
            loadStatus: 3,
            diskUsage: "29.839483309073238",
            diskUsed: "126108041216",
            diskTotal: "422621396992",
            memoryUse: 12849,
            memoryTotal: 15885,
            memoryUsage: "0.8089",
            cpuTotal: 4000,
            cpuUse: 383,
            cpuUsage: "0.0958",
            podNums: 19
          },
          {
            nodeName: "k8s-master",
            nodeStatus: "True",
            outOfDisk: "False",
            memoryPressure: "False",
            pidPressure: "False",
            diskPressure: "False",
            ipAddr: "172.18.187.60",
            load1: "0.66",
            load5: "0.48",
            load15: "0.43",
            loadStatus: 3,
            diskUsage: "34.20615455935765",
            diskUsed: "144562528256",
            diskTotal: "422621396992",
            memoryUse: 11428,
            memoryTotal: 15885,
            memoryUsage: "0.7194",
            cpuTotal: 4000,
            cpuUse: 186,
            cpuUsage: "0.0465",
            podNums: 14
          }
        ]
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.k8s-main {
  margin: 10px 30px;
}
.item-box {
  border: 1px solid #ebeef5;
  box-shadow: 5px 5px 5px #ebeef5;
  background: #fff;
  position: relative;
  padding: 20px;
}
.item-box + .item-box,
.modules-line + .modules-line {
  margin-left: 20px;
}
.flex-box {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.modules-box,
.ingress-box {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.node-box {
  margin-top: 100px;
}
.node-item-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modules-item-title {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ingress-title {
  margin-top: 14px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}
.ingress-title:hover {
  color: #3dbfbf;
}

.node-item-title {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 圆柱体 start */
/* 长方形 */
.ellipse {
  position: relative;
  display: inline-block;
  margin: 30px 10px;
  height: 70px;
  width: 100px;
  border: 1px solid #e4e7ed;
  border-top: none;
  border-bottom: none;
  z-index: 999;
}
/* 上方的椭圆 */
.ellipse:before {
  position: absolute;
  top: -15px; /** 高度的一半 */
  left: -1px; /* border 的 1px */
  content: "";
  display: block;
  width: 100px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e4e7ed;
  z-index: 99;
}
/* 下方的 */
.ellipse:after {
  position: absolute;
  bottom: -15px; /**高度的一半 */
  left: -1px; /* border 的 1px */
  content: "";
  display: block;
  width: 100px;
  height: 30px;
  border-bottom: 1px solid #e4e7ed;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  box-shadow: 2px 5px 5px #e4e7ed;
  z-index: 9;
}
/* 绿色  上浅下深*/
.ellipse.green:before {
  background-color: #f0f9eb;
}
.ellipse.green,
.ellipse.green:after {
  background-color: #e1f3db;
}
/* 红色 */
.ellipse.red:before {
  background-color: #fef0f0;
}
.ellipse.red,
.ellipse.red:after {
  background-color: #fde2e2;
}
/* 黄色 */

/* 圆柱体 end */

.square {
  width: 200px;
  height: 230px;
  border: 1px solid #ebeef5;
  box-shadow: 5px 5px 5px #ebeef5;
  font-size: 12px;
  padding: 20px;
  margin-top: 20px;
  margin-right: 20px;
}
.square > div + div {
  margin-top: 6px;
}
.status-box {
  display: inline-block;
  vertical-align: middle;
  height: 14px;
  width: 14px;
}
.green-status {
  background-color: #67c23a;
}
.red-status {
  background-color: #f56c6c;
}
.yellow-status {
  background-color: #e6a23c;
}
.info-icon {
  color: #05a7a9;
  font-size: 16px;
  vertical-align: middle;
  margin-left: 10px;
}
/* 连接线 */

/* 第一行 向下竖线 */
.ingress-line {
  position: relative;
  display: flex;
}
.ingress-line::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  height: calc(100% + 50px);
  width: 0px;
  border-left: 1px solid #e4e7ed;
  box-shadow: 1px 1px 2px #e4e7ed;
}
/* 第二行 */
.modules-line {
  position: relative;
  display: flex;
}
/* 竖线 */
.modules-line::before {
  content: "";
  position: absolute;
  top: -50px;
  right: 0;
  bottom: 0;
  left: 50%;
  height: calc(100% + 150px);
  width: 0px;
  border-left: 1px solid #e4e7ed;
  box-shadow: 1px 1px 2px #e4e7ed;
}

.modules-line:first-child::after {
  content: "";
  position: absolute;
  top: -50px;
  right: 0;
  bottom: 0;
  left: 50%;
  height: calc(100% + 100px);
  width: calc(50% + 10px);
  border-top: 1px solid #e4e7ed;
  box-shadow: 0 0 0 #e4e7ed;
}
.modules-line:last-child::after {
  content: "";
  position: absolute;
  top: -50px;
  right: 0;
  bottom: 0;
  left: -10px;
  height: calc(100% + 100px);
  width: calc(50% + 10px);
  border-top: 1px solid #e4e7ed;
  box-shadow: 0 0 0 #e4e7ed;
}
.modules-line:only-child:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 0;
  width: 0;
}
.modules-line::after {
  content: "";
  position: absolute;
  top: -50px;
  right: 0;
  bottom: 0;
  left: -22px;
  height: calc(100% + 100px);
  width: calc(100% + 44px);
  border-top: 1px solid #e4e7ed;
  box-shadow: 0 0 0 #e4e7ed;
}

/* 省略号 */
.ingress-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.square {
  box-sizing: content-box;
}
</style>

<style>
/* green bottom */
.green-k8s-atooltip.el-tooltip__popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: #e1f3db;
}
.green-k8s-atooltip.el-tooltip__popper[x-placement^="bottom"]
  .popper__arrow:after {
  border-bottom-color: #e1f3db;
}
.green-k8s-atooltip {
  background: #e1f3db !important;
}
/* red bottom */
.red-k8s-atooltip.el-tooltip__popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: #fde2e2;
}
.red-k8s-atooltip.el-tooltip__popper[x-placement^="bottom"]
  .popper__arrow:after {
  border-bottom-color: #fde2e2;
}
.red-k8s-atooltip {
  background: #fde2e2 !important;
}
/* green right */
.green-k8s-atooltip.el-tooltip__popper[x-placement^="right"] .popper__arrow {
  border-right-color: #e1f3db;
}
.green-k8s-atooltip.el-tooltip__popper[x-placement^="right"]
  .popper__arrow:after {
  border-right-color: #e1f3db;
}
.green-k8s-atooltip {
  background: #e1f3db !important;
}
/* red right */
.red-k8s-atooltip.el-tooltip__popper[x-placement^="right"] .popper__arrow {
  border-right-color: #fde2e2;
}
.red-k8s-atooltip.el-tooltip__popper[x-placement^="right"]
  .popper__arrow:after {
  border-right-color: #fde2e2;
}
.red-k8s-atooltip {
  background: #fde2e2 !important;
}
</style>
