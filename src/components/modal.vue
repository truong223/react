<template>
  <el-dialog
    :title="typeAddOrEdit == 0 ? 'Them moi' : 'Chinh sua'"
    :visible.sync="centerDialogVisible"
    width="50%"
    center
    label-position="top"
  >
    <div>
      <div>
        <el-form>
          <el-form-item label="Name">
            <el-input v-model="data.name" />
          </el-form-item>
          <el-form-item label="Date">
            <el-date-picker
              v-model="data.date"
              type="date"
              placeholder="Pick a day"
              class="!w-full"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="Address">
            <el-input v-model="data.address" />
          </el-form-item>
        </el-form>
      </div>
      <div class="text-right">
        <el-button type="danger" @click="centerDialogVisible = false">
          Huy
        </el-button>
        <el-button type="warning" @click="submit()"> Luu </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "modalInfo",
  data() {
    return {
      data: {
        name: "",
        date: "",
        address: "",
      },
      centerDialogVisible: false,
      typeAddOrEdit: 0,
    };
  },
  methods: {
    submit() {
      if (this.typeAddOrEdit == 0) {
        this.$emit("add", this.data);
      } else if (this.typeAddOrEdit == 1) {
        if (Object.values(this.data).length) {
          this.$emit("response", this.data);
        }
      }

      this.centerDialogVisible = false;
    },
  },
};
</script>
