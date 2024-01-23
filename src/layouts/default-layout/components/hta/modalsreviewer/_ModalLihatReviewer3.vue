<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { reactive } from "vue";

const switch1 = ref(true);
const switch2 = ref(true);
const switch3 = ref(true);
const switch4 = ref(true);
const switch5 = ref(true);
const switch6 = ref(true);
const switch7 = ref(true);
const switch8 = ref(true);
const switch9 = ref(true);
const switch10 = ref(true);
const switch11 = ref(true);
const switch12 = ref(true);
const switch13 = ref(true);
const switch14 = ref(true);
const switch15 = ref(true);
const switch16 = ref(true);
const switch17 = ref(true);
const switch18 = ref(true);
const switch19 = ref(true);
const switch20 = ref(true);
const switch21 = ref(true);
const switch22 = ref(true);
const switch23 = ref(true);
const switch24 = ref(true);
const switch25 = ref(true);
const switch26 = ref(true);
const switch27 = ref(true);
const switch28 = ref(true);
const switch29 = ref(true);
const switch30 = ref(true);
const switch31 = ref(true);
const switch32 = ref(true);
const switch33 = ref(true);
const switch34 = ref(true);
const switch35 = ref(true);

const slider1 = ref(0);
const slider2 = ref(0);
const slider3 = ref(0);
const slider4 = ref(0);
const slider5 = ref(0);
const slider6 = ref(0);
const slider7 = ref(0);
const slider8 = ref(0);
const slider9 = ref(0);
const slider10 = ref(0);
const slider11 = ref(0);
const slider12 = ref(0);
const slider13 = ref(0);
const slider14 = ref(0);
const slider15 = ref(0);
const slider16 = ref(0);
const slider17 = ref(0);

