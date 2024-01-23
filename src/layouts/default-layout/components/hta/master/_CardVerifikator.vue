<script setup lang="ts">
import { ref } from "vue";
import { reactive } from "vue";
import KTModal1 from "@/layouts/default-layout/components/hta/modalverifikator/_ModalVerifikator.vue";
import KTModal2 from "@/layouts/default-layout/components/hta/modalverifikator/_ModalVerifikator1.vue";
import KTModal3 from "@/layouts/default-layout/components/hta/modalverifikator/_ModalVerifikator2.vue";
import KTModal4 from "@/layouts/default-layout/components/hta/modalverifikator/_ModalVerifikator3.vue";
const value = ref("");
const dataModel = ref({
  optModel: "",
  unitkerja: "",
  pengajuan: "",
  status: "",
  nama: "",
});
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
const optpengajuan = [
  {
    value: "Alat/Teknologi kesehatan",
    label: "Alat/Teknologi kesehatan",
  },
  {
    value: "Obat",
    label: "Obat",
  },
  {
    value: "Revisi Dokumen PPK",
    label: "Revisi Dokumen PPK",
  },
  {
    value: "Semua",
    label: "Semua",
  },
];
const optstatus = [
  {
    value: "Semua",
    label: "Semua",
  },
  {
    value: "Draft",
    label: "Draft",
  },
  {
    value: "Belum Diverifikasi",
    label: "Belum Diverifikasi",
  },
  {
    value: "Revisi Dokumen Awal",
    label: "Revisi Dokumen Awal",
  },
  {
    value: "Lolos Verifikasi",
    label: "Lolos Verifikasi",
  },
  {
    value: "Revisi Dokumen Lanjutan",
    label: "Revisi Dokumen Lanjutan",
  },
  {
    value: "Lolos Review",
    label: "Lolos Review",
  },
  {
    value: "Direkomendasikan",
    label: "Direkomendasikan",
  },
  {
    value: "Ditolak",
    label: "Ditolak",
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
  pengajuan: "",
});
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
            <span class="demonstration">Tanggal</span><br />
            <div class="block">
              <el-date-picker
                class="col-xl-12"
                v-model="tanggal"
                type="daterange"
                start-placeholder="Start Date"
                end-placeholder="End Date"
                :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
              />
            </div>
          </div>
          <div class="col-6">
            <span>Jenis Pengajuan</span><br />
            <el-select
              class="col-xl-12"
              v-model="dataModel.pengajuan"
              filterable
              placeholder="Pilih Pengajuan"
            >
              <el-option
                v-for="item in optpengajuan"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <br />
        <div class="row g-xl-8">
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
            <span>Nama Pengajuan</span><br />
            <el-form-item>
              <el-input v-model="form.name" />
            </el-form-item>
          </div>
        </div>
        <!-- 1 -->
        <div class="row g-xl-8">
          <div class="col-6">
            <span>No.Pengajuan</span><br />
            <el-form-item>
              <el-input v-model="form.pengajuan" />
            </el-form-item>
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
          <div class="d-flex ms-3"></div>
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
            <br />
            <Transition>
              <div v-if="!isLoading" class="table-responsive">
                <table class="table table-rounded table-striped border gy-7 gs-7">
                  <thead>
                    <tr
                      class="text-center fw-semibold fs-8 text-gray-800 border-bottom border-gray-200"
                    >
                      <th>No Pengajuan</th>
                      <th>Jenis Pengajuan</th>
                      <th>Waktu</th>
                      <th>Nama Pengajuan</th>
                      <th>Status</th>
                      <th class="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody class="text-center">
                    <tr class="fs-8">
                      <td>ATK20230913001</td>
                      <td>Alat/Teknologi Kesehatan</td>
                      <td>30 Mei 2021</td>
                      <td>SOMATOM CONFIDENCE RT Pro</td>
                      <td>Belum Diverifikasi</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatverifikator"
                          id="#lihatverifikator"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-primary me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="document"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="notepad-edit"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr class="fs-8">
                      <td>PPK20210531003</td>
                      <td>Revisi Dokumen PPK</td>
                      <td>30 Mei 2021</td>
                      <td>ICD-10 : B-29</td>
                      <td>Revisi Dokumen Awal</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatverifikator1"
                          id="#lihatverifikator1"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-primary me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="document"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="notepad-edit"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr class="fs-8">
                      <td>OBT20210531002</td>
                      <td>Obat</td>
                      <td>30 Mei 2021</td>
                      <td>Simvastatin</td>
                      <td>Lolos Verifikasi</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatverifikator3"
                          id="#lihatverifikator3"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-primary me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="document"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="notepad-edit"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr class="fs-8">
                      <td>PPK20210531003</td>
                      <td>Revisi Dokumen PPK</td>
                      <td>30 Mei 2021</td>
                      <td>ICD-10 : B.29</td>
                      <td>Verifikasi Revisi Dokumen Lanjutan</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatverifikator3"
                          id="#lihatverifikator3"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-primary me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="document"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="notepad-edit"
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
              <!-- [ldio] generated by https://loading.io/ -->
            </svg>
          </div>
        </div>
      </div>
      <KTModal1></KTModal1>
      <KTModal2></KTModal2>
      <KTModal3></KTModal3>
      <KTModal4></KTModal4>
    </div>
  </section>
</template>
