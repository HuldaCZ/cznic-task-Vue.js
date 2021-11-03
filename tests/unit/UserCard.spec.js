import { mount, createLocalVue } from "@vue/test-utils";
import UserCard from "@/components/Cards/UserCard.vue";
import Vuetify from "vuetify";

describe("UserCard.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Check if props are proprly passed to component", async () => {
    const wrapper = mount(UserCard, {
      localVue,
      vuetify,
      propsData: {
        title: "Title",
        userData: {
          handle: "KNIHOVNIK",
          organization: "Neviditelná univerzita",
          name: "Knihovník",
          publish: {
            organization: true,
            name: true,
          },
        },
      },
    });

    const cardTitle = wrapper.get('[data-testid="user-card-title"]');
    expect(cardTitle.text()).toContain("Title");

    const userName = wrapper.get('[data-testid="user-card-name"]');
    expect(userName.text()).toContain("Knihovník");

    const userHandle = wrapper.get('[data-testid="user-card-handle"]');
    expect(userHandle.text()).toContain("KNIHOVNIK");

    const userOrganization = wrapper.get('[data-testid="user-card-organization"]');
    expect(userOrganization.text()).toContain("Neviditelná univerzita");
  });

  it("Check if proper icons are rendered (true)", async () => {
    const wrapper = mount(UserCard, {
      localVue,
      vuetify,
      propsData: {
        title: "Title",
        userData: {
          handle: "KNIHOVNIK",
          organization: "Neviditelná univerzita",
          name: "Knihovník",
          publish: {
            organization: true,
            name: true,
          },
        },
      },
    });

    expect(wrapper.find('[data-testid="user-card-icon-org-green"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="user-card-icon-name-green"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="user-card-icon-org-red"]').exists()).toBeFalsy();
    expect(wrapper.find('[data-testid="user-card-icon-name-red"]').exists()).toBeFalsy();
  });

  it("Check if proper icons are rendered (false)", async () => {
    const wrapper = mount(UserCard, {
      localVue,
      vuetify,
      propsData: {
        title: "Title",
        userData: {
          handle: "KNIHOVNIK",
          organization: "Neviditelná univerzita",
          name: "Knihovník",
          publish: {
            organization: false,
            name: false,
          },
        },
      },
    });

    expect(wrapper.find('[data-testid="user-card-icon-org-red"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="user-card-icon-name-red"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="user-card-icon-org-green"]').exists()).toBeFalsy();
    expect(wrapper.find('[data-testid="user-card-icon-name-green"]').exists()).toBeFalsy();
  });
});
