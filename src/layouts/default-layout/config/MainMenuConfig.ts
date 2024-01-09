import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      // {
      //   heading: "layoutBuilder",
      //   route: "/builder",
      //   keenthemesIcon: "switch",
      //   bootstrapIcon: "bi-layers",
      // },
      {
        heading: "Master User",
        route: "/master-user",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },
      // Master
      {
        heading: "Laporan",
        route: "/laporan",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-layers",
      },
      // Laporan
      {
        heading: "Pengajuan(Pengaju)",
        route: "/informasi-pengaju",
        keenthemesIcon: "message-edit",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pengajuan(Verifikator)",
        route: "/informasi-verifikator",
        keenthemesIcon: "message-edit",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pengajuan(Reviewer)",
        route: "/informasi-reviewer",
        keenthemesIcon: "message-edit",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pengajuan(Kepala Verifikator)",
        route: "/informasi-kepalaverifikator",
        keenthemesIcon: "message-edit",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pengajuan(Viewer)",
        route: "/informasi-viewer",
        keenthemesIcon: "message-edit",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pembuatan Dokumen HTA (Verifikator)",
        route: "/informasi-pembuatandokumen",
        keenthemesIcon: "book-open",
        bootstrapIcon: "bi-layers",
      },
      // Informasi
      {
        heading: "Pengajuan A/TK",
        route: "/transaksi-atk",
        keenthemesIcon: "wallet",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Pengajuan Obat",
        route: "/transaksi-obat",
        keenthemesIcon: "wallet",
        bootstrapIcon: "bi-layers",
      },
      {
        heading: "Revisi Dokumen PPK",
        route: "/revisi-dokumen",
        keenthemesIcon: "wallet",
        bootstrapIcon: "bi-layers",
      },

      // Transaksi
    ],
  },
];

export default MainMenuConfig;
