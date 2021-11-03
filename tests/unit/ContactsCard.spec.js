import { mount, createLocalVue } from "@vue/test-utils";
import ContactsCard from "@/components/Cards/ContactsCard.vue";
import Vuetify from "vuetify";

describe("ContactsCard.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Check if props are proprly passed to component", async () => {
    const wrapper = mount(ContactsCard, {
      localVue,
      vuetify,
      propsData: {
        contacts: [
          {
            handle: "KNIHOVNIK",
            organization: "Neviditelná univerzita",
            name: "Knihovník",
            publish: {
              organization: true,
              name: true,
            },
          },
        ],
      },
    });

    const contactName = wrapper.get('[data-testid="contact-name"]');
    expect(contactName.text()).toContain("Knihovník");

    const contactHandle = wrapper.get('[data-testid="contact-handle"]');
    expect(contactHandle.text()).toContain("KNIHOVNIK");
  });
});
