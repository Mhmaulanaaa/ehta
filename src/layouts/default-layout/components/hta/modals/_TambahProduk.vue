<script lang="ts">
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
import TextEditor from "@/layouts/default-layout/components/hta/editor/_TextEditor.vue";
import { reactive, ref } from "vue";

export default {
  name: "App",
  components: {
    Wizard,
    TextEditor,
  },

  data() {
    return {
      currentTabIndex: 0,
      options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      selectedOption: "",
    };
  },
  methods: {
    onChangeCurrentTab(index, oldIndex) {
      console.log(index, oldIndex);
      this.currentTabIndex = index;
    },
    onTabBeforeChange() {
      if (this.currentTabIndex === 0) {
        console.log("First Tab");
      }
      console.log("All Tabs");
    },
    wizardCompleted() {
      console.log("Wizard Completed");
    },
  },
  setup() {
    const isLoading = ref(false);
    const namamerk = ref("");
    const alat = ref("");
    const value = ref("");
    const form = reactive({
      name: "",
      merk: "",
      jabatan: "",
      unitkerja: "",
    });
    const options = [
      {
        value: "Option1",
        label: "Option1",
      },
      {
        value: "Option2",
        label: "Option2",
      },
      {
        value: "Option3",
        label: "Option3",
      },
      {
        value: "Option4",
        label: "Option4",
      },
      {
        value: "Option5",
        label: "Option5",
      },
    ];
    return {
      namamerk,
      alat,
      options,
      isLoading,
    };
  },
};
</script>
<template>
  <section>
    <div
      class="modal modal-lg fade"
      tabindex="-1"
      id="tambahproduk"
      ref="newCardModalRef"
      data-bs-focus="false"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-success">
              <div class="symbol">
                <img src="/images/icon/profil.png" alt="" />
              </div>
              &nbsp;Tambah Produk
            </h3>
            <div
              class="btn btn-icon btn-sm btn-active-light-success ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span class="svg-icon svg-icon-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    fill="currentColor"
                  />
                  <rect
                    x="7"
                    y="15.3137"
                    width="12"
                    height="2"
                    rx="1"
                    transform="rotate(-45 7 15.3137)"
                    fill="currentColor"
                  />
                  <rect
                    x="8.41422"
                    y="7"
                    width="12"
                    height="2"
                    rx="1"
                    transform="rotate(45 8.41422 7)"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="modal-body">
            <label for="" class="fs-4 fw-bold"> Spesifikasi</label> <br />
            <div class="row g-xl-8">
              <div class="col-12">
                <label for=""
                  >Nama Merk
                  <span class="text-danger">*</span>
                </label>
                <el-input v-model="namamerk" placeholder="Masukkan Nama Merk" />
              </div>
            </div>
            <br />
            <div class="row g-xl-8">
              <div class="col-12">
                <TextEditor :label="'Nasari Alat'"></TextEditor>
              </div>
            </div>
            <br />
            <div class="row g-xl-8">
              <div class="col-12">
                <TextEditor :label="'Spesifikasi Obat'"></TextEditor>
              </div>
            </div>
            <br />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Tutup
            </button>
            <button type="button" class="btn btn-primary">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
