<script setup lang="ts">
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
  namalengkap: "",
});
const radio = ref();
</script>
<template>
  <section>
    <div
      class="modal modal-xl fade"
      tabindex="-1"
      id="lihatreviewer1"
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
              &nbsp;Informasi Pengajuan
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
            <div>
              <h4 class="mb-5">Data Ajuan :</h4>
              <div class="row g-xl-8 mb-2">
                <div class="col-4"><label class="">Status Pengajuan</label></div>
                <div class="col-8"><label class="">Revisi Dokumen Awal</label></div>
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
                <div class="col-8"><label class="">Lia, S.Kom., M.Kom.</label></div>
              </div>
              <div class="row g-xl-8 mb-2">
                <div class="col-4"><label class="">NIP/NIPTT-PK</label></div>
                <div class="col-8"><label class="">301-28091989-012017-8719</label></div>
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
                  <label class="">Instalasi Teknlogi Komunikasi dan Informasi</label>
                </div>
              </div>
            </div>
            <br />
            <div>
              <h4 class="mb-5">Dokumen Tingkat Keterbutuhan :</h4>
              <div class="row g-xl-8 mb-2">
                <div class="col-4"><label class="">Nama Pengajuan</label></div>
                <div class="col-8"><label class="">SOMATOM Confidence RT Pro</label></div>
              </div>
              <div class="row g-xl-8 mb-2">
                <div class="col-4">
                  <label class="">Apakah alat/teknologi kesehatan ini baru?</label>
                </div>
                <div class="col-8"><label class="">Baru di Surabaya</label></div>
              </div>
              <div class="row g-xl-8 mb-2">
                <div class="col-4"><label class="">Latar Belakang</label></div>
                <div class="col-8">
                  <label class=""
                    >Teknologi paling mutakhir yang wajib dimiliki oleh RS terbesar
                    se-Indonesia timur.</label
                  >
                </div>
              </div>
              <div class="row g-xl-8 mb-2">
                <div class="col-4"><label class="">Unit Kerja</label></div>
                <div class="col-8">
                  <label class="">Instalasi Teknlogi Komunikasi dan Informasi</label>
                </div>
              </div>
            </div>
            <br />
            <div>
              <h4 class="mb-5">Dokumen Studi Literatur :</h4>
              <div class="row g-xl-8 mb-2">
                <div class="col-4"><label class="">Nama Pengajuan</label></div>
                <div class="col-8"><label class="">SOMATOM Confidence RT Pro</label></div>
              </div>
              <div class="row g-xl-8 mb-2">
                <div class="col-4">
                  <label class="">Apakah alat/teknologi kesehatan ini baru?</label>
                </div>
                <div class="col-8"><label class="">Baru di Surabaya</label></div>
              </div>
              <div class="row g-xl-8 mb-2">
                <div class="col-4"><label class="">Latar Belakang</label></div>
                <div class="col-8">
                  <label class=""
                    >Teknologi paling mutakhir yang wajib dimiliki oleh RS terbesar
                    se-Indonesia timur.</label
                  >
                </div>
              </div>
              <div class="row g-xl-8 mb-2">
                <div class="col-4"><label class="">Unit Kerja</label></div>
                <div class="col-8">
                  <label class="">Instalasi Teknlogi Komunikasi dan Informasi</label>
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
                        Recovery scenario and immunity in COVID-19 disease: A new strategy
                        to predict the potential of reinfection
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
                        Molecular diagnostic technologies for COVID-19: Limitations and
                        challenges
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
            <h4 class="mb-5">Dokumen Operasional dan Dokumen Aspen Sosio-Ekonomi :</h4>
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
              <div class="col-4"><label class="">Alasan Revisi Dokumen Awal</label></div>
              <div class="col-8">
                <label class=""
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</label
                >
              </div>
            </div>
            <br />
            <label class=""
              >1. Apakah usulan tersebut menunjang profesionalisme pelayanan?</label
            ><br />
            <label class=""
              >1A. Apakah usulan tersebut menunjang kualitas pelayanan?</label
            >
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">a. Nilai outcome</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">b. Nilai safety</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">c. Nilai satisfaction</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">c. Nilai access</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Subtotal 1A</label></div>
              <div class="col-4">
                <label class="">40</label>
              </div>
            </div>
            <br />
            <!-- 1 -->
            <label class="">1B. Apakah manfaat usulan tersebut berbasis bukti?</label>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">a. Nilai desain penelitian pendukung</label>
              </div>
              <div class="col-4">
                <label class="">10-Metaanalisis</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">b. Nilai validitas</label></div>
              <div class="col-4">
                <label class=""></label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">b1. Recruitment subject</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">b2. Allocation</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">b3. Maintenance</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">b4. Measurement</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">c. Nilai importancy</label></div>
              <div class="col-4">
                <label class=""></label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">d. Nilai applicability</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">d1. Kemiripan population</label></div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">d2. Kemiripan intervensi/index/inf</label>
              </div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">d3. Kemiripan control/standart</label>
              </div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">d4. Kemiripan outcome penelitian</label>
              </div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Subtotal 1B</label></div>
              <div class="col-4">
                <label class="">40</label>
              </div>
            </div>
            <br />
            <!-- 2 -->
            <label class="">1C. Apakah usulan tersebut etis?</label>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">Bermanfaat bagi penderita</label>
              </div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">b. Mencegah bahaya bagi penderita dikemudian hari </label>
              </div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class=""
                  >c. Menambah penghormatan terhadap otoritas penderita</label
                >
              </div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class=""
                  >d. Adil untuk penderita, pelayan kesehatan dan pemilik RS</label
                >
              </div>
              <div class="col-4">
                <label class="">10</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Subtotal 1C</label></div>
              <div class="col-4">
                <label class="">40</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Total Nomor 1</label></div>
              <div class="col-4">
                <label class="">40</label>
              </div>
            </div>
            <br />
            <!-- 3 -->
            <label class=""
              >2. Apakah usulan tersebut meningkatkan kualitas pelayanan RSUD Dr.
              Soetomo?</label
            >
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">1. New paradigm</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">2. Commitment Management</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">3. Process dan customer focus</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">4. Consensus decision</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">5. Expert all</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">6. Contro via reinforcement +</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">7. Teamwork</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">8. Continous improvement</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">9. Score keeping</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">10. Flat dan flexible structure</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">11. Share value dan vision</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">12. Wealth creating</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Total Nomor 2</label></div>
              <div class="col-4">
                <label class="">40</label>
              </div>
            </div>
            <br />
            <!-- 4 -->
            <label class=""
              >3. Apakah usulan tersebut meningkatkan performance RSUD Dr. Soetomo?</label
            >
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">1. Apropriateness</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">2. Availability</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">3. Continuity</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">4. Effectiveness</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">5. Efficacy</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">6. Efficiency</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">7. Respect dan caring</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">8. Safety</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">9. Timeliness</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Total Nomor 3</label></div>
              <div class="col-4">
                <label class="">40</label>
              </div>
            </div>
            <br />
            <!-- 5 -->
            <label class="">4. Dampak Kinerja Pada RSUD Dr. Soetomo?</label>
            <label class="">4A. Kinerja keuangan</label>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">1. Kinerja keuangan</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">2. Peningkatan pendapatan</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">3. Pemanfaatan aktiva</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">4. Penghematan biaya</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Total Nomor 4A</label></div>
              <div class="col-4">
                <label class="">80</label>
              </div>
            </div>
            <br />
            <!-- 6 -->
            <label class="">4B. Kepuasan pelanggan</label>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">1. Jumlah pelanggan baru</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">2. Loyalitas pelanggan</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">3. Kepuasan pelanggan</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Total Nomor 4B</label></div>
              <div class="col-4">
                <label class="">80</label>
              </div>
            </div>
            <br />
            <!-- 7 -->
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">4C. Proses bisnis internal</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">1. Proses pelayanan</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8"><label class="">2. Loyalitas pelanggan</label></div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">3. Efektivitas</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">4. Inovasi pelayanan</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Total Nomor 4C</label></div>
              <div class="col-4">
                <label class="">80</label>
              </div>
            </div>
            <br />
            <!-- 8 -->
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">4D. Pembelajaran</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">1. Peningkatan ketrampilan</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">2. Peningkatan profesionalisme</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2">
              <div class="col-8">
                <label class="">3. Peningkatan kesejahteraan</label>
              </div>
              <div class="col-4">
                <label class="">25</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8">
                <label class="">Nilai Total Subtotal 4D</label>
              </div>
              <div class="col-4">
                <label class="">80</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Total Nomor 3</label></div>
              <div class="col-4">
                <label class="">40</label>
              </div>
            </div>
            <div class="row g-xl-8 mb-2 fw-bold">
              <div class="col-8"><label class="">Nilai Keseluruhan</label></div>
              <div class="col-4">
                <label class="">40</label>
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
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</label
                >
              </div>
            </div>
            <!-- end -->
            <!-- End Modal Body -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
