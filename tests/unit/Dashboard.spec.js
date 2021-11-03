import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import Dashboard from "@/components/Dashboard.vue";

describe("Dashboard", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("check if showAll value change value after click on switch", async () => {
    const wrapper = mount(Dashboard, {
      localVue,
      vuetify,
      data() {
        return {
          showAll: false,
        };
      },
    });

    const button = wrapper.findComponent({ name: "v-switch" });

    expect(button.exists()).toBe(true);
    expect(wrapper.vm.$data.showAll).toBe(false);
    button.vm.$emit("change", true);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.showAll).toBe(true);

    button.vm.$emit("change", false);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.showAll).toBe(false);
  });

  it("check if title is properly shown", async () => {
    const wrapper = mount(Dashboard, {
      localVue,
      vuetify,
      data() {
        return {
          showAll: false,
          fqdn: "Site title",
        };
      },
    });

    expect(wrapper.get('[data-testid="dashboard-title"]').text()).toContain("Site title");
  });

  it("check if ContactsCard and UserCard is rendered correctly if showAll is true", async () => {
    const wrapper = mount(Dashboard, {
      localVue,
      vuetify,
      data() {
        return {
          showAll: false,
        };
      },
    });

    expect(wrapper.find('[data-testid="dashboard-contacts-card"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="dashboard-user-card"]').exists()).toBeFalsy();
  });

  it("check if ContactsCard and UserCard is rendered correctly if showAll is true", async () => {
    const wrapper = mount(Dashboard, {
      localVue,
      vuetify,
      data() {
        return {
          showAll: true,
        };
      },
    });

    expect(wrapper.find('[data-testid="dashboard-contacts-card"]').exists()).toBeFalsy();
    expect(wrapper.find('[data-testid="dashboard-user-card"]').exists()).toBeTruthy();
  });
});
