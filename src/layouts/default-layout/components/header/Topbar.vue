<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex flex-shrink-0">
    <!-- <div class="d-flex ms-3">
      <a
        href="#"
        class="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_invite_friends"
      >
        <KTIcon icon-name="plus" icon-class="fs-2 fs-primary me-0 me-md-2" />
        <span class="d-none d-md-inline">New Member</span>
      </a>
    </div> -->
    <!--end::Invite user-->

    <!--begin::Create app-->
    <!-- <div class="d-flex ms-3">
      <a
        href="#"
        class="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_create_app"
        id="kt_toolbar_primary_button"
      >
        <KTIcon icon-name="document" icon-class="fs-2 fs-primary me-0 me-md-2" />
        <span class="d-none d-md-inline">New App</span>
      </a>
    </div> -->
    <!--end::Create app-->

    <div class="app-navbar-item ms-1 ms-md-3" id="kt_header_user_menu_toggle">
      <!--begin::Menu wrapper-->
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="metronic" />

        <!-- <img
          v-if="isFotoPegawai == `null`"
          :src="getAssetPath('images/icon/user.jpeg')"
          alt="user"
        />
        <img v-else id="foto_pegawai" alt="foto_pegawai" :src="linkFoto" />
        &nbsp;<label class="fs-6 fw-semibold text-primary">{{ nama }}</label> -->
      </div>
      <KTUserMenu></KTUserMenu>
      <!--end::Menu wrapper-->
    </div>

    <!--begin::Theme mode-->
    <div class="d-flex ms-3">
      <!--begin::Menu toggle-->
      <a
        href="#"
        class="btn btn-icon flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px"
        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <KTIcon icon-name="night-day" icon-class="theme-light-show fs-2" />
        <KTIcon icon-name="moon" icon-class="theme-dark-show fs-2" />
      </a>
      <!--begin::Menu toggle-->
      <KTThemeModeSwitcher></KTThemeModeSwitcher>
    </div>
    <!--end::Theme mode-->

    <!-- <div class="d-flex align-items-center ms-3">
      <div
        class="btn btn-icon btn-primary w-40px h-40px pulse pulse-white"
        id="kt_drawer_chat_toggle"
      >
        <KTIcon icon-name="message-text-2" icon-class="fs-2" />
        <span class="pulse-ring"></span>
      </div>
    </div> -->

    <div class="d-flex align-items-center ms-3">
      <!--begin::Menu wrapper-->
      <div
        class="btn-active-color-primary btn btn-icon w-40px h-40px pulse pulse-white"
        @click="signOut()"
      >
        <KTIcon icon-name="exit-right" icon-class="fs-2" />
        <!-- <a @click="signOut()" class="menu-link px-5"> </a> -->

        <!-- <span class="pulse-ring"></span> -->
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::Logout-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTThemeModeSwitcher from "@/layouts/default-layout/components/theme-mode/ThemeModeSwitcher.vue";
import KTUserMenu from "@/layouts/default-layout/components/menus/UserAccountMenu.vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "layout-topbar",
  components: {
    KTThemeModeSwitcher,
    KTUserMenu,
  },
  setup() {
    const router = useRouter();
    const i18n = useI18n();
    const store = useAuthStore();
    const signOut = () => {
      store.logout();
      router.push({ name: "sign-in" });
    };
    return {
      signOut,
      getAssetPath,
    };
  },
});
</script>