const nilaiinput = ref();
const nilaiinput1 = ref();
const nilaiinput2 = ref();
const nilaiinput3 = ref();
const nilaiinput4 = ref();
const nilaiinput5 = ref();
const nilaiinput6 = ref();
const nilaiinput7 = ref();
const nilaiinput8 = ref();
const nilaiinput9 = ref();
const nilaiinput10 = ref();
const nilaiinput11 = ref();

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
  namalengkap: "",
});
const radio = ref();
</script>
<template>
  <section>
    <div
      class="modal modal-xl fade"
      tabindex="-1"
      id="lihatreviewer3"
      ref="newCardModalRef"
      data-bs-focus="false"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-success">
              <div class="symbol">
                <img src="/images/icon/profil.png" alt="" />
              </div>
              &nbsp;Penilaian
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
                <div class="card shadow-sm">
                  <div class="card-header">
                    <h3 class="card-title">Informasi Pengajuan</h3>
                  </div>
                  <div class="card-body">
                    <div>
                      <h4 class="mb-5">Data Ajuan :</h4>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Status Pengajuan</label></div>
                        <div class="col-8">
                          <label class="">Revisi Dokumen Awal</label>
                        </div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">No Pengajuan</label></div>
                        <div class="col-8"><label class="">ATK20210531001</label></div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Waktu Pengajuan</label></div>
                        <div class="col-8">
                          <label class="">31 Mei 2021 13:09:18</label>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div>
                      <h4 class="mb-5">Data Pengaju :</h4>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Nama</label></div>
                        <div class="col-8">
                          <label class="">Lia, S.Kom., M.Kom.</label>
                        </div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">NIP/NIPTT-PK</label></div>
                        <div class="col-8">
                          <label class="">301-28091989-012017-8719</label>
                        </div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Jabatan</label></div>
                        <div class="col-8">
                          <label class="">Pengelola Teknologi Informasi/label</label>
                        </div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Unit Kerja</label></div>
                        <div class="col-8">
                          <label class=""
                            >Instalasi Teknlogi Komunikasi dan Informasi</label
                          >
                        </div>
                      </div>
                    </div>
                    <br />
                    <div>
                      <h4 class="mb-5">Dokumen Tingkat Keterbutuhan :</h4>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Nama Pengajuan</label></div>
                        <div class="col-8">
                          <label class="">SOMATOM Confidence RT Pro</label>
                        </div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4">
                          <label class=""
                            >Apakah alat/teknologi kesehatan ini baru?</label
                          >
                        </div>
                        <div class="col-8"><label class="">Baru di Surabaya</label></div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Latar Belakang</label></div>
                        <div class="col-8">
                          <label class=""
                            >Teknologi paling mutakhir yang wajib dimiliki oleh RS
                            terbesar se-Indonesia timur.</label
                          >
                        </div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Unit Kerja</label></div>
                        <div class="col-8">
                          <label class=""
                            >Instalasi Teknlogi Komunikasi dan Informasi</label
                          >
                        </div>
                      </div>
                    </div>
                    <br />
                    <div>
                      <h4 class="mb-5">Dokumen Studi Literatur :</h4>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Nama Pengajuan</label></div>
                        <div class="col-8">
                          <label class="">SOMATOM Confidence RT Pro</label>
                        </div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4">
                          <label class=""
                            >Apakah alat/teknologi kesehatan ini baru?</label
                          >
                        </div>
                        <div class="col-8"><label class="">Baru di Surabaya</label></div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Latar Belakang</label></div>
                        <div class="col-8">
                          <label class=""
                            >Teknologi paling mutakhir yang wajib dimiliki oleh RS
                            terbesar se-Indonesia timur.</label
                          >
                        </div>
                      </div>
                      <div class="row g-xl-8 mb-2">
                        <div class="col-4"><label class="">Unit Kerja</label></div>
                        <div class="col-8">
                          <label class=""
                            >Instalasi Teknlogi Komunikasi dan Informasi</label
                          >
                        </div>
                      </div>
                    </div>
                    <br />
                    <h4 class="mb-5">Dokumen Studi Literatur :</h4>
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
                              <th>Level Of Evidence</th>
                              <th>Grade Of Recomendation</th>
                              <th>File yang Diunggah</th>
                            </tr>
                          </thead>
                          <tbody class="text-center">
                            <tr class="fs-8">
                              <td>
                                Shorter androgen receptor polyQ alleles protect against
                                life-threatening COVID-19 disease in European males
                              </td>
                              <td>Margherita Baldassarri, Nicola Picchiotti</td>
                              <td>2021</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>1a</td>
                              <td>A</td>
                              <td>-</td>
                            </tr>
                            <tr class="fs-8">
                              <td>
                                Recovery scenario and immunity in COVID-19 disease: A new
                                strategy to predict the potential of reinfection
                              </td>
                              <td>Zahra Khoshkam, Younes Aftabi</td>
                              <td>2021</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>2b</td>
                              <td>B</td>
                              <td>-</td>
                            </tr>
                            <tr class="fs-8">
                              <td>
                                Molecular diagnostic technologies for COVID-19:
                                Limitations and challenges
                              </td>
                              <td>Adeel Afzal</td>
                              <td>2020</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>2b</td>
                              <td>C</td>
                              <td>-</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Transition>
                    <br />
                    <h4 class="mb-5">
                      Dokumen Operasional dan Dokumen Aspen Sosio-Ekonomi :
                    </h4>
                    <Transition>
                      <div v-if="!isLoading" class="table-responsive">
                        <table class="table table-rounded table-striped border gy-7 gs-7">
                          <thead>
                            <tr
                              class="text-center fw-semibold fs-8 text-gray-800 border-bottom border-gray-200"
                            >
                              <th>Nama Merk</th>
                              <th>Narasi Alat</th>
                              <th>Ekatalog</th>
                              <th>Dimensi Alat</th>
                              <th>Tahun Pembuatan</th>
                              <th>Asal Negara</th>
                              <th>Depresiasi</th>
                              <th>Aksesori Alat Tambahan</th>
                              <th>Lain-Lain</th>
                              <th>Besar Tegangan</th>
                              <th>Sumber Daya</th>
                              <th>Backup Daya</th>
                              <th>Kualifikasi Instalasi</th>
                              <th>Kualifikasi Operasional</th>
                              <th>Kualifikasi Kinerja</th>
                              <th>Buku Manual</th>
                              <th>Garansi Free</th>
                              <th>Biaya Perawatan Free</th>
                              <th>Tambahan Biaya Perawatan Per Tahun</th>
                              <th>Pelatihan Operator dan Teknisi</th>
                              <th>Tenaga Pelaksana</th>
                              <th>Garansi Purna Jual</th>
                              <th>Harga Alat</th>
                              <th>Biaya Perawatan/Tahun</th>
                              <th>Biaya Bahan Habis Pakai/Pasien</th>
                              <th>Biaya Dokumen Pendukung</th>
                              <th>Perkiraan Biaya/Pasien</th>
                              <th>Kapasitas Alat</th>
                              <th>Jasa Medik/Pasien</th>
                              <th>Perkiraan Return of Investment</th>
                            </tr>
                          </thead>
                          <tbody class="text-center">
                            <tr class="fs-8">
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            <tr class="fs-8">
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            <tr class="fs-8">
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Transition>
                    <br />
                    <div class="row g-xl-8 mb-2">
                      <div class="col-4">
                        <label class="">Alasan Revisi Dokumen Awal</label>
                      </div>
                      <div class="col-8">
                        <label class=""
                          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                          enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est
                          laborum.</label
                        >
                      </div>
                    </div>
                    <br />
                    <!-- 9 -->
                    <div class="row g-xl-8 mb-2">
                      <div class="col-4">
                        <label class="">Alasan Revisi Dokumen Lanjutan</label>
                      </div>
                      <div class="col-8">
                        <label class=""
                          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                          enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est
                          laborum.</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1 -->
              <div class="col-6">
                <div class="card shadow-sm">
                  <div class="card-header">
                    <h3 class="card-title">Penilaian</h3>
                  </div>
                  <div class="card-body">
                    <h4 class="mb-5">
                      1. Apakah Usulan tersebut menunjang profesionalisme pelayanan :
                    </h4>
                    <label class=""
                      >1A. Apakah usulan tersebut menunjang profesionalisme
                      pelayanan?</label
                    ><br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >a. Nilai Outcome<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider1" :step="1" :max="10" />
                          </div>
                          <div>{{ slider1 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 1 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >b. Nilai Safety<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider2" :step="1" :max="10" />
                          </div>
                          <div>{{ slider2 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 2 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >c. Nilai stisfaction<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider3" :step="1" :max="10" />
                          </div>
                          <div>{{ slider3 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 3 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >d. Nilai access<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider4" :step="1" :max="10" />
                          </div>
                          <div>{{ slider4 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 4 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Subtotal 1A</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <!-- 5 -->
                    <div class="separator border-2 my-10"></div>
                    <!-- End 1A -->
                    <label class=""
                      >1B. Apakah manfaat usulan tersebut berbasis bukti?</label
                    ><br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >a. Nilai desain penelitian pendukung<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider5" :step="1" :max="10" />
                          </div>
                          <div>{{ slider5 }}</div>
                        </div>
                      </div>
                    </div>
                    <label class="">Khusus Untuk nomor 1b a</label><br />
                    <ul>
                      <li>Nilai 1-2 : Cross-Sectional</li>
                      <li>Nilai 3-4 : Case Control</li>
                      <li>Nilai 5-6 : Cohort</li>
                      <li>Nilai 7-8 : RCT</li>
                      <li>Nilai 9-10 : Metaanalisis</li>
                    </ul>
                    <br />
                    <label class="mb-5">b. Nilai Validitas</label><br />
                    <!-- 1 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >b1. Recruitment subject
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider6" :step="1" :max="10" />
                          </div>
                          <div>{{ slider6 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 2 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >b2. Allocation<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider7" :step="1" :max="10" />
                          </div>
                          <div>{{ slider7 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 3 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >b3. Maintenance<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider8" :step="1" :max="10" />
                          </div>
                          <div>{{ slider8 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 4 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >b4. Measurement <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider9" :step="1" :max="10" />
                          </div>
                          <div>{{ slider9 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 5 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >b3. Maintenance<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider8" :step="1" :max="10" />
                          </div>
                          <div>{{ slider8 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 6 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >c. Nilai importancy<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider9" :step="1" :max="10" />
                          </div>
                          <div>{{ slider9 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 7 -->
                    <label class="mb-5">d. Nilai applicability</label>
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >d1. Kemiripan population<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider10" :step="1" :max="10" />
                          </div>
                          <div>{{ slider10 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 8 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >d2. Kemiripan intervensi/index/inf
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider11" :step="1" :max="10" />
                          </div>
                          <div>{{ slider11 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 9 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >d3. Kemiripan control/standart
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider12" :step="1" :max="10" />
                          </div>
                          <div>{{ slider12 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 10 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >d4. Kemiripan outcome penelitian
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider13" :step="1" :max="10" />
                          </div>
                          <div>{{ slider13 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 11 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Subtotal 1B</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput1" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <!-- 5 -->
                    <!-- End 1B -->
                    <div class="separator border-2 my-10"></div>
                    <label class="">1C. Apakah Usulan tersebut etis?</label><br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >a. Bermanfaat bagi penderita<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider14" :step="1" :max="10" />
                          </div>
                          <div>{{ slider14 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 1 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >b. Mencegah bahaya bagi penderita dikemudian hari
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider15" :step="1" :max="10" />
                          </div>
                          <div>{{ slider15 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 2 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >c. Menambah penghormatan terhadap otoritas penderita<span
                            class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider16" :step="1" :max="10" />
                          </div>
                          <div>{{ slider16 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 3 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class=""
                          >d. Adil untuk penderita, pelayan kesehatan dan pemilik RS<span
                            class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <div class="slider-demo-block">
                            <el-slider v-model="slider17" :step="1" :max="10" />
                          </div>
                          <div>{{ slider17 }}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 4 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Subtotal 1C</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput2" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <!-- 5 -->
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Total Nomor 1</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput3" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <!-- 6 -->
                    <div class="separator border-2 my-10"></div>
                    <!-- End 1C -->
                    <h4 class="mb-5">
                      2. Apakah usulan tersebut meningkatkan kualitas pelayanan RSUD
                      Dr.Soetomo :
                    </h4>
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >1. New Paradigm<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch1"
                          class="switch-outline switch-icon switch-primary"
                          active-text="5"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >2. Commitment Management<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch2"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 1 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >3. Process dan customer focus<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch3"
                          class="switch-outline switch-icon switch-primary"
                          active-text="20"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >4. Consensus decision<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch4"
                          class="switch-outline switch-icon switch-primary"
                          active-text="5"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 2 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >5. Expert All<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch5"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >6. Contro via reinforcement +<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch6"
                          class="switch-outline switch-icon switch-primary"
                          active-text="5"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 3 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >7. Teamwork<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch7"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >8. Continous Improvement<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch8"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 4 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >9. Score keeping<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch9"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >10. Flat dan flexible structure<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch10"
                          class="switch-outline switch-icon switch-primary"
                          active-text="5"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 5 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >11. Share value da vision<span class="text-danger"
                            >*</span
                          ></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch11"
                          class="switch-outline switch-icon switch-primary"
                          active-text="5"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >12. Wealth creating<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch12"
                          class="switch-outline switch-icon switch-primary"
                          active-text="5"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 6 -->
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Total Nomor 2</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput4" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <!-- End Tabs 2 -->
                    <div class="separator border-2 my-10"></div>
                    <!-- Start Tabs 3 -->
                    <h4 class="mb-5">
                      3. Apakah usulan tersebut meningkatkan performance RSUD Dr. Soetomo?
                      :
                    </h4>
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >1. Apropriateness <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch13"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >2. Availability <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch14"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 1 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >3. Continuity <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch15"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >4. Effectiveness <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch16"
                          class="switch-outline switch-icon switch-primary"
                          active-text="20"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 2 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >5. Efficacy <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch17"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >6. Efficiency <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch18"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 3 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >7. Respect dan caring<span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch19"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >8. Safety <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch20"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 4 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >9. Timeliness <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch21"
                          class="switch-outline switch-icon switch-primary"
                          active-text="10"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                    </div>
                    <!-- End 5 -->
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Total Nomor 3</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput5" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <!-- End Tabs 3 -->
                    <div class="separator border-2 my-10"></div>
                    <!-- Start Tabs 4 -->
                    <h4 class="mb-5">4. Dampak Kinerja Pada RSUD Dr. Soetomo? :</h4>
                    <label class="mb-5">4A. Kinerja keuangan</label>
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >1. Kinerja keuangan <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch22"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >2. Peningkatan pendapatan
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch23"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 1 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >3. Pemanfaatan aktiva <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch24"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >4. Penghematan biaya <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch25"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 2 -->
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Total Nomor 4B</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput6" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <div class="separator border-2 my-10"></div>
                    <!-- End Tabs 4 -->
                    <label class="mb-5">4B. Kepuasan pelanggan</label>
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >1. Jumlah pelanggan baru
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch26"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >2. Loyalitas pelanggan
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch27"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 1 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >3. Kepuasan pelanggan <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch28"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <!-- 2 -->
                    </div>
                    <!-- End 2 -->
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Total Nomor 4B</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput7" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <div class="separator border-2 my-10"></div>
                    <!-- End Tabs 5 -->
                    <label class="mb-5">4C. Proses bisnis internal</label>
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >1. Proses pelayanan <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch29"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >2. Loyalitas pelanggan
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch30"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 1 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >3. Efektifitas <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch31"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >4. Inovasi pelayanan <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch32"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 2 -->
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Total Nomor 4C</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput8" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <div class="separator border-2 my-10"></div>
                    <!-- End Tabs 6 -->
                    <label class="mb-5">4D. Pembelajaran</label>
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >1. Peningkatan ketrampilan
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch33"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <div class="col-3">
                        <label class=""
                          >2. Peningkatan profesionalisme
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch34"
                          class="switch-outline switch-icon switch-primary"
                          active-text="50"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 2 -->
                    </div>
                    <!-- End 1 -->
                    <div class="row g-xl-8">
                      <div class="col-3">
                        <label class=""
                          >3. Peningkatan kesejahteraan
                          <span class="text-danger">*</span></label
                        ><br />
                      </div>
                      <div class="col-3">
                        <el-switch
                          v-model="switch35"
                          class="switch-outline switch-icon switch-primary"
                          active-text="25"
                          inactive-text=""
                        />
                        <br />
                      </div>
                      <!-- 1 -->
                      <!-- 2 -->
                    </div>
                    <!-- End 2 -->
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Total Nomor 4D</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput9" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Total Nomor 4</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput10" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row g-xl-8">
                      <div class="col-5">
                        <label class="">Nilai Keseluruhan</label><br />
                      </div>
                      <div class="col-7">
                        <div class="col-lg-8">
                          <el-input v-model="nilaiinput11" disabled placeholder="40" />
                        </div>
                      </div>
                    </div>
                    <div class="separator border-2 my-10"></div>
                    <!-- End Tabs 7 -->
                  </div>
                  <div class="card-footer">
                    <button type="button" class="btn btn-danger me-5">Lanjutkan</button>
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                      Kembali
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- end -->
            <!-- End Modal Body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
