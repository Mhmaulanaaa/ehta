const ID_TOKEN_KEY = "id_token" as string;
const ID_YEAR_KEY = "year" as string;
const ID_PEMAKAI_KEY = "pemakai" as string;
const ID_PEMAKAI_NAME = "nama_pemakai" as string;
const ID_INSTALASI_ID_KEY = "instalasi" as string;
const ID_ROLE_KEY = "role" as string;
const ID_INSTALASI_NAME = "nama_instalasi" as string;
const ID_BIDANG = "is_bidang" as string;
const ID_FOTO_PEGAWAI = "foto_pegawai" as string;
const ID_BATAS_WAKTU = "batas_waktu" as string;
const ID_MULTI_USER = "multi_user" as string;
const ID_RANGKAP = "is_rangkap" as string;
const ID_HTA = "is_hta" as string;
/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description get token form localStorage
 */
export const getYear = (): string | null => {
  return window.localStorage.getItem(ID_YEAR_KEY);
};

/**
 * @description get token form localStorage
 */
export const getPemakai = (): string | null => {
  return window.localStorage.getItem(ID_PEMAKAI_KEY);
};

/**
 * @description get token form localStorage
 */
export const getPemakaiName = (): string | null => {
  return window.localStorage.getItem(ID_PEMAKAI_NAME);
};

/**
 * @description get token form localStorage
 */
export const getInstalasi = (): string | null => {
  return window.localStorage.getItem(ID_INSTALASI_ID_KEY);
};
/**
 * @description get token form localStorage
 */
export const getRole = (): string | null => {
  return window.localStorage.getItem(ID_ROLE_KEY);
};
/**
 * @description get token form localStorage
 */
export const getNamaInstalasi = (): string | null => {
  return window.localStorage.getItem(ID_INSTALASI_NAME);
};

/**
 * @description get token form localStorage
 */
export const getBidang = (): string | null => {
  return window.localStorage.getItem(ID_BIDANG);
};

/**
 * @description get token form localStorage
 */
export const getFotoPegawai = (): string | null => {
  return window.localStorage.getItem(ID_FOTO_PEGAWAI);
};

/**
 * @description get batas waktu from localStorage
 */
export const getBatasWaktu = (): string | null => {
  return window.localStorage.getItem(ID_BATAS_WAKTU);
};

/**
 * @description get data multi user from localStorage
 */
export const getMultiUser = (): string | null => {
  return window.localStorage.getItem(ID_MULTI_USER);
};

/**
 * @description get data multi user from localStorage
 */
export const getRangkap = (): string | null => {
  return window.localStorage.getItem(ID_RANGKAP);
};
/**
 * @description get data multi user from localStorage
 */
export const getHta = (): string | null => {
  return window.localStorage.getItem(ID_HTA);
};
/**
 * @description save token into localStorage
 * @param token: string
 */


export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveYear = (year: string): void => {
  window.localStorage.setItem(ID_YEAR_KEY, year);
};
/**
 * @description save token into localStorage
 * @param token: string
 */
export const savePemakai = (pemakai: string): void => {
  window.localStorage.setItem(ID_PEMAKAI_KEY, pemakai);
};
/**
 * @description save token into localStorage
 * @param token: string
 */
export const savePemakaiName = (nama_pemakai: string): void => {
  window.localStorage.setItem(ID_PEMAKAI_NAME, nama_pemakai);
};
/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveRole = (role: string): void => {
  window.localStorage.setItem(ID_ROLE_KEY, role);
};
/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveInstalasi = (instalasi: string): void => {
  window.localStorage.setItem(ID_INSTALASI_ID_KEY, instalasi);
};
/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveNamaInsalasi = (nama_instalasi: string): void => {
  window.localStorage.setItem(ID_INSTALASI_NAME, nama_instalasi);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveBidang = (isBidang: string): void => {
  window.localStorage.setItem(ID_BIDANG, isBidang);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveFotoPegawai = (foto_pegawai: string): void => {
  window.localStorage.setItem(ID_FOTO_PEGAWAI, foto_pegawai);
};
/**
 * @description save batas waktu into localStorage1
 */
export const saveBatasWaktu = (batas_waktu: string): void => {
  window.localStorage.setItem(ID_BATAS_WAKTU, batas_waktu);
};

/**
 * @description save multi user into localStorage1
 */
export const saveMultiUser = (multi_user: string): void => {
  window.localStorage.setItem(ID_MULTI_USER, multi_user);
};

/**
 * @description save multi user into localStorage1
 */
export const saveRangkap = (is_rangkap: string): void => {
  window.localStorage.setItem(ID_RANGKAP, is_rangkap);
};
/**
 * @description save multi user into localStorage1
 */
export const saveHta = (is_hta: string): void => {
  window.localStorage.setItem(ID_HTA, is_hta);
};

/**
 * @description remove token form localStorage
 */

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(ID_YEAR_KEY);
  window.localStorage.removeItem(ID_INSTALASI_ID_KEY);
  window.localStorage.removeItem(ID_INSTALASI_NAME);
  window.localStorage.removeItem(ID_ROLE_KEY);
  window.localStorage.removeItem(ID_PEMAKAI_KEY);
  window.localStorage.removeItem(ID_PEMAKAI_NAME);
  window.localStorage.removeItem(ID_BIDANG);
  window.localStorage.removeItem(ID_FOTO_PEGAWAI);
  window.localStorage.removeItem(ID_BATAS_WAKTU);
  window.localStorage.removeItem(ID_MULTI_USER);
  window.localStorage.removeItem(ID_RANGKAP);
  window.localStorage.removeItem(ID_HTA);
};

export default {
  getToken, saveToken, destroyToken, saveYear,
  getYear,
  savePemakai,
  getPemakai,
  savePemakaiName,
  getPemakaiName,
  getInstalasi,
  saveInstalasi,
  getNamaInstalasi,
  saveNamaInsalasi,
  getRole,
  saveRole,
  getBidang,
  saveBidang,
  getFotoPegawai,
  saveFotoPegawai,
  getBatasWaktu,
  saveBatasWaktu,
  getMultiUser,
  saveMultiUser,
  getRangkap,
  saveRangkap,
  getHta,
  saveHta,
};
