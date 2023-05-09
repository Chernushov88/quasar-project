<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <div class="row">
        <div class="col-3">
          <q-toolbar>
            <q-btn
              flat
              round
              dense
              icon="menu"
              @click="leftDrawer = !leftDrawer"
            />
            <q-toolbar-title>
              Header
            </q-toolbar-title>
          </q-toolbar>
        </div>
        <div class="col-9">
          <q-tabs>
            <q-route-tab
              icon="map"
              to="/your/route"
              replace
              label="One Tab"
            />
            <q-route-tab
              icon="assignment"
              to="/some/other/route"
              replace
              label="Other Tab"
            />
          </q-tabs>
        </div>
      </div>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <div class="row">
        <div class="col-3">
          <q-toolbar>
            <q-btn
              flat
              round
              dense
              icon="menu"
              @click="leftDrawer = !leftDrawer"
            />
            <q-toolbar-title>
              Footer
            </q-toolbar-title>
          </q-toolbar>
        </div>
        <div class="col-9">
          <q-tabs switch-indicator>
            <q-route-tab
              icon="map"
              to="/your/route"
              replace
              label="One Tab"
            />
            <q-route-tab
              icon="assignment"
              to="/some/other/route"
              replace
              label="Other Tab"
            />
          </q-tabs>



        </div>
      </div>



    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
