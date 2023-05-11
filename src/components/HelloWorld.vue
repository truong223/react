<template>
  <div style="width: 100%; display: flex; justify-content: center">
    <div style="width: 60%">
      <div class="text-right mb-3">
        <el-button type="primary" @click="handleAddEdit(0, false)">
          Them moi
        </el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="date" label="Date" width="180">
        </el-table-column>
        <el-table-column prop="address" label="Address"> </el-table-column>
        <el-table-column prop="Action" label="Action">
          <template slot-scope="{ row }">
            <div class="text-right">
              <div class="mb-3">
                <el-button type="warning" @click="handleAddEdit(1, row)">
                  Cap nhat
                </el-button>
              </div>
              <div>
                <el-button type="danger" @click="handleDelete(row.id)">
                  Xoa
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <modal ref="modal-info" @response="getData" @add="addItem" />
  </div>
</template>

<script>
import modal from "./modal.vue";
export default {
  components: { modal },
  methods: {
    handleAddEdit(type, res) {
      console.log(this.$refs["modal-info"])
      if (type == 0) {
        this.$refs["modal-info"].typeAddOrEdit = 0;
      } else if (type == 1) {
        this.$refs["modal-info"].typeAddOrEdit = 1;
        this.$refs["modal-info"].data = JSON.parse(JSON.stringify(res));
      }
      this.$refs["modal-info"].centerDialogVisible = true;
    },
    getData(data) {
      this.tableData = this.tableData.map((el) => {
        if (el.id == data.id) {
          el = data;
        }
        return el;
      });
    },
    handleDelete(id) {
      this.tableData = this.tableData.filter((el) => el.id !== id);
    },
    addItem(item) {
      this.tableData.push(item);
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom1",
          address: "No. 189, Grove St, Los Angeles",
          id: 1,
        },
        {
          date: "2016-05-02",
          name: "Tom2",
          address: "No. 189, Grove St, Los Angeles",
          id: 2,
        },
        {
          date: "2016-05-04",
          name: "Tom3",
          address: "No. 189, Grove St, Los Angeles",
          id: 3,
        },
      ],
    };
  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
