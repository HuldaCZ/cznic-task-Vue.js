import { mount, createLocalVue } from "@vue/test-utils";
import StateFlagsCard from "@/components/Cards/StateFlagsCard.vue";
import Vuetify from "vuetify";

describe("StateFlagsCard.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const flags = [
    {
      name: "serverBlocked",
      active: false,
      description: "Administratively blocked",
    },
    {
      name: "serverDeleteProhibited",
      active: true,
      description: "Deletion forbidden",
    },
    {
      name: "expired",
      active: false,
      description: "Domain expired",
    },
  ];
  const groups = [
    [
      "linked",
      "serverBlocked",
      "deleteCandidate",
      "serverDeleteProhibited",
      "serverTransferProhibited",
      "serverUpdateProhibited",
      "serverRegistrantChangeProhibited",
      "serverRenewProhibited",
    ],
    ["serverOutzoneManual", "serverInzoneManual"],
  ];

  it("Check if flags are properly rendered showAll off", async () => {
    const wrapper = mount(StateFlagsCard, {
      localVue,
      vuetify,
      propsData: {
        flags: flags,
        groups: groups,
        showAll: false,
      },
    });

    expect(wrapper.find('[data-testid="flag-active"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="flag-deactivated"]').exists()).toBeFalsy();
  });

  it("Check if flags are properly rendered showAll on", async () => {
    const wrapper = mount(StateFlagsCard, {
      localVue,
      vuetify,
      propsData: {
        flags: flags,
        groups: groups,
        showAll: true,
      },
    });

    expect(wrapper.find('[data-testid="flag-active"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="flag-deactivated"]').exists()).toBeTruthy();
  });

  
});
