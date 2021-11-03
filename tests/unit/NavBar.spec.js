import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import Vuetify from "vuetify";

// Vue.use(Vuetify);

// const localVue = createLocalVue();

describe("NavBar.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("show user popover after clcik on user button", async () => {
    const wrapper = mount(NavBar, {
      localVue,
      vuetify,
    });

    const button = wrapper.find('[data-testid="user-menu-button"]');

    expect(button.exists()).toBe(true);

    expect(wrapper.vm.$data.showUser).toBe(false);
    button.vm.$emit("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.showUser).toBe(true);
    expect(wrapper.find("#user-popover").exists()).toBe(true);
  });
});
