<script setup lang="ts">
import KTMenu from "@/layouts/default-layout/components/aside/Menu.vue";
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { reactive } from "vue";
const value = ref("");
const dataModel = ref({
  optModel: "",
  namalengkap: "",
  hakakses: "",
  status: "",
  nama: "",
});
const optnamalengkap = [
  {
    value: "Rizky Febiginta Saputra",
    label: "Rizky Febiginta Saputra",
  },
  {
    value: "Dedi Suharman",
    label: "Dedi Suharman",
  },
  {
    value: "Muhammad Huzaimi Maulana",
    label: "Muhammad Huzaimi Maulana",
  },
];
const opthakakses = [
  {
    value: "Master",
    label: "Master",
  },
  {
    value: "Transaksi Pengajuan A/TK",
    label: "Transaksi Pengajuan A/TK",
  },
  {
    value: "Transaksi Pengajuan Obat",
    label: "Transaksi Pengajuan Obat",
  },
  {
    value: "Transaksi Pengajuan Revisi Dokumen PPK",
    label: "Transaksi Pengajuan Revisi Dokumen PPK",
  },
  {
    value: "Informasi Pengaju",
    label: "Informasi Pengaju",
  },
  {
    value: "Informasi Verifikator",
    label: "Informasi Verifikator",
  },
  {
    value: "Informasi Reviewer",
    label: "Informasi Reviewer",
  },
  {
    value: "Informasi Verifikator Kepala",
    label: "Informasi Verifikator Kepala",
  },
  {
    value: "Pembuatan Dokumen HTA",
    label: "Pembuatan Dokumen HTA",
  },
  {
    value: "Laporan",
    label: "Laporan",
  },
];
const optstatus = [
  {
    value: "Semua",
    label: "Semua",
  },
  {
    value: "Aktif",
    label: "Aktif",
  },
  {
    value: "Tidak Aktif",
    label: "Tidak Aktif",
  },
];
const optnama = [
  {
    value: "Nama 1",
    label: "Nama 1",
  },
  {
    value: "Nama 2",
    label: "Nama 2",
  },
  {
    value: "Nama 3",
    label: "Nama 3",
  },
];
const dataUser = ref();
const isLoading = ref(false);
const tanggal = ref("");
const form = reactive({
  name: "",
  nik: "",
  jabatan: "",
  unitkerja: "",
});
const radio = ref();
</script>
<template>
  <section>
    <div
      class="modal modal-lg fade"
      tabindex="-1"
      id="tambahuser"
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
              &nbsp;Tambah User
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
            <div class="row g-xl-8">
              <div class="col-6">
                <span>Nama Lengkap</span><br />
                <el-select
                  class="col-xl-12"
                  v-model="dataModel.namalengkap"
                  filterable
                  placeholder="Pilih Nama Lengkap"
                >
                  <el-option
                    v-for="item in optnamalengkap"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="col-6">
                <span>NIP/NIPTT-PK</span><br />
                <el-form-item>
                  <el-input v-model="form.nik" />
                </el-form-item>
              </div>
            </div>
            <br />
            <div class="row g-xl-8">
              <div class="col-6">
                <span>Jabatan</span><br />
                <el-form-item>
                  <el-input v-model="form.jabatan" />
                </el-form-item>
              </div>
              <div class="col-6">
                <span>Unit Kerja</span><br />
                <el-form-item>
                  <el-input v-model="form.unitkerja" />
                </el-form-item>
              </div>
            </div>
            <div class="row g-xl-8">
              <div class="col-12">
                <span>Hak Akses</span><br />
                <el-select
                  class="col-xl-12"
                  v-model="dataModel.hakakses"
                  filterable
                  placeholder="Pilih Hak Akses"
                >
                  <el-option
                    v-for="item in opthakakses"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <br />
            <span>Jabatan</span><br />
            <div class="row g-xl-8">
              <div class="col-6">
                <el-radio-group v-model="radio">
                  <el-radio :label="1">Jabatan 1</el-radio>
                </el-radio-group>
              </div>
              <div class="col-6">
                <el-radio-group v-model="radio">
                  <el-radio :label="2">Jabatan 2</el-radio>
                </el-radio-group>
              </div>
            </div>
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
