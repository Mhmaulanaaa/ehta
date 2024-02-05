<script setup lang="ts">
import { ref } from "vue";
import { reactive } from "vue";
import KTModal from "@/layouts/default-layout/components/hta/modalspengaju/_ModalLihatPengaju.vue";
import KTModal1 from "@/layouts/default-layout/components/hta/modalspengaju/_ModalLihatPengaju1.vue";
import KTModal2 from "@/layouts/default-layout/components/hta/modalspengaju/_ModalLihatPengaju2.vue";
import KTModal3 from "@/layouts/default-layout/components/hta/modalspengaju/_ModalLihatPengaju3.vue";
import KTModal4 from "@/layouts/default-layout/components/hta/modalspengaju/_ModalLihatPengaju4.vue";
import KTModal5 from "@/layouts/default-layout/components/hta/modalspengaju/_ModalLihatPengaju5.vue";
import KTModal6 from "@/layouts/default-layout/components/hta/modalspengaju/_ModalLihatPengaju6.vue";
import KTModal7 from "@/layouts/default-layout/components/hta/modalspengaju/_ModalLihatPengaju7.vue";
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
const value = ref("");
const dataModel = ref({
  optModel: "",
  unitkerja: "",
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
        </div>
        <br />
        <div class="row g-xl-8">
          <div class="col-6">
            <span>Nama Pengaju</span><br />
            <el-form-item>
              <el-input v-model="form.name" />
            </el-form-item>
          </div>
          <div class="col-6">
            <span>No.Pengajuan</span><br />
            <el-form-item>
              <el-input v-model="form.pengajuan" />
            </el-form-item>
          </div>
        </div>
        <!-- 1 -->
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
                      <th>Waktu Pengajuan</th>
                      <th>Nama Pengaju</th>
                      <th>Status</th>
                      <th class="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody class="text-center">
                    <tr class="fs-8">
                      <td>ATK20210531001</td>
                      <td>02 Januari 2024</td>
                      <td>SOMATOM Confidence RT Pro</td>
                      <td>Draf</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPengaju"
                          id="#lihatPengaju"
                        >
                          <KTIcon
                            icon-name="eye"
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
                    <tr class="fs-8">
                      <td>ATK20210531002</td>
                      <td>02 Januari 2024</td>
                      <td>SOMATOM Confidence RT Pro 4</td>
                      <td>Belum Diverifikasi</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPengaju"
                          id="#lihatPengaju"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="pencil"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr class="fs-8">
                      <td>ATK20210531003</td>
                      <td>02 Januari 2024</td>
                      <td>SOMATOM Confidence RT Pro 4</td>
                      <td>Revisi Dokumen Awal</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPengaju6"
                          id="#lihatPengaju6"
                        >
                          <KTIcon
                            icon-name="eye"
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
                      <td>ATK20210531004</td>
                      <td>02 Januari 2024</td>
                      <td>SOMATOM Confidence RT Pro 4</td>
                      <td>Lolos Verifikasi</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPengaju3"
                          id="#lihatPengaju3"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="pencil"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr class="fs-8">
                      <td>ATK20210531005</td>
                      <td>02 Januari 2024</td>
                      <td>SOMATOM Confidence RT Pro 4</td>
                      <td>Revisi Dokumen Lanjutan</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPengaju6"
                          id="#lihatPengaju6"
                        >
                          <KTIcon
                            icon-name="eye"
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
                      <td>ATK20210531005</td>
                      <td>02 Januari 2024</td>
                      <td>SOMATOM Confidence RT Pro 4</td>
                      <td>Lolos Review</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPengaju3"
                          id="#lihatPengaju3"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="pencil"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr class="fs-8">
                      <td>ATK20210531005</td>
                      <td>02 Januari 2024</td>
                      <td>SOMATOM Confidence RT Pro 4</td>
                      <td>Direkomendasikan</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPengaju4"
                          id="#lihatPengaju4"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="pencil"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr class="fs-8">
                      <td>ATK20210531005</td>
                      <td>02 Januari 2024</td>
                      <td>SOMATOM Confidence RT Pro 4</td>
                      <td>Ditolak</td>
                      <td class="">
                        <button
                          href=""
                          class="btn btn-icon btn-light-warning me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPengaju7"
                          id="#lihatPengaju7"
                        >
                          <KTIcon
                            icon-name="eye"
                            icon-class="fs-2 fs-primary me-0 me-md"
                          />
                        </button>
                        <button
                          href=""
                          class="btn btn-icon btn-light-danger me-1"
                          target="_blank"
                        >
                          <KTIcon
                            icon-name="pencil"
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
      <KTModal></KTModal>
      <KTModal1></KTModal1>
      <KTModal2></KTModal2>
      <KTModal3></KTModal3>
      <KTModal4></KTModal4>
      <KTModal5></KTModal5>
      <KTModal6></KTModal6>
      <KTModal7></KTModal7>
    </div>
  </section>
</template>
