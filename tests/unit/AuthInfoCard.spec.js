import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import AuthInfoCard from "@/components/Cards/AuthInfoCard.vue";

describe("AuthInfoCard", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("show password after clicking show button", async () => {
    const wrapper = mount(AuthInfoCard, {
      localVue,
      vuetify,
      data() {
        return {
          showPass: false,
        };
      },
    });
    const button = wrapper.find('[data-testid="button-show-hide"]');

    expect(button.exists()).toBe(true);
    expect(wrapper.vm.$data.showPass).toBe(false);
    button.vm.$emit("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.showPass).toBe(true);
    expect(wrapper.find('[data-testid="password"]').exists()).toBeTruthy();
  });
});
