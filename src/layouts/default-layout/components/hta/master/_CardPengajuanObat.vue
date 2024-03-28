<script lang="ts">
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
import { reactive, ref } from "vue";
import TextEditor from "@/layouts/default-layout/components/hta/editor/_TextEditor.vue";
import KTModal1 from "@/layouts/default-layout/components/hta/modals/_TambahProduk.vue";
import KTModal2 from "@/layouts/default-layout/components/hta/modals/_TambahLiterasi.vue";

export default {
  name: "App",
  components: {
    Wizard,
    TextEditor,
    KTModal1,
    KTModal2,
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
    const namapengaju = ref("");
    const alat = ref("");
    const value = ref("");
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
      namapengaju,
      alat,
      options,
      isLoading,
      KTModal1,
      KTModal2,
    };
  },
};
</script>
<template>
  <section>
    <div class="card shadow-sm">
      <div class="card-header">
        <h6 class="modal-title mt-2">
          <div class="symbol mt-2">
            <img src="/images/icon/profil.png" alt="" />
          </div>
          &nbsp;Pengajuan Obat
        </h6>
      </div>
      <div class="card-body">
        <div id="app">
          <div>
            <!-- <h1>Customize with Props</h1> -->
            <Wizard
              navigable-tabs
              :backButton="{
                color: 'primary',
                text: 'Back',
                icon: 'check',
                hideIcon: true, // default false but selected for sample
                hideText: false, // default false but selected for sample
              }"
              scrollable-tabs
              :nextButton="{
                color: 'primary',
                text: 'Next',
                icon: 'check',
                hideIcon: true, // default false but selected for sample
                hideText: false, // default false but selected for sample
              }"
              :custom-tabs="[
                {
                  title: 'Dokumen Tingkat Keterbutuhan',
                },
                {
                  title: 'Dokumen Studi Literatur',
                },
                {
                  title: 'Dokumen Operasional',
                },
                {
                  title: 'Dokumen Aspek Sosioekonomi',
                },
                {
                  title: 'Resume Pengajuan',
                },
              ]"
              :beforeChange="onTabBeforeChange"
              @change="onChangeCurrentTab"
              @complete:wizard="wizardCompleted"
            >
              <template v-if="currentTabIndex === 0">
                <div class="row g-xl-8">
                  <div class="col-12">
                    <label for=""
                      >Nama Pengajuan
                      <span class="text-danger">*</span>
                    </label>
                    <el-input
                      v-model="namapengaju"
                      placeholder="Masukkan Nama Pengajuan"
                    />
                  </div>
                </div>
                <br />
                <div class="row g-xl-8">
                  <div class="col-12">
                    <label for=""
                      >Apakah alat / teknologi kesehatan ini baru?
                      <span class="text-danger">*</span>
                    </label>
                    <el-input
                      v-model="alat"
                      placeholder="Masukkan Alat Tekonologi Kesehatan"
                    />
                  </div>
                </div>
                <br />
                <div class="row g-xl-8">
                  <div class="col-12">
                    <TextEditor :label="'Latar Belakang'"></TextEditor>
                  </div>
                </div>
                <br />
                <div class="row g-xl-8">
                  <div class="col-12">
                    <TextEditor :label="'Indikasi'"></TextEditor>
                  </div>
                </div>
                <br />
                <div class="row g-xl-8">
                  <div class="col-12">
                    <TextEditor :label="'Jumlah Kasus'"></TextEditor>
                  </div>
                </div>
                <button type="button" class="btn btn-danger float-start mt-5">
                  Simpan Sebagai Draft
                </button>
              </template>
              <template v-if="currentTabIndex === 1">
                <h5 class="text-center">Panduan Level of Evidence</h5>
                <br />
                <div>
                  <img
                    src="/images/gambar/LoE_ppk.png"
                    class="rounded mx-auto d-block"
                    alt="Responsive image"
                    height="500"
                  />
                </div>
                <div class="d-flex mt-5">
                  <button
                    type="button"
                    class="btn btn-success me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#tambahliteratur"
                    id="#tambahliteratur"
                  >
                    Tambah Studi Literatur
                  </button>
                </div>
                <br />
                <Transition>
                  <div v-if="!isLoading" class="table-responsive">
                    <table class="table table-rounded table-striped border gy-7 gs-7">
                      <thead>
                        <tr
                          class="text-center fw-semibold fs-8 text-gray-800 border-bottom border-gray-200"
                        >
                          <th>Judul Literatur</th>
                          <th>Penulis</th>
                          <th>Tahun Terbit</th>
                          <th>Population</th>
                          <th>Intervention</th>
                          <th>Comparison</th>
                          <th>Outcome</th>
                          <th>Level of Evidence</th>
                          <th>Grade of Recomendation</th>
                          <th>File yang Diunggah</th>
                          <th class="text-center">Aksi</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr class="fs-8">
                          <!-- <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td class="">
                            <button
                              href=""
                              class="btn btn-icon btn-light-warning me-1"
                              target="_blank"
                            >
                              <KTIcon
                                icon-name="ki-duotone ki-notepad-edit"
                                icon-class="fs-2 fs-primary me-0 me-md"
                              />
                            </button>
                            <button
                              href=""
                              class="btn btn-icon btn-light-danger me-1"
                              target="_blank"
                            >
                              <KTIcon
                                icon-name="ki-duotone ki-abstract-11"
                                icon-class="fs-2 fs-primary me-0 me-md"
                              />
                            </button>
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Transition>
                <button type="button" class="btn btn-danger float-start mt-5">
                  Simpan Sebagai Draft
                </button>
              </template>
              <template v-if="currentTabIndex === 2">
                <div class="d-flex mt-5">
                  <button
                    type="button"
                    class="btn btn-success me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#tambahproduk"
                    id="#tambahproduk"
                  >
                    Tambah Produk
                  </button>
                </div>
                <br />
                <Transition>
                  <div v-if="!isLoading" class="table-responsive">
                    <table class="table table-rounded table-striped border gy-7 gs-7">
                      <thead>
                        <tr
                          class="text-center fw-semibold fs-8 text-gray-800 border-bottom border-gray-200"
                        >
                          <th>Nama Merk</th>
                          <th>Narasi Obat</th>
                          <th>Spesifikasi Obat</th>
                          <th class="text-center">Aksi</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr class="fs-8">
                          <!-- <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td class="">
                            <button
                              href=""
                              class="btn btn-icon btn-light-warning me-1"
                              target="_blank"
                            >
                              <KTIcon
                                icon-name="ki-duotone ki-notepad-edit"
                                icon-class="fs-2 fs-primary me-0 me-md"
                              />
                            </button>
                            <button
                              href=""
                              class="btn btn-icon btn-light-danger me-1"
                              target="_blank"
                            >
                              <KTIcon
                                icon-name="ki-duotone ki-abstract-11"
                                icon-class="fs-2 fs-primary me-0 me-md"
                              />
                            </button>
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Transition>
                <button type="button" class="btn btn-danger float-start mt-5">
                  Simpan Sebagai Draft
                </button>
              </template>
              <template v-if="currentTabIndex === 3">
                <Transition>
                  <div v-if="!isLoading" class="table-responsive">
                    <table class="table table-rounded table-striped border gy-7 gs-7">
                      <thead>
                        <tr
                          class="text-center fw-semibold fs-8 text-gray-800 border-bottom border-gray-200"
                        >
                          <th>Nama Merk</th>
                          <th>Nama Obat/Boks</th>
                          <th>Biaya Dispensing</th>
                          <th>Biaya Penyimpanan</th>
                          <th>Harga jual Obat/Tablet</th>
                          <th>Keuntungan/Tablet</th>
                          <th>Belanja Obat/Bulan</th>
                          <th>Untung Obat/Bulan</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr class="fs-8">
                          <!-- <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td class="">
                            <button
                              href=""
                              class="btn btn-icon btn-light-warning me-1"
                              target="_blank"
                            >
                              <KTIcon
                                icon-name="ki-duotone ki-notepad-edit"
                                icon-class="fs-2 fs-primary me-0 me-md"
                              />
                            </button>
                            <button
                              href=""
                              class="btn btn-icon btn-light-danger me-1"
                              target="_blank"
                            >
                              <KTIcon
                                icon-name="ki-duotone ki-abstract-11"
                                icon-class="fs-2 fs-primary me-0 me-md"
                              />
                            </button>
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Transition>
                <button type="button" class="btn btn-danger float-start mt-5">
                  Simpan Sebagai Draft
                </button>
              </template>
              <template v-if="currentTabIndex === 4">
                <h4>Data Pengusul</h4>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">Nama</label>
                  </div>
                  <div class="col-6">
                    <label for="">Septiansyah Argi Gumilar, S.Kom</label>
                  </div>
                </div>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">NIP/NIPTT-PK</label>
                  </div>
                  <div class="col-6">
                    <label for="">301280919890120178719</label>
                  </div>
                </div>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">Jabatan</label>
                  </div>
                  <div class="col-6">
                    <label for="">Pengelola Teknologi Informasi</label>
                  </div>
                </div>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">Unit Kerja</label>
                  </div>
                  <div class="col-6">
                    <label for="">RSU</label>
                  </div>
                </div>
                <br />
                <h4>Dokumen Tungkat Kebutuhan</h4>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">Nama PPK</label>
                  </div>
                  <div class="col-6">
                    <label for="">1</label>
                  </div>
                </div>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">Alasan Revisi</label>
                  </div>
                  <div class="col-6">
                    <label for="">1</label>
                  </div>
                </div>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">Indikasi</label>
                  </div>
                  <div class="col-6">
                    <label for="">High Volume</label>
                  </div>
                </div>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">Fokus</label>
                  </div>
                  <div class="col-6">
                    <label for="">Diagnostik</label>
                  </div>
                </div>
                <div class="row g-xl-8 mb-5">
                  <div class="col-6">
                    <label for="">Unggah file PPK lama</label>
                  </div>
                  <div class="col-6">
                    <label for="">-</label>
                  </div>
                </div>
                <br />
                <h4>Dokumen Studi Literatur</h4>
                <Transition>
                  <div v-if="!isLoading" class="table-responsive">
                    <table class="table table-rounded table-striped border gy-7 gs-7">
                      <thead>
                        <tr
                          class="text-center fw-semibold fs-8 text-gray-800 border-bottom border-gray-200"
                        >
                          <th>Judul Literatur</th>
                          <th>Penulis</th>
                          <th>Tahun Terbit</th>
                          <th>Topik Literatur</th>
                          <th>Introduction</th>
                          <th>Methodology</th>
                          <th>Results</th>
                          <th>Analysis</th>
                          <th>Discussion</th>
                          <th>Level Of Evidence</th>
                          <th>Grade of Recomendation</th>
                          <th>File yang Diunggah</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr class="fs-8">
                          <!-- <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td class="">
                            <button
                              href=""
                              class="btn btn-icon btn-light-warning me-1"
                              target="_blank"
                            >
                              <KTIcon
                                icon-name="ki-duotone ki-notepad-edit"
                                icon-class="fs-2 fs-primary me-0 me-md"
                              />
                            </button>
                            <button
                              href=""
                              class="btn btn-icon btn-light-danger me-1"
                              target="_blank"
                            >
                              <KTIcon
                                icon-name="ki-duotone ki-abstract-11"
                                icon-class="fs-2 fs-primary me-0 me-md"
                              />
                            </button>
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Transition>
                <button type="button" class="btn btn-danger float-start mt-5">
                  Simpan Sebagai Draft
                </button>
              </template>
            </Wizard>
          </div>
        </div>
      </div>
    </div>
    <KTModal1></KTModal1>
    <KTModal2></KTModal2>
  </section>
</template>
