<template>
  <div v-if="asideSecondaryDisplay" class="aside-secondary d-flex flex-row-fluid">
    <div class="aside-workspace my-5 p-5" id="kt_aside_wordspace">
      <div class="d-flex h-100 flex-column">
        <div
          class="flex-column-fluid hover-scroll-y"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_wordspace"
          data-kt-scroll-dependencies="#kt_aside_secondary_footer"
          data-kt-scroll-offset="0px"
        >
          <div class="tab-content">
            <!-- <div
              class="tab-pane fade active show"
              id="kt_aside_nav_tab_projects"
              role="tabpanel"
            ></div> -->
            <div class="tab-pane fade active show" role="tabpanel">
              <router-link to="/dashboard">
                <h2 class="fs-4 fw-bold mb-7">Selamat Pagi</h2>
                <CardSidebar></CardSidebar>
                <KTMenu></KTMenu>
              </router-link>
            </div>

            <div class="tab-pane fade active" role="tabpanel">
              <router-link to="/master-user">
                <h2 class="fs-4 fw-bold mb-7">Selamat Pagi</h2>
                <CardSidebar></CardSidebar>
                <KTMenu></KTMenu>
              </router-link>
            </div>

            <div class="tab-pane fade" role="tabpanel">
              <router-link to="/transaksi-atk">
                <h2 class="fs-4 fw-bold mb-7">Selamat Pagi</h2>
                <CardSidebar></CardSidebar>
                <KTMenu></KTMenu>
              </router-link>
              <!-- <KTTasksOverview></KTTasksOverview> -->
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_notifications"
              role="tabpanel"
            >
              <router-link to="/transaksi-atk">
                <h2 class="fs-4 fw-bold mb-7">Selamat Pagi</h2>
                <CardSidebar></CardSidebar>
                <KTMenu></KTMenu>
              </router-link>
              <!-- <KTNotifications></KTNotifications> -->
            </div>

            <div class="tab-pane fade" role="tabpanel">
              <router-link to="/laporan">
                <h2 class="fs-4 fw-bold mb-7">Selamat Pagi</h2>
                <CardSidebar></CardSidebar>
                <KTMenu></KTMenu>
              </router-link>
              <!-- <KTAuthors></KTAuthors> -->
            </div>
          </div>
        </div>

        <!-- <div class="flex-column-auto pt-10 px-5" id="kt_aside_secondary_footer">
          <a
            href="https://preview.keenthemes.com/metronic8/vue/docs/index"
            class="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
            data-bs-toggle="tooltip"
            data-bs-custom-class="tooltip-dark"
            data-bs-trigger="hover"
            data-bs-offset="0,5"
            data-bs-dismiss-="click"
          >
            <span class="btn-label">{{ t("docsAndComponents") }}</span>
            <KTIcon icon-name="document" icon-class="btn-icon fs-4 ms-2" />
          </a>
        </div> -->
      </div>
    </div>
  </div>

  <button
    v-if="asideSecondaryDisplay && minimizationEnabled"
    :class="{ active: minimizedAsideSecondary }"
    class="btn btn-sm btn-icon bg-body btn-color-gray-700 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex mb-5"
    data-kt-toggle="true"
    data-kt-toggle-state="active"
    data-kt-toggle-target="body"
    data-kt-toggle-name="aside-minimize"
    style="margin-bottom: 1.35rem"
  >
    <KTIcon icon-name="arrow-left" icon-class="fs-2 rotate-180" />
  </button>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import CardSidebar from "@/layouts/default-layout/components/hta/card-sidebar/Cardsidebar.vue";
import KTMenu from "@/layouts/default-layout/components/aside/Menu.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import KTTasksOverview from "@/layouts/default-layout/components/aside/tabs/TasksOverview.vue";
import KTAuthors from "@/layouts/default-layout/components/aside/tabs/Authors.vue";
import KTNotifications from "@/layouts/default-layout/components/aside/tabs/Notifications.vue";
import {
  asideSecondaryDisplay,
  minimizationEnabled,
  minimizedAsideSecondary,
} from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "kt-aside-secondary",
  components: {
    CardSidebar,
    KTMenu,
    Dropdown1,
    KTTasksOverview,
    KTAuthors,
    KTNotifications,
  },
  setup() {
    const { t } = useI18n();

    return {
      CardSidebar,
      minimizedAsideSecondary,
      asideSecondaryDisplay,
      minimizationEnabled,
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
