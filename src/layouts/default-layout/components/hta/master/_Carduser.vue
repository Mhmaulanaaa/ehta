<script setup lang="ts">
import KTModal1 from "@/layouts/default-layout/components/hta/modals/_TambahUser.vue";
import KTModal2 from "@/layouts/default-layout/components/hta/modals/_EditUser.vue";
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const value = ref("");
const dataModel = ref({
  optModel: "",
  unitkerja: "",
  hakakses: "",
  status: "",
  nama: "",
});

const pageSize = ref("5");
const currentPage = ref("10");
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
const optunitkerja = [
  {
    value: "Instalasi Teknologi Komunikasi & Informasi",
    label: "Instalasi Teknologi Komunikasi & Informasi",
  },
  {
    value: "Bagian Keuangan",
    label: "Bagian Keuangan",
  },
  {
    value: "Bagian Umum",
    label: "Bagian Umum",
  },
  {
    value: "Bagian Kepegawaian",
    label: "Bagian Kepegawaian",
  },
  {
    value: "Bagian Sumber Daya Manusia",
    label: "Bagian Sumber Daya Manusia",
  },
];
const opthakakses = [
  {
    value: "Master",
    label: "Master",
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
</script>
<template>
  <section>
    <div class="card shadow-sm">
      <div class="card-header">
        <h6 class="modal-title mt-2">
          <div class="symbol mt-2">
            <img src="/images/icon/profil.png" alt="" />
          </div>
          &nbsp;Pencarian
        </h6>
      </div>
      <div class="card-body">
        <div class="row g-xl-8">
          <div class="col-6">
            <span>Unit Kerja</span><br />
            <el-select
              class="col-xl-12"
              v-model="dataModel.unitkerja"
              filterable
              placeholder="Pilih Unit Kerja"
            >
              <el-option
                v-for="item in optunitkerja"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="col-6">
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
        <!-- 1 -->
        <div class="row g-xl-8 mt-2">
          <div class="col-6">
            <span>Status</span><br />
            <el-select
              class="col-xl-12"
              v-model="dataModel.status"
              filterable
              placeholder="Pilih Status"
            >
              <el-option
                v-for="item in optstatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="col-6">
            <span>Nama/NIP/NIPTT-PK</span><br />
            <el-select
              class="col-xl-12"
              v-model="dataModel.nama"
              filterable
              placeholder="Pilih Nama/NIP/NIPTT-PK"
            >
              <el-option
                v-for="item in optnama"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <!-- 2 -->
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary me-2">Cari</button>
      </div>
    </div>
    <br />
    <div class="card shadow-sm">
      <div class="card-header">
        <h6 class="modal-title mt-2">
          <div class="symbol mt-2">
            <img src="/images/icon/profil.png" alt="" />
          </div>
          &nbsp;Informasi
        </h6>
        <div class="card-toolbar">
          <div class="d-flex ms-3">
            <button
              type="button"
              class="btn btn-success me-2"
              data-bs-toggle="modal"
              data-bs-target="#tambahuser"
              id="#tambahuser"
            >
              <KTIcon icon-name="plus" icon-class="fs-6 fs-primary me-0 me-md-2" />
              Tambah User
            </button>
          </div>
          <a href="" class="btn btn-icon btn-light-warning me-1" target="_blank">
            <KTIcon icon-name="printer" icon-class="fs-2 fs-primary me-0 me-md" />
          </a>
          <a href="" class="btn btn-icon btn-light-primary me-1" target="_blank">
            <KTIcon icon-name="document" icon-class="fs-2 fs-primary me-0 me-md" />
          </a>
          <a href="" class="btn btn-icon btn-light-danger" target="_blank">
            <KTIcon icon-name="document" icon-class="fs-2 fs-primary me-0 me-md" />
          </a>
        </div>
      </div>
      <div class="card-body">
        <div>
          <div class="col-lg-12 mb-5">
            <div class="input-group">
              <el-input
                clearable
                v-model="dataModel.optModel"
                placeholder="Masukkan User Yang Ingin Anda Cari..."
                size="large"
                ><template #prepend>
                  <el-button readonly :icon="Search" />
                </template>
              </el-input>
            </div>
            <br />
            <Transition>
              <div v-if="!isLoading" class="table-responsive">
                <table class="table table-rounded table-striped border gy-7 gs-7">
                  <thead>
                    <tr
                      class="text-center fw-semibold fs-8 text-gray-800 border-bottom border-gray-200"
                    >
                      <th>Nama</th>
                      <th>NIP/NIPTT</th>
                      <th>Unit Kerja</th>
                      <th>Hak Akses</th>
                      <th>Status</th>
                      <th class="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody class="text-center">
                    <tr class="fs-8">
                      <td>Anissa Tiramissu</td>
                      <td>10930803808390</td>
                      <td>Instalasi Teknologi Komunikasi dan Informasi</td>
                      <td>Superuser</td>
                      <td>Aktif</td>
                      <td class="">
                        <button
                          type="button"
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#edituser"
                          id="#edituser"
                        >
                          <KTIcon
                            icon-name="notepad-edit"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="abstract-11"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Transition>
          </div>
          <div v-if="isLoading" class="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="
                margin: auto;
                background: none;
                display: block;
                shape-rendering: auto;
              "
              width="75px"
              height="75px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                fill="#0a0a0a"
                stroke="none"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="1s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="0 50 51;360 50 51"
                ></animateTransform>
              </path>
            </svg>
          </div>
        </div>
        <div class="float-end">
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[100, 200]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, sizes"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <KTModal1></KTModal1>
    <KTModal2></KTModal2>
  </section>
</template>
